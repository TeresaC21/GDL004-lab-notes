import React, { useEffect, useState } from 'react';
import firebaseIn from './firebase';

const UserAuthFB = () => {
    const [userCurrent, setUserCurrent] = useState(null);

    useEffect(() => {
        const unsuscribe = firebaseIn.auth().onAuthStateChanged(user =>{
            if (user) {
                setUserCurrent(user)
            } else {
                setUserCurrent(null)
            }
        });
        return () => unsuscribe();
    }, []);
    return userCurrent;

}

export default UserAuthFB;
