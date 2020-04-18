
import firebaseIn from './firebase';

export const registerFB = async (registerData, e) => {
   
    try {
        await firebaseIn
        .auth()
        .createUserWithEmailAndPassword(registerData.email, registerData.password)
        /*  const upUser =firebaseIn.auth().currentUser
         upUser.updateProfile({
            displayName: upUser.name
        })  */
        
        /* return await newUser.user.updateProfile({
            displayName: name
        }) */
        window.location= "/home"
    } catch (error) {
        console.log(error);  
    } 
}

export const loginFB = async (loginData) => {
    try {
        await firebaseIn
        .auth()
        .signInWithEmailAndPassword(loginData.email, loginData.password)
       window.location = "/home"
    } catch (error) {
        console.log(error)
    }
} 

export const logout =  () => {
     firebaseIn
    .auth()
    .signOut();
  };