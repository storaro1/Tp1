<script setup>
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const authStore = useAuthStore()
const router = useRouter()
const user = computed(() => authStore.user)

const handleLogout = async () => {
  const result = await authStore.logout()
  if (result.success) {
    router.push('/')
  }
}

const getUserInitials = () => {
  if (!user.value?.email) return '?'
  return user.value.email.charAt(0).toUpperCase()
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <router-link to="/" class="brand-link">
          <span class="brand-icon">📋</span>
          <span class="brand-text">TaskFlow</span>
        </router-link>
      </div>
      
      <div class="navbar-menu">
        <template v-if="user">
          <router-link to="/dashboard" class="nav-link">
            Mes Projets
          </router-link>
          <div class="user-menu">
            <div class="user-avatar" :title="user.email">
              {{ getUserInitials() }}
            </div>
            <div class="user-info">
              <span class="user-email">{{ user.email }}</span>
              <button @click="handleLogout" class="btn-logout">
                Déconnexion
              </button>
            </div>
          </div>
        </template>
        <template v-else>
          <router-link to="/auth" class="btn btn-primary">
            Se connecter
          </router-link>
        </template>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #2c3e50;
  font-weight: 700;
  font-size: 1.25rem;
  transition: opacity 0.2s;
}

.brand-link:hover {
  opacity: 0.8;
}

.brand-icon {
  font-size: 1.5rem;
}

.brand-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #3498db;
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
}

.user-email {
  color: #2c3e50;
  font-size: 0.875rem;
  font-weight: 500;
}

.btn-logout {
  background: none;
  border: none;
  color: #e74c3c;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0;
  font-weight: 500;
  transition: opacity 0.2s;
}

.btn-logout:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.btn {
  padding: 0.5rem 1.25rem;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-primary:hover {
  background: #2980b9;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .user-info {
    display: none;
  }
  
  .brand-text {
    display: none;
  }
  
  .nav-link {
    font-size: 0.875rem;
  }
}
</style>