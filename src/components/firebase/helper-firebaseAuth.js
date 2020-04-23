
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
     return await firebaseIn
    .auth()
    .signOut();
  };

  // Add notes
 /*  export const dbNotes = () => {
      const db = firebaseIn.db.collection('notes').add()
  } */

 // Notes
 export const noteFB = () => {
   const db = firebaseIn.firestore()
   return db.collection('notes');
    /*  firebaseIn
    .firestore()
    .collection('notes') */ 
}