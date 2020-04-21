
import firebaseIn from '../firebase/firebase';

export const registerFB = async (registerData, e) => {
       const newUser = await firebaseIn
        .auth()
        .createUserWithEmailAndPassword(registerData.email, registerData.password)
         return await newUser.user.updateProfile({
            displayName: registerData.name
        })   
       /*  window.location= "/home" */
}

export const loginFB = async (loginData) => {
       return await firebaseIn
        .auth()
        .signInWithEmailAndPassword(loginData.email, loginData.password)
        /* window.location = "/home"  */
} 

// Sign Out
export const logout =  async () => {
     await firebaseIn
    .auth()
    .signOut();
  };

 // Notes
/* export const noteFB = async () => {
    const nNote = await firebaseIn
    .firestore()
    .collection('quote')
    .onSnapshot(snapshot)
} */