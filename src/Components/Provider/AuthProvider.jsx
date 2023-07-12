import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../Register/Firebase/Firebase.init';
export const AuthContext=createContext(null)


const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [currentUser,setCurrentUser]=useState(null)



    useEffect(()=>{

        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              setUser(user)
              // ...
            } else {
              // User is signed out
              // ...
            }
          });

    },[])

    useEffect(()=>{

        fetch(`http://localhost:5000/currentuser/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setCurrentUser(data[0])
        })



    },[user])

    const value={
        username:'Abir',
        auth,
        user,
        setUser,
        currentUser,setCurrentUser
    }

    return (
     <AuthContext.Provider value={value}>
         {children}
     </AuthContext.Provider>
    );
};

export default AuthProvider;