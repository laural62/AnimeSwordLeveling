import { useState, useEffect } from "react";
import yukiattente from "../../assets/yuki-manga.webp";
import CardManga from "./CardManga";


export default function AnimeManga() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/schedules/tuesday?sfw")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) {
    return (
      <div className="fixed bg-black text-white top-0 left-0 h-full w-full flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="bg-manga h-auto flex items-center justify-center text-white flex-col p-5">
      <h2 className="text-4xl font-bold m-1 p-5">Anime et Manga !</h2>

      <div className=" h-screen grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
        {data.map((data) => (
          <CardManga 
            key={data.id}
            title={data.title}
            images={data.images.jpg.image_url}
            string={data.aired.string}
            popularity={data.popularity}
          />
        ))}
      </div>
    </section>
  );
}
