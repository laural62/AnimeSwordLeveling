import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FormulaireContact from "./pages/FormulaireContact";
import Home from "./components/Home";
import Nouveau from "./components/Nouveau";
import Actu from "./components/Actu";
import StreamerTwitch from "./components/StreamerTwitch";
import Apropos from "./components/Apropos";
import Login from "./pages/Login";
import Header from "./components/Header";
import PasswordOublie from "./pages/PasswordOublie";
import Convention from "./components/Convention";
import Register from "./pages/Register";
import AnimeManga from "./components/categorie/AnimeManga";
import FigurinePop from "./components/categorie/FigurinePop";
import JeuxVideo from "./components/categorie/JeuxVideo";
import { rootLoader } from "./loaders/rootLoader";
import Compte from "./components/moncompte/Compte";
import CompteUser from "./components/moncompte/CompteUser";

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
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/password",
        element: <PasswordOublie />,
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
        path: "/nouveau",
        element: <Nouveau />,
      },
      {
        path: "/actu",
        element: <Actu />,
      },
      {
        path: "/streamer",
        element: <StreamerTwitch />,
      },
      {
        path: "/apropos",
        element: <Apropos />,
      },
      {
        path: "/convention",
        element: <Convention />,
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
        path: "/moncompte",
        element: <Compte />,
      },
      {
        path: "/compteuser",
        element: <CompteUser/>,
      },
    ],
  },
]);
