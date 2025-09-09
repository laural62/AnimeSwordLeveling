import { IoLogoDiscord } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

export default function Reseaux() {
  return (
    <section className="h-screen bg-black text-white flex items-center justify-center flex-col gap-4">
        <h1 className="text-2xl font-semibold sm:block hidden"> Nous suivre !</h1>

        <div>
            <h2 className="sm:block hidden">Pour nous suivre et en savoir plus sur les évenements, suivez-nous et retrouvez-nous sur 
                les réseaux !</h2>
        </div>

        <div className="flex items-center justify-center flex-row">
            <a href="https://discord.gg/QMMUhrm8Mg" 
                title="lien discord" 
                alt="lien web vers le discord"
            ><IoLogoDiscord fontSize={45}/>
            </a>

            <a href="https://instagram.com"
                title="lien instagram"
                alt="lien reseau instagram"
            ><FaInstagramSquare fontSize={45} />
            </a>

            <a href="https://tiktok.com"
                title="lien tiktok"
                atl="lien vers reseaux tiktok"
            ><AiFillTikTok fontSize={45} />
            </a>
        </div>
    </section>
  );
}
