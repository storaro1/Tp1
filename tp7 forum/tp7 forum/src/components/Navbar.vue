<template>
  <nav class="modern-navbar">
    <div class="navbar-container">
      <!-- Logo & Brand -->
      <router-link to="/home" class="navbar-brand">
        <div class="brand-logo">
          <i class="bi bi-chat-dots-fill"></i>
        </div>
        <span class="brand-name">Forum Hub</span>
      </router-link>

      <!-- Desktop Navigation -->
      <div class="navbar-menu" v-if="user">
        <router-link to="/home" class="nav-link">
          <i class="bi bi-house-door-fill"></i>
          <span>Accueil</span>
        </router-link>
        <router-link to="/create-discussion" class="nav-link">
          <i class="bi bi-plus-circle-fill"></i>
          <span>Nouvelle Discussion</span>
        </router-link>
      </div>

      <!-- User Menu -->
      <div class="navbar-actions" v-if="user">
        <div class="user-dropdown" @click="toggleDropdown">
          <div class="user-avatar">
            {{ user.displayName ? user.displayName.charAt(0).toUpperCase() : 'U' }}
          </div>
          <span class="user-name">{{ user.displayName }}</span>
          <i class="bi bi-chevron-down dropdown-icon" :class="{ 'rotate': isDropdownOpen }"></i>
          
          <!-- Dropdown Menu -->
          <transition name="dropdown-fade">
            <div class="dropdown-menu" v-if="isDropdownOpen">
              <router-link to="/profile" class="dropdown-item" @click="closeDropdown">
                <i class="bi bi-person"></i>
                <span>Mon Profil</span>
              </router-link>
              <router-link to="/moderation" class="dropdown-item" v-if="isModerator" @click="closeDropdown">
                <i class="bi bi-shield-check"></i>
                <span>Modération</span>
              </router-link>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item logout" @click.prevent="handleLogout">
                <i class="bi bi-box-arrow-right"></i>
                <span>Déconnexion</span>
              </a>
            </div>
          </transition>
        </div>
      </div>

      <!-- Mobile Menu Toggle -->
      <button class="mobile-toggle" @click="toggleMobileMenu" v-if="user">
        <i class="bi" :class="isMobileMenuOpen ? 'bi-x' : 'bi-list'"></i>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <transition name="mobile-slide">
      <div class="mobile-menu" v-if="user && isMobileMenuOpen">
        <router-link to="/home" class="mobile-link" @click="closeMobileMenu">
          <i class="bi bi-house-door-fill"></i>
          <span>Accueil</span>
        </router-link>
        <router-link to="/create-discussion" class="mobile-link" @click="closeMobileMenu">
          <i class="bi bi-plus-circle-fill"></i>
          <span>Nouvelle Discussion</span>
        </router-link>
        <router-link to="/profile" class="mobile-link" @click="closeMobileMenu">
          <i class="bi bi-person"></i>
          <span>Mon Profil</span>
        </router-link>
        <router-link to="/moderation" class="mobile-link" v-if="isModerator" @click="closeMobileMenu">
          <i class="bi bi-shield-check"></i>
          <span>Modération</span>
        </router-link>
        <div class="mobile-divider"></div>
        <a href="#" class="mobile-link logout" @click.prevent="handleLogout">
          <i class="bi bi-box-arrow-right"></i>
          <span>Déconnexion</span>
        </a>
      </div>
    </transition>
  </nav>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import getUser from '../composables/getUser'
import useLogout from '../composables/useLogout'

export default {
  name: 'Navbar',
  setup() {
    const { user } = getUser()
    const { logout } = useLogout()
    const router = useRouter()
    
    const isDropdownOpen = ref(false)
    const isMobileMenuOpen = ref(false)

    const isModerator = computed(() => {
      return user.value?.isModerator || false
    })

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value
    }

    const closeDropdown = () => {
      isDropdownOpen.value = false
    }

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false
    }

    const handleLogout = async () => {
      await logout()
      closeDropdown()
      closeMobileMenu()
      router.push({ name: 'Welcome' })
    }

    // Close dropdown when clicking outside
    if (typeof window !== 'undefined') {
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.user-dropdown')) {
          isDropdownOpen.value = false
        }
      })
    }

    return { 
      user, 
      handleLogout, 
      isModerator,
      isDropdownOpen,
      isMobileMenuOpen,
      toggleDropdown,
      closeDropdown,
      toggleMobileMenu,
      closeMobileMenu
    }
  }
}
</script>

