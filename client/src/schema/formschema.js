import * as yup from "yup";

export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Format email non valide.")
    .required("L'email est obligatoire."),
});

export const resetPasswordSchema = yup.object({
  password: yup
    .string()
    .required("Le mot de passe est obligatoire")
    .min(5, "Le mot de passe doit contenir au moins 5 caractères")
    .max(10, "Le mot de passe doit contenir au maximum 10 caractères"),
  confirmPassword: yup
    .string()
    .required("La confirmation du mot de passe est obligatoire")
    .oneOf(
      [yup.ref("password"), ""],
      "Les mots de passe ne correspondent pas"
    ),
});