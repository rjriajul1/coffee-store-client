import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";



const AuthProvider = ({ children }) => {

    // Create user 
   const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth,email,password)
   }

  //  sign in 
  const signIn = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

  // delete user

  // const removeUser = () => {
  //   return deleteUser(auth.currentUser)
  // }

    const userInfo = {
       signUp,
       signIn,
      //  removeUser
    }
  return <AuthContext.Provider value={userInfo}>
    {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
