<template>
  <div class="tag-posts-view">
    <div class="container">
      <div class="content-wrapper">
        <div class="tag-posts-content">
          <div class="header">
            <h1>Articles avec le tag: <span class="tag-name">#{{ tag }}</span></h1>
            <router-link to="/" class="back-link">← Retour à l'accueil</router-link>
          </div>

          <div v-if="loading" class="loading">Chargement...</div>
          <div v-else-if="filteredPosts.length === 0" class="no-posts">
            Aucun article trouvé avec ce tag
          </div>
          <div v-else class="posts-grid">
            <SinglePost v-for="post in filteredPosts" :key="post.id" :post="post" />
          </div>
        </div>

        <aside class="sidebar">
          <TagCloud :tags="allTags" />
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import SinglePost from '@/components/SinglePost.vue'
import TagCloud from '@/components/TagCloud.vue'
import { getPosts } from '@/composables/getPosts'

const route = useRoute()
const tag = computed(() => route.params.tag as string)

const { posts, loading, load } = getPosts()

// Filter posts by the selected tag
const filteredPosts = computed(() => {
  return posts.value.filter(post => 
    post.tags.includes(tag.value)
  )
})

// Extract all unique tags from all posts
const allTags = computed(() => {
  const tagsSet = new Set<string>()
  posts.value.forEach(post => {
    post.tags.forEach(t => tagsSet.add(t))
  })
  return Array.from(tagsSet).sort()
})

onMounted(() => {
  load()
})
</script>

<style scoped>
.tag-posts-view {
  background-color: #f5f5f5;
  min-height: calc(100vh - 70px);
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
}

.tag-posts-content {
  flex: 1;
}

.header {
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.header h1 {
  margin: 0;
  color: #2c3e50;
  font-size: 2rem;
}

.tag-name {
  color: #667eea;
  font-weight: 600;
}

.back-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.back-link:hover {
  color: #764ba2;
}

.loading,
.no-posts {
  padding: 2rem;
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: #666;
}

.posts-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
  
  .header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .header h1 {
    font-size: 1.5rem;
  }
  
  .posts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
