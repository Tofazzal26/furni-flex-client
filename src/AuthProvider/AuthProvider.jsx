import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "./../../Firebase/firebase.config";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      const logged = currentUser?.email || user?.email;
      setUser(currentUser);

      if (currentUser) {
        axios
          .post(
            "http://localhost:4000/jwt",
            { logged },
            { withCredentials: true }
          )
          .then(async () => {
            const response = await axios.get(
              `http://localhost:4000/cartCount/${logged}`,
              { withCredentials: true }
            );
            setCartCount(response.data.count);
          });
      } else {
        axios
          .post(
            "http://localhost:4000/logout",
            { logged },
            { withCredentials: true }
          )
          .then((res) => {});
      }

      console.log(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubProvider = new GithubAuthProvider();
  const gitHubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const userInfo = {
    user,
    setUser,
    createUser,
    logInEmailPassword,
    logOut,
    updateUserProfile,
    loading,
    setLoading,
    googleLogin,
    setCartCount,
    cartCount,
    gitHubLogin,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
