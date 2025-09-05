import { NavLink } from "react-router-dom";
import yukilaura from "../assets/yuki-laura.webp";

export default function Apropos() {
    return(
        <section className="bg-black text-white flex-col sm:h-screen h-[80vh] flex justify-center items-center px-2 sm:gap-4">
            <h2 className="sm:text-3xl text-2xl">A propos de Nous !</h2>
            
            <div className="flex sm:flex-row flex-col items-center w-[auto] px-3">
                <img src={yukilaura} alt="image personnage feminin" title="personnage feminin manga" 
                className="sm:h-[400px] sm:w-[250px] object-cover w-[150px]"/>
            

                {/**création d"un paragraphe descriptif version tablette et pc*/}
                <div>
                    <h3 className="text-2xl text-center underline">Voici notre histoire et qui nous sommes !</h3>    
                    <p className="hidden sm:block text-center p-2 m-2">
                        Créé en novembre 2025 par Laura Laisné, <span className="font-bold">Anime Sword Leveling</span> est un site dédié aux passionnés de gaming et de manga. 
                        Notre objectif est de rassembler en un seul endroit toutes les informations du moment, qu’il s’agisse de l’actualité 
                        des jeux vidéo, des nouveautés figurines, des sorties d’anime ou encore des tendances mangas.
                        <br/><br/>
                        Nous mettons également en avant les conventions en France, pour permettre aux fans de se retrouver et partager leur 
                        passion dans une ambiance conviviale.
                        <br/><br/>
                        Notre site propose :
                            {/**creation d'une liste à puce */}
                        <ul>
                            <li>Un espace Nouveautés regroupant les sorties et annonces récentes,</li>

                            <li>Un blog d’actualités pour suivre les tendances et rester informé,</li>

                            <li>une rubrique dédiée à nos streamers partenaires, pour découvrir de nouveaux jeux et échanger autour de vos avis avec 
                            sérénité.</li>
                        </ul>

                        <br/><br/>
                        Enfin, la création d’un compte membre vous ouvre l’accès à encore plus de contenus exclusifs ainsi qu’à des bonus
                        cachés réservés à notre communauté.
                    </p>

                    {/**descriptif version mobile */}
                    <p className="block sm:hidden text-center m-2">
                        <span className="font-bold">Anime Sword Leveling</span>, créé en novembre 2025 par Laura Laisné, réunit l’actu gaming et manga :
                        <ul>
                            <li>nouveautés jeux,</li>
                            <li>figurines,</li>
                            <li>animes et mangas.</li>   
                        </ul>   
                        Retrouvez aussi les conventions en France, un blog tendances, nos streamers partenaires et accédez à des 
                        bonus exclusifs en créant votre compte.
                    </p>
                </div>
            </div>

            <NavLink
                to="/register"
                className="button-blue py-2 px-2 m-2"
            >
                S'inscrire !
            </NavLink>

            <div className="flex-row flex justify-around items-center gap-5">
                <NavLink
                    to="/home"
                    className="border-2 rounded-2xl p-2 border-gray-400 hover:bg-white hover:text-black hover:transition duration-300"
                >
                    Découvrir
                </NavLink>

                <NavLink 
                    to="/contact"
                    className="border-2 rounded-2xl p-2 border-gray-400 hover:bg-white hover:text-black hover:transition duration-300"
                >
                    Nous contacter
                </NavLink>
            </div>
            
        </section>
    );
}