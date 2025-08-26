export default function Footer({userConnected, toggleUser}) {
    console.log(userConnected);
    return (
        <footer class="bg-black text-white flex justify-around items-center space-x-5">
                <div>
                    <ul className="list-style-none">
                        <a href="#" className="hover:text-2xl"><li>Accueil</li></a>
                        <a href="#" className="hover:text-2xl"><li>Nouveautes</li></a>
                        <a href="#" className="hover:text-2xl"><li>Actualites</li></a>
                        <a href="#" className="hover:text-2xl"><li>Streamer</li></a>
                    </ul>
                </div>

                <div className="text-center">
                    <i>Copyright © 2025</i>
                    <p>Anime Sword Leveling</p>
                </div>

                <div>
                    <ul className="list-style-none text-center">
                        <a href="#" className="hover:text-2xl"><li>Notre Histoire</li></a>
                        <a href="#" className="hover:text-2xl"><li>A Propos</li></a>
                        <a href="#" className="hover:text-2xl"><li>Qui sommes-nous ?</li></a>
                        <a href="#" className="hover:text-2xl"><li>Nous Contacter</li></a>
                    </ul>
                </div>
        </footer>
    );
}