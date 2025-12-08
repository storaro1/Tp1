<template>
  <div class="tag-cloud">
    <h3>Tags Populaires</h3>
    <div v-if="tags.length === 0" class="no-tags">Aucun tag disponible</div>
    <div v-else class="tags-container">
      <router-link
        v-for="tag in tags"
        :key="tag"
        :to="{ name: 'TagPosts', params: { tag } }"
        class="tag-link"
      >
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tags: string[]
}>()
</script>

<style scoped>
.tag-cloud {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 2rem;
  border: 1px solid #f0f0f0;
}

.tag-cloud h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #1a202c;
  font-size: 1.25rem;
}

.no-tags {
  color: #666;
  font-size: 0.875rem;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-link {
  background-color: #f7fafc;
  color: #667eea;
  padding: 0.5rem 1rem;
  border-radius: 16px;
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.3s;
  border: 1px solid #e2e8f0;
}

.tag-link:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(102, 126, 234, 0.3);
}

.tag-link.router-link-active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);
}
</style>
