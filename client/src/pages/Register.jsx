import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Register() {

    const navigate = useNavigate();

   // const {}

    const defaultValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        rgpd: false,
    };

    const schema = yup.object({
        username: yup.string().required("Ce champ est obligatoire"),
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

    const test = async () => {};

    async function submit(values) {
        // console.log(values);
        try {
        const response = await fetch("http://localhost:3000/user", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
            "Content-type": "application/json",
            },
        });
        const responseFromBackend = await response.json();
        if (response.ok) {
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
                className="flex flex-col gap-4 mb-6 mx-auto max-w-[500px]"
                onSubmit={handleSubmit(submit)}
            >

                    {/**Pseudo */}
                <div className="flex flex-col mb-2">
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
                <div className="flex flex-row mb-5 gap-3">
                    <div>
                        <label htmlFor="name" className="mb-5">
                            Nom
                        </label>
                        <input
                            {...register("username")}
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
                            {...register("username")}
                            type="text"
                            id="firstName"
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                    {/**Nom & Prenom */}
                <div className="flex flex-row mb-5 gap-3">
                    <div>
                        <label htmlFor="tel" className="mb-5">
                            Téléphone
                        </label>
                        <input
                            {...register("username")}
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
                <div className="flex flex-col mb-2">
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

                <div className="flex flex-col mb-2">
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
                <div className="flex flex-col mb-2">
                    <label htmlFor="rgpd" className="mb-2">
                        <input
                        {...register("rgpd")}
                        type="checkbox"
                        className="mr-4"
                        id="rgpd"
                        />
                        En soumettant ce formulaire, j'accepte ...
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