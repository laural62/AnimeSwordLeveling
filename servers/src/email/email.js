import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

console.log(process.env.EMAIL_USER);

export const sendConfirmationEmail = async (email, token) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Confirmation d'inscription",
    html: `<p>Bienvenue sur notre site! Pour confirmer votre inscription sur le site AnimeSwordLeveling, cliquez sur le lien ci-joint : <a href=${
      process.env.MODE === "development"
       ? process.env.API_URL
        : process.env.DEPLOY_BACK_URL
    }/user/verifyMail/${token}>Confirmer</a></p>`,
  };

  await transporter.sendMail(mailOptions);
};

export const sendResetPasswordEmail = async (email, resetToken) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Réinitialisation de votre mot de passe",
    html: `<p>Vous avez demandé la réinitialisation de votre mot de passe. Cliquez sur le lien ci-dessous pour réinitialiser votre mot de passe : <a href=${
      process.env.MODE === "development"
        ? process.env.CLIENT_URL
        : process.env.DEPLOY_FRONT_URL
    }/reset-password/${resetToken}>Réinitialiser mon mot de passe</a></p>
    <p>Ce lien est valide pendant 1 heure.</p>`,
  };

  await transporter.sendMail(mailOptions);
};
