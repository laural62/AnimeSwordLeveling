
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {

  const clientId = import.meta.env.VITE_GOOGLE_AUTH;

  return (
    <div className="h-screen">
      <GoogleOAuthProvider clientId={clientId}>
        <AuthProvider> 
          <Header />

          <Outlet /> 

          <Footer />  
        </AuthProvider>
      </GoogleOAuthProvider>
      <Toaster />

    </div>
  )
};

export default App