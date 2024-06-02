import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = async () =>{
        return signOut(auth)
     }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])
    const AuthInfo = {
        createUser,
        signIn,
        googleSignIn,
        user,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;