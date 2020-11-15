import firebase from "firebase/app";
import "firebase/auth";
import React, { createContext, useContext, useState } from 'react';
import { firebaseConfig } from '../firebase.config.js';



const AuthContext = createContext();


if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = (props) => {
    const auth = Auth();
    return (
        <AuthContext.Provider value={auth}>
            {props.children}
        </AuthContext.Provider>
    )
}

const Auth = () => {
    const [user, setUser] = useState({})

    
    const login = (email, password) => {

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            setUser({email: res.user.email})
        })
        .catch(err => {
                console.log(err)
        })
       
    }
    const signup = (email, password) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            setUser({email: res.user.email})
        })
        .catch(err => {
            console.log(err)
        })
       
    }

    return {
        user,
        signup,
        login
    }
}

