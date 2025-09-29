import eclipsium from "../../assets/jeuxvideo/eclipsium.webp";
import silenthillf from "../../assets/jeuxvideo/Silent_Hill_f.webp";
import digimon from "../../assets/jeuxvideo/digimon-story-time-stranger.webp";

export default function JeuxVideo() {
 
  return (
    <section className="bg-gaming h-screen">
      <div className="flex items-center flex-col">
        <h2 className="font-semibold text-2xl">Prochaines Sorties !</h2>
        <h3>Pc, Xbox, Switch, PlayStation !</h3>
        <p>A partir du 15 septembre jusqu'au 25 octobre 2025 !</p>
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5 m-5">
          <div>
            <img
              className="w-[200px] rounded-lg object-cover"
              src={eclipsium}
              alt="gallery-photo"
            />
          </div>

          <div>
            <img
              className="h-50 w-auto object-contain rounded-lg"
              src={silenthillf}
              alt="gallery-photo"
            />
          </div>

          <div>
            <img
              className="h-50 w-auto object-contain rounded-lg"
              src={digimon}
              alt="gallery-photo"
            />
          </div>

          <div>
            <img
              className="h-50 w-auto object-contain rounded-lgr"
              src={silenthillf}
              alt="gallery-photo"
            />
          </div>
    </div>
    </section>
  );
}
