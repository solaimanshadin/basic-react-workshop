import firebase from "firebase/app";
import "firebase/auth";
import React, { useRef, useState } from 'react';
import { firebaseConfig } from '../firebase.config.js';

if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);

}



const Signup = () => {
    const [user, setUser] = useState({})
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();

    const signUp = (e) => {
        e.preventDefault();
        const emailValue = email.current.value
        const passwordValue = password.current.value
        const confirmPasswordValue = confirmPassword.current.value
        

        if(passwordValue === confirmPasswordValue) {
            firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
            .then(res => {
                setUser({email: res.user.email})
            })
            .catch(err => {
                console.log(err)
            })
        }else{
            alert("Password and Confirm password does not match!")
        }
        
    }
    
    return (
        <form className="container col-md-4 mx-auto border p-5 my-5">
            {user.email}
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input  ref={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input ref={password} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Confirm Password</label>
                <input ref={confirmPassword} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            
            <button onClick={signUp} type="submit" className="btn btn-primary">Sign up</button>
        </form>
    );
};

export default Signup;