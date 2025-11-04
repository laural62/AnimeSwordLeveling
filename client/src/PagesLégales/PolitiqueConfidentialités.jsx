import React from 'react'

export default function PolitiqueConfidentialités() {
  return (
    <section className='flex justify-center bg-black text-white'> 
        <div className='w-[900px]'>
            <p className='font-bold text-2xl'>Politique de Confidentialité – Anime Sword Leveling</p><br/><br/>

            <p>En vigueur au : 04/11/2025<br/>
            URL du site : [https://animeswordleveling.netlify.app](https://animeswordleveling.netlify.app)<br/>
            Contact : [animeswordleveling@gmail.com](mailto:animeswordleveling@gmail.com)</p><br/><br/>

            <p className='underline'>1. Introduction</p><br/>
            <p>La présente politique de confidentialité a pour but d’informer les utilisateurs (ci-après « Utilisateur ») 
            du site Anime Sword Leveling sur la collecte, le traitement et la protection de leurs données personnelles, 
            conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi française n°78-17 du 6 janvier 
            1978 relative à l’informatique, aux fichiers et aux libertés.<br/>

            En utilisant le site et en s’inscrivant à nos services, l’Utilisateur accepte la collecte et l’utilisation de 
            ses données personnelles telles que décrites dans cette politique.</p><br/>

            <p className='underline'>2. Données collectées</p><br/>
            <ul>Le site collecte uniquement les données nécessaires au fonctionnement des services et à la communication 
            avec l’Utilisateur. Les données collectées comprennent :<br/><br/>

                <li>* Nom et prénom</li><br/>
                <li>* Adresse e-mail</li><br/>
                <li>* Données de paiement via Stripe (uniquement les informations nécessaires au traitement de l’abonnement, 
                Stripe gère les données de paiement de manière sécurisée et ne sont pas stockées sur notre site)</li><br/><br/>
            </ul>
            <ul>Ces données sont collectées via :<br/>

                <li>* Le formulaire d’inscription</li><br/>
                <li>* Le formulaire de contact</li><br/>
                <li>* Le formulaire d’abonnement / paiement Stripe</li>
            </ul>
            <br/><br/>

            <p className='underline'>3. Finalités du traitement</p><br/>
            <ul>Les données personnelles collectées sont utilisées uniquement pour les finalités suivantes :<br/>
                <li>. Création et gestion du compte utilisateur</li><br/>
                <li>. Réponse aux demandes via le formulaire de contact</li><br/>
                <li>. Gestion des abonnements et paiements via Stripe</li><br/>
                <li>. Envoi d’informations liées aux services ou aux abonnements, uniquement si l’Utilisateur y a consenti</li><br/>
            </ul>
            <p>Les données ne sont jamais revendues ni utilisées à des fins commerciales externes.</p><br/><br/>

            <p className='underline'>4. Base légale du traitement</p><br/>
            <ul>Le traitement des données personnelles repose sur :<br/>

                <li>* Le consentement de l’Utilisateur (acceptation via le formulaire d’inscription et case à cocher)</li>
                <li>* L’exécution d’un contrat (gestion de l’abonnement et des services)</li>
            </ul>
            <br/><br/>

            <p className='underline'>5. Durée de conservation</p><br/>

            <ul>
                <li>* Les données des utilisateurs sont conservées tant que le compte est actif ou pendant 3 ans après 
                la dernière activité.</li>
                <li>* Les données relatives aux abonnements via Stripe sont conservées selon les politiques de Stripe.</li>
            </ul><br/><br/>

            <p className='underline'>6. Partage et divulgation des données</p><br/>
            <ul>Les données personnelles peuvent être partagées uniquement avec :<br/>

                <li>* Stripe, pour le traitement sécurisé des paiements</li><br/>
                <li>* Les prestataires techniques nécessaires à l’hébergement et au fonctionnement du site</li>
            </ul><br/>

            <p>Aucun autre partage à des tiers à des fins commerciales n’a lieu.</p><br/><br/>

            <p className='underline'>7. Sécurité des données</p><br/>
            <ul>Anime Sword Leveling met en œuvre des mesures techniques et organisationnelles adaptées pour protéger les données 
            personnelles contre :<br/>

                <li>* La perte, la destruction ou l’altération</li><br/>
                <li>* L’accès non autorisé</li><br/>
                <li>* La divulgation accidentelle</li>
            </ul><br/>

            <p>Les mots de passe des comptes utilisateurs sont hashés et ne peuvent pas être consultés par l’équipe du site.</p><br/><br/>

            <p className='underline'>8. Droits des utilisateurs</p><br/>
            <ul>Conformément au RGPD, l’Utilisateur dispose des droits suivants :<br/>

                <li>* Accès à ses données personnelles</li><br/>
                <li>* Rectification des données incorrectes ou incomplètes</li><br/>
                <li>* Suppression de ses données (droit à l’oubli)</li><br/>
                <li>* Opposition au traitement de ses données</li><br/>
                <li>* Portabilité des données</li>
            </ul><br/>

            <p>Pour exercer ces droits, l’Utilisateur peut contacter : [animeswordleveling@gmail.com]
            (mailto:animeswordleveling@gmail.com)</p><br/>
            <br/>
            <p className='underline'>9. Cookies</p><br/>
            <ul>Le site peut utiliser des cookies pour :<br/><br/>

                <li>* Améliorer l’expérience utilisateur</li><br/>
                <li>* Assurer le bon fonctionnement du site</li>
            </ul><br/>

            <p>L’Utilisateur peut configurer son navigateur pour refuser les cookies. Certaines fonctionnalités du site peuvent 
            être limitées en cas de refus.</p><br/><br/>

            <p className='underline'>10. Modifications de la politique</p><br/>
                <p>Cette politique de confidentialité peut être mise à jour à tout moment. La date d’entrée en vigueur sera 
                systématiquement indiquée en haut du document. Il est conseillé aux utilisateurs de consulter régulièrement 
                cette page pour rester informés des éventuelles modifications.</p>
        </div>
    </section>
  )
}
