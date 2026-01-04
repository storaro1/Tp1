<template>
  <div class="moderation">
    <b-container>
      <h1 class="mb-4">
        <i class="bi bi-shield-check"></i> Panneau de Modération
      </h1>

      <b-alert variant="info" show>
        <i class="bi bi-info-circle"></i>
        En tant que modérateur, vous pouvez gérer les contenus signalés et supprimer les messages inappropriés.
      </b-alert>

      <b-tabs content-class="mt-4">
        <!-- Reported Discussions -->
        <b-tab title="Discussions Signalées" active>
          <div v-if="reportedDiscussionsLoading" class="text-center">
            <div class="spinner"></div>
            <p>Chargement...</p>
          </div>

          <div v-else-if="reportedDiscussions && reportedDiscussions.length">
            <b-table 
              :items="reportedDiscussions" 
              :fields="discussionFields"
              striped 
              hover
              responsive
            >
              <template #cell(title)="data">
                <router-link :to="`/discussion/${data.item.id}`">
                  {{ data.item.title }}
                </router-link>
              </template>

              <template #cell(reportCount)="data">
                <b-badge variant="danger">{{ data.item.reportCount || 1 }}</b-badge>
              </template>

              <template #cell(createdAt)="data">
                {{ formatDate(data.item.createdAt) }}
              </template>

              <template #cell(actions)="data">
                <b-button 
                  variant="success" 
                  size="sm"
                  @click="unreportDiscussion(data.item.id)"
                  class="me-2"
                >
                  <i class="bi bi-check"></i> Approuver
                </b-button>
                <b-button 
                  variant="danger" 
                  size="sm"
                  @click="deleteDiscussion(data.item.id)"
                >
                  <i class="bi bi-trash"></i> Supprimer
                </b-button>
              </template>
            </b-table>
          </div>

          <div v-else class="text-center py-5">
            <i class="bi bi-check-circle" style="font-size: 4rem; color: #4caf50;"></i>
            <h4 class="mt-3">Aucune discussion signalée</h4>
            <p class="text-muted">Tout est en ordre!</p>
          </div>
        </b-tab>

        <!-- Reported Replies -->
        <b-tab title="Réponses Signalées">
          <div v-if="reportedRepliesLoading" class="text-center">
            <div class="spinner"></div>
            <p>Chargement...</p>
          </div>

          <div v-else-if="reportedReplies && reportedReplies.length">
            <b-table 
              :items="reportedReplies" 
              :fields="replyFields"
              striped 
              hover
              responsive
            >
              <template #cell(content)="data">
                {{ truncate(data.item.content, 100) }}
              </template>

              <template #cell(reportCount)="data">
                <b-badge variant="danger">{{ data.item.reportCount || 1 }}</b-badge>
              </template>

              <template #cell(createdAt)="data">
                {{ formatDate(data.item.createdAt) }}
              </template>

              <template #cell(actions)="data">
                <b-button 
                  variant="success" 
                  size="sm"
                  @click="unreportReply(data.item.id)"
                  class="me-2"
                >
                  <i class="bi bi-check"></i> Approuver
                </b-button>
                <b-button 
                  variant="danger" 
                  size="sm"
                  @click="deleteReply(data.item.id, data.item.discussionId)"
                >
                  <i class="bi bi-trash"></i> Supprimer
                </b-button>
              </template>
            </b-table>
          </div>

          <div v-else class="text-center py-5">
            <i class="bi bi-check-circle" style="font-size: 4rem; color: #4caf50;"></i>
            <h4 class="mt-3">Aucune réponse signalée</h4>
            <p class="text-muted">Tout est en ordre!</p>
          </div>
        </b-tab>

        <!-- All Content -->
        <b-tab title="Toutes les Discussions">
          <div v-if="allDiscussionsLoading" class="text-center">
            <div class="spinner"></div>
            <p>Chargement...</p>
          </div>

          <div v-else-if="allDiscussions && allDiscussions.length">
            <b-table 
              :items="allDiscussions" 
              :fields="allDiscussionFields"
              striped 
              hover
              responsive
              :per-page="10"
              :current-page="currentPage"
            >
              <template #cell(title)="data">
                <router-link :to="`/discussion/${data.item.id}`">
                  {{ data.item.title }}
                </router-link>
              </template>

              <template #cell(reported)="data">
                <b-badge :variant="data.item.reported ? 'danger' : 'success'">
                  {{ data.item.reported ? 'Oui' : 'Non' }}
                </b-badge>
              </template>

              <template #cell(createdAt)="data">
                {{ formatDate(data.item.createdAt) }}
              </template>

              <template #cell(actions)="data">
                <b-button 
                  variant="danger" 
                  size="sm"
                  @click="deleteDiscussion(data.item.id)"
                >
                  <i class="bi bi-trash"></i> Supprimer
                </b-button>
              </template>
            </b-table>

            <b-pagination
              v-model="currentPage"
              :total-rows="allDiscussions.length"
              :per-page="10"
              align="center"
            ></b-pagination>
          </div>
        </b-tab>
      </b-tabs>
    </b-container>
  </div>
