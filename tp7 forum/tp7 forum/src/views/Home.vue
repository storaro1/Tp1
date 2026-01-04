<template>
  <div class="home">
    <Navbar />
    
    <div class="home-container">
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-content">
          <h1>Bienvenue sur Forum Hub</h1>
          <p>Rejoignez une communauté passionnée. Discutez, partagez et apprenez ensemble.</p>
          <router-link to="/create-discussion" class="hero-btn">
            <i class="bi bi-plus-circle-fill"></i>
            Créer une Discussion
          </router-link>
        </div>
        <div class="hero-decoration">
          <div class="hero-circle circle-1"></div>
          <div class="hero-circle circle-2"></div>
          <div class="hero-circle circle-3"></div>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="search-section">
        <div class="search-container">
          <i class="bi bi-search search-icon"></i>
          <input 
            type="text" 
            v-model="searchQuery"
            @input="handleSearch"
            placeholder="Rechercher des discussions..."
            class="search-input"
          />
          <button class="search-btn" v-if="searchQuery" @click="searchQuery = ''">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </div>

      <!-- Categories -->
      <div class="categories-section">
        <div class="section-header">
          <h2>Catégories</h2>
          <p>Explorez les différentes thématiques</p>
        </div>
        <div class="categories-grid">
          <div 
            v-for="category in categories" 
            :key="category.id"
            @click="filterByCategory(category.id)"
            class="category-card"
            :class="{ active: selectedCategory === category.id }"
          >
            <div class="category-icon" :style="{ background: category.color }">
              <i :class="category.icon"></i>
            </div>
            <h3>{{ category.name }}</h3>
            <p>{{ category.description }}</p>
            <div class="category-count">
              <i class="bi bi-chat-dots"></i>
              {{ getCategoryCount(category.id) }} discussions
            </div>
          </div>
        </div>
      </div>

      <!-- Filter and Sort -->
      <div class="controls-section">
        <div class="sort-buttons">
          <button 
            class="sort-btn"
            :class="{ active: sortBy === 'recent' }"
            @click="sortBy = 'recent'"
          >
            <i class="bi bi-clock-fill"></i>
            Récentes
          </button>
          <button 
            class="sort-btn"
            :class="{ active: sortBy === 'popular' }"
            @click="sortBy = 'popular'"
          >
            <i class="bi bi-fire"></i>
            Populaires
          </button>
          <button 
            class="sort-btn"
            :class="{ active: sortBy === 'trending' }"
            @click="sortBy = 'trending'"
          >
            <i class="bi bi-graph-up-arrow"></i>
            Tendances
          </button>
        </div>
      </div>

      <!-- Discussions List -->
      <div class="discussions-section">
        <div v-if="isPending" class="loading-state">
          <div class="spinner"></div>
          <p>Chargement des discussions...</p>
        </div>

        <div v-else-if="error" class="error-message">
          <i class="bi bi-exclamation-triangle-fill"></i>
          <span>{{ error }}</span>
        </div>

        <div v-else-if="filteredDiscussions && filteredDiscussions.length" class="discussions-list">
          <DiscussionCard 
            v-for="discussion in filteredDiscussions" 
            :key="discussion.id"
            :discussion="discussion"
          />
        </div>

        <div v-else class="empty-state">
          <i class="bi bi-chat-text"></i>
          <h3>Aucune discussion trouvée</h3>
          <p>Soyez le premier à lancer la conversation!</p>
          <router-link to="/create-discussion" class="modern-btn-primary">
            <i class="bi bi-plus-circle-fill"></i>
            Créer une Discussion
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import Navbar from '../components/Navbar.vue'
import getCollection from '../composables/getCollection'
import DiscussionCard from '../components/DiscussionCard.vue'

