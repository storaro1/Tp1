<template>
  <form @submit.prevent="handleLogin" class="modern-form">
    <div class="form-group">
      <label for="email">Email</label>
      <div class="input-wrapper">
        <i class="bi bi-envelope"></i>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="votre@email.com"
          required
          class="modern-input"
        />
      </div>
    </div>

    <div class="form-group">
      <label for="password">Mot de passe</label>
      <div class="input-wrapper">
        <i class="bi bi-lock"></i>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="••••••••"
          required
          class="modern-input"
        />
      </div>
    </div>

    <div v-if="error" class="error-message">
      <i class="bi bi-exclamation-circle"></i>
      {{ error }}
    </div>

    <button 
      type="submit" 
      class="modern-btn primary"
      :disabled="isPending"
    >
      <span v-if="!isPending">
        Se connecter
        <i class="bi bi-arrow-right"></i>
      </span>
      <span v-else>
        <span class="spinner"></span>
        Connexion...
      </span>
    </button>
  </form>
</template>

<script setup>
import useLogin from '@/composables/useLogin';
import { ref } from 'vue';

const email = ref('')
const password = ref('')
const isPending = ref(false)
const {error, login} = useLogin()

const emit = defineEmits(['login']);

const handleLogin = async () => {
  isPending.value = true
  const response = await login(email.value, password.value)
  if(!error.value){
    emit('login')
  }
  isPending.value = false
}
</script>

<style scoped>
.modern-form {
  width: 100%;
}

.form-group {
  margin-bottom: 24px;
}

label {
  display: block;
  font-weight: 600;
  font-size: 14px;
  color: #1a1a1a;
  margin-bottom: 8px;
  letter-spacing: 0.3px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-wrapper i {
  position: absolute;
  left: 16px;
  color: #6b7280;
  font-size: 18px;
  z-index: 1;
}

.modern-input {
  width: 100%;
  padding: 14px 16px 14px 48px;
  font-size: 15px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  background: #ffffff;
  transition: all 0.3s ease;
  font-family: inherit;
  color: #1a1a1a;
}

.modern-input::placeholder {
  color: #9ca3af;
}

.modern-input:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
}

.error-message {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 10px;
  color: #dc2626;
  font-size: 14px;
  margin-bottom: 24px;
  animation: shake 0.3s ease;
}

.error-message i {
  font-size: 18px;
}

.modern-btn {
  width: 100%;
  padding: 14px 24px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: inherit;
  letter-spacing: 0.3px;
}

.modern-btn.primary {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}

.modern-btn.primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}

.modern-btn.primary:active:not(:disabled) {
  transform: translateY(0);
}

.modern-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
}
</style>