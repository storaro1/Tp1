<template>
  <div class="create-post-view">
    <div class="container">
      <div class="form-wrapper">
        <h1>{{ isEditMode ? 'Modifier l\'article' : 'Créer un nouvel article' }}</h1>
        
        <form @submit.prevent="handleSubmit" class="post-form">
          <div class="form-group">
            <label for="title">Titre</label>
            <input
              id="title"
              v-model="formData.title"
              type="text"
              placeholder="Titre de l'article"
              required
            />
          </div>

          <div class="form-group">
            <label for="body">Contenu</label>
            <textarea
              id="body"
              v-model="formData.body"
              rows="10"
              placeholder="Contenu de l'article"
              required
            ></textarea>
          </div>

          <div class="form-group">
            <label for="tags">Tags (séparés par des virgules)</label>
            <input
              id="tags"
              v-model="tagsInput"
              type="text"
              placeholder="vue, javascript, frontend"
            />
            <small>Exemple: vue, javascript, frontend</small>
          </div>

          <div v-if="error" class="error-message">{{ error }}</div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary" :disabled="loading">
              {{ loading ? 'En cours...' : (isEditMode ? 'Mettre à jour' : 'Publier') }}
            </button>
            <button type="button" class="btn btn-secondary" @click="handleCancel">
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { addPost, updatePost } from '@/composables/getPosts'
import { getPost } from '@/composables/getPost'

const router = useRouter()
const route = useRoute()

const isEditMode = ref(false)
const loading = ref(false)
const error = ref<string | null>(null)

const formData = reactive({
  title: '',
  body: '',
  tags: [] as string[]
})

const tagsInput = ref('')

onMounted(async () => {
  const postId = route.params.id as string
  if (postId) {
    isEditMode.value = true
    const { post, load } = getPost(postId)
    await load()
    
    if (post.value) {
      formData.title = post.value.title
      formData.body = post.value.body
      formData.tags = [...post.value.tags]
      tagsInput.value = post.value.tags.join(', ')
    }
  }
})

const handleSubmit = async () => {
  loading.value = true
  error.value = null
  
  try {
    // Parse tags from input
    const tags = tagsInput.value
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0)
    
    formData.tags = tags

    if (isEditMode.value) {
      const postId = route.params.id as string
      await updatePost(postId, formData)
    } else {
      await addPost(formData)
    }
    
    router.push('/')
  } catch (err) {
    error.value = 'Erreur lors de la sauvegarde de l\'article'
    console.error(err)
  } finally {
    loading.value = false
  }
}

const handleCancel = () => {
  router.push('/')
}
</script>

<style scoped>
.create-post-view {
  background-color: #f5f5f5;
  min-height: calc(100vh - 70px);
  padding: 2rem 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.form-wrapper {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-wrapper h1 {
  margin-top: 0;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.post-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  color: #2c3e50;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 200px;
}

.form-group small {
  color: #666;
  font-size: 0.875rem;
}

.error-message {
  padding: 1rem;
  background-color: #fee;
  color: #c33;
  border-radius: 4px;
  border-left: 4px solid #c33;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.btn-primary:hover:not(:disabled) {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: #ecf0f1;
  color: #2c3e50;
}

.btn-secondary:hover {
  background-color: #d5dbdd;
}
</style>
