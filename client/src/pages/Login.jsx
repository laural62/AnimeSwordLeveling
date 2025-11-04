import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { signIn } from "../api/auth.api";
import imagebackground from "../assets/bg-animeswordleveling.webp";


export default function Login() {
    const navigate = useNavigate();

  const { login } = useAuth();

  const defaultValues = {
    data: "",
    password: "",
  };

  const schema = yup.object({
    data: yup.string().required("Ce champ est obligatoire"),
    password: yup.string().required("Le mot de passe est obligatoire"),
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
      const userConnected = await signIn(values);

      if (userConnected.user) {
        toast.success("Bien connecté");
        login(userConnected.user);

        navigate("/");
        reset(defaultValues);
      } else {
        toast.error(userConnected.message);
      }
    } catch (error) {
      console.log(error);
    }
    // reset(defaultValues);
    // requete HTTP
  }

    return (
        <div className="bg-black text-white md:h-screen h-[80vh]">
            <h2 className="text-center sm:text-3xl font-bold uppercase absolute inset-x-0 sm:top-28 top-16">Connexion !</h2>
                {/**FORMULAIRE DE CONNEXION POUR LES UTILISATEURS INSCRIT ET ABONNER */}
            <div className="flex justify-center">
              <img src={imagebackground} alt="image de fond" className="w-[650px]" title="image de fond asl"/>
            </div>
            <form
            className="flex flex-col items-center justify-center gap-4 mb-6 mx-auto sm:max-w-[600px] sm:w-[500px] w-[250px] z-30 relative bottom-28"
            onSubmit={handleSubmit(submit)}
            >
                <div className="flex flex-col mb-2">
                    <label htmlFor="username" className="mb-2">
                        Pseudo
                    </label>
                    <input
                        {...register("data")}
                        type="text"
                        id="data"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.data && <p className="text-red-500">{errors.data.message}</p>}
                    
                </div>

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
                    <label htmlFor="rgpd" className="mb-2">
                        <input
                        type="checkbox"
                        className="mr-4"
                        id="rgpd"
                        />
                        J’ai lu et j’accepte la Politique de Confidentialité et les Conditions Générales d’Utilisation d’Anime Sword Leveling,
                         et j’autorise le traitement de mes données personnelles.
                    </label>
                </div>
                
                <div className="flex flex-row sm:gap-3 gap-1">
                  <button className="bg-white text-black px-4 py-2 rounded hover:bg-blue-900 hover:text-white">
                  Connexion
                  </button>

                  <div className="text-center">
                      <NavLink to={"/forgotpassword"} className="button-blue hidden px-3 py-2 hover:text-2xl hover:transition hover:duration-200">Mot de passe oubliée ?</NavLink>
                  </div>
                
                  <div className="text-center">
                      <NavLink to={"/register"} className="button-blue px-3 py-2 sm:hover:text-2xl sm:hover:transition sm:hover:duration-200 sm:absolute bottom-0">S'inscrire !</NavLink>
                  </div>
                </div>

            </form>
            
        </div>
    );
}