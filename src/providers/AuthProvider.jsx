import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import app from '../config/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('current user', currentUser);
      setLoading(false);
      if (currentUser && currentUser.email) {
        const loggedUserEmail = {
          email: currentUser.email,
        };

        //now heading to jwt authorization
        fetch('https://car-doctor-server-three-kappa.vercel.app/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(loggedUserEmail),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('jwt response', data);
            //Warning: local storage is not the best way to store access token
            localStorage.setItem('car-access-token', data.token);
          })
          .catch((error) => console.log(error.message));
      } else {
        //when user will perform logout, currentUser will be null. So we need to remove token from localstorage
        localStorage.removeItem('car-access-token');
      }
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logout,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
