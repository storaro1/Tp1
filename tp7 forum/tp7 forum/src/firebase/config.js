import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC3ZfSGpVMqLP89bARg8mmwNFdxb3GNJDE",
  authDomain: "forum-947e2.firebaseapp.com",
  projectId: "forum-947e2",
  storageBucket: "forum-947e2.firebasestorage.app",
  messagingSenderId: "855554557056",
  appId: "1:855554557056:web:b35cf86531069ba3c2d265",
  measurementId: "G-NQTN2E9CGZ"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
