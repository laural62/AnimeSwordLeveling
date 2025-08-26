import { NavLink } from "react-router-dom";

export default function Header({ userConnected, login, logout }) {
    console.log(userConnected);
    return (
        <header className="bg-black text-white flex justify-around items-center">

        {/**image logo a gauche navbar */}
            <NavLink to={"/"}>
                <img src="src/assets/logo.png" alt="logo image" className="w-25 h-25" />
            </NavLink>

        {/**navbar quand le client est connecter */}
            {userConnected ? (
                <nav className="flex space-x-5">
                    
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
                        to="/" onClick={logout} 
                        className="text-white font-semibold" >
                        Deconnexion</NavLink>
                    
                </nav>
            ) : (
                //navbar quand le client n'est pas connecter
                <nav className="flex space-x-6">
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
                        onClick={login}
                        className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">
                        Connexion
                    </NavLink>

                    <NavLink
                        to={"/Inscription"}
                        className="text-white font-semibold hover:text-blue-400 px-1 py-1 hover:text-2xl hover:transition hover:duration-200">
                        Inscription
                    </NavLink>
                </nav>
            )}
            
        </header>
    );
}