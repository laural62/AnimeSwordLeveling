import { NavLink } from "react-router-dom"

export default function Home() {
    
    return ( 
      <>
      {/*section de Bienvenue "Accueil" */}
        <div className="text-white flex justify-center items-center bg-anime h-screen flex-column text-center">
          <div>
            <h1 className="text-5xl">Anime Sword Leveling</h1>

            <div>
              <h2 classNAme="text-3xl">Bienvenue sur notre site !</h2>
            </div>
          </div>
        </div>

        {/*section avec les images qui represente une page */}
        <section className="bg-black text-white text-center h-screen flex flex-col align-center w-full py-3">
          <h2 className="text-3xl border-2 py-2 px-4 border-gray-300 w-fit self-center">Nos Catégories !</h2>

          <div className="flex flex-row items-center justify-around py-3">
            <div>
              <img src="src/assets/pop_yuki.png" alt="image figurine pop feminin" title="section figurine" className="w-50 h-auto"/>
              <h3 className="text-2xl text-center">Figurine et Pop !</h3>
                <div>
                  <NavLink to={"/"} className="button-blue px-1 py-1 hover:text-2xl">Découvrir</NavLink>
                </div>
            </div>

            <div>
              <img src="src/assets/perso-kazu-t.png" alt="image personnage anime manga" title="section anime et manga" className="w-50 h-auto"/>
              <h3 className="text-2xl text-center">Animé et Manga !</h3>
                <div>
                  <NavLink to={"/"} className="button-blue px-1 py-1 hover:text-2xl">Découvrir</NavLink>
                </div>
            </div>

            <div>
              <img src="src/assets/gaming.jpg" alt="image jeux video epee" title="section jeux video" className="w-50 h-auto"/>
              <h3 className="text-2xl text-center">Jeux vidéo !</h3>
                <div>
                  <NavLink to={"/"} className="button-blue px-1 py-1 hover:text-2xl">Découvrir</NavLink>
                </div>
            </div>

            <div>
              <img src="src/assets/img_twitch.png" alt="image streamer" title="section streamers" className="w-50 h-auto"/>
              <h3 className="text-2xl text-center">Nos Streamers Partenaires !</h3>
                <div>
                  <NavLink to={"/streamer"} className="button-blue px-1 py-1 hover:text-2xl">Découvrir</NavLink>
                </div>
            </div>
          </div>
        </section>

        <hr className="w-50 m-auto text-white"/>

      {/**Section Nouveautés mixtes, actualiser tous les quinze jours, "Nouveau" */}
        <section className="h-screen bg-black text-white flex justify-center items-center">
          <div>
            <div className="text-2xl self-center">
              <h2 className="text-3xl border-2 border-gray-300 w-fit m-1">Nouveautés du Moment !</h2>
            </div>

              <div className="m-2 gap-3">
                <div className="flex justify-center items-center flex-column">
                  <img src="src/assets/solo-leveling.jpg" className="rounded h-75 object-cover" />
                  <p className="text-center w-75">Solo Leveling | ARISE OVERDRIVEANNONCE<br/> POUR LES GAMEURS...<br/>Prochainement Solo Leveling fera son appartion comme jeux vidéo uniquement sur steam dans un premier temps. Un jeu d'action-rpg, faites évoluer votre perso du rang E.</p>
                </div>
              </div>

              <br/>
              <hr className="w-100 m-auto text-white"/>

              <div className="flex items-center justify-around flex-row m-2 gap-3">
                <div className="flex flex-row p-2 m-2">
                  <p className="w-50 flex justify-center">FIGURINE POP, DU GROUPE BTS,<br/>Jimin.<br/>
                    Sortie en Août 2025, à partir de 14€99.
                  </p>
                  <img src="src/assets/pop-bts.webp" className="w-auto h-75 object-cover" />
                </div>

                <div className="flex flex-row p-2 m-2">
                  <img src="src/assets/jutjuso-keisein.webp" className="h-75 object-cover" />
                  <p className="w-50 flex justify-center p-2">JUJUTSU KAISEN : Trésor caché / Mort prématurée | Le Film.<br/><br/>Sortie prévu dans nos salles 
                  le 09 Août 2025.
                  </p>
                </div>
              </div>
          </div>
        </section>

        <hr className="w-50 m-auto text-white"/>

        {/**section des coups de coeurs de nos streamers partenaires ! avec 4 image par streamer */}
        <section className="bg-black text-white h-screen">
          <div className="flex justify-center items-center flex-column">
            <h2 className="text-2xl font-extrabold p-3">Coups de coeur des streamers !</h2>
          </div>

          {/**Coup de coeur du STREAMEUR PARTENAIRE */}
            <div className="flex justify-center items-center flex-col gap-3">
              <div className="text-center flex justify-around items-center flex-row">
                <div className="p-2 m-2 text-center">
                  <h3 className="text-center font-bold uppercase">Alta & Bichon</h3>
                  <h3 className="text-center m-2 p-1">Les coups de coeurs de notre Duo :</h3>
                {/**div contenant img + nav vers la page streamer */}
                  <div className="flex items-center gap-3 flex-col"> 
                    <img src="src/assets/altabichon.jpg" className="w-50 h-auto text-center"/>
                    <div className="text-center">
                      <NavLink to={"/streamer"} className="button-blue px-1 py-1 hover:text-2xl hover:transition hover:duration-200">En savoir +</NavLink>
                    </div>
                  </div>
                </div>

                <div>
                  {/**Coup de coeur du streameur ALTAVIRAN */}
                  <div className="flex justify-around items-center">
                    <div>
                      <h3 className="text-center text-1xl font-bold">Altaviran</h3>
                      <p>Jeux Vidéo !</p>
                      <img src="src/assets/talesofshire.jpg" className="w-50 h-auto m-2" alt="image jeux video tales of shire" title="jeux video tales of shire"/>
                    </div>
                    {/**Coup de coeur MANGA */}
                    <div>
                      <p>Manga !</p>
                      <img src="src/assets/defensedevil.jpg" className="h-30 m-2" alt="image manga defense devil" title="manga defense devil"/>
                    </div>

                    {/**Coup de coeur ANIME */}
                    <div>
                      <p>Animé !</p>
                      <img src="src/assets/carnetdelapo.jpg" className="h-30 m-2" alt="image anime carnets de l'apoticaire" title="Animé Les carnets de l'apoticaire"/>
                    </div>
                  </div>
        
                  {/**Coup de coeur du streameur BICHON */}
                  <div className="flex justify-around items-center">
                    <div>
                      <h3 className="text-center text-1xl font-bold">PapyBichon</h3>
                      <p>Jeux Vidéo !</p>
                      <img src="src/assets/ballxspit.jpg" className="w-50 h-auto m-2" alt="image jeux video ball x spit" title="jeux video ball x spit"/>
                    </div>

                    {/**Coup de coeur du MANGA */}
                    <div>
                      <p>Manga !</p>
                      <img src="src/assets/manga-onepiece.jpg" className="h-30 m-2" alt="image manga one piece" title="manga one piece"/>
                    </div>

                    {/**Coup de coeur de l'ANIME */}
                    <div>
                      <p>Animé !</p>
                      <img src="src/assets/onepiece.jpg" className="h-30 m-2" alt="image anime one piece" title="Animé one piece"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/**Coup de coeur du moment du streameur partenaire 2*/}
            <div className="flex justify-center items-center flex-column gap-3">

                {/**Coup de coeur du streameur JARLSPUNK */}
                <div className="flex justify-around items-center">
                  <div>
                    <p>Jeux Vidéo !</p>
                    <img src="src/assets/baldurs-gate-3.avif" className="w-50 h-auto m-2" alt="image jeux video" title="jeux video"/>
                  </div>

                  {/**Coup de coeur MANGA */}
                  <div>
                    <p>Manga !</p>
                    <img src="src/assets/berserk-manga.webp" className="h-50 m-2" alt="image manga" title="manga"/>
                  </div>

                  {/**Coup de coeur ANIME */}
                  <div>
                    <p>Animé !</p>
                    <img src="src/assets/fullmetal-alchemist.webp" className="h-50 m-2" alt="image anime" title="Animé"/>
                  </div>
                </div>

                <div>
                  <h3 className="text-center text-1xl font-bold uppercase p-2 m-2">JarlSpunk</h3>
                  <img src="src/assets/logoJarl.jpg" className="w-50 h-auto" />
                  <p className="text-center w-50 p-1 m-2">Voici le coups de coeur de JarlSpunk :</p>
                  <div className="text-center">
                    <NavLink to={"/streamer"} className="button-blue px-1 py-1 hover:text-2xl hover:transition hover:duration-200">En savoir +</NavLink>
                  </div>
                </div>
          </div>
        </section>
      </>
    );
}
