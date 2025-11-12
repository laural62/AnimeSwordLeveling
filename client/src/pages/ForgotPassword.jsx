// PAGE MOT DE PASSE OUBLIE

import { useForm } from "react-hook-form";
import { useState } from "react";
import { forgotPasswordSchema } from "../schema/formschema";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink } from "react-router-dom";
import { requestPasswordReset } from "../api/auth.api";

export default function ForgotPassword() {
  const defaultValues = { email: "" };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(forgotPasswordSchema),
    mode: "onChange",
  });

  const [submitted, setSubmitted] = useState(false);


  async function onSubmit(values) {
    try {
      console.log("Requête reset mot de passe envoyée", values);
      await requestPasswordReset(values);
      
      setSubmitted(true);
    } catch (error) {
      console.error("Erreur requête reset mot de passe:", error);
      // rester silencieux pour éviter de divulguer des informations — afficher l'UI de confirmation dans tous les cas
      setSubmitted(true);
    }
  }

  return (
    <section
      aria-labelledby="forgot-title"
      className="h-screen center-screen bg-(--bg) px-4"
    >
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <h1
            className="text-3xl font-bold text-center text-(--text)"
          >
            Mot de passe oublié
          </h1>
          <p className="text-sm text-center text-gray-500 mt-2">
            Entrez l'adresse email associée à votre compte pour recevoir un lien
            de réinitialisation.
          </p>
        </div>

        {!submitted ? (
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
            aria-busy={isSubmitting}
            noValidate
          >
            <input 
                type="email"
                id="email"
                {...register("email")}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-invalid={errors.email ? "true" : "false"}  
            />

            {errors.email && (
              <p className="text-red-500" role="alert">
                {errors.email.message}
              </p>
            )}

            <button
              type="submit"
              className="h-12 font-semibold text-base"
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? "Envoi..." : "Envoyer le lien de réinitialisation"}
            </button>
          </form>
        ) : (
          <div className="border border-white/50 p-4 rounded-2xl text-center">
            <div className="text-4xl mb-4">✅</div>
            <h2 className="text-2xl font-semibold mb-2">
              Vérifiez votre boîte mail
            </h2>
            <p className="text-sm text-gray-500">
              Si l'adresse existe, un email contenant un lien pour réinitialiser
              votre mot de passe vous a été envoyé.
            </p>
          </div>
        )}

        <div className="flex flex-col items-center gap-3 mt-8">
          <NavLink
            to="/login"
            className="text-(--text) font-semibold underline font-quicksand"
          >
            Retour à la connexion
          </NavLink>
          <NavLink
            to="/register"
            className="font-bold mt-4 text-lg font-quicksand"
          >
            Créer un compte
          </NavLink>
        </div>
      </div>
    </section>
  );
}