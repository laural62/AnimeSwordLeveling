import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FormulaireContact from "./pages/FormulaireContact";
import Home from "./components/Home";
import Actu from "./components/Actu";
import StreamerTwitch from "./components/StreamerTwitch";
import Apropos from "./components/Apropos";
import Login from "./pages/Login";
import Header from "./components/Header";
import Convention from "./components/Convention";
import Register from "./pages/Register";
import AnimeManga from "./components/categorie/AnimeManga";
import FigurinePop from "./components/categorie/FigurinePop";
import JeuxVideo from "./components/categorie/JeuxVideo";
import { rootLoader } from "./loaders/rootLoader";
import CompteUser from "./components/moncompte/CompteUser";
import UserConnected from "./components/ProtectedRoutes/UserConnected";
import UserNotConnected from "./components/ProtectedRoutes/UserNotConnected";
import MonAbonnement from "./components/moncompte/MonAbonnement";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import LegendeSub from "./components/moncompte/LegendeSub";
import OriginSub from "./components/moncompte/OriginSub";
import CheckoutButton from "./components/stripe/CheckoutButton";
import SuccessPage from "./components/stripe/SuccessPage";
import PolitiqueConfidentialités from "./PagesLégales/PolitiqueConfidentialités";

// Définition des pages directement dans le fichier

function CancelPage() {
  return <h1>Paiement annulé ❌</h1>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/login",
        element: (
          <UserNotConnected>
            <Login />
          </UserNotConnected>
        ),
      },
      {
        path: "/register",
        element: (
          <UserNotConnected>
            <Register />
          </UserNotConnected>
        ),
      },
      {
        path: "/politique",
        element: <PolitiqueConfidentialités />,
      },
      {
        path: "/header",
        element: <Header />,
      },
      {
        path: "/contact",
        element: <FormulaireContact />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/actu",
        element: (
          <UserConnected>
            <Actu />
          </UserConnected>
        ),
      },
      {
        path: "/streamer",
        element: (
          <UserConnected>
            <StreamerTwitch />
          </UserConnected>
        ),
      },
      {
        path: "/apropos",
        element: <Apropos />,
      },
      {
        path: "/convention",
        element: (
          <UserConnected>
            <Convention />
          </UserConnected>
        ),
      },
      {
        path: "/manga",
        element: <AnimeManga />,
      },
      {
        path: "/figurine",
        element: <FigurinePop />,
      },
      {
        path: "/jeuxvideo",
        element: <JeuxVideo />,
      },
      {
        path: "/compteuser",
        element: (
          <UserConnected>
            <CompteUser/>
          </UserConnected>
        ),
      },
      {
        path: "/monabonnement",
        element: (
          <UserConnected>
            <MonAbonnement />
          </UserConnected>
        ),
      },
      {
        path: "/originsub",
        element: (
          <UserConnected>
            <OriginSub />
          </UserConnected>
        ),
      },
      {
        path: "/legendesub",
        element: (
          <UserConnected>
            <LegendeSub />
          </UserConnected>
        ),
      },
      {
        path: "/checkout",
        element: (
          <UserConnected>
            <CheckoutButton />
          </UserConnected>
        ),
      },
      {
        path: "/success",
        element: 
          
            <SuccessPage />
          
        
      },
      {
        path: "/cancel",
        element: (
          <UserConnected>
            <CancelPage />
          </UserConnected>
        ),
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "/resetpassword",
        element: <ResetPassword />,
      },
    ],
  },
]);
