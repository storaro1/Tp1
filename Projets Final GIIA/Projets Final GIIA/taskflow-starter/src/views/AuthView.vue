<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const authStore = useAuthStore()
const router = useRouter()

const isLogin = ref(true)
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const loading = ref(false)

const toggleMode = () => {
  isLogin.value = !isLogin.value
  error.value = ''
  email.value = ''
  password.value = ''
  confirmPassword.value = ''
}

const validateForm = () => {
  if (!email.value || !password.value) {
    error.value = 'Tous les champs sont requis'
    return false
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value)) {
    error.value = 'Email invalide'
    return false
  }
  
  if (password.value.length < 6) {
    error.value = 'Le mot de passe doit contenir au moins 6 caractères'
    return false
  }
  
  if (!isLogin.value && password.value !== confirmPassword.value) {
    error.value = 'Les mots de passe ne correspondent pas'
    return false
  }
  
  return true
}

const handleSubmit = async () => {
  if (!validateForm()) return
  
  loading.value = true
  error.value = ''
  
  try {
    let result
    if (isLogin.value) {
      result = await authStore.login(email.value, password.value)
    } else {
      result = await authStore.register(email.value, password.value)
    }
    
    if (result.success) {
      router.push('/dashboard')
    } else {
      error.value = result.error || 'Une erreur est survenue'
    }
  } catch (err) {
    error.value = err.message || 'Une erreur est survenue'
  } finally {
    loading.value = false
  }
}

const handleGoogleLogin = async () => {
  loading.value = true
  error.value = ''
  
  try {
    const result = await authStore.loginWithGoogle()
    if (result.success) {
      router.push('/dashboard')
    } else {
      error.value = result.error || 'Erreur lors de la connexion avec Google'
    }
  } catch (err) {
    error.value = err.message || 'Erreur lors de la connexion avec Google'
  } finally {
    loading.value = false
  }
}

const buttonText = computed(() => {
  if (loading.value) return 'Chargement...'
  return isLogin.value ? 'Se connecter' : "S'inscrire"
})
</script>

<template>
  <div class="auth-view">
    <div class="auth-container">
      <div class="auth-card">
        <div class="auth-header">
          <h2>{{ isLogin ? 'Connexion' : 'Inscription' }}</h2>
          <p>{{ isLogin ? 'Bienvenue sur TaskFlow' : 'Créez votre compte TaskFlow' }}</p>
        </div>

        <form @submit.prevent="handleSubmit" class="auth-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="votre.email@exemple.com"
              required
              :disabled="loading"
            />
          </div>

          <div class="form-group">
            <label for="password">Mot de passe</label>
            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="Minimum 6 caractères"
              required
              :disabled="loading"
            />
          </div>

          <div v-if="!isLogin" class="form-group">
            <label for="confirmPassword">Confirmer le mot de passe</label>
            <input
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              placeholder="Répétez votre mot de passe"
              required
              :disabled="loading"
            />
          </div>

          <p v-if="error" class="error-message">{{ error }}</p>

          <button type="submit" class="btn btn-primary btn-block" :disabled="loading">
            {{ buttonText }}
          </button>
        </form>

        <div class="divider">
          <span>OU</span>
        </div>

        <button @click="handleGoogleLogin" class="btn btn-google btn-block" :disabled="loading">
          <svg class="google-icon" viewBox="0 0 24 24" width="20" height="20">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continuer avec Google
        </button>

        <div class="auth-footer">
          <p>
            {{ isLogin ? "Vous n'avez pas de compte ?" : 'Vous avez déjà un compte ?' }}
            <button @click="toggleMode" class="link-button" :disabled="loading">
              {{ isLogin ? "S'inscrire" : 'Se connecter' }}
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-view {
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 1rem;
}

.auth-container {
  width: 100%;
  max-width: 450px;
}

.auth-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 2.5rem;
}

.auth-header {
  text-align: center;
  margin-bottom: 2rem;
}

.auth-header h2 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.auth-header p {
  color: #7f8c8d;
  font-size: 0.95rem;
}

.auth-form {
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 500;
  font-size: 0.9rem;
}

.form-group input {
  width: 100%;
  padding: 0.875rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: #3498db;
}

.form-group input:disabled {
  background: #f5f5f5;
  cursor: not-allowed;
}

.error-message {
  background: #fee;
  color: #e74c3c;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  text-align: center;
}

.btn {
  padding: 0.875rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.4);
}

.btn-google {
  background: white;
  color: #444;
  border: 2px solid #ddd;
}

.btn-google:hover:not(:disabled) {
  background: #f8f9fa;
  border-color: #ccc;
}

.btn-block {
  width: 100%;
}

.google-icon {
  flex-shrink: 0;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1.5rem 0;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #ddd;
}

.divider span {
  padding: 0 1rem;
  color: #7f8c8d;
  font-size: 0.875rem;
  font-weight: 500;
}

.auth-footer {
  text-align: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #ecf0f1;
}

.auth-footer p {
  color: #7f8c8d;
  font-size: 0.9rem;
}

.link-button {
  background: none;
  border: none;
  color: #3498db;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  margin-left: 0.25rem;
  transition: color 0.2s;
}

.link-button:hover:not(:disabled) {
  color: #2980b9;
  text-decoration: underline;
}

.link-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 480px) {
  .auth-card {
    padding: 1.5rem;
  }
  
  .auth-header h2 {
    font-size: 1.5rem;
  }
}
</style>
