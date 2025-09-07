import parismanga from "../assets/paris-manga2025.webp";
import pgw from "../assets/parisGamesWeek2025.webp";
import jbc from "../assets/japan-breizh-con2025.webp";

export default function Convention() {
//listing des conventions organisé en France (recherche et source via google).
  return (
    <section className="h-screen bg-black text-white flex items-center justify-center flex-col">
      <div>
        <h2>Les Conventions !</h2>
        <h3> Découvre les conventions à venir pour cette année 2025 !</h3>
        
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

        <div class="card mb-3">
          <img src={pgw} class="card-img-top" alt="affiche paris games week 2025" title="affiche paris games week 2025"/>
          <div class="card-body">
            <h5 class="card-title">Paris Games Week !</h5>
            <p class="card-text">Du 30 Octobre au 2 Novembre 2025, PARIS EXPO / PORTE DE VERSAiLLES, 
              Une expérience incontournable pour les fans de jeux vidéo, mais aussi pour tous les curieux, 
              familles et passionnés de culture geek..</p>
            <a href="https://www.parisgamesweek.com/fr" 
              title="lien vers paris games week" 
              alt="lien vers site paris games week"
            >En savoir +</a>
          </div>
        </div>

        <div class="card mb-3">
          <img src={jbc} class="card-img-top" alt="affiche japan breiz con'2025" title="affiche japan breizh con' 2025"/>
          <div class="card-body">
            <h5 class="card-title">Japan Breizh con' 2025 !</h5>
            <p class="card-text">Le 8 & 9 Novembre 2025, Saint-Brieuc | Parc des Expositions, 
              Manga, Pop Culture, Cosplay, Kpop, Jeux-vidéo.</p>
            <a href="https://breizhcon.bzh/saintbrieuc/" 
              title="lien vers japan breizh con" 
              alt="lien vers site japan breizh con"
            >En savoir +</a>
          </div>
        </div>
      </div>
    </section>
  );
}
