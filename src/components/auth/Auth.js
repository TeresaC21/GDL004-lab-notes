import React from 'react';
import firebaseIn from "../firebase/firebase";
import UserAuthFB from '../firebase/UserAuthFB';

export const AuthContext = React.createContext();  //using in PrivateRoute and Navbar useContext

export const AuthProvider = ({ children }) => {
    const userFB = UserAuthFB();
    //console.log(userFB); 
   
    return (
        <AuthContext.Provider
        value={{
        firebaseIn,
        userFB
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};


 /* const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        firebaseIn.auth().onAuthStateChanged(setCurrentUser);     
    }, []); */