<template>
  <div class="reply-card">
    <div class="reply-header">
      <div class="reply-author">
        <div class="author-avatar">
          {{ reply.authorName ? reply.authorName.charAt(0).toUpperCase() : 'A' }}
        </div>
        <div class="author-info">
          <span class="author-name">{{ reply.authorName }}</span>
          <span class="reply-date">{{ formatDate(reply.createdAt) }}</span>
        </div>
      </div>
      
      <div class="reply-actions">
        <div v-if="currentUser && currentUser.uid === reply.authorId">
          <button class="action-btn edit" @click="$emit('edit', reply)" title="Modifier">
            <i class="bi bi-pencil"></i>
          </button>
          <button class="action-btn delete" @click="$emit('delete', reply.id)" title="Supprimer">
            <i class="bi bi-trash"></i>
          </button>
        </div>
        <div v-else-if="currentUser">
          <button class="action-btn report" @click="$emit('report', reply.id)" title="Signaler">
            <i class="bi bi-flag"></i>
          </button>
        </div>
      </div>
    </div>

    <div class="reply-content">
      {{ reply.content }}
    </div>

    <div v-if="reply.reported" class="reply-reported">
      <i class="bi bi-exclamation-triangle-fill"></i>
      Signalé
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReplyCard',
  props: {
    reply: {
      type: Object,
      required: true
    },
    currentUser: {
      type: Object,
      default: null
    }
  },
  emits: ['delete', 'edit', 'report'],
  setup() {
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
      
      return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    }

    return { formatDate }
  }
}
</script>

<style scoped>
.reply-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;
}

.reply-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-color: #d1d5db;
}

.reply-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.reply-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  flex-shrink: 0;
}

.author-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.author-name {
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
}

.reply-date {
  font-size: 12px;
  color: #9ca3af;
}

.reply-actions {
  display: flex;
  gap: 6px;
}

.action-btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background: transparent;
}

.action-btn.edit {
  color: #6366f1;
}

.action-btn.edit:hover {
  background: #eef2ff;
}

.action-btn.delete {
  color: #dc2626;
}

.action-btn.delete:hover {
  background: #fef2f2;
}

.action-btn.report {
  color: #f59e0b;
}

.action-btn.report:hover {
  background: #fffbeb;
}

.reply-content {
  font-size: 15px;
  line-height: 1.6;
  color: #374151;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.reply-reported {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  padding: 6px 12px;
  background: #fef2f2;
  color: #dc2626;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
}

.reply-reported i {
  font-size: 14px;
}

@media (max-width: 768px) {
  .reply-card {
    padding: 16px;
  }

  .author-name {
    font-size: 13px;
  }

  .reply-content {
    font-size: 14px;
  }
}
</style>
