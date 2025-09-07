import { NavLink } from "react-router-dom"
import popyuki from "../assets/pop_yuki.webp";
import persokazu from "../assets/perso-kazu-t.webp";
import gaming from "../assets/gaming.webp";
import streamer from "../assets/streamer.webp";
import sololeveling from "../assets/solo-leveling.webp";
import parismanga from "../assets/paris-manga2025.webp";
import altabichon from "../assets/altabichon.webp";
import talesofshire from "../assets/talesofshire.webp";
import defensedevil from "../assets/defensedevil.webp";
import carnetdelapo from "../assets/carnetdelapo.webp";
import ballxspit from "../assets/ballxspit.webp";
import mangaonepiece from "../assets/manga-onepiece.webp";
import onepiece from "../assets/onepiece.webp";
import bg3 from "../assets/baldurs-gate-3.avif";
import berserkmanga from "../assets/berserk-manga.webp";
import fullmetalalchemist from "../assets/fullmetal-alchemist.webp";
import logoJarl from "../assets/logoJarl.webp";

export default function Home() {
    
    return ( 
      <>
      {/*section de Bienvenue "Accueil" */}
        <div className="text-white flex justify-center items-center sm:bg-anime sm:bg-cover bg-center bg-anime sm:h-[85vh] h-[40vh] flex-column text-center">
          <div id="acceuil">
            <h1 className="sm:text-5xl text-3xl">Anime Sword Leveling</h1>

            <div>
              <h2 classNAme="sm:text-3xl text-5xl">Bienvenue sur notre site !</h2>
            </div>
          </div>
        </div>

        {/*section avec les images qui represente une page */}
        <section className="bg-black text-white text-center h-[85vh] flex flex-col align-center w-full py-3">
          <h2 className="sm:text-3xl text-2xl border-2 py-2 px-4 border-gray-300 w-fit self-center">Nos Catégories !</h2>

          <div className="flex sm:flex-row flex-col items-center justify-center py-2">

            {/**div qui englobe la section figurine et animé/manga */}
            <div className="flex gap-3 m-3">
                  {/**section figurine pop */}
              <div> 
                <img src={popyuki} alt="image figurine pop feminin" title="section figurine" className="w-50 h-auto"/>
                <h3 className="text-2xl text-center">Figurine et Pop !</h3>
                  <div>
                    <NavLink to={"/figurine"} className="button-blue px-1 py-1 hover:text-2xl">Découvrir</NavLink>
                  </div>
              </div>
                  {/**section anime manga */}
              <div>
                <img src={persokazu} alt="image personnage anime manga" title="section anime et manga" className="w-50 h-auto"/>
                <h3 className="text-2xl text-center">Animé et Manga !</h3>
                  <div>
                    <NavLink to={"/manga"} className="button-blue px-1 py-1 hover:text-2xl">Découvrir</NavLink>
                  </div>
              </div>
            </div>

            {/**div qui englobe la section jeux video et streamer */}
            <div className="flex gap-5 m-3">
                    {/**section jeux video */}
              <div>
                <img src={gaming} alt="image jeux video epee" title="section jeux video" className="w-50 h-auto"/>
                <h3 className="text-2xl text-center">Jeux vidéo !</h3>
                  <div>
                    <NavLink to={"/jeuxvideo"} className="button-blue px-1 py-1 hover:text-2xl">Découvrir</NavLink>
                  </div>
              </div>
                    {/**section stream */}
              <div className="flex items-center justify-center flex-col">
                <img src={streamer} alt="image streamer" title="section streamers" 
                className="sm:w-50 w-40 sm:h-auto h-50"/>
                <h3 className="text-2xl text-center">Nos Streamers Partenaires !</h3>
                  <div>
                    <NavLink to={"/streamer"} className="button-blue px-1 py-1 hover:text-2xl">Découvrir</NavLink>
                  </div>
              </div>
            </div>
          </div>
          <hr className="w-50 m-auto text-white hidden md:block"/>
        </section>

      {/**Section Nouveautés mixtes, actualiser tous les quinze jours, "Nouveau" */}
        <section className="h-screen bg-black text-white flex justify-center flex-col items-center">
          <div>
            <div className="flex items-center justify-center">
              <h2 className="sm:text-3xl font-bold border-2 border-gray-300 sm:w-fit m-1">Actualités !</h2>
            </div>

              <div className="m-1 gap-3">
                <div className="flex justify-center items-center flex-col">
                  <img src={sololeveling} className="rounded sm:h-75 h-[150px] object-cover" />
                  <p className="text-center sm:w-[900px] h-[100px]">Solo Leveling | ARISE OVERDRIVEANNONCE<br/>
                  Prochainement Solo Leveling fera son appartion comme jeux vidéo uniquement sur steam. Restez Connecté pour en savoir plus.</p>
                </div>
              </div>

              <div className="m-1 gap-3">
                <div className="flex justify-center items-center flex-col">
                  <img src={parismanga} className="rounded sm:h-75 h-[150px] object-cover" />
                  <p className="text-center sm:w-[700px] h-[100px]">Paris Manga 2025 ! By TGS<br/>
                  Le 4 & 5 Octobre 2025, au parc des Expositions à Villepinte, 
                      le salon de la pop culture et de la culture geek...</p>
                </div>
              </div>
              <br/>
              <br/>
          </div>
        </section>

        {/**section des coups de coeurs de nos streamers partenaires ! avec 4 image par streamer */}
        <section className="h-screen bg-black text-white flex flex-col items-center justify-center ">
          <div>
            <h2 className="sm:text-2xl font-bold p-2 border-1 border-gray-300">Coups de coeur des streamers !</h2>
          </div>
            <div className="flex justify-center items-center flex-col gap-2">
              {/**Coup de coeur du STREAMEUR PARTENAIRE */}
              <div className="text-center flex justify-around items-center sm:flex-row flex-col">
                <div className="p-2 m-2 text-center">
                  <h3 className="text-center font-bold uppercase">Alta & Bichon</h3>
                  <h3 className="text-center m-2 p-1 hidden sm:block sm:w-[500px]">Ils nous partagent leurs différent coups de coeur du moment ! Et vous quel 
                    sont les vôtres ?</h3>
                  <p className="sm:hidden block">Découvrez notre duo de streamer sur des jeux chill, rire et bétise !</p>
                {/**div contenant img + nav vers la page streamer */}
                  <div className="flex items-center gap-3 flex-col"> 
                    <img src={altabichon} className="w-50 h-auto text-center"/>
                    <div className="text-center">
                      <NavLink to={"/streamer"} className="button-blue px-1 py-1 hover:text-2xl hover:transition hover:duration-200">En savoir +</NavLink>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block">
                  {/**Coup de coeur du streameur ALTAVIRAN */}
                  <div className="flex justify-around items-center">
                    <div>
                      <h3 className="text-center text-1xl font-bold">Altaviran</h3>
                      <p>Jeux Vidéo !</p>
                      <img src={talesofshire} className="w-50 h-auto m-2" alt="image jeux video tales of shire" title="jeux video tales of shire"/>
                    </div>
                    {/**Coup de coeur MANGA */}
                    <div>
                      <p>Manga !</p>
                      <img src={defensedevil} className="h-30 m-2" alt="image manga defense devil" title="manga defense devil"/>
                    </div>

                    {/**Coup de coeur ANIME */}
                    <div>
                      <p>Animé !</p>
                      <img src={carnetdelapo} className="h-30 m-2" alt="image anime carnets de l'apoticaire" title="Animé Les carnets de l'apoticaire"/>
                    </div>
                  </div>
        
                  {/**Coup de coeur du streameur BICHON */}
                  <div className="flex justify-around items-center">
                    <div>
                      <h3 className="text-center text-1xl font-bold">PapyBichon</h3>
                      <p>Jeux Vidéo !</p>
                      <img src={ballxspit} className="w-50 h-auto m-2" alt="image jeux video ball x spit" title="jeux video ball x spit"/>
                    </div>

                    {/**Coup de coeur du MANGA */}
                    <div>
                      <p>Manga !</p>
                      <img src={mangaonepiece} className="h-30 m-2" alt="image manga one piece" title="manga one piece"/>
                    </div>

                    {/**Coup de coeur de l'ANIME */}
                    <div>
                      <p>Animé !</p>
                      <img src={onepiece} className="h-30 m-2" alt="image anime one piece" title="Animé one piece"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/**Coup de coeur du STREAMEUR PARTENAIRE */}
            <div className="flex justify-center items-center flex-col gap-2">
              <div className="text-center flex justify-around items-center sm:flex-row flex-col">
                <div className="p-2 m-2 text-center">
                  <h3 className="text-center font-bold uppercase">Jarlspunk</h3>
                  <h3 className="text-center m-2 p-1 hidden sm:block sm:w-[500px]">Il nous partage ses préférences du moment pour l'animé, le manga et le jeux vidéo
                     ! Les connaissez vous ? n'hésitez pas à découvrir la suggestions ci dessous.</h3>
                  <p className="sm:hidden block">Venez découvrir le streamer sur des jeux d'horreur en solo ou multi, avec du papotage !</p>
                {/**div contenant img + nav vers la page streamer */}
                  <div className="flex items-center gap-3 flex-col"> 
                    <img src={logoJarl} 
                      className="w-50 h-auto text-center"/>
                    <div className="text-center">
                      <NavLink to={"/streamer"} 
                        className="button-blue px-1 py-1 hover:text-2xl hover:transition hover:duration-200">En savoir +</NavLink>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block">
                  {/**Coup de coeur du streameur ALTAVIRAN */}
                  <div className="flex justify-around items-center">
                    <div>
                      <p>Jeux Vidéo !</p>
                      <img src={bg3} 
                        className="w-auto h-[120px] m-2" 
                        alt="image jeux video baldurs gate 3" 
                        title="jeux video baldurs gate 3"/>
                    </div>
                    {/**Coup de coeur MANGA */}
                    <div>
                      <p>Manga !</p>
                      <img src={berserkmanga} 
                        className="h-30 m-2" 
                        alt="image manga berserk" 
                        title="manga defense berserk"/>
                    </div>

                    {/**Coup de coeur ANIME */}
                    <div>
                      <p>Animé !</p>
                      <img src={fullmetalalchemist} 
                        className="h-30 m-2" 
                        alt="image anime Fullmetal Alchemist" 
                        title="Animé Fullmetal Alchemist"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </>
    );
}
