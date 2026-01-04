<template>
  <div class="discussion-view">
    <Navbar />
    
    <div class="discussion-container">
      <div v-if="isPending" class="loading-state">
        <div class="spinner"></div>
        <p>Chargement de la discussion...</p>
      </div>

      <div v-else-if="error" class="error-message">
        <i class="bi bi-exclamation-triangle-fill"></i>
        <span>{{ error }}</span>
      </div>

      <div v-else-if="document" class="discussion-content-wrapper">
        <!-- Back Button -->
        <router-link to="/home" class="back-link">
          <i class="bi bi-arrow-left"></i>
          Retour aux discussions
        </router-link>

        <!-- Discussion Card -->
        <div class="discussion-card">
          <div class="discussion-header">
            <div class="discussion-header-content">
              <div class="category-badge" :style="{ background: getCategoryColor(document.category) }">
                <i :class="getCategoryIcon(document.category)"></i>
                {{ getCategoryName(document.category) }}
              </div>
              <h1 class="discussion-title">{{ document.title }}</h1>
              
              <div class="discussion-meta">
                <div class="meta-item">
                  <div class="author-avatar">
                    {{ document.authorName ? document.authorName.charAt(0).toUpperCase() : 'A' }}
                  </div>
                  <span class="author-name">{{ document.authorName }}</span>
                </div>
                <div class="meta-separator">•</div>
                <div class="meta-item">
                  <i class="bi bi-clock"></i>
                  {{ formatDate(document.createdAt) }}
                </div>
                <div class="meta-separator">•</div>
                <div class="meta-item">
                  <i class="bi bi-eye"></i>
                  {{ document.views || 0 }} vues
                </div>
                <div class="meta-separator">•</div>
                <div class="meta-item">
                  <i class="bi bi-chat-dots"></i>
                  {{ replies ? replies.length : 0 }} réponses
                </div>
              </div>
            </div>

            <div v-if="user && user.uid === document.authorId" class="discussion-actions">
              <button class="action-btn edit-btn" @click="showEditModal = true">
                <i class="bi bi-pencil"></i>
              </button>
              <button class="action-btn delete-btn" @click="confirmDelete">
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>

          <div class="discussion-body">
            <p>{{ document.content }}</p>
          </div>

          <div class="discussion-footer">
            <button 
              class="report-btn"
              @click="reportDiscussion"
              v-if="user && user.uid !== document.authorId"
            >
              <i class="bi bi-flag"></i>
              Signaler
            </button>
          </div>
        </div>

        <!-- Replies Section -->
        <div class="replies-section">
          <div class="replies-header">
            <h2>
              <i class="bi bi-chat-left-dots-fill"></i>
              Réponses
              <span class="reply-count">{{ replies ? replies.length : 0 }}</span>
            </h2>
          </div>

          <!-- Add Reply Form -->
          <div class="reply-form-card">
            <form @submit.prevent="handleReply" class="reply-form">
              <div class="form-header">
                <div class="user-avatar-small">
                  {{ user?.displayName ? user.displayName.charAt(0).toUpperCase() : 'U' }}
                </div>
                <span class="form-label">Écrire une réponse</span>
              </div>
              <textarea
                v-model="replyContent"
                class="reply-textarea"
                placeholder="Partagez votre point de vue, posez une question ou aidez les autres..."
                rows="4"
                required
              ></textarea>
              <div class="form-footer">
                <div class="char-count">{{ replyContent.length }} caractères</div>
                <button 
                  type="submit" 
                  class="submit-btn"
                  :disabled="replyPending || !replyContent.trim()"
                >
                  <span v-if="!replyPending">
                    <i class="bi bi-send-fill"></i>
                    Publier
                  </span>
                  <span v-else>
                    <div class="spinner-small"></div>
                    Envoi...
                  </span>
                </button>
              </div>
            </form>
          </div>

          <!-- Replies List -->
          <div v-if="replies && replies.length" class="replies-list">
            <ReplyCard
              v-for="reply in replies"
              :key="reply.id"
              :reply="reply"
              :currentUser="user"
              @delete="handleDeleteReply"
              @edit="handleEditReply"
              @report="handleReportReply"
            />
          </div>
          <div v-else class="empty-state">
            <i class="bi bi-chat-text"></i>
            <h3>Aucune réponse pour le moment</h3>
            <p>Soyez le premier à partager votre avis!</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Modal -->
    <transition name="modal-fade">
      <div v-if="showEditModal" class="modal-overlay" @click="showEditModal = false">
        <div class="modal-card" @click.stop>
          <div class="modal-header">
            <h3>Modifier la discussion</h3>
            <button class="modal-close" @click="showEditModal = false">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Titre</label>
              <input v-model="editTitle" type="text" class="modern-input" />
            </div>
            <div class="form-group">
              <label>Contenu</label>
              <textarea v-model="editContent" rows="6" class="modern-textarea"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn-secondary" @click="showEditModal = false">Annuler</button>
            <button class="btn-primary" @click="handleEdit">Enregistrer</button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Edit Reply Modal -->
    <transition name="modal-fade">
      <div v-if="showEditReplyModal" class="modal-overlay" @click="showEditReplyModal = false">
        <div class="modal-card" @click.stop>
          <div class="modal-header">
            <h3>Modifier la réponse</h3>
            <button class="modal-close" @click="showEditReplyModal = false">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Contenu</label>
              <textarea v-model="editReplyContent" rows="6" class="modern-textarea"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn-secondary" @click="showEditReplyModal = false">Annuler</button>
            <button class="btn-primary" @click="saveEditReply">Enregistrer</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import getDocument from '../composables/getDocument'
