import { NavLink } from "react-router-dom";
import CardSub from "./CardSub";
import CheckoutButton from "../stripe/CheckoutButton";

export default function MonAbonnement() {
  return (
    <section className='bg-black text-white flex items-center flex-col gap-5 h-[85vh]'>
      <h2 className="text-3xl capitalize bg-ducky p-2">Abonnement</h2> 

      {/**rappel de CardSub pour l'affichage de card sur les infos Abonnement */}
      <div>
        <CardSub />
      </div>

      <div className="flex gap-20 flex-row justify-evenly">
        <div className="p-3">
          <NavLink className="button-blue p-2 hover:transition hover:duration-200 hover:text-2xl" to="/OriginSub">Origin</NavLink>
        </div>

        <div className="p-3">
          <NavLink className="button-blue p-2 hover:transition hover:duration-200 hover:text-2xl" to="/LegendeSub">Légende</NavLink>
        </div>
      </div>

      <p className="w-[600px]">Optez pour un abonnement afin de découvrir plus d'informations, d'avoir un accès complet et de révéler des bonus en cumulant des points !<br/><br/>
      Abonnez-vous pour accéder à toutes les infos, profiter d’un accès complet et débloquer des bonus en accumulant des points !<br/><br/>
      Choisissez votre abonnement : "Origin" pour un accès simple et gratuit, ou "Légende" pour profiter de toutes les fonctionnalités et bonus exclusifs !
      </p>

      <CheckoutButton priceId="price_1S93eKJTQpSZHZb9iUIueOwa" />
       
    </section>
    
  );
}
