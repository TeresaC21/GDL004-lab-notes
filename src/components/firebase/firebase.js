import firebase from "firebase";
import "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyBmPULFW7W94gO4KjBRCfguxF_AkyW2nKk",
    authDomain: "lab-note-ts.firebaseapp.com",
    databaseURL: "https://lab-note-ts.firebaseio.com",
    projectId: "lab-note-ts",
    storageBucket: "lab-note-ts.appspot.com",
    messagingSenderId: "72109335592",
    appId: "1:72109335592:web:98bfc61f4fd58db4fc411d"
  };
  // Initialize Firebase
  const firebaseIn = firebase.initializeApp(firebaseConfig);
  
export default firebaseIn;