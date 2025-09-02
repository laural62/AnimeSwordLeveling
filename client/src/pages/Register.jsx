import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { signUp } from "../api/auth.api";

export default function Register() {

    const navigate = useNavigate();
    const [params] = useSearchParams();
    const message = params.get("message");
    console.log(message);

    useEffect(() => {
        if (message === "error") {
        toast.error("Délai dépassé. Veuillez vous réinscrire");
        navigate("/register", { replace: true });
        } else if (message === "success") {
        toast.success("Votre inscription est confirmé");
        navigate("/login");
        }
    }, [message, navigate]);

    const defaultValues = {
        username: "",
        name: "",
        fisrtname: "",
        email: "",
        password: "",
        confirmPassword: "",
        rgpd: false,
    };

    const schema = yup.object({
        username: yup.string().required("Ce champ est obligatoire"),
        name: yup.string().required("Ce champ est obligatoire"),
        firstname: yup.string().required("Ce champ est obligatoire"),
        email: yup
        .string()
        .email()
        .required("Le champ est obligatoire")
        .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, "Format email non valide"),
        password: yup
        .string()
        .required("Le mot de passe est obligatoire")
        .min(5, "Trop court")
        .max(10, "trop long"),
        confirmPassword: yup
        .string()
        .required("La confirmation de mot de passe est obligatoire")
        .oneOf(
            [yup.ref("password"), ""],
            "Les mots de passe ne correspondent pas"
        ),
        rgpd: yup
        .boolean()
        .oneOf([true], "Vous devez accepter les termes et conditions"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues,
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    

    async function submit(values) {
        // console.log(values);
        try {
        // faire appel à une methode qui fait la requete http
        const responseFromBackend = await signUp(values);
        if (responseFromBackend.message !== "Déjà inscrit") {
            toast.success(responseFromBackend.message);
            navigate("/login");
            reset(defaultValues);
        } else {
            toast.error(responseFromBackend.message);
        }
        } catch (error) {
        console.log(error);
        }
        // reset(defaultValues);
        // requete HTTP
    }
    return (
        <div className="bg-black text-white h-screen">
            <h2 className="text-center text-2xl font-bold">S'inscrire !</h2>
                {/**formulaire d'inscription pour créer un compte utilisateurs */}
            <form
                className="flex items-center justify-center flex-col sm:gap-4 gap-1 mb-6 mx-auto sm:max-w-[800px] w-[200px]"
                onSubmit={handleSubmit(submit)}
            >

                    {/**Pseudo */}
                <div className="flex flex-col mb-2 sm:w-[500px]">
                    <label htmlFor="username" className="mb-2">
                        Pseudo
                    </label>
                    <input
                        {...register("username")}
                        type="text"
                        id="username"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.username && (
                        <p className="text-red-500">{errors.username.message}</p>
                    )}
                    
                </div>

                    {/**Nom & Prenom */}
                <div className="flex sm:flex-row flex-col mb-5 sm:gap-3 gap-1">
                    <div>
                        <label htmlFor="name" className="mb-5">
                            Nom
                        </label>
                        <input
                            {...register("name")}
                            type="text"
                            id="name"
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="firstName" className="mb-5">
                            Prénom
                        </label>
                        <input
                            {...register("firstname")}
                            type="text"
                            id="firstName"
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                    {/**Nom & Prenom */}
                <div className="flex sm:flex-row flex-col mb-4 sm:gap-3 gap-1">
                    <div>
                        <label htmlFor="tel" className="mb-5">
                            Téléphone
                        </label>
                        <input
                            {...register("tel")}
                            type="tel"
                            id="tel"
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="mb-5">
                            Email
                        </label>
                        <input
                            {...register("email")}
                            type="email"
                            id="email"
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && (
                            <p className="text-red-500">{errors.email.message}</p>
                        )}
                    </div>
                </div>

                    {/**Password & confirmation password */}
                <div className="flex flex-col mb-2 sm:w-[500px]">
                    <label htmlFor="password" className="mb-2">
                        Mot de passe
                    </label>

                    <input
                        {...register("password")}
                        type="password"
                        id="password"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.password && (
                        <p className="text-red-500">{errors.password.message}</p>
                    )}
                    
                </div>

                <div className="flex flex-col mb-2 sm:w-[500px]">
                    <label htmlFor="confirmPassword" className="mb-2">
                        Confirmation du mot de passe
                    </label>
                    <input
                        {...register("confirmPassword")}
                        type="password"
                        id="confirmPassword"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.confirmPassword && (
                        <p className="text-red-500">{errors.confirmPassword.message}</p>
                    )}

                </div>

                    {/**checkbox + rgpd*/}
                <div className="flex flex-col mb-2 sm:w-[500px]">
                    <label htmlFor="rgpd" className="mb-2">
                        <input
                        {...register("rgpd")}
                        type="checkbox"
                        className="mr-4"
                        id="rgpd"
                        />
                        En soumettant ce formulaire, j'accepte les conditions générales d'utilisations, la politique de confidentialité et les mentions légales.
                    </label>
                    {errors.rgpd && <p className="text-red-500">{errors.rgpd.message}</p>}
                </div>

                <button className="bg-white text-black px-4 py-2 rounded hover:bg-blue-900 hover:text-white uppercase">
                S'inscrire
                </button>

                <div className="text-center">
                    <NavLink to={"/login"} className="button-blue px-3 py-2 hover:text-2xl hover:transition hover:duration-200 ">Déjà inscrit ? </NavLink>
                </div>

            </form>
        </div>
    );
}