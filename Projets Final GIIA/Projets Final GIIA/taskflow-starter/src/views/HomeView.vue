<script setup>
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { computed } from 'vue'

const authStore = useAuthStore()
const isAuthenticated = computed(() => authStore.user !== null)
</script>

<template>
  <div class="home-view">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
          Gérez vos projets avec <span class="highlight">TaskFlow</span>
        </h1>
        <p class="hero-subtitle">
          Une application de gestion de tâches simple et efficace avec un tableau Kanban intuitif
        </p>
        <div class="hero-actions">
          <RouterLink v-if="!isAuthenticated" to="/auth" class="btn btn-primary btn-lg">
            Commencer maintenant
          </RouterLink>
          <RouterLink v-else to="/dashboard" class="btn btn-primary btn-lg">
            Accéder au tableau de bord
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="features-section">
      <div class="container">
        <h2 class="section-title">Fonctionnalités principales</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📋</div>
            <h3>Gestion de projets</h3>
            <p>Créez et organisez vos projets avec des couleurs distinctives</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">✅</div>
            <h3>Tableau Kanban</h3>
            <p>Visualisez vos tâches en colonnes : À faire, En cours, Terminé</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>Temps réel</h3>
            <p>Synchronisation instantanée sur tous vos appareils</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>Sécurisé</h3>
            <p>Authentification Firebase avec email ou Google</p>
          </div>
        </div>
      </div>
    </div>

    <div class="cta-section">
      <div class="container">
        <h2>Prêt à booster votre productivité ?</h2>
        <RouterLink v-if="!isAuthenticated" to="/auth" class="btn btn-primary btn-lg">
          Créer un compte gratuitement
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-view {
  min-height: 100vh;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-content {
  max-width: 800px;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.2;
}

.highlight {
  color: #ffd700;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.features-section {
  padding: 4rem 2rem;
  background: #f8f9fa;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.feature-card p {
  color: #7f8c8d;
  line-height: 1.6;
}

.cta-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-primary:hover {
  background: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
}
</style>
