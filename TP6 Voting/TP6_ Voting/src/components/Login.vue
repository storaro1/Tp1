<template>
  <div class="auth-container">
    <div class="auth-card card">
      <h1>Connexion</h1>
      <p>Application de Vote - ENSA Safi</p>
      
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email universitaire</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="votre.nom@etu.uca.ma"
            required
          />
        </div>
        
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>
        
        <div v-if="error" class="error">{{ error }}</div>
        
        <button type="submit" class="btn-primary" :disabled="loading">
          {{ loading ? 'Connexion...' : 'Se connecter' }}
        </button>
      </form>
      
      <p class="switch-auth">
        Pas encore de compte ? 
        <router-link to="/register">S'inscrire</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default {
  name: 'Login',
  setup() {
    const router = useRouter()
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const loading = ref(false)

    const handleLogin = async () => {
      error.value = null
      loading.value = true

      try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
        router.push('/events')
      } catch (err) {
        console.error('Erreur de connexion:', err)
        switch (err.code) {
          case 'auth/invalid-email':
            error.value = 'Email invalide'
            break
          case 'auth/user-disabled':
            error.value = 'Ce compte a été désactivé'
            break
          case 'auth/user-not-found':
            error.value = 'Aucun compte trouvé avec cet email'
            break
          case 'auth/wrong-password':
            error.value = 'Mot de passe incorrect'
            break
          case 'auth/invalid-credential':
            error.value = 'Email ou mot de passe incorrect'
            break
          default:
            error.value = 'Erreur de connexion. Veuillez réessayer.'
        }
      } finally {
        loading.value = false
      }
    }

    return {
      email,
      password,
      error,
      loading,
      handleLogin
    }
  }
}
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}

.auth-card {
  max-width: 400px;
  width: 100%;
}

h1 {
  margin-bottom: 0.5rem;
  color: #646cff;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

button[type="submit"] {
  width: 100%;
  margin-top: 1rem;
}

.switch-auth {
  text-align: center;
  margin-top: 1.5rem;
}

.switch-auth a {
  color: #646cff;
  text-decoration: none;
  font-weight: 500;
}

.switch-auth a:hover {
  text-decoration: underline;
}
</style>
