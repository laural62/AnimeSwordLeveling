import { NavLink } from "react-router-dom"

export default function Inscription() {

    return (
        <div className="bg-black text-white h-screen">
            <h2 className="text-center text-2xl font-bold">S'inscrire !</h2>
                {/**formulaire d'inscription pour créer un compte utilisateurs */}
            <form
            className="flex flex-col gap-4 mb-6 mx-auto max-w-[500px]">

                    {/**Pseudo */}
                <div className="flex flex-col mb-2">
                    <label htmlFor="username" className="mb-2">
                        Pseudo
                    </label>
                    <input
                        
                        type="text"
                        id="username"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                </div>

                    {/**Nom & Prenom */}
                <div className="flex flex-row mb-5 gap-3">
                    <div>
                        <label htmlFor="name" className="mb-5">
                            Nom
                        </label>
                        <input
                            
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
                            
                            type="email"
                            id="email"
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                    {/**Password & confirmation password */}
                <div className="flex flex-col mb-2">
                    <label htmlFor="password" className="mb-2">
                        Mot de passe
                    </label>

                    <input
                        
                        type="password"
                        id="password"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                </div>

                <div className="flex flex-col mb-2">
                    <label htmlFor="confirmPassword" className="mb-2">
                        Confirmation du mot de passe
                    </label>
                    <input
                        
                        type="password"
                        id="confirmPassword"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                </div>

                    {/**checkbox + rgpd*/}
                <div className="flex flex-col mb-2">
                    <label htmlFor="rgpd" className="mb-2">
                        <input
                        
                        type="checkbox"
                        className="mr-4"
                        id="rgpd"
                        />
                        En soumettant ce formulaire, j'accepte ...
                    </label>
                </div>

                <button className="bg-white text-black px-4 py-2 rounded hover:bg-blue-900 hover:text-white uppercase">
                S'inscrire
                </button>

                <div className="text-center">
                    <NavLink to={"/Home"} className="button-blue px-3 py-2 hover:text-2xl hover:transition hover:duration-200 ">Retour</NavLink>
                </div>

            </form>
        </div>
    );
}