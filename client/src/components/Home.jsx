import { NavLink } from "react-router-dom"

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
                <img src="src/assets/pop_yuki.webp" alt="image figurine pop feminin" title="section figurine" className="w-50 h-auto"/>
                <h3 className="text-2xl text-center">Figurine et Pop !</h3>
                  <div>
                    <NavLink to={"/figurine"} className="button-blue px-1 py-1 hover:text-2xl">Découvrir</NavLink>
                  </div>
              </div>
                  {/**section anime manga */}
              <div>
                <img src="src/assets/perso-kazu-t.webp" alt="image personnage anime manga" title="section anime et manga" className="w-50 h-auto"/>
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
                <img src="src/assets/gaming.webp" alt="image jeux video epee" title="section jeux video" className="w-50 h-auto"/>
                <h3 className="text-2xl text-center">Jeux vidéo !</h3>
                  <div>
                    <NavLink to={"/jeuxvideo"} className="button-blue px-1 py-1 hover:text-2xl">Découvrir</NavLink>
                  </div>
              </div>
                    {/**section stream */}
              <div className="flex items-center justify-center flex-col">
                <img src="src/assets/img_twitch.webp" alt="image streamer" title="section streamers" 
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
        <section id="actu" className="h-screen bg-black text-white flex justify-center flex-col items-center">
          <div>
            <div className="sm:text-2xl flex items-center justify-center">
              <h2 className="sm:text-3xl border-2 border-gray-300 sm:w-fit m-1">Actualités !</h2>
            </div>

              <div className="m-2 gap-3">
                <div className="flex justify-center items-center flex-col">
                  <img src="src/assets/solo-leveling.webp" className="rounded sm:h-75 h-[150px] object-cover" />
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
                  <img src="src/assets/pop-bts.webp" className="sm:w-auto w-30 sm:h-40 h-[100px] object-cover" />
                </div>

                <div className="flex flex-row justify-center p-2 m-2">
                  <img src="src/assets/jutjuso-keisein.webp" className="h-[150px] sm:h-40 w-30 object-cover" />
                  <p className="w-50 flex justify-center p-2 h-[100px]">JUJUTSU KAISEN : Trésor caché / Mort prématurée | Le Film.<br/><br/>Sortie prévu dans nos salles 
                  le 09 Août 2025.
                  </p>
                </div>
              </div>
          </div>
          <hr className="w-50 m-auto text-white hidden md:block"/>
        </section>

        {/**section des coups de coeurs de nos streamers partenaires ! avec 4 image par streamer */}
        <section className="bg-black text-white h-screen flex flex-col items-center justify-center">
          <h2 className="sm:text-1xl font-bold p-2 border-1 border-gray-300">Coups de coeur des streamers !</h2>

            <div className="flex justify-center items-center flex-col gap-2">
              {/**Coup de coeur du STREAMEUR PARTENAIRE */}
              <div className="text-center flex justify-around items-center sm:flex-row flex-col">
                <div className="p-2 m-2 text-center">
                  <h3 className="text-center font-bold uppercase">Alta & Bichon</h3>
                  <h3 className="text-center m-2 p-1 hidden sm:block">Les coups de coeurs de notre Duo :</h3>
                  <p className="sm:hidden block">Découvre leurs coups du moment pour les jeux video, manga et animé !</p>
                {/**div contenant img + nav vers la page streamer */}
                  <div className="flex items-center gap-3 flex-col"> 
                    <img src="src/assets/altabichon.webp" className="w-50 h-auto text-center"/>
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
                      <img src="src/assets/talesofshire.webp" className="w-50 h-auto m-2" alt="image jeux video tales of shire" title="jeux video tales of shire"/>
                    </div>
                    {/**Coup de coeur MANGA */}
                    <div>
                      <p>Manga !</p>
                      <img src="src/assets/defensedevil.webp" className="h-30 m-2" alt="image manga defense devil" title="manga defense devil"/>
                    </div>

                    {/**Coup de coeur ANIME */}
                    <div>
                      <p>Animé !</p>
                      <img src="src/assets/carnetdelapo.webp" className="h-30 m-2" alt="image anime carnets de l'apoticaire" title="Animé Les carnets de l'apoticaire"/>
                    </div>
                  </div>
        
                  {/**Coup de coeur du streameur BICHON */}
                  <div className="flex justify-around items-center">
                    <div>
                      <h3 className="text-center text-1xl font-bold">PapyBichon</h3>
                      <p>Jeux Vidéo !</p>
                      <img src="src/assets/ballxspit.webp" className="w-50 h-auto m-2" alt="image jeux video ball x spit" title="jeux video ball x spit"/>
                    </div>

                    {/**Coup de coeur du MANGA */}
                    <div>
                      <p>Manga !</p>
                      <img src="src/assets/manga-onepiece.webp" className="h-30 m-2" alt="image manga one piece" title="manga one piece"/>
                    </div>

                    {/**Coup de coeur de l'ANIME */}
                    <div>
                      <p>Animé !</p>
                      <img src="src/assets/onepiece.webp" className="h-30 m-2" alt="image anime one piece" title="Animé one piece"/>
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
                  <h3 className="text-center m-2 p-1 hidden sm:block">Les coups de coeurs de notre Duo :</h3>
                  <p className="sm:hidden block">Découvre leurs coups du moment pour les jeux video, manga et animé !</p>
                {/**div contenant img + nav vers la page streamer */}
                  <div className="flex items-center gap-3 flex-col"> 
                    <img src="src/assets/logoJarl.webp" className="w-50 h-auto text-center"/>
                    <div className="text-center">
                      <NavLink to={"/streamer"} className="button-blue px-1 py-1 hover:text-2xl hover:transition hover:duration-200">En savoir +</NavLink>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:block">
                  {/**Coup de coeur du streameur ALTAVIRAN */}
                  <div className="flex justify-around items-center">
                    <div>
                      <p>Jeux Vidéo !</p>
                      <img src="src/assets/baldurs-gate-3.avif" className="w-auto h-[120px] m-2" alt="image jeux video tales of shire" title="jeux video tales of shire"/>
                    </div>
                    {/**Coup de coeur MANGA */}
                    <div>
                      <p>Manga !</p>
                      <img src="src/assets/berserk-manga.webp" className="h-30 m-2" alt="image manga defense devil" title="manga defense devil"/>
                    </div>

                    {/**Coup de coeur ANIME */}
                    <div>
                      <p>Animé !</p>
                      <img src="src/assets/fullmetal-alchemist.webp" className="h-30 m-2" alt="image anime carnets de l'apoticaire" title="Animé Les carnets de l'apoticaire"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </>
    );
}
