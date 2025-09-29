
import LegendAbo from "../../assets/aboplus.webp";

export default function LegendeSub() {
  return (
    <section className='h-screen text-white flex items-center flex-col bg-black gap-3'> 
      <h2 className="text-2xl font-semibold bg-ducky p-2 text-center">Abonnement : Légende !</h2>
      <h3 className="text-center">Retrouvez toute l'histoire pour le forfait Légende !</h3>

      <div className="flex flex-row gap-5">
        <p>Description forfait !</p>

        <img 
          src={LegendAbo} 
          alt="image du forfait legende" 
          title="forfait Légende!"
          className="w-[450px]"
        />
      </div>
    </section>
  );
}
