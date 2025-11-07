import * as yup from "yup";

export const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Format email non valide.")
    .required("L'email est obligatoire."),
});