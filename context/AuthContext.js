"use client"
import { useContext , createContext ,useState, useEffect} from "react";
import { signInWithPopup,signOut,onAuthStateChanged,GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Auth/Firebase";


const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [user, setUser] = useState()


    const googleSignIn =()=>{
        const provider  = new GoogleAuthProvider()
            signInWithPopup(auth,provider)
    }

    const LogOut =() =>{
        signOut(auth)
    }

    useEffect(()=>{
        const unsSubscripbe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return () => unsSubscripbe()
    },[user])

    return (
        <AuthContext.Provider value={{user,googleSignIn,LogOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => { 
    return useContext(AuthContext)
}