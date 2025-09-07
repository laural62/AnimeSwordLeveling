import parismanga from "../assets/paris-manga2025.webp";
import sololeveling from "../assets/solo-leveling.webp";
import jutjuso from "../assets/jutjuso-keisein.webp";
import btspop from "../assets/pop-bts.webp";

export default function Actu() {
    return(
        <section className="h-screen bg-black text-white flex items-center justify-center flex-col">
            <h2>Actualités du moment !</h2>
            <h3>Découvrez les actualités du moment et à venir que ce soit manga, jeux vidéo, animé, et convention-salon pop culture !</h3>

            <div class="card mb-3">
                <img src={parismanga} class="card-img-top" alt="affiche paris manga 2025" title="affiche paris manga 2025"/>
                <div class="card-body">
                    <h5 class="card-title">Paris Manga 2025 ! By TGS</h5>
                    <p class="card-text">Le 4 & 5 Octobre 2025, au parc des Expositions à Villepinte, le salon de la pop culture et de la culture geek, jeux vidéo, manga, comics, bd, science fiction, cinéma et série tv, culture japonaise.</p>
                    <a href="https://www.parismanga.fr/" 
                        title="lien vers paris manga" 
                        alt="lien vers site paris manga"
                    >En savoir +</a>
                </div>
            </div>

            <div>
                <div className="sm:text-2xl flex items-center justify-center">
                    <h2 className="sm:text-3xl border-2 border-gray-300 sm:w-fit m-1">Actualités !</h2>
                </div>
            
                <div className="m-2 gap-3">
                    <div className="flex justify-center items-center flex-col">
                        <img src={sololeveling} className="rounded sm:h-75 h-[150px] object-cover" />
                        <p className="text-center sm:w-[450px] h-[100px]">Solo Leveling | ARISE OVERDRIVEANNONCE<br/> POUR LES GAMEURS...<br/>
                              Prochainement Solo Leveling fera son appartion comme jeux vidéo uniquement sur steam dans un premier temps. 
                              Un jeu d'action-rpg, faites évoluer votre perso rang E.</p>
                    </div>
                </div>
            
                    <br/>
                    <hr className="w-100 m-auto text-white hidden"/>
            
                <div className="flex items-center justify-center sm:flex-row flex-col m-2 gap-4">
                    <div className="flex flex-row p-2 m-2">
                        <p className="w-50 flex justify-center h-[100px]">FIGURINE POP, DU GROUPE BTS,<br/>Jimin.<br/>
                                Sortie en Août 2025, à partir de 14€99.
                        </p>
                        <img src={btspop} className="sm:w-auto w-30 sm:h-40 h-[100px] object-cover" />
                    </div>
            
                    <div className="flex flex-row justify-center p-2 m-2">
                        <img src={jutjuso} className="h-[150px] sm:h-40 w-30 object-cover" />
                        <p className="w-50 flex justify-center p-2 h-[100px]">JUJUTSU KAISEN : Trésor caché / Mort prématurée | Le Film.<br/><br/>Sortie prévu dans nos salles 
                              le 09 Août 2025.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}