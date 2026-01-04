<template>
  <b-card class="discussion-card mb-3" @click="goToDiscussion">
    <b-row>
      <b-col md="9">
        <div class="d-flex align-items-start">
          <div class="user-avatar me-3">
            <i class="bi bi-person-circle"></i>
          </div>
          <div class="flex-grow-1">
            <h4 class="discussion-title">{{ discussion.title }}</h4>
            <p class="discussion-content">{{ truncatedContent }}</p>
            <div class="discussion-meta">
              <span class="meta-item">
                <i class="bi bi-person"></i> {{ discussion.authorName }}
              </span>
              <span class="meta-item">
                <i class="bi bi-calendar"></i> {{ formatDate(discussion.createdAt) }}
              </span>
              <span class="meta-item">
                <i class="bi bi-folder"></i> {{ getCategoryName(discussion.category) }}
              </span>
            </div>
          </div>
        </div>
      </b-col>
      <b-col md="3" class="text-end">
        <div class="discussion-stats">
          <div class="stat-item">
            <i class="bi bi-chat"></i>
            <span>{{ discussion.replies || 0 }}</span>
            <small>Réponses</small>
          </div>
          <div class="stat-item">
            <i class="bi bi-eye"></i>
            <span>{{ discussion.views || 0 }}</span>
            <small>Vues</small>
          </div>
          <b-badge 
            v-if="discussion.reported" 
            variant="danger"
            class="mt-2"
          >
            <i class="bi bi-exclamation-triangle"></i> Signalé
          </b-badge>
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'DiscussionCard',
  props: {
    discussion: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()

    const truncatedContent = computed(() => {
      const maxLength = 150
      if (props.discussion.content.length > maxLength) {
        return props.discussion.content.substring(0, maxLength) + '...'
      }
      return props.discussion.content
    })

    const formatDate = (timestamp) => {
      if (!timestamp) return ''
      const date = timestamp.toDate()
      const now = new Date()
      const diff = now - date
      const minutes = Math.floor(diff / 60000)
      const hours = Math.floor(diff / 3600000)
      const days = Math.floor(diff / 86400000)

      if (minutes < 1) return 'À l\'instant'
      if (minutes < 60) return `Il y a ${minutes} min`
      if (hours < 24) return `Il y a ${hours}h`
      if (days < 7) return `Il y a ${days}j`
      
      return date.toLocaleDateString('fr-FR')
    }

    const getCategoryName = (categoryId) => {
      const categories = {
        general: 'Général',
        tech: 'Technologie',
        support: 'Support',
        feedback: 'Feedback',
        announcements: 'Annonces',
        other: 'Autres'
      }
      return categories[categoryId] || categoryId
    }

    const goToDiscussion = () => {
      router.push({ name: 'Discussion', params: { id: props.discussion.id } })
    }

    return {
      truncatedContent,
      formatDate,
      getCategoryName,
      goToDiscussion
    }
  }
}
</script>

<style scoped>
.discussion-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
}

.discussion-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  border-color: #667eea;
}

.user-avatar {
  font-size: 2.5rem;
  color: #667eea;
}

.discussion-title {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.discussion-content {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.6;
}

.discussion-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.meta-item {
  font-size: 0.85rem;
  color: #888;
}

.meta-item i {
  margin-right: 5px;
  color: #667eea;
}

.discussion-stats {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.stat-item {
  text-align: center;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 8px;
}

.stat-item i {
  font-size: 1.5rem;
  color: #667eea;
  display: block;
  margin-bottom: 5px;
}

.stat-item span {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.stat-item small {
  display: block;
  color: #888;
  font-size: 0.75rem;
}
</style>
