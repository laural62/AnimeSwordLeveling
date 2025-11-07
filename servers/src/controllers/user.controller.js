import User from "../models/user.schema.js";
import TempUser from "../models/tempuser.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendConfirmationEmail } from "../email/email.js";
import dotenv from "dotenv";

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
    res.status(400).json(null);
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

    // Génération d'un jeton simple pour la réinitialisation du mot de passe.
    // bcrypt peut être utilisé pour hacher une valeur temporaire.
    const resetToken = await bcrypt.hash(user.email + Date.now(), 10);
    const cleanedToken = resetToken.replace(/[^a-zA-Z0-9]/g, ""); // Nettoyage du token

    // Sauvegarde du jeton et de sa date d'expiration dans la base de données
    user.resetPasswordToken = cleanedToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 heure en ms
    await user.save();

    // Envoi de l'email avec le lien de réinitialisation
    await sendResetPasswordEmail(user.email, cleanedToken);

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

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Token invalide ou expiré." });
    }

    // Hash du nouveau mot de passe
    user.password = await bcrypt.hash(password, 10);

    // Nettoie les champs de réinitialisation pour que le token ne puisse pas être réutilisé.
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

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