<style scoped>
.modern-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e7eb;
  z-index: 1000;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

/* Brand */
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.brand-logo {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
  transition: all 0.3s ease;
}

.navbar-brand:hover .brand-logo {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}

.brand-name {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.5px;
}

/* Desktop Menu */
.navbar-menu {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 10px;
  color: #6b7280;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
}

.nav-link i {
  font-size: 18px;
}

.nav-link:hover {
  color: #6366f1;
  background: #f3f4f6;
}

.nav-link.router-link-active {
  color: #6366f1;
  background: #eef2ff;
}

.nav-link.router-link-active::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 16px;
  right: 16px;
  height: 2px;
  background: #6366f1;
  border-radius: 2px;
}

/* User Dropdown */
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-dropdown {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #f9fafb;
}

.user-dropdown:hover {
  background: #f3f4f6;
}

.user-avatar {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
}

.user-name {
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dropdown-icon {
  font-size: 12px;
  color: #6b7280;
  transition: transform 0.3s ease;
}

.dropdown-icon.rotate {
  transform: rotate(180deg);
}

/* Dropdown Menu */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 220px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  padding: 8px;
  border: 1px solid #e5e7eb;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 8px;
  color: #1a1a1a;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
}

.dropdown-item i {
  font-size: 18px;
  color: #6b7280;
  width: 20px;
}

.dropdown-item:hover {
  background: #f3f4f6;
  color: #6366f1;
}

.dropdown-item:hover i {
  color: #6366f1;
}

.dropdown-item.logout {
  color: #dc2626;
}

.dropdown-item.logout:hover {
  background: #fef2f2;
  color: #dc2626;
}

.dropdown-item.logout i {
  color: #dc2626;
}

.dropdown-divider {
  height: 1px;
  background: #e5e7eb;
  margin: 8px 0;
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #f3f4f6;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mobile-toggle i {
  font-size: 24px;
  color: #1a1a1a;
}

.mobile-toggle:hover {
  background: #e5e7eb;
}

/* Mobile Menu */
.mobile-menu {
  background: white;
  border-top: 1px solid #e5e7eb;
  padding: 16px;
}

.mobile-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 10px;
  color: #1a1a1a;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  margin-bottom: 4px;
}

.mobile-link i {
  font-size: 20px;
  color: #6b7280;
  width: 24px;
}

.mobile-link:hover {
  background: #f3f4f6;
  color: #6366f1;
}

.mobile-link.router-link-active {
  background: #eef2ff;
  color: #6366f1;
}

.mobile-link.router-link-active i {
  color: #6366f1;
}

.mobile-link.logout {
  color: #dc2626;
}

.mobile-link.logout i {
  color: #dc2626;
}

.mobile-link.logout:hover {
  background: #fef2f2;
}

.mobile-divider {
  height: 1px;
  background: #e5e7eb;
  margin: 12px 0;
}

/* Animations */
.dropdown-fade-enter-active, .dropdown-fade-leave-active {
  transition: all 0.2s ease;
}

.dropdown-fade-enter-from, .dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.mobile-slide-enter-active, .mobile-slide-leave-active {
  transition: all 0.3s ease;
}

.mobile-slide-enter-from, .mobile-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 768px) {
  .navbar-container {
    padding: 0 16px;
    height: 64px;
    gap: 16px;
  }

  .brand-logo {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }

  .brand-name {
    font-size: 18px;
  }

  .navbar-menu {
    display: none;
  }

  .user-name {
    display: none;
  }

  .navbar-actions {
    margin-left: auto;
  }

  .mobile-toggle {
    display: flex;
  }

  .user-dropdown {
    padding: 8px;
  }
}

/* Offset for fixed navbar */
body {
  padding-top: 72px;
}
</style>
