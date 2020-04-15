
import firebaseIn from './firebase';


export const loginFB = async (loginData) => {
    try {
        await firebaseIn
        .auth()
        .signInWithEmailAndPassword(loginData.email, loginData.password)
       window.location.hash = "/home"
    } catch (error) {
        console.log(error)
    }
} 

export const registerFB = async (registerData) => {
    try {
        await firebaseIn
        .auth()
        .createUserWithEmailAndPassword(registerData.email, registerData.password)
        window.location.hash = "home"
    } catch (error) {
        console.log(error);  
    } 
}

export const logout = () => {
    firebaseIn
    .auth()
    .signOut();
  };