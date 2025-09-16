
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import bannierealtabichon from "../assets/banniere-altabichon.webp";
import bannierejarlspunk from "../assets/banniere-jarlspunk.webp";

export default function StreamerTwitch({ userConnected }) {
    console.log(userConnected);


    return(
        <section className="text-white text-center bg-black">
            <h2 className="text-3xl font-bold p-3">Nos streamers Partenaires Twitch !</h2>
            <h3>Laissez nous vous faire des découvrir des treamers aux coeur d'or, où leur live est bienveillant, chill, rire et blabla...</h3>

            {/**{userConnected ? (*/}
                <div className="flex justify-around flex-col h-screen">
                    <div className="flex sm:flex-row flex-col gap-3">
                        <img src={bannierealtabichon} className="sm:h-100 h-[250px] w-auto" alt="image pub pour altabichon" title="banniere pub altabichon"/>

                        <div className="p-2 m-1"> 
                            
                            <h3 className="sm:text-2xl font-bold text-center uppercase p-3">Altaviran & PapyBichon </h3>
                            <p>Le duo qui fait fondre Twitch !
                                <br/>Bienvenue dans un univers où la bonne humeur, les fous rires et la bienveillance sont les maîtres mots. En solo ou en multi, sur des jeux chill ou juste pour papoter, ce couple de streamers vous accueille comme à la maison.
                                <br/>
                                Ici, on rigole, on discute, on joue... mais toujours dans une ambiance mignonne, positive et respectueuse. Que vous veniez pour un moment détente ou pour rejoindre une belle communauté, vous ne serez jamais déçu !
                            </p>

                            
                            <div className="flex flex-row justify-center items-center gap-3 p-2 m-2">
                                    
                                
                                <a href="https://www.instagram.com/alta_bichon/"
                                    className="hover:text-purple-400"
                                    target="blank"
                                    alt="lien insta altabichon" 
                                    title=""><FaInstagram size={48} />
                                </a>
                                    
                                
                                <a href="https://www.tiktok.com/@alta.bichon"
                                    className="hover:text-purple-400"
                                    target="blank" 
                                    alt="lien tiktok altabichon" 
                                    title="lien chaine tiktok"><FaTiktok size={48} />
                                </a>
                                    
                                
                                <a href="https://www.twitch.tv/papybichon"
                                    className="hover:text-purple-400"
                                    target="blank" 
                                    alt="lien twitch altabichon" 
                                    title="lien chaine twitch altabichon">PapyBichon<FaTwitch size={48} />
                                </a>
                                    
                                
                                <a href="https://www.twitch.tv/altaviran"
                                    className="hover:text-purple-400"
                                    target="blank" 
                                    alt="lien twitch altabichon" 
                                    title="lien chaine twitch altabichon">Altaviran<FaTwitch size={48} />
                                </a>
                            
                                
                                <a href="https://discord.com/invite/sKhy5MAqSF"
                                    className="hover:text-purple-400"
                                    target="blank" 
                                    alt="lien discord altabichon" 
                                    title="lien chaine discord"><FaDiscord size={48} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                    <hr className="hidden sm:block w-80 h-0.5 m-auto text-white"/>
                
                

                {/**Descriptif chaine twitch jarlspunk texte + banniere avec boutons reseaux sociaux et chaine twitch */}
                <div className="flex justify-around flex-col gap-2 h-screen">

                    {/**image + texte */}
                    <div className="flex sm:flex-row flex-col">
                        <img src={bannierejarlspunk} className="sm:h-100 h-[250px] w-auto" alt="image pub pour jarlspunk" title="banniere pub jarlspunk"/>

                        <div className="p-2 m-2"> 
                            {/**DESCRIPTIF DU STREAMER JARLSPUNK*/}
                            <h3 className="sm:text-2xl font-bold text-center uppercase p-3">Jarlspunk</h3>
                            <p>Jarlspunk t’embarque dans des aventures épiques entre chill, frissons et fous rires ! Que ce soit sur des jeux solo exigeants comme Dark Souls ou Elden Ring, des soirées multijoueur fun et immersives (Among Us, jeux d’horreur, etc.), il y en a pour tous les goûts !
                            <br/>
                                Ici, c’est plus qu’un live : c’est une véritable communauté bienveillante, portée par un streamer à l’écoute et interactif avec son chat !
                            <br/>
                                Tu cherches une ambiance conviviale, chaleureuse avec des abos adorables ? Ne cherche plus, tu es au bon endroit !
                            <br/>
                                Rejoins l’aventure chaque soir à 21h30 et deviens toi aussi un(e) fidèle du royaume de Jarlspunk !
                            </p>

                            {/**Lien reseaux sociaux */}
                            <div className="flex flex-row justify-center items-center gap-3 p-2 m-2">

                                {/**lien INSTA */}
                                <a href="https://www.instagram.com/jarl.spunk/"
                                    className="hover:text-purple-400"
                                    target="blank" 
                                    alt="lien insta jarlspunk" 
                                    title="lien chaine instagram"><FaInstagram size={48} />
                                </a>

                                {/**lien TIKTOK */}
                                <a href="https://www.tiktok.com/@jarlspunk"
                                    className="hover:text-purple-400"
                                    target="blank" 
                                    alt="lien tiktok jarlspunk" 
                                    title="lien chaine tiktok"><FaTiktok size={48} />
                                </a>
                                    
                                {/**lien TWITCH */}
                                <a href="https://www.twitch.tv/jarlspunk?lang=fr"
                                    className="hover:text-purple-400"
                                    target="blank" 
                                    alt="lien twitch jarlspunk" 
                                    title="lien chaine twitch jarlspunk"><FaTwitch size={48} />
                                </a>
                                    
                                {/**lien DISCORD */}
                                <a href="https://discord.com/invite/q5xm48BKvJ"
                                    className="hover:text-purple-400"
                                    target="blank" 
                                    alt="lien discord jarlspunk" 
                                    title="lien chaine discord"><FaDiscord size={48} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>  
        </section>
    );
}