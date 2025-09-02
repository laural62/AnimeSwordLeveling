import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Header() {

    const { userConnected, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-black text-white flex justify-around items-center sd:flex-col">

        {/**image logo a gauche navbar */}
            <NavLink to={"/"} className="hidden md:block flex flex-col">
                <img src="src/assets/logo.webp" alt="logo image" className="w-25 h-25" />
            </NavLink>

            {/* Bouton Burger visible uniquement sur mobile */}
            <button
                className="block md:hidden text-white focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {/* Icône burger */}
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                {menuOpen ? (
                    // Icône croix (fermer)
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                    />
                ) : (
                    // Icône burger
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                    />
                )}
                </svg>
            </button>

        {/**navbar quand le client est connecter */}
            
            <nav className="gap-6 sm:flex-row flex-col hidden md:flex space-x-6">
            {userConnected ? (
                <>        
                    <NavLink 
                        to={"/"} 
                        className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">
                        Home
                        </NavLink>
                        
                    <NavLink 
                        to={"/nouveau"} 
                        className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">
                        Nouveau !
                        </NavLink>

                    <NavLink 
                        to={"/actu"} 
                        className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">
                        Actualites
                        </NavLink>

                    <NavLink 
                        to={"/streamer"} 
                        className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">
                        Streamer
                        </NavLink>

                    <NavLink 
                        to={"/convention"} 
                        className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">
                        Convention
                    </NavLink>

                    <NavLink 
                        to={"/contact"} 
                        className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">
                        Contact
                        </NavLink>

                    <NavLink 
                        to="/" 
                        className="text-white font-semibold" 
                        onClick={logout}
                        >
                        Deconnexion</NavLink>
                </>     
            ) : (
                //navbar quand le client n'est pas connecter
                <nav className="flex space-x-6 sm:flex-row flex-col">
                    <NavLink 
                        to={"/"} 
                        className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">
                        Home
                    </NavLink>
                    
                    <NavLink 
                        to={"/apropos"} 
                        className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">
                        A Propos
                    </NavLink>

                    <NavLink 
                        to={"/contact"} 
                        className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">
                        Contact
                    </NavLink>

                    <NavLink
                        to={"/Login"}
                        
                        className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">
                        Connexion
                    </NavLink>

                    <NavLink
                        to={"/Register"}
                        className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">
                        Inscription
                    </NavLink>
                </nav>
                )}
            </nav>

                {/* Navbar mobile (cachée par défaut) */}
                {menuOpen && (
                    <nav className="absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-4 py-4 md:hidden z-50">
                    {userConnected ? (
                        <>
                        <NavLink to={"/"} onClick={() => setMenuOpen(false)}>Home</NavLink>
                        <NavLink to={"/nouveau"} onClick={() => setMenuOpen(false)}>Nouveau !</NavLink>
                        <NavLink to={"/actu"} onClick={() => setMenuOpen(false)}>Actualités</NavLink>
                        <NavLink to={"/streamer"} onClick={() => setMenuOpen(false)}>Streamer</NavLink>
                        <NavLink to={"/convention"} onClick={() => setMenuOpen(false)}>Convention</NavLink>
                        <NavLink to={"/contact"} onClick={() => setMenuOpen(false)}>Contact</NavLink>
                        <NavLink to="/home" onClick={() => setMenuOpen(false)}>Déconnexion</NavLink>
                        </>
                    ) : (
                        <>
                        <NavLink to={"/"} onClick={() => setMenuOpen(false)}>Home</NavLink>
                        <NavLink to={"/apropos"} onClick={() => setMenuOpen(false)}>A Propos</NavLink>
                        <NavLink to={"/contact"} onClick={() => setMenuOpen(false)}>Contact</NavLink>
                        <NavLink to={"/Login"} onClick={() => setMenuOpen(false)}>Connexion</NavLink>
                        <NavLink to={"/Register"} onClick={() => setMenuOpen(false)}>Inscription</NavLink>
                        </>
                    )}
                    </nav>
                )}
        </header>
    );
}