</template>

<script>
import { ref } from 'vue'
import getCollection from '../composables/getCollection'
import useModeration from '../composables/useModeration'
import useDiscussions from '../composables/useDiscussions'
import useReplies from '../composables/useReplies'

export default {
  name: 'Moderation',
  setup() {
    const { unreportContent } = useModeration()
    const { deleteDiscussion: deleteDiscussionAction } = useDiscussions()
    const { deleteReply: deleteReplyAction } = useReplies()

    const { documents: reportedDiscussions, isPending: reportedDiscussionsLoading } = getCollection(
      'discussions',
      ['reported', '==', true]
    )

    const { documents: reportedReplies, isPending: reportedRepliesLoading } = getCollection(
      'replies',
      ['reported', '==', true]
    )

    const { documents: allDiscussions, isPending: allDiscussionsLoading } = getCollection('discussions')

    const currentPage = ref(1)

    const discussionFields = [
      { key: 'title', label: 'Titre' },
      { key: 'authorName', label: 'Auteur' },
      { key: 'reportCount', label: 'Signalements' },
      { key: 'createdAt', label: 'Date' },
      { key: 'actions', label: 'Actions' }
    ]

    const replyFields = [
      { key: 'content', label: 'Contenu' },
      { key: 'authorName', label: 'Auteur' },
      { key: 'reportCount', label: 'Signalements' },
      { key: 'createdAt', label: 'Date' },
      { key: 'actions', label: 'Actions' }
    ]

    const allDiscussionFields = [
      { key: 'title', label: 'Titre' },
      { key: 'authorName', label: 'Auteur' },
      { key: 'category', label: 'Catégorie' },
      { key: 'reported', label: 'Signalé' },
      { key: 'createdAt', label: 'Date' },
      { key: 'actions', label: 'Actions' }
    ]

    const formatDate = (timestamp) => {
      if (!timestamp) return ''
      return timestamp.toDate().toLocaleDateString('fr-FR')
    }

    const truncate = (text, length) => {
      if (text.length > length) {
        return text.substring(0, length) + '...'
      }
      return text
    }

    const unreportDiscussion = async (id) => {
      if (confirm('Approuver cette discussion?')) {
        await unreportContent('discussions', id)
      }
    }

    const unreportReply = async (id) => {
      if (confirm('Approuver cette réponse?')) {
        await unreportContent('replies', id)
      }
    }

    const deleteDiscussion = async (id) => {
      if (confirm('Supprimer définitivement cette discussion?')) {
        await deleteDiscussionAction(id)
      }
    }

    const deleteReply = async (id, discussionId) => {
      if (confirm('Supprimer définitivement cette réponse?')) {
        await deleteReplyAction(id, discussionId)
      }
    }

    return {
      reportedDiscussions,
      reportedDiscussionsLoading,
      reportedReplies,
      reportedRepliesLoading,
      allDiscussions,
      allDiscussionsLoading,
      currentPage,
      discussionFields,
      replyFields,
      allDiscussionFields,
      formatDate,
      truncate,
      unreportDiscussion,
      unreportReply,
      deleteDiscussion,
      deleteReply
    }
  }
}
</script>

<style scoped>
.moderation {
  padding: 40px 0;
}

.moderation h1 {
  color: #667eea;
}

.table {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>
