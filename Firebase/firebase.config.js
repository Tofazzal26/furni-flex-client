import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAT0LtznOMAn4kJD7sW-Ii1t8U9c0L0pzQ",
  authDomain: "furni-flex-7cb62.firebaseapp.com",
  projectId: "furni-flex-7cb62",
  storageBucket: "furni-flex-7cb62.appspot.com",
  messagingSenderId: "866044388509",
  appId: "1:866044388509:web:aa7d16a60fa402ccaf2074",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
