import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { auth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuthStore } from './stores/authStore'

let app

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App)
    const pinia = createPinia()
    app.use(pinia)
    app.use(router)
    app.mount('#app')
    
    // Initialize auth store
    const authStore = useAuthStore()
    authStore.initializeAuth()
  }
})