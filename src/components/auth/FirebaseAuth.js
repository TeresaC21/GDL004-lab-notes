 import React from 'react';
import firebaseIn from './firebase';


const loginFb = (email, password) => {
    return firebaseIn.auth().signInWithEmailAndPassword(email, password)
} 

