import { useEffect, useState } from 'react';
import auth from '../../firebase/firebase.init';
import AuthContext from './AuthContext';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [ loading, setLoading] = useState(true);

//create user
const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

//login user
const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

//logout 
const logout = () => {
    return signOut(auth)
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false);
        console.log("current user is",currentUser);
    })

    return () => {
        unsubscribe
    }
} , [])

const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    loginUser,
    logout
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;