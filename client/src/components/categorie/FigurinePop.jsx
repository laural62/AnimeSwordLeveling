import yukiattente from "../../assets/yuki-manga.webp";

export default function FigurinePop() {
  return (
    <section className="bg-pop h-screen flex justify-center items-center text-white flex-col gap-6">
      <h2 className="text-3xl font-bold">Figurine Pop !</h2>
      
        <p>Encore un peu de patience, le site est en cours de construction !</p>
      
        <img src={yukiattente} 
          alt="image attente personnage feminin avec un livre"
          className="h-[500px] text-center m-2"
          title="yuki en attente"
        />
    </section>
  );
}
