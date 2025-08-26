import { useContext, useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export function AuthProvider ({ children }) {
    const [userConnected, setUserConnected] = useState(null);

    const login = async (values) => {
        setUserConnected(values);
    };

    return (
        <AuthContext.Provider
            value={{
                userConnected,
                login,
            }}
            >
                {children}
            </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}