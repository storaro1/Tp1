<template>
  <div class="welcome-page">
    <!-- Animated Background -->
    <div class="bg-animation">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>

    <div class="welcome-container">
      <div class="welcome-content">
        <!-- Logo & Branding -->
        <div class="brand-section">
          <div class="logo-circle">
            <i class="bi bi-chat-heart-fill"></i>
          </div>
          <h1 class="brand-title">Forum Hub</h1>
          <p class="brand-subtitle">Connectez-vous avec des milliers de passionnés</p>
        </div>

        <!-- Auth Card -->
        <div class="auth-card">
          <div class="tab-selector">
            <button 
              @click="showLogin = true" 
              :class="['tab-btn', { active: showLogin }]"
            >
              Connexion
            </button>
            <button 
              @click="showLogin = false" 
              :class="['tab-btn', { active: !showLogin }]"
            >
              Inscription
            </button>
            <div class="tab-indicator" :style="{ transform: showLogin ? 'translateX(0)' : 'translateX(100%)' }"></div>
          </div>

          <div class="form-container">
            <transition name="slide-fade" mode="out-in">
              <div v-if="showLogin" key="login">
                <LoginForm @login="enterHome" />
              </div>
              <div v-else key="signup">
                <SignupForm @signup="enterHome" />
              </div>
            </transition>
          </div>
        </div>

        <!-- Features -->
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">
              <i class="bi bi-lightning-charge-fill"></i>
            </div>
            <h3>Instantané</h3>
            <p>Réponses en temps réel</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">
              <i class="bi bi-shield-fill-check"></i>
            </div>
            <h3>Sécurisé</h3>
            <p>Vos données protégées</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">
              <i class="bi bi-people-fill"></i>
            </div>
            <h3>Communauté</h3>
            <p>Membres actifs 24/7</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true)
    const router = useRouter()

    const enterHome = () => {
      router.push({ name: 'Home' })
    }

    return { showLogin, enterHome }
  }
}
</script>

<style scoped>
.welcome-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  padding: 20px;
}

/* Animated Background */
.bg-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  animation: float 20s infinite;
}

.shape-1 {
  width: 600px;
  height: 600px;
  top: -200px;
  right: -200px;
  animation-delay: 0s;
}

.shape-2 {
  width: 400px;
  height: 400px;
  bottom: -150px;
  left: -150px;
  animation-delay: 7s;
}

.shape-3 {
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  animation-delay: 14s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.welcome-container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 480px;
}

.welcome-content {
  animation: fadeInUp 0.8s ease;
}

/* Brand Section */
.brand-section {
  text-align: center;
  margin-bottom: 40px;
}

.logo-circle {
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  animation: pulse 2s ease infinite;
}

.logo-circle i {
  font-size: 40px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.brand-title {
  font-size: 48px;
  font-weight: 800;
  color: white;
  margin-bottom: 12px;
  letter-spacing: -1px;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.brand-subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
}

/* Auth Card */
.auth-card {
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  margin-bottom: 32px;
}

.tab-selector {
  display: flex;
  background: #f9fafb;
  padding: 8px;
  gap: 8px;
  position: relative;
}

.tab-btn {
  flex: 1;
  padding: 12px 24px;
  border: none;
  background: transparent;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.tab-btn.active {
  color: #1a1a1a;
}

.tab-indicator {
  position: absolute;
  top: 8px;
  left: 8px;
  width: calc(50% - 12px);
  height: calc(100% - 16px);
  background: white;
  border-radius: 12px;
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.form-container {
  padding: 40px 32px;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.feature-item {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 24px 16px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-4px);
}

.feature-icon {
  width: 48px;
  height: 48px;
  background: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
}

.feature-icon i {
  font-size: 24px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.feature-item h3 {
  font-size: 16px;
  font-weight: 700;
  color: white;
  margin-bottom: 4px;
}

.feature-item p {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

/* Transitions */
.slide-fade-enter-active {
  transition: all 0.4s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .brand-title {
    font-size: 36px;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .form-container {
    padding: 32px 24px;
  }
}
</style>