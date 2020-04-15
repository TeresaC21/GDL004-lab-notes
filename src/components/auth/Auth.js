import React, { useEffect, useState } from 'react';
import firebaseIn from "./firebase";

export const AuthContext = React.createContext();/*  using in PrivateRoute into useContext*/

export const AuthProvider = ({ children }) => {
    console.log(children);
    
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