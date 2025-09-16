import yukiattente from "../../assets/yuki-manga.webp";


export default function AnimeManga() {
  return (
    <section className="bg-manga h-screen flex items-center justify-center text-white flex-col">
      <h2 className="text-3xl font-bold">Anime et Manga !</h2>

      <p>Encore un peu de patience, le site est en cours de construction !</p>

      <img src={yukiattente} 
        alt="image attente personnage feminin avec un livre"
        className="h-[500px] text-center"
        title="yuki en attente"
      />
    </section>
  );
}
