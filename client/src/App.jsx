
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";

function App() {

  return (
    <div className="h-screen">
      <AuthProvider> 
        <Header />

        <Outlet /> 

        <Footer />  
      </AuthProvider>
      
      <Toaster />

    </div>
  )
};

export default App