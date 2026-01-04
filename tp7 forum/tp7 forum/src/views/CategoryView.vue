<template>
  <div class="category-view">
    <b-container>
      <div class="category-header mb-4">
        <h1>
          <i :class="categoryIcon"></i>
          {{ categoryName }}
        </h1>
        <p class="lead">{{ categoryDescription }}</p>
      </div>

      <b-row>
        <b-col md="9">
          <div v-if="isPending" class="text-center py-5">
            <div class="spinner"></div>
            <p>Chargement des discussions...</p>
          </div>

          <div v-else-if="filteredDiscussions && filteredDiscussions.length">
            <DiscussionCard 
              v-for="discussion in filteredDiscussions" 
              :key="discussion.id"
              :discussion="discussion"
            />
          </div>

          <div v-else class="text-center py-5">
            <i class="bi bi-chat-text" style="font-size: 4rem; color: #ccc;"></i>
            <h4 class="mt-3">Aucune discussion dans cette catégorie</h4>
            <b-button variant="primary" to="/create-discussion">
              Créer la première discussion
            </b-button>
          </div>
        </b-col>

        <b-col md="3">
          <b-card title="Catégories" class="categories-sidebar">
            <b-list-group>
              <b-list-group-item 
                v-for="cat in categories" 
                :key="cat.id"
                :to="`/category/${cat.id}`"
                :active="cat.id === id"
                button
              >
                <i :class="cat.icon"></i> {{ cat.name }}
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import getCollection from '../composables/getCollection'
import DiscussionCard from '../components/DiscussionCard.vue'

export default {
  name: 'CategoryView',
  components: { DiscussionCard },
  props: ['id'],
  setup(props) {
    const { documents: discussions, error, isPending } = getCollection('discussions')

    const categories = ref([
      { id: 'general', name: 'Général', icon: 'bi bi-chat-dots', description: 'Discussions générales' },
      { id: 'tech', name: 'Technologie', icon: 'bi bi-laptop', description: 'Programmation, gadgets, etc.' },
      { id: 'support', name: 'Support', icon: 'bi bi-question-circle', description: 'Questions et aide' },
      { id: 'feedback', name: 'Feedback', icon: 'bi bi-star', description: 'Suggestions et retours' },
      { id: 'announcements', name: 'Annonces', icon: 'bi bi-megaphone', description: 'Annonces importantes' },
      { id: 'other', name: 'Autres', icon: 'bi bi-three-dots', description: 'Autres sujets' }
    ])

    const currentCategory = computed(() => {
      return categories.value.find(c => c.id === props.id) || {}
    })

    const categoryName = computed(() => currentCategory.value.name || 'Catégorie')
    const categoryIcon = computed(() => currentCategory.value.icon || 'bi bi-folder')
    const categoryDescription = computed(() => currentCategory.value.description || '')

    const filteredDiscussions = computed(() => {
      if (!discussions.value) return []
      return discussions.value.filter(d => d.category === props.id)
    })

    return {
      discussions,
      error,
      isPending,
      categories,
      categoryName,
      categoryIcon,
      categoryDescription,
      filteredDiscussions
    }
  }
}
</script>

<style scoped>
.category-view {
  padding: 40px 0;
}

.category-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.category-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.category-header i {
  margin-right: 15px;
}

.categories-sidebar {
  position: sticky;
  top: 90px;
}

.list-group-item i {
  margin-right: 10px;
  color: #667eea;
}
</style>
