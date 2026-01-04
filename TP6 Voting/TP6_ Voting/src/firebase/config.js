import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Remplacez avec vos propres identifiants Firebase
// Obtenez-les depuis: https://console.firebase.google.com/
const firebaseConfig = {
  apiKey: "AIzaSyB2FPb-D6qkgVRwBAf6Lg6LXsxd6wiMs74",
  authDomain: "tp66-7a51e.firebaseapp.com",
  projectId: "tp66-7a51e",
  storageBucket: "tp66-7a51e.firebasestorage.app",
  messagingSenderId: "880414079014",
  appId: "1:880414079014:web:7315310725a4ef8aab8ee7",
  measurementId: "G-077DFWWD01"
}

// Initialiser Firebase
const app = initializeApp(firebaseConfig)

// Initialiser les services
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