import getCollection from '../composables/getCollection'
import getUser from '../composables/getUser'
import useDiscussions from '../composables/useDiscussions'
import useReplies from '../composables/useReplies'
import useModeration from '../composables/useModeration'
import ReplyCard from '../components/ReplyCard.vue'

export default {
  name: 'DiscussionView',
  components: { Navbar, ReplyCard },
  props: ['id'],
  setup(props) {
    const { user } = getUser()
    const { document, error, isPending } = getDocument('discussions', props.id)
    const { documents: allReplies } = getCollection('replies', ['discussionId', '==', props.id])
    const { updateDiscussion, deleteDiscussion, incrementViews } = useDiscussions()
    const { createReply, deleteReply: deleteReplyAction, updateReply } = useReplies()
    const { reportContent } = useModeration()
    const router = useRouter()
    
    // Sort replies by creation date (oldest first)
    const replies = computed(() => {
      if (!allReplies.value) return []
      return [...allReplies.value].sort((a, b) => {
        if (!a.createdAt || !b.createdAt) return 0
        return a.createdAt.seconds - b.createdAt.seconds
      })
    })

    const replyContent = ref('')
    const replyPending = ref(false)
    const showEditModal = ref(false)
    const editTitle = ref('')
    const editContent = ref('')
    
    // Reply editing
    const showEditReplyModal = ref(false)
    const editingReply = ref(null)
    const editReplyContent = ref('')

    // Increment view count
    incrementViews(props.id)

    watch(document, (newDoc) => {
      if (newDoc) {
        editTitle.value = newDoc.title
        editContent.value = newDoc.content
      }
    })

    const formatDate = (timestamp) => {
      if (!timestamp) return ''
      return timestamp.toDate().toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
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

    const getCategoryColor = (categoryId) => {
      const colors = {
        general: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        tech: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        support: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        feedback: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        announcements: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        other: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
      }
      return colors[categoryId] || colors.other
    }

    const getCategoryIcon = (categoryId) => {
      const icons = {
        general: 'bi-chat-dots-fill',
        tech: 'bi-laptop',
        support: 'bi-question-circle-fill',
        feedback: 'bi-star-fill',
        announcements: 'bi-megaphone-fill',
        other: 'bi-three-dots'
      }
      return icons[categoryId] || icons.other
    }

    const handleReply = async () => {
      if (!replyContent.value.trim()) return
      
      replyPending.value = true
      
      const reply = {
        content: replyContent.value,
        discussionId: props.id,
        authorId: user.value.uid,
        authorName: user.value.displayName || 'Anonyme'
      }

      await createReply(reply)
      
      if (!error.value) {
        replyContent.value = ''
      }
      replyPending.value = false
    }

    const handleEdit = async () => {
      await updateDiscussion(props.id, {
        title: editTitle.value,
        content: editContent.value
      })
      showEditModal.value = false
    }

    const confirmDelete = () => {
      if (confirm('Êtes-vous sûr de vouloir supprimer cette discussion?')) {
        deleteDiscussion(props.id)
        router.push('/home')
      }
    }

    const reportDiscussion = async () => {
      if (confirm('Signaler cette discussion comme inappropriée?')) {
        await reportContent('discussions', props.id)
        alert('Discussion signalée. Les modérateurs examineront votre signalement.')
      }
    }

    const handleDeleteReply = async (replyId) => {
      if (confirm('Supprimer cette réponse?')) {
        await deleteReplyAction(replyId, props.id)
      }
    }

    const handleEditReply = (reply) => {
      editingReply.value = reply
      editReplyContent.value = reply.content
      showEditReplyModal.value = true
    }
    
    const saveEditReply = async () => {
      if (!editReplyContent.value.trim()) return
      
      await updateReply(editingReply.value.id, {
        content: editReplyContent.value
      })
      
      showEditReplyModal.value = false
      editingReply.value = null
      editReplyContent.value = ''
    }

    const handleReportReply = async (replyId) => {
      if (confirm('Signaler cette réponse comme inappropriée?')) {
        await reportContent('replies', replyId)
        alert('Réponse signalée.')
      }
    }

    return {
      user,
      document,
      error,
      isPending,
      replies,
      replyContent,
      replyPending,
      showEditModal,
      editTitle,
      editContent,
      showEditReplyModal,
      editingReply,
      editReplyContent,
      formatDate,
      getCategoryName,
      getCategoryColor,
      getCategoryIcon,
      handleReply,
      handleEdit,
      confirmDelete,
      reportDiscussion,
      handleDeleteReply,
      handleEditReply,
      saveEditReply,
      handleReportReply
    }
  }
}
</script>

<style scoped>
.discussion-view {
  min-height: 100vh;
  background: #f9fafb;
}

.discussion-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 24px 60px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 24px;
  transition: all 0.2s ease;
}

