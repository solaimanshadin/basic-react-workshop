import firebase from "firebase/app";
import "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from 'react';
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
            storeToken()


            // 
            sessionStorage.setItem("user", res.user.email)
            setUser({email: res.user.email});
            // window.history.go(-2)
        })
        .catch(err => {
                console.log(err)
        })
       
    }

    useEffect(() => {
        const user = sessionStorage.getItem("user");

        setUser({...user, email: user})
        const currentUser = firebase.auth().currentUser;
        console.log("currentUser", currentUser)
    }, [])

    const signup = (email, password) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            setUser({email: res.user.email})
        })
        .catch(err => {
            console.log(err)
        })
       
    }

    const storeToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem("idToken", idToken)
        }).catch(function(error) {
            console.log("error", error)
        });
    }

    return {
        user,
        signup,
        login
    }
}

