import React from 'react'
import avatar from "../../assets/avatar_femme.webp";

export default function CompteUser() {
  return (
    <section className="h-screen bg-black text-white flex items-center justify-center flex-col sm:gap-5 gap-1">
      <h2 className="bg-ducky p-2 sm:text-3xl text-1xl font-semibold">Mon Compte !</h2>
      
      <form className="flex sm:flex-row flex-col sm:gap-4 items-center justify-center sm:space-x-30 sm:space-y-10">
        {/**input pour la maj du pseudo à la volonté de l'utilisateur */}
        <div className="flex-col flex items-center justify-center sm:gap-4">
          <img src={avatar} 
            alt='image avatar' 
            title='image avatar'
            className='circle sm:w-[200px] w-[50px] rounded-full rounded-circle border-3 border-blue1'
          />

          <label>Changer mon pseudo !</label>
          <input type="text"
            id="username"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <button className="px-4 py-2 rounded hover:bg-green-900 uppercase">
            Valider
          </button>
        </div>

        {/**form pour l'utilisateur fasse des maj de ses données personnelles */}
        <div className="flex-col flex items-center justify-center sm:gap-4">
          <h3 className='sm:text-2xl uppercase underline'>Informations Personnelles !</h3>

          <label>Nom</label>
          <input type="text"
            id="name"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <label>Prénom</label>
          <input type="text"
            id="firstName"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <label>Email</label>
          <input type="email"
            id="email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <label>Télephone</label>
          <input type="tel"
            id="tel"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />

          <button className="px-4 py-2 rounded hover:bg-green-900 uppercase">
            Valider
          </button>
        </div>

      </form> {/**fin du formulaire maj */}

    {/**choix de notifications nouveautes et actu selon l'utilisateur */}
      <div className='flex items-center justify-center flex-col sm:gap-4 w-[300px] sm:w-[auto] m-1'>
        <h3 className='underline uppercase'>Nofitications personnalisé !</h3>
        {/**checkbox notif sms et email */}
        <div className='flex items-center justify-center flex-col sm:gap-2'>
          <label>
            <input
              type="checkbox"
              className="mr-4"
              id="notif"
            />
              En cochant cette case, j'accepte de recevoir les notifications par SMS.
          </label>

          <label>
            <input
              type="checkbox"
              className="mr-4"
              id="notif"
            />
              En cochant cette case, j'accepte de recevoir les notifications par EMAIL.
          </label>
        </div>

        {/**notif personnalisé selon les sujet*/}

        <div className='font-light'>
          <p>Afin de vous envoyer des notifications pertinentes, cochez le ou les cases qui vous correspondent ! </p>
        </div>

        <div className='flex items-center justify-center flex-row sm:gap-2'>
          <div className='flex flex-col'>
            <label>
              <input
                type="checkbox"
                className="mr-4"
                id="notif"
              />
                Figurine pop !
            </label>

            <label>
              <input
                type="checkbox"
                className="mr-4"
                id="notif"
              />
                Jeux Vidéo !
            </label>

            <label>
              <input
                type="checkbox"
                className="mr-4"
                id="notif"
              />
                Actualités Streamer !
            </label>
          </div>

          {/**2 eme partie de notif  */}
          <div className='flex flex-col'>
            <label>
              <input
                type="checkbox"
                className="mr-4"
                id="notif"
              />
                MAnga & Animé !
            </label>

            <label>
              <input
                type="checkbox"
                className="mr-4"
                id="notif"
              />
                Conventions !
            </label>

          </div>

        </div> {/**div notif sujet */}
      </div> {/**div notif personnalisé */}
      
      {/**fin de section */}
    </section> 
  );
}
