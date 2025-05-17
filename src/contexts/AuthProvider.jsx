import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {

    // Create user 
   const signUp = (email, password) => {
    
    return createUserWithEmailAndPassword(auth,email,password)
   }

    const userInfo = {
       signUp
    }
  return <AuthContext.Provider value={userInfo}>
    {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
