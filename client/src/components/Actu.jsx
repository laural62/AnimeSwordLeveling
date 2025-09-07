import parismanga from "../assets/paris-manga2025.webp";
import sololeveling from "../assets/solo-leveling.webp";
import jutjuso from "../assets/jutjuso-keisein.webp";
import btspop from "../assets/pop-bts.webp";

export default function Actu() {
    return(
        <section className="sm:h-screen h-[95vh] bg-black text-white flex items-center justify-center flex-col">
            <div className="sm:h-[85vh] flex items-center justify-center flex-col gap-4">
                <h2 className="sm:text-2xl sm:font-bold underline">Actualités du moment !</h2>
                <h3 className="text-center w-[400px] sm:block hidden">Découvrez les actualités du moment et à venir que ce soit manga, jeux vidéo, 
                    animé, et convention-salon pop culture !</h3>

                <div class="flex items-center justify-center sm:flex-row flex-col gap-3">
                    <div className="text-center gap-3">
                        <img src={parismanga} class="sm:h-[200px] w-[auto] h-[100px]" alt="affiche paris manga 2025" title="affiche paris manga 2025"/>
                        <div class="text-center sm:block hidden">
                            <h3 class="sm:font-semibold text-center">Paris Manga 2025 ! By TGS</h3>
                            <p class="text-center sm:w-[500px] w-[250px]">Le 4 & 5 Octobre 2025, au parc des Expositions à Villepinte, 
                                le salon de la pop culture et de la culture geek !</p>  
                        </div>
                        <a href="https://www.parismanga.fr/" 
                                title="lien vers paris manga" 
                                alt="lien vers site paris manga"
                                className="bg-blue-900 hover:bg-blue-400 hover:text-2xl border-2 p-1 rounded"
                            >En savoir +</a>
                    </div>

                    <div className="flex items-center justify-center flex-col gap-3">
                    <img src={sololeveling} className="sm:h-[200px] w-[auto] h-[100px] object-cover" />
                    <p className="text-center sm:w-[500px] sm:block hidden">Solo Leveling | ARISE OVERDRIVEANNONCE<br/>
                        Prochainement Solo Leveling fera son appartion comme jeux vidéo sur steam !
                    </p>
                    <p className="block sm:hidden text-center">Prochainement Solo Leveling fera son appartion comme jeux vidéo sur steam !</p>
                </div>
                </div>
    
                {/**actualites figurine + animé-manga */}
                <div className="flex items-center justify-center sm:flex-row flex-col gap-3">
                    
                    <div className="text-center flex gap-3 flex-row">
                        <img src={btspop} className="object-cover sm:h-[200px] h-[120px]" />
                        <p className="text-center sm:w-[200px] w-[150px]">FIGURINE POP, DU GROUPE BTS,<br/>Jimin.<br/>
                            Sortie en Août 2025, à partir de 14€99.
                        </p>
                    </div>
                
                    <div className="text-center flex flex-row gap-3">
                        <img src={jutjuso} className="object-cover sm:h-[200px] h-[120px]" />
                        <p className="text-center w-[200px]">JUJUTSU KAISEN : Trésor caché / Mort prématurée | Le Film.<br/><br/>Sortie prévu dans nos salles 
                            le 09 Août 2025.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}