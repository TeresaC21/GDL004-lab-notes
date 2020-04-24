
import firebaseIn from '../firebase/firebase';

export const registerFB = async (registerData, e) => {
       const newUser = await firebaseIn
        .auth()
        .createUserWithEmailAndPassword(registerData.email, registerData.password)
         return await newUser.user.updateProfile({
            displayName: registerData.name
        })   
}

export const loginFB = async (loginData) => {
       return await firebaseIn
        .auth()
        .signInWithEmailAndPassword(loginData.email, loginData.password);
} 

// Sign Out
export const logout =  async () => {
     return await firebaseIn
    .auth()
    .signOut();
  };

 // Notes collection
 export const noteFB = () => {
   const db = firebaseIn.firestore();
   return db.collection('notes');
}