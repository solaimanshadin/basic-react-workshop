import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext()

export const AuthProvider = (props) => {
   const auth = Auth();
    return (
        <AuthContext.Provider value={{auth}}>
         {props.children} 
         </AuthContext.Provider>
    )

} 

export const useAuth = () => useContext(AuthContext)

const Auth = () => {
    const [user, setUser] = useState({});

    const login = () => {
        console.log("Login")
    }
    
    const signup = () => {
        console.log("signup")
    }

    return {
        login,
        user,
        signup
    }
}



 