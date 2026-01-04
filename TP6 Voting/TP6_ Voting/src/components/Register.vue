<template>
  <div class="auth-container">
    <div class="auth-card card">
      <h1>Inscription</h1>
      <p>Créer un compte - ENSA Safi</p>
      
      <form @submit.prevent="handleRegister">
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
            placeholder="Au moins 6 caractères"
            required
            minlength="6"
          />
        </div>
        
        <div class="form-group">
          <label for="confirmPassword">Confirmer le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder="Confirmez votre mot de passe"
            required
          />
        </div>
        
        <div v-if="error" class="error">{{ error }}</div>
        <div v-if="success" class="success">{{ success }}</div>
        
        <button type="submit" class="btn-primary" :disabled="loading">
          {{ loading ? 'Inscription...' : "S'inscrire" }}
        </button>
      </form>
      
      <p class="switch-auth">
        Déjà un compte ? 
        <router-link to="/login">Se connecter</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default {
  name: 'Register',
  setup() {
    const router = useRouter()
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const error = ref(null)
    const success = ref(null)
    const loading = ref(false)

    const handleRegister = async () => {
      error.value = null
      success.value = null
      loading.value = true

      // Validation
      if (password.value !== confirmPassword.value) {
        error.value = 'Les mots de passe ne correspondent pas'
        loading.value = false
        return
      }

      if (password.value.length < 6) {
        error.value = 'Le mot de passe doit contenir au moins 6 caractères'
        loading.value = false
        return
      }

      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value)
        success.value = 'Compte créé avec succès ! Redirection...'
        setTimeout(() => {
          router.push('/events')
        }, 1500)
      } catch (err) {
        console.error('Erreur d\'inscription:', err)
        switch (err.code) {
          case 'auth/email-already-in-use':
            error.value = 'Cet email est déjà utilisé'
            break
          case 'auth/invalid-email':
            error.value = 'Email invalide'
            break
          case 'auth/operation-not-allowed':
            error.value = 'Inscription désactivée. Contactez l\'administrateur'
            break
          case 'auth/weak-password':
            error.value = 'Mot de passe trop faible'
            break
          default:
            error.value = 'Erreur d\'inscription. Veuillez réessayer.'
        }
      } finally {
        loading.value = false
      }
    }

    return {
      email,
      password,
      confirmPassword,
      error,
      success,
      loading,
      handleRegister
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
