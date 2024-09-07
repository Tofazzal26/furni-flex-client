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
  const [cartCount, setCartCount] = useState();
  const [cartItem, setCartItem] = useState([]);

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

  const { refetch: cartRefetch, data: cartProduct = [] } = useQuery({
    queryKey: ["cartPrd", !user?.email],
    queryFn: async () => {
      const cartResp = await axios.get(
        `http://localhost:4000/cartCount/${user?.email}`,
        { withCredentials: true }
      );
      setCartCount(cartResp.data);
      return cartResp.data;
    },
  });

  useEffect(() => {
    const loader = async () => {
      try {
        const res = await fetch(
          `http://localhost:4000/singleUser/${user?.email}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setCartItem(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (user?.email) {
      loader();
    }
  }, [user?.email]);

  const handleUpdateQuantity = async (prdID, newQuantity) => {
    let updatedPrdPrice;

    let updated = cartItem.map((item) => {
      if (item._id === prdID) {
        if (newQuantity > 0) {
          const pricePerPrd = parseInt(item.disPrice) / parseInt(item.quantity);
          updatedPrdPrice = parseInt(pricePerPrd) * parseInt(newQuantity);
          return { ...item, quantity: newQuantity, disPrice: updatedPrdPrice };
        }
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    const prd = {
      quantity: newQuantity,
      disPrice: updatedPrdPrice
        ? updatedPrdPrice
        : cartItem.find((item) => item._id === prdID).disPrice,
    };

    await axios.patch(
      `http://localhost:4000/quantityUpdate/${prdID}`,
      { prd },
      { withCredentials: true }
    );

    setCartItem(updated);
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
    handleUpdateQuantity,
    cartItem,
    cartCount,
    cartRefetch,
    gitHubLogin,
    cartProduct,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
