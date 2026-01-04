import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth } from '@/firebase/config'
import { 
  signInWithEmailAndPassword, 
  signOut, 
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from 'firebase/auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const loading = ref(true)
  const error = ref(null)

  // Initialize auth state listener
  const initializeAuth = () => {
    onAuthStateChanged(auth, (currentUser) => {
      user.value = currentUser
      loading.value = false
    })
  }

  // Login with email and password
  const login = async (email, password) => {
    try {
      error.value = null
      const res = await signInWithEmailAndPassword(auth, email, password)
      user.value = res.user
      return { success: true }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    }
  }

  // Register with email and password
  const register = async (email, password) => {
    try {
      error.value = null
      const res = await createUserWithEmailAndPassword(auth, email, password)
      user.value = res.user
      return { success: true }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    }
  }

  // Login with Google
  const loginWithGoogle = async () => {
    try {
      error.value = null
      const provider = new GoogleAuthProvider()
      const res = await signInWithPopup(auth, provider)
      user.value = res.user
      return { success: true }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    }
  }

  // Logout
  const logout = async () => {
    try {
      await signOut(auth)
      user.value = null
      return { success: true }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    }
  }

  return { 
    user, 
    loading, 
    error, 
    initializeAuth,
    login, 
    register,
    loginWithGoogle,
    logout 
  }
})