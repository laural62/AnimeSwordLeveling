
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const [user, setUser] = useState(false);
  //console.log(user);
  const login = () => {
    setUser(true);
  };

  const logout = () => {
    setUser(false);
  };

  return (
    <div className="h-screen">
      
      <Header userConnected={user} login={login} logout={logout} />

       <Outlet /> 

      <Footer />

      <Toaster />

    </div>
  )
};

export default App