import parismanga from "../assets/paris-manga2025.webp";
import pgw from "../assets/parisGamesWeek2025.webp";
import jbc from "../assets/japan-breizh-con2025.webp";

export default function Convention() {
//listing des conventions organisé en France (recherche et source via google).

//lister jusque 4 conventions max
  return (
    <section className="h-screen bg-black text-white flex items-center justify-center flex-col">
      <div className="flex items-center justify-center gap-3 flex-col">
        <h2 className="text-2xl font-semibold bg-ducky p-2">Les Conventions !</h2>
        <h3 className="text-center"> Découvre les conventions à venir pour cette année 2025 !</h3>
        
        <div class="flex items-center justify-center sm:flex-row flex-col p-2">
          <img src={parismanga} class="sm:w-[450px] w-[250px]" alt="affiche paris manga 2025" title="affiche paris manga 2025"/>
          <div class="flex items-center justify-center flex-col">
            <h3 class="text-center font-bold sm:text-2xl">Paris Manga 2025 ! By TGS</h3>
            <p className="block sm:hidden text-center w-[300px]">Le 8 & 9 Novembre 2025, Saint-Brieuc | Parc des Expositions</p>
            <p class="text-center sm:w-[400px] hidden sm:block">Le 4 & 5 Octobre 2025, au parc des Expositions à Villepinte, le salon de la pop culture et de la culture geek, jeux vidéo, manga, comics, bd, science fiction, cinéma et série tv, culture japonaise.</p>
            <a href="https://www.parismanga.fr/" 
              title="lien vers paris manga"
              target="blank"
              className="text-center border-2 border-b-gray-500 p-1 rounded hover:bg-blue-400 hover:transition hover:duration-300" 
              alt="lien vers site paris manga"
            >En savoir +</a>
          </div>
        </div>

        <div class="flex items-center justify-center sm:flex-row flex-col p-2">
          <img src={pgw} class="sm:w-[400px] w-[200px]" alt="affiche paris games week 2025" title="affiche paris games week 2025"/>
          <div class="flex items-center justify-center flex-col">
            <h3 class="text-center font-bold sm:text-2xl">Paris Games Week !</h3>
            <p className="block sm:hidden text-center w-[300px]">Le 8 & 9 Novembre 2025, Saint-Brieuc | Parc des Expositions</p>
            <p class="text-center sm:w-[400px] hidden sm:block">Du 30 Octobre au 2 Novembre 2025, PARIS EXPO / PORTE DE VERSAiLLES, 
              Une expérience incontournable pour les fans de jeux vidéo, mais aussi pour tous les curieux, 
              familles et passionnés de culture geek..</p>
            <a href="https://www.parisgamesweek.com/fr" 
              title="lien vers paris games week"
              target="blank" 
              className="text-center border-2 border-b-gray-500 p-1 rounded hover:bg-blue-400 hover:transition hover:duration-300"
              alt="lien vers site paris games week"
            >En savoir +</a>
          </div>
        </div>

        <div class="flex items-center justify-center sm:flex-row flex-col p-2">
          <img src={jbc} class="sm:w-[450px] w-[200px]" alt="affiche japan breiz con'2025" title="affiche japan breizh con' 2025"/>
          <div class="flex items-center justify-center flex-col">
            <h3 class="text-center font-bold sm:text-2xl">Japan Breizh con' 2025 !</h3>
            <p className="block sm:hidden text-center w-[300px]">Le 8 & 9 Novembre 2025, Saint-Brieuc | Parc des Expositions</p>
            <p class="text-center sm:w-[400px] hidden sm:block">Le 8 & 9 Novembre 2025, Saint-Brieuc | Parc des Expositions, 
              Manga, Pop Culture, Cosplay, Kpop, Jeux-vidéo.</p>
            <a href="https://breizhcon.bzh/saintbrieuc/" 
              title="lien vers japan breizh con"
              target="blank"
              className="text-center border-2 border-b-gray-500 p-1 rounded hover:bg-blue-400 hover:transition hover:duration-300" 
              alt="lien vers site japan breizh con"
            >En savoir +</a>
          </div>
        </div>
      </div>
    </section>
  );
}
