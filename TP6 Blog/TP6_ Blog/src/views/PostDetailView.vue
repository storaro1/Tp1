<template>
  <div class="post-detail-view">
    <div class="container">
      <div v-if="loading" class="loading">Chargement...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else-if="post" class="content-wrapper">
        <article class="post-detail">
          <header class="post-header">
            <h1>{{ post.title }}</h1>
            <div class="tags">
              <router-link
                v-for="tag in post.tags"
                :key="tag"
                :to="{ name: 'TagPosts', params: { tag } }"
                class="tag"
              >
                #{{ tag }}
              </router-link>
            </div>
          </header>

          <div class="post-body">
            <p>{{ post.body }}</p>
          </div>

          <footer class="post-actions">
            <router-link :to="{ name: 'EditPost', params: { id: post.id } }" class="btn btn-edit">
              Modifier
            </router-link>
            <button @click="handleDelete" class="btn btn-delete" :disabled="deleting">
              {{ deleting ? 'Suppression...' : 'Supprimer' }}
            </button>
            <router-link to="/" class="btn btn-back">Retour</router-link>
          </footer>
        </article>

        <aside class="sidebar">
          <TagCloud :tags="allTags" />
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getPost } from '@/composables/getPost'
import { getPosts, deletePost } from '@/composables/getPosts'
import TagCloud from '@/components/TagCloud.vue'

const route = useRoute()
const router = useRouter()

const postId = route.params.id as string
const { post, error, loading, load } = getPost(postId)
const { posts, load: loadPosts } = getPosts()
const deleting = ref(false)

// Extract all unique tags from all posts
const allTags = computed(() => {
  const tagsSet = new Set<string>()
  posts.value.forEach(p => {
    p.tags.forEach(tag => tagsSet.add(tag))
  })
  return Array.from(tagsSet).sort()
})

onMounted(async () => {
  await Promise.all([load(), loadPosts()])
})

const handleDelete = async () => {
  if (!confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
    return
  }

  deleting.value = true
  try {
    const success = await deletePost(postId)
    if (success) {
      router.push('/')
    } else {
      alert('Erreur lors de la suppression de l\'article')
    }
  } catch (err) {
    console.error(err)
    alert('Erreur lors de la suppression de l\'article')
  } finally {
    deleting.value = false
  }
}
</script>

<style scoped>
.post-detail-view {
  background-color: #f5f5f5;
  min-height: calc(100vh - 70px);
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.loading,
.error {
  padding: 2rem;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.error {
  color: #e74c3c;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
}

.post-detail {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.post-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #ecf0f1;
}

.post-header h1 {
  margin: 0 0 1rem 0;
  color: #2c3e50;
  font-size: 2.5rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 16px;
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.3s;
  box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);
}

.tag:hover {
  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.4);
  transform: translateY(-2px);
}

.post-body {
  margin-bottom: 2rem;
  line-height: 1.8;
  color: #333;
  font-size: 1.125rem;
}

.post-body p {
  margin: 1rem 0;
}

.post-actions {
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 2px solid #ecf0f1;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s;
  display: inline-block;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-edit {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.btn-edit:hover {
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  transform: translateY(-2px);
}

.btn-delete {
  background-color: #e74c3c;
  color: #fff;
}

.btn-delete:hover:not(:disabled) {
  background-color: #c0392b;
}

.btn-back {
  background-color: #ecf0f1;
  color: #2c3e50;
}

.btn-back:hover {
  background-color: #d5dbdd;
}

.sidebar {
  display: block;
}

@media (max-width: 968px) {
  .content-wrapper {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    order: -1;
  }
  
  .post-header h1 {
    font-size: 2rem;
  }
  
  .post-actions {
    flex-wrap: wrap;
  }
}
</style>
