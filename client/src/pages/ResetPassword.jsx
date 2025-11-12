import { useForm } from "react-hook-form";
import { useState } from "react";
import { resetPasswordSchema } from "../schema/formschema";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { resetPassword } from "../api/auth.api";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);

  const defaultValues = { password: "", confirmPassword: "" };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(resetPasswordSchema),
    mode: "onChange",
  });

  async function onSubmit(values) {
    try {
      if (!token) {
        toast.error("Token invalide ou expiré");
        navigate("/forgot-password");
        return;
      }

      await resetPassword({ token, password: values.password });
      toast.success("Mot de passe réinitialisé avec succès!");
      setIsSuccess(true);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Erreur réinitialisation:", error);
      toast.error(error.message || "Erreur lors de la réinitialisation");
    }
  }

  return (
    <section
      aria-labelledby="reset-title"
      className="h-screen center-screen bg-(--bg) px-4"
    >
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <h1
            id="reset-title"
            className="text-3xl font-bold text-center text-(--text)"
          >
            Réinitialiser votre mot de passe
          </h1>
          <p className="text-sm text-center text-gray-500 mt-2">
            Entrez votre nouveau mot de passe
          </p>
        </div>

        {!isSuccess ? (
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
            aria-busy={isSubmitting}
            noValidate
          >
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium"
              >
                Nouveau mot de passe
              </label>
              <input
                type="password"
                id="password"
                {...register("password")}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1" role="alert">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium"
              >
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword")}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-invalid={errors.confirmPassword ? "true" : "false"}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1" role="alert">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="h-12 font-semibold text-base bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting
                ? "Réinitialisation..."
                : "Réinitialiser le mot de passe"}
            </button>
          </form>
        ) : (
          <div className="border border-white/50 p-4 rounded-2xl text-center">
            <div className="text-4xl mb-4">✅</div>
            <h2 className="text-2xl font-semibold mb-2">
              Mot de passe réinitialisé
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Vous allez être redirigé vers la page de connexion...
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
            to="/forgot-password"
            className="font-bold mt-4 text-lg font-quicksand text-gray-500"
          >
            Renvoyer le lien
          </NavLink>
        </div>
      </div>
    </section>
  );
}
