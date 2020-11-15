import firebase from "firebase/app";
import "firebase/auth";
import React, { useRef } from 'react';
import { useAuth } from "../custom_hook/useAuth.js";
import { firebaseConfig } from '../firebase.config.js';

if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);

}

const Login = () => {
    const email = useRef();
    const password = useRef();
    const auth = useAuth();
    

    const login = (e) => {
        e.preventDefault();

        console.log("We want to login")
        const emailValue = email.current.value
        const passwordValue = password.current.value
        
        if(emailValue && passwordValue) {
            auth.login(emailValue, passwordValue)
        }else{
            alert("Email and password is required!")
        }
        
    }
    return (
        <form className="container col-md-4 mx-auto border p-5 my-5">
            <div className="form-group">
                {auth.user.email}
                <label for="exampleInputEmail1">Email address</label>
                <input  ref={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input ref={password} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
           
            
            <button  onClick={login} type="submit" className="btn btn-primary">login</button>
        </form>
    );
};

export default Login;