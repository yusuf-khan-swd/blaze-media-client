import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authIsLoading, setAuthIsLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setAuthIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const updateUserInfo = (profile) => {
    setAuthIsLoading(true);
    return updateProfile(auth.currentUser, profile);
  }

  const login = (email, password) => {
    setAuthIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  };

  const googleLogin = () => {
    setAuthIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setAuthIsLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      else {
        setUser(null);
      }
      setAuthIsLoading(false);
    })

    return () => unSubscribe();
  }, []);


  const authInfo = { user, authIsLoading, googleLogin, createUser, updateUserInfo, login, logOut };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;