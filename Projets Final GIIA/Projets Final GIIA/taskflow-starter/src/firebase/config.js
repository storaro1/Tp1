import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Étudiants, remplacez ceci par votre propre config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDwm7sz-YCA4grvPDm9_fQwIX7i4snUeg4",
  authDomain: "taskflow-4372d.firebaseapp.com",
  projectId: "taskflow-4372d",
  storageBucket: "taskflow-4372d.firebasestorage.app",
  messagingSenderId: "298947298772",
  appId: "1:298947298772:web:ef81552d19d66612dc8241",
  measurementId: "G-PYFSQX85ZY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };