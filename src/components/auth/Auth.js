import React, {useState, useEffect} from 'react';

// Firebase
import firebaseIn from "../firebase/firebase";

export const AuthContext = React.createContext();  //using in PrivateRoute and Navbar useContext

export const AuthProvider = ({ children }) => {
    
    const [loading, setLoading] = useState(true)
    const [userCurrent, setUserCurrent] = useState({});

    useEffect(() => {
        const unsuscribe = firebaseIn.auth().onAuthStateChanged(user =>{
            setLoading(false)
            if (user) {
                setUserCurrent(user)
            } else {
                setUserCurrent(null)
            }
        });
        return () => unsuscribe();
    }, []);
   
    return (
        <AuthContext.Provider value={{ userCurrent }}>
            {/* loading
                ? <>Loading...</>
                : */ children}
        </AuthContext.Provider>
    );
};


 /* const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        firebaseIn.auth().onAuthStateChanged(setCurrentUser);     
    }, []); */