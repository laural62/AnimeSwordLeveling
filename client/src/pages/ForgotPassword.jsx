import { NavLink } from "react-router-dom"

export default function PasswordOublie() {


    return (
        <div className="bg-black text-white h-screen">
            <h2 className="text-center text-2xl font-bold uppercase">Reinitialiser le Mot de Passe !</h2>
                {/**FORMULAIRE POUR LES MOTS DE PASSE OUBLIER */}
            <form  
            className="flex flex-col gap-4 mb-6 mx-auto max-w-[400px]">

                <div className="flex flex-col mb-2">
                    <label htmlFor="email" className="mb-2">
                        Email
                    </label>

                    <input
                        
                        required
                        placeholder="Votre email"
                        type="email"
                        id="email"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                </div>

                <button 
                    className="bg-white text-black px-4 py-2 rounded hover:bg-blue-900 hover:text-white uppercase"
                    type="submit"
                    
                >Envoyer
                </button>

                <div className="text-center">
                    <NavLink to={"/Home"} className="button-blue px-3 py-2 hover:text-2xl hover:transition hover:duration-200">Retour</NavLink>
                </div>

            </form>
        </div>
    );
}