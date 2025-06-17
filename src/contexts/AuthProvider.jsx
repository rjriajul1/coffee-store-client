import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";




const AuthProvider = ({ children }) => {

  const [loading,setLoading] = useState(true);
  const [user,setUser] = useState(null)

    // Create user 
   const signUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
   }

  //  sign in 
  const signIn = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  // update user profile 

  const userProfileUpdate = (profileInfo) => {
    return updateProfile(auth.currentUser,profileInfo)
  }

  // sign out 
  const userSignOut = () => {
    setLoading(true)
    // localStorage.removeItem('token')
    return signOut(auth)
  }

  // observe always user
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      setUser(currenUser)
      setLoading(false)
      // if(currenUser?.email){
      //   axios.post("https://coffee-store-server-tau-two.vercel.app/jwt", {email:currenUser?.email})
      //   .then(res=>{
      //     localStorage.setItem('token',res.data)
      //   }).catch(error=> {
      //     console.log(error.message);
      //   })
        
      // }else{
      //   localStorage.removeItem('token')
      // }
    })
    return ()=> {
      unSubscribe()
    }
  },[])


    const userInfo = {
       signUp,
       signIn,
       userSignOut,
       user,
       loading,
       userProfileUpdate,
       setUser
     
    }
  return <AuthContext.Provider value={userInfo}>
    {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
