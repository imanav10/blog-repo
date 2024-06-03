import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
      };

    const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
    }

    
    const logOut = () => {
        signOut(auth)
    }
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log('User', currentUser)
      });
      return () => {
        unsubscribe();
      };
    }, []);

    return (
      <AuthContext.Provider value={{ googleSignIn, logOut, user, createUser, user, signIn}}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const UserAuth = () => {
    return useContext(AuthContext);
  };