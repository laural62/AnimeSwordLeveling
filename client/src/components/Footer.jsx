import { NavLink } from "react-router-dom";

export default function Footer({userConnected, toggleUser}) {
    console.log(userConnected);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // défilement fluide
        });
    };

    return (
        <footer class="bg-black text-white flex justify-around items-center space-x-5 h-[20vh]">
            <div>
                <ul className="list-style-none hidden sm:block">
                    <NavLink to={"/"} className="hover:text-2xl"><li>Accueil</li></NavLink>
                    <NavLink to={"/nouveau"} className="hover:text-2xl"><li>Nouveautes</li></NavLink>
                    <NavLink to={"/home"} className="hover:text-2xl"><li>Actualites</li></NavLink>
                    <NavLink to={"/streamer"} className="hover:text-2xl"><li>Streamer</li></NavLink>
                </ul>
            </div>

            <div className="text-center">
                <i>Copyright © 2025</i>
                <p>Anime Sword Leveling</p>
                {/* Bouton remonter en haut */}
                <button
                    onClick={scrollToTop}
                    className="absolute right-2 bg-black hover:bg-blue-600 text-4xl text-white px-4 py-2 rounded-full shadow-lg transition"
                >
                    ↑ 
                </button>
            </div>

            <div>
                <ul className="list-style-none text-center hidden sm:block">
                    <NavLink to={"/apropos"} className="hover:text-2xl"><li>Notre Histoire</li></NavLink>
                    <a href="CGU.pdf" className="hover:text-2xl"><li>CGU</li></a>
                    <a href="Vos mentions légales.pdf" className="hover:text-2xl"><li>Mentions légales</li></a>
                    <NavLink to={"/contact"} className="hover:text-2xl"><li>Nous Contacter</li></NavLink>
                </ul> 
            </div>
        </footer>
    );
}