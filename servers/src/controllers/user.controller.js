import User from "../models/user.schema.js";
import TempUser from "../models/tempuser.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendConfirmationEmail, sendResetPasswordEmail } from "../email/email.js";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

const createTokenEmail = (email) => {
  return jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: "120s" });
};

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUserMail = await User.findOne({ email });
    const existingUserPseudo = await User.findOne({ username });
    const existingTempUserMail = await TempUser.findOne({ email });
    const existingTempUserPseudo = await TempUser.findOne({ username });

    if (existingUserMail || existingUserPseudo) {
      return res.status(400).json({ message: "Déjà inscrit" });
    } else if (existingTempUserMail || existingTempUserPseudo) {
      return res.status(400).json({ message: "Vérifiez vos email" });
    }

    const token = createTokenEmail(email);
    await sendConfirmationEmail(email, token);

    const hashedPassword = await bcrypt.hash(password, 10);

    const tempUser = new TempUser({
      username,
      email,
      password: hashedPassword,
      token,
    });
    await tempUser.save();
    res.status(200).json({ 
      message: 
        "Veuillez confirmer votre inscription en consultant votre boite mail",
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { data, password } = req.body;

  // verification en console et recupere les données
  console.log(req.body);

  // verification des données
  let user;

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (emailRegex.test(data)) {
    user = await User.findOne({ email: data });
  } else {
    user = await User.findOne({ username: data });
  }

  if (!user) {
    return res
      .status(400)
      .json({ message: "Email ou nom d'utilisateur incorrect" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Mot de passe incorrect" });
  }

   // 3 - ajout des données

  const token = jwt.sign({}, process.env.SECRET_KEY, {
    subject: user._id.toString(),
    expiresIn: "7d",
    algorithm: "HS256",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "None",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  
  // Si tout est bon
  res.status(200).json({ user, message: "Connexion réussie" });
};

export const verifyMail = async (req, res) => {
  const { token } = req.params;
  console.log(token);

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const tempUser = await TempUser.findOne({ email: decoded.email, token });
    console.log(tempUser);

    if (!tempUser) {
      return res.redirect(
        `${
          process.env.MODE === "development" 
            ? process.env.CLIENT_URL 
            : process.env.DEPLOY_FRONT_URL
        }/register?message=error`);
    }

    const newUser = new User({
      username: tempUser.username,
      email: tempUser.email,
      password: tempUser.password,
    });
    await newUser.save();
    await TempUser.deleteOne({ email: tempUser.email });
    res.redirect(
      `${
        process.env.MODE === "development" 
          ? process.env.CLIENT_URL 
          : process.env.DEPLOY_FRONT_URL
      }/register?message=success`
    );
  } catch (error) {
    console.log(error);
    if (error.name === "TokenExpiredError") {
      return res.redirect(
        `${
          process.env.MODE === "development"
            ? process.env.CLIENT_URL
            : process.env.DEPLOY_FRONT_URL
        }/register?message=error`
      );
    }
  }
};

export const currentUser = async (req, res) => {
  const { token } = req.cookies;
  //console.log(token);

  if (token) {
    try {
      //verifie en decodant le token avec la clé secrète
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

      console.log(decodedToken);

      //récupére l'utilisateur en se servant de l'id du token
      const currentUser = await User.findById(decodedToken.sub);

      console.log(currentUser);

      if (currentUser) {
        res.status(200).json(currentUser);
      } else {
        res.status(400).json(null);
      }
    } catch (error) {
      res.status(400).json(null);
    }
  } else {
    res.status(200).json(null);
  }
};

export const logoutUser = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });
  res.status(200).json({ message: "Déconnexion réussie" });
};

/* Mot de passe oublié */
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    // Sécurité: Si l'utilisateur n'existe pas, on renvoie le même message de succès
    // pour éviter d'exposer si un email est enregistré ou non.
    if (!user) {
      return res.status(200).json({
        message:
          "Si l'adresse mail est valide, un lien de réinitialisation a été envoyé.",
      });
    }

    // Génération d'un token aléatoire simple et fiable
    const resetToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = await bcrypt.hash(resetToken, 10);

    // Sauvegarde du jeton hashé et de sa date d'expiration dans la base de données
    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 heure en ms
    await user.save();

    // Envoi de l'email avec le lien de réinitialisation (token en clair dans l'URL)
    await sendResetPasswordEmail(user.email, resetToken);

    return res.status(200).json({
      message:
        "Si l'adresse mail est valide, un lien de réinitialisation a été envoyé.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

/* Réinitialisation de mot de passe */
export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    if (!token || !password) {
      return res.status(400).json({ message: "Token et mot de passe requis." });
    }

    // Cherche l'utilisateur avec un token non expiré et un token non null
    const users = await User.find({
      resetPasswordToken: { $ne: null },
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (users.length === 0) {
      return res.status(400).json({ message: "Token invalide ou expiré." });
    }

    // Vérifie quel utilisateur a le bon token
    let validUser = null;
    for (const user of users) {
      const isTokenValid = await bcrypt.compare(token, user.resetPasswordToken);
      if (isTokenValid) {
        validUser = user;
        break;
      }
    }

    if (!validUser) {
      return res.status(400).json({ message: "Token invalide ou expiré." });
    }

    // Hash du nouveau mot de passe
    validUser.password = await bcrypt.hash(password, 10);

    // Nettoie les champs de réinitialisation pour que le token ne puisse pas être réutilisé.
    validUser.resetPasswordToken = null;
    validUser.resetPasswordExpires = null;

    await validUser.save();

    res.status(200).json({ message: "Mot de passe mis à jour avec succès." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};

/* Changement de mot de passe (utilisateur connecté) */
export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res
        .status(400)
        .json({ message: "Veuillez remplir tous les champs." });
    }

    // L'ID de l'utilisateur est ajouté à req par le middleware authMiddleware.
    const user = await User.findById(req.userId);

    // Vérification du mot de passe actuel.
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Mot de passe actuel incorrect." });
    }

    // Hash du nouveau mot de passe.
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Mot de passe mis à jour avec succès." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};
