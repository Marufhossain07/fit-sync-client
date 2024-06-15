import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";
import { GoogleAuthProvider , GithubAuthProvider} from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);
    const axiosPublic = useAxiosPublic()
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider
    const githubProvider = new GithubAuthProvider
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
    const githubSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = async () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false)
                        }
                    })
            }
            else {
                localStorage.removeItem('access-token')
                setLoading(false)
            }
            
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
        loading,
        githubSignIn
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;