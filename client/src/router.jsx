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
import CompteUser from "./components/moncompte/CompteUser";
import UserConnected from "./components/ProtectedRoutes/UserConnected";
import UserNotConnected from "./components/ProtectedRoutes/UserNotConnected";

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
        path: "/password",
        element: (
          <UserNotConnected>
            <PasswordOublie />
          </UserNotConnected>
        ),
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
        element: (
          <UserConnected>
            <Nouveau />
          </UserConnected>
        ),
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
    ],
  },
]);
