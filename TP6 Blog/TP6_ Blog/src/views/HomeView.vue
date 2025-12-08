<template>
  <div class="home-view">
    <div class="container">
      <div class="content-wrapper">
        <PostList :posts="posts" :loading="loading" :error="error" />
        <aside class="sidebar">
          <TagCloud :tags="allTags" />
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import PostList from '@/components/PostList.vue'
import TagCloud from '@/components/TagCloud.vue'
import { getPosts } from '@/composables/getPosts'

const { posts, error, loading, load } = getPosts()

// Extract all unique tags from posts
const allTags = computed(() => {
  const tagsSet = new Set<string>()
  posts.value.forEach(post => {
    post.tags.forEach(tag => tagsSet.add(tag))
  })
  return Array.from(tagsSet).sort()
})

onMounted(() => {
  load()
})
</script>

<style scoped>
.home-view {
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
}
</style>