export default {
  name: 'Home',
  components: { Navbar, DiscussionCard },
  setup() {
    const { documents: discussions, error, isPending } = getCollection('discussions')
    
    const searchQuery = ref('')
    const selectedCategory = ref(null)
    const sortBy = ref('recent')

    const categories = ref([
      { 
        id: 'general', 
        name: 'Général', 
        icon: 'bi bi-chat-dots-fill', 
        description: 'Discussions générales',
        color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      },
      { 
        id: 'tech', 
        name: 'Technologie', 
        icon: 'bi bi-laptop', 
        description: 'Programmation et tech',
        color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
      },
      { 
        id: 'support', 
        name: 'Support', 
        icon: 'bi bi-question-circle-fill', 
        description: 'Questions et aide',
        color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
      },
      { 
        id: 'feedback', 
        name: 'Feedback', 
        icon: 'bi bi-star-fill', 
        description: 'Suggestions et retours',
        color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
      },
      { 
        id: 'announcements', 
        name: 'Annonces', 
        icon: 'bi bi-megaphone-fill', 
        description: 'Annonces importantes',
        color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
      },
      { 
        id: 'other', 
        name: 'Autres', 
        icon: 'bi bi-three-dots', 
        description: 'Autres sujets',
        color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
      }
    ])

    const getCategoryCount = (categoryId) => {
      if (!discussions.value) return 0
      return discussions.value.filter(d => d.category === categoryId).length
    }

    const filteredDiscussions = computed(() => {
      if (!discussions.value) return []
      
      let filtered = [...discussions.value]

      // Filter by category
      if (selectedCategory.value) {
        filtered = filtered.filter(d => d.category === selectedCategory.value)
      }

      // Filter by search query
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(d => 
          d.title.toLowerCase().includes(query) || 
          d.content.toLowerCase().includes(query)
        )
      }

      // Sort
      if (sortBy.value === 'recent') {
        filtered.sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds)
      } else if (sortBy.value === 'popular') {
        filtered.sort((a, b) => (b.replies || 0) - (a.replies || 0))
      } else if (sortBy.value === 'trending') {
        filtered.sort((a, b) => (b.views || 0) - (a.views || 0))
      }

      return filtered
    })

    const filterByCategory = (categoryId) => {
      if (selectedCategory.value === categoryId) {
        selectedCategory.value = null
      } else {
        selectedCategory.value = categoryId
      }
    }

    const handleSearch = () => {
      // Search is reactive, no action needed
    }

    return {
      discussions,
      error,
      isPending,
      searchQuery,
      selectedCategory,
      sortBy,
      categories,
      filteredDiscussions,
      filterByCategory,
      handleSearch,
      getCategoryCount
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: #f9fafb;
}

.home-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 100px 24px 60px;
}

/* Hero Section */
.hero-section {
  position: relative;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 24px;
  padding: 80px 60px;
  margin-bottom: 48px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.3);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 600px;
}

.hero-section h1 {
  font-size: 48px;
  font-weight: 800;
  color: white;
  margin-bottom: 16px;
  letter-spacing: -1px;
}

.hero-section p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 32px;
  line-height: 1.6;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  background: white;
  color: #6366f1;
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.hero-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.3);
}

.hero-btn i {
  font-size: 20px;
}

/* Hero Decoration */
.hero-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  pointer-events: none;
}

.hero-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -50px;
  animation: float 6s ease-in-out infinite;
}

.circle-2 {
  width: 200px;
  height: 200px;
  top: 100px;
  right: 150px;
  animation: float 8s ease-in-out infinite;
}

.circle-3 {
  width: 150px;
  height: 150px;
  bottom: -50px;
  right: 80px;
  animation: float 7s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Search Section */
.search-section {
  margin-bottom: 48px;
}

.search-container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  padding: 8px 20px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.search-container:focus-within {
  border-color: #6366f1;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.2);
}

.search-icon {
  font-size: 20px;
  color: #6b7280;
  margin-right: 12px;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  color: #1a1a1a;
  padding: 12px 0;
}

.search-input::placeholder {
  color: #9ca3af;
}

.search-btn {
  background: #f3f4f6;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.search-btn:hover {
  background: #e5e7eb;
}

/* Categories Section */
.categories-section {
  margin-bottom: 48px;
}

.section-header {
  margin-bottom: 32px;
}

.section-header h2 {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}

.section-header p {
  font-size: 16px;
  color: #6b7280;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}

.category-card {
  background: white;
  border-radius: 16px;
  padding: 28px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
}

.category-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: #e5e7eb;
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-color: #e5e7eb;
}

.category-card:hover::before {
  height: 100%;
  opacity: 0.05;
}

.category-card.active {
  border-color: #6366f1;
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.15);
}

.category-card.active::before {
  background: #6366f1;
}

.category-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 28px;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.category-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.category-card p {
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 16px;
  line-height: 1.5;
}

.category-count {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #6366f1;
}

.category-count i {
  font-size: 16px;
}

/* Controls Section */
.controls-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 2px solid #e5e7eb;
}

.sort-buttons {
  display: flex;
  gap: 12px;
}

.sort-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 12px;
  border: 2px solid #e5e7eb;
  background: white;
  color: #6b7280;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.sort-btn:hover {
  border-color: #d1d5db;
  background: #f9fafb;
}

.sort-btn.active {
  background: #6366f1;
  color: white;
  border-color: #6366f1;
}

.sort-btn i {
  font-size: 16px;
}

/* Discussions Section */
.discussions-section {
  margin-bottom: 48px;
}

.discussions-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Responsive */
@media (max-width: 768px) {
  .home-container {
    padding: 80px 16px 40px;
  }

  .hero-section {
    padding: 48px 32px;
    margin-bottom: 32px;
  }

  .hero-section h1 {
    font-size: 32px;
  }

  .hero-section p {
    font-size: 16px;
  }

  .hero-decoration {
    display: none;
  }

  .section-header h2 {
    font-size: 24px;
  }

  .categories-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .sort-buttons {
    flex-wrap: wrap;
  }

  .sort-btn {
    padding: 10px 16px;
    font-size: 13px;
  }
}
</style>
