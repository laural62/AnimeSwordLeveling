import yukiattente from "../../assets/yuki-manga.webp";

export default function JeuxVideo() {
  return (
    <section className="bg-gaming h-screen flex items-center justify-center flex-col">

      {/**page avec cle api jeux video (steam) */}
      <h2 className="text-3xl font-bold">Figurine Pop !</h2>
            
        <p>Encore un peu de patience, le site est en cours de construction !</p>
            
        <img src={yukiattente} 
          alt="image attente personnage feminin avec un livre"
          className="h-[500px] text-center"
          title="yuki en attente"
        />
    </section>
  );
}
