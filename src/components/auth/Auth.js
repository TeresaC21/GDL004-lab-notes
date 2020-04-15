import React, { useEffect, useState } from 'react';
import firebaseIn from "./firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        firebaseIn.auth().onAuthStateChanged(setCurrentUser);
        
    }, []);

    return (
        <AuthContext.Provider
        value={{
        currentUser
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};