.back-link:hover {
  color: #6366f1;
  transform: translateX(-4px);
}

.discussion-content-wrapper {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Discussion Card */
.discussion-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 32px;
  border: 1px solid #e5e7eb;
}

.discussion-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 2px solid #f3f4f6;
}

.discussion-header-content {
  flex: 1;
}

.category-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 10px;
  color: white;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.discussion-title {
  font-size: 32px;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 20px;
  line-height: 1.3;
  letter-spacing: -0.5px;
}

.discussion-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
}

.meta-item i {
  color: #9ca3af;
  font-size: 16px;
}

.meta-separator {
  color: #d1d5db;
}

.author-avatar {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 13px;
}

.author-name {
  font-weight: 600;
  color: #1a1a1a;
}

.discussion-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.edit-btn {
  background: #f3f4f6;
  color: #6366f1;
}

.edit-btn:hover {
  background: #eef2ff;
}

.delete-btn {
  background: #fef2f2;
  color: #dc2626;
}

.delete-btn:hover {
  background: #fee2e2;
}

.discussion-body {
  padding: 24px 0;
  line-height: 1.8;
}

.discussion-body p {
  font-size: 16px;
  color: #374151;
  white-space: pre-wrap;
  margin: 0;
}

.discussion-footer {
  padding-top: 20px;
  border-top: 1px solid #f3f4f6;
}

.report-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: #fef2f2;
  color: #dc2626;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.report-btn:hover {
  background: #fee2e2;
}

/* Replies Section */
.replies-section {
  margin-bottom: 48px;
}

.replies-header {
  margin-bottom: 24px;
}

.replies-header h2 {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
}

.replies-header i {
  color: #6366f1;
}

.reply-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 10px;
  background: #eef2ff;
  color: #6366f1;
  font-size: 14px;
  border-radius: 8px;
  font-weight: 600;
}

.reply-form-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
  border: 2px solid #e5e7eb;
  transition: all 0.2s ease;
}

.reply-form-card:focus-within {
  border-color: #6366f1;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.15);
}

.form-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.user-avatar-small {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
}

.form-label {
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
}

.reply-textarea {
  width: 100%;
  padding: 16px;
  font-size: 15px;
  color: #1a1a1a;
  background: #f9fafb;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  transition: all 0.2s ease;
  font-family: inherit;
  resize: vertical;
  line-height: 1.6;
  margin-bottom: 12px;
}

.reply-textarea:focus {
  outline: none;
  border-color: #6366f1;
  background: white;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.char-count {
  font-size: 12px;
  color: #9ca3af;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.spinner-small {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

.replies-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
}

.modal-card {
  background: white;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 28px;
  border-bottom: 2px solid #f3f4f6;
}

.modal-header h3 {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.modal-close {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: #f3f4f6;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: #e5e7eb;
  color: #1a1a1a;
}

.modal-body {
  padding: 28px;
}

.modal-footer {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding: 20px 28px;
  border-top: 2px solid #f3f4f6;
}

.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .discussion-container {
    padding: 80px 16px 40px;
  }

  .discussion-card {
    padding: 24px;
  }

  .discussion-title {
    font-size: 24px;
  }

  .discussion-meta {
    font-size: 12px;
  }

  .form-footer {
    flex-direction: column;
    align-items: flex-end;
    gap: 12px;
  }
}
</style>
