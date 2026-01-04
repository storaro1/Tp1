<template>
  <div class="create-discussion">
    <Navbar />
    
    <div class="create-container">
      <div class="create-header">
        <router-link to="/home" class="back-link">
          <i class="bi bi-arrow-left"></i>
          Retour
        </router-link>
        <h1>Créer une Nouvelle Discussion</h1>
        <p>Partagez vos idées avec la communauté</p>
      </div>

      <div class="create-card">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="title">
              <i class="bi bi-cursor-text"></i>
              Titre de la discussion *
            </label>
            <input
              id="title"
              v-model="title"
              type="text"
              class="modern-input"
              placeholder="Donnez un titre accrocheur à votre discussion..."
              required
            />
          </div>

          <div class="form-group">
            <label for="category">
              <i class="bi bi-tag"></i>
              Catégorie *
            </label>
            <select
              id="category"
              v-model="category"
              class="modern-select"
              required
            >
              <option v-for="cat in categories" :key="cat.value" :value="cat.value">
                {{ cat.text }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="content">
              <i class="bi bi-card-text"></i>
              Contenu de la discussion *
            </label>
            <textarea
              id="content"
              v-model="content"
              class="modern-textarea"
              placeholder="Décrivez votre discussion en détail..."
              rows="12"
              required
            ></textarea>
            <div class="char-count">{{ content.length }} caractères</div>
          </div>

          <div v-if="error" class="error-message">
            <i class="bi bi-exclamation-triangle-fill"></i>
            <span>{{ error }}</span>
          </div>

          <div v-if="success" class="success-message">
            <i class="bi bi-check-circle-fill"></i>
            <span>Discussion créée avec succès! Redirection...</span>
          </div>

          <div class="form-actions">
            <button 
              type="button"
              class="btn-secondary"
              @click="$router.push('/home')"
              :disabled="isPending"
            >
              <i class="bi bi-x-lg"></i>
              Annuler
            </button>
            <button 
              type="submit" 
              class="btn-primary"
              :disabled="isPending || !title || !content"
            >
              <span v-if="!isPending">
                <i class="bi bi-send-fill"></i>
                Publier la Discussion
              </span>
              <span v-else>
                <div class="spinner"></div>
                Publication en cours...
              </span>
            </button>
          </div>
        </form>
      </div>

      <!-- Tips Section -->
      <div class="tips-card">
        <h3><i class="bi bi-lightbulb"></i> Conseils pour une bonne discussion</h3>
        <ul>
          <li><i class="bi bi-check2"></i> Choisissez un titre clair et descriptif</li>
          <li><i class="bi bi-check2"></i> Sélectionnez la catégorie appropriée</li>
          <li><i class="bi bi-check2"></i> Développez votre sujet avec des détails</li>
          <li><i class="bi bi-check2"></i> Restez respectueux et constructif</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
import useDiscussions from '../composables/useDiscussions'

export default {
  name: 'CreateDiscussion',
  components: { Navbar },
  setup() {
    const { user } = getUser()
    const { createDiscussion, error, isPending } = useDiscussions()
    const router = useRouter()

    const title = ref('')
    const category = ref('general')
    const content = ref('')
    const success = ref(false)

    const categories = [
      { value: 'general', text: 'Général' },
      { value: 'tech', text: 'Technologie' },
      { value: 'support', text: 'Support' },
      { value: 'feedback', text: 'Feedback' },
      { value: 'announcements', text: 'Annonces' },
      { value: 'other', text: 'Autres' }
    ]

    const handleSubmit = async () => {
      if (!user.value) {
        error.value = 'Vous devez être connecté pour créer une discussion'
        return
      }

      const discussion = {
        title: title.value,
        content: content.value,
        category: category.value,
        authorId: user.value.uid,
        authorName: user.value.displayName || 'Anonyme'
      }

      const res = await createDiscussion(discussion)
      
      if (!error.value && res) {
        success.value = true
        setTimeout(() => {
          router.push({ name: 'Home' })
        }, 1500)
      }
    }

    return {
      title,
      category,
      content,
      categories,
      error,
      isPending,
      success,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.create-discussion {
  min-height: 100vh;
  background: #f9fafb;
}

.create-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 100px 24px 60px;
}

.create-header {
  margin-bottom: 32px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 16px;
  transition: all 0.2s ease;
}

.back-link:hover {
  color: #6366f1;
  transform: translateX(-4px);
}

.create-header h1 {
  font-size: 36px;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}

.create-header p {
  font-size: 16px;
  color: #6b7280;
}

.create-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
  border: 1px solid #e5e7eb;
}

.form-group {
  margin-bottom: 28px;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.form-group label i {
  font-size: 16px;
  color: #6366f1;
}

.modern-input,
.modern-select,
.modern-textarea {
  width: 100%;
  padding: 14px 18px;
  font-size: 15px;
  color: #1a1a1a;
  background: #f9fafb;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  transition: all 0.2s ease;
  font-family: inherit;
}

.modern-input:focus,
.modern-select:focus,
.modern-textarea:focus {
  outline: none;
  border-color: #6366f1;
  background: white;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.modern-textarea {
  resize: vertical;
  min-height: 200px;
  line-height: 1.6;
}

.char-count {
  text-align: right;
  font-size: 12px;
  color: #9ca3af;
  margin-top: 6px;
}

.form-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 2px solid #f3f4f6;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
}

.btn-primary {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.btn-secondary {
  background: #f3f4f6;
  color: #6b7280;
}

.btn-secondary:hover:not(:disabled) {
  background: #e5e7eb;
  color: #1a1a1a;
}

.tips-card {
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
}

.tips-card h3 {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 16px;
}

.tips-card h3 i {
  font-size: 20px;
  color: #f59e0b;
}

.tips-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tips-card li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  color: #6b7280;
  font-size: 14px;
}

.tips-card li i {
  color: #10b981;
  font-size: 16px;
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .create-container {
    padding: 80px 16px 40px;
  }

  .create-header h1 {
    font-size: 28px;
  }

  .create-card {
    padding: 24px;
  }

  .form-actions {
    flex-direction: column-reverse;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}
</style>
