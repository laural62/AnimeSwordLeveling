import { NavLink } from "react-router-dom"

export default function FormulaireContact() {
    
    return(
        <div className="bg-black text-white h-screen gap-2">
            <h2 className="text-center text-2xl font-bold">Nous contacter !</h2>
            <h3 className="text-center m-2">Pour nous contacter, remplissez ce formulaire ci dessous !</h3>

            <form
            className="flex flex-col sm:gap-4 gap-2 mb-6 mx-auto sm:w-[600px] w-[300px]">
            {/**Speudo */}
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
            {/**adresse mail */}
                <div className="flex flex-col mb-2">
                    <label htmlFor="email" className="mb-2">
                        Email
                    </label>

                    <input
                        
                        type="email"
                        id="email"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                </div>
            {/**Saisie du mot de passe */}
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
            {/**choix de theme sujet */}
                <div class="inline-block relative w-64">
                    <select class="block appearance-none w-full bg-black border border-white hover:border-blue-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option>Sujet du message !</option>
                        <option>Renseignement</option>
                        <option>Abonnement</option>
                        <option>Inscription</option>
                        <option>Autre sujet</option>
                    </select>

                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            {/**champs de saisie message */}
                <div className="flex flex-col mb-2">
                    <label htmlFor="message" className="mb-2">
                        Votre message
                    </label>
                    <textarea
                        
                        type="text"
                        id="message"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />  
                </div>
            {/**div checkbox + rgpd*/}
                <div className="flex flex-col mb-2">
                    <label htmlFor="rgpd" className="mb-2 w-[350px] sm:w-[700px] italic text-[16px]">
                        <input
                        
                        type="checkbox"
                        className="mr-4"
                        id="rgpd"
                        />
                        J’accepte que mes données saisies soient utilisées par Anime Sword Leveling uniquement dans le cadre du traitement de ma demande, 
                        conformément à la <NavLink to={"/politique"} className="font-bold underline">politique de confidentialité.</NavLink>
                    </label>
                </div>
            {/**boutton envoie formulaire + bouton retour -> Accueil */}
                <button className="bg-white text-black px-4 py-2 rounded hover:bg-blue-900 hover:text-white uppercase">
                Soumettre
                </button>

                <div className="text-center">
                    <NavLink to={"/Home"} className="button-blue px-3 py-2 hover:text-2xl hover:transition hover:duration-200 hidden sm:block ">Retour</NavLink>
                </div>

            </form>
        </div>
    );
}