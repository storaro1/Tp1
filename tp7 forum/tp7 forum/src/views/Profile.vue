<template>
  <div class="profile">
    <b-container>
      <b-row>
        <b-col lg="8" class="mx-auto">
          <b-card class="profile-card shadow-lg">
            <template #header>
              <div class="profile-header">
                <div class="profile-avatar">
                  <i class="bi bi-person-circle"></i>
                </div>
                <div>
                  <h2>{{ user?.displayName }}</h2>
                  <p class="text-muted">{{ user?.email }}</p>
                </div>
              </div>
            </template>

            <b-tabs content-class="mt-4">
              <!-- Profile Info Tab -->
              <b-tab title="Informations" active>
                <b-form @submit.prevent="updateProfile">
                  <b-form-group label="Nom d'affichage">
                    <b-form-input
                      v-model="displayName"
                      placeholder="Votre nom d'affichage"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group label="Email">
                    <b-form-input
                      :value="user?.email"
                      disabled
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group label="Bio">
                    <b-form-textarea
                      v-model="bio"
                      placeholder="Parlez-nous de vous..."
                      rows="4"
                    ></b-form-textarea>
                  </b-form-group>

                  <div v-if="updateError" class="error">{{ updateError }}</div>
                  <div v-if="updateSuccess" class="success">Profil mis à jour avec succès!</div>

                  <b-button 
                    type="submit" 
                    variant="primary"
                    :disabled="updatePending"
                  >
                    <span v-if="!updatePending">Mettre à jour</span>
                    <span v-else>
                      <b-spinner small></b-spinner> Mise à jour...
                    </span>
                  </b-button>
                </b-form>
              </b-tab>

              <!-- Change Password Tab -->
              <b-tab title="Mot de passe">
                <b-alert variant="info" show>
                  <i class="bi bi-info-circle"></i>
                  Pour changer votre mot de passe, vous recevrez un email avec un lien de réinitialisation.
                </b-alert>
                <b-button 
                  variant="warning"
                  @click="sendPasswordReset"
                  :disabled="resetPending"
                >
                  <span v-if="!resetPending">
                    <i class="bi bi-envelope"></i> Envoyer l'email de réinitialisation
                  </span>
                  <span v-else>
                    <b-spinner small></b-spinner> Envoi...
                  </span>
                </b-button>
                <div v-if="resetSuccess" class="success mt-3">
                  Email de réinitialisation envoyé! Vérifiez votre boîte de réception.
                </div>
                <div v-if="resetError" class="error mt-3">{{ resetError }}</div>
              </b-tab>

              <!-- My Discussions Tab -->
              <b-tab title="Mes Discussions">
                <div v-if="myDiscussionsLoading" class="text-center">
                  <div class="spinner"></div>
                  <p>Chargement de vos discussions...</p>
                </div>
                <div v-else-if="myDiscussions && myDiscussions.length">
                  <div 
                    v-for="discussion in myDiscussions" 
                    :key="discussion.id"
                    class="my-discussion-item"
                    @click="goToDiscussion(discussion.id)"
                  >
                    <h5>{{ discussion.title }}</h5>
                    <div class="discussion-stats">
                      <span><i class="bi bi-chat"></i> {{ discussion.replies || 0 }}</span>
                      <span><i class="bi bi-eye"></i> {{ discussion.views || 0 }}</span>
                      <span><i class="bi bi-calendar"></i> {{ formatDate(discussion.createdAt) }}</span>
                    </div>
                  </div>
                </div>
                <div v-else class="text-center py-4">
                  <i class="bi bi-chat-text" style="font-size: 3rem; color: #ccc;"></i>
                  <p class="text-muted mt-2">Vous n'avez pas encore créé de discussion</p>
                  <b-button variant="primary" to="/create-discussion">
                    Créer une discussion
                  </b-button>
                </div>
              </b-tab>

              <!-- Statistics Tab -->
              <b-tab title="Statistiques">
                <div class="stats-grid">
                  <div class="stat-card">
                    <i class="bi bi-chat-dots"></i>
                    <h3>{{ myDiscussions?.length || 0 }}</h3>
                    <p>Discussions créées</p>
                  </div>
                  <div class="stat-card">
                    <i class="bi bi-chat-left-text"></i>
                    <h3>{{ myReplies?.length || 0 }}</h3>
                    <p>Réponses données</p>
                  </div>
                  <div class="stat-card">
                    <i class="bi bi-eye"></i>
                    <h3>{{ totalViews }}</h3>
                    <p>Vues totales</p>
                  </div>
                  <div class="stat-card">
                    <i class="bi bi-calendar"></i>
                    <h3>{{ memberSince }}</h3>
                    <p>Membre depuis</p>
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import getUser from '../composables/getUser'
import getCollection from '../composables/getCollection'
import { projectAuth } from '../firebase/config'

export default {
  name: 'Profile',
  setup() {
    const { user } = getUser()
    const router = useRouter()

    const displayName = ref(user.value?.displayName || '')
    const bio = ref('')
    const updatePending = ref(false)
    const updateError = ref(null)
    const updateSuccess = ref(false)
    
    const resetPending = ref(false)
    const resetError = ref(null)
    const resetSuccess = ref(false)

    const { documents: myDiscussions, isPending: myDiscussionsLoading } = getCollection(
      'discussions',
      ['authorId', '==', user.value?.uid]
    )

    const { documents: myReplies } = getCollection(
      'replies',
      ['authorId', '==', user.value?.uid]
    )

    const totalViews = computed(() => {
      if (!myDiscussions.value) return 0
      return myDiscussions.value.reduce((total, d) => total + (d.views || 0), 0)
    })

    const memberSince = computed(() => {
      if (!user.value?.metadata?.creationTime) return 'Récent'
      const date = new Date(user.value.metadata.creationTime)
      return date.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })
    })

    const updateProfile = async () => {
      updatePending.value = true
      updateError.value = null
      updateSuccess.value = false

      try {
        await user.value.updateProfile({
          displayName: displayName.value
        })
        updateSuccess.value = true
        setTimeout(() => {
          updateSuccess.value = false
        }, 3000)
      } catch (err) {
        updateError.value = err.message
      } finally {
        updatePending.value = false
      }
    }

    const sendPasswordReset = async () => {
      resetPending.value = true
      resetError.value = null
      resetSuccess.value = false

      try {
        await projectAuth.sendPasswordResetEmail(user.value.email)
        resetSuccess.value = true
      } catch (err) {
        resetError.value = err.message
      } finally {
        resetPending.value = false
      }
    }

    const formatDate = (timestamp) => {
      if (!timestamp) return ''
      return timestamp.toDate().toLocaleDateString('fr-FR')
    }

    const goToDiscussion = (id) => {
      router.push({ name: 'Discussion', params: { id } })
    }

    return {
      user,
      displayName,
      bio,
      updatePending,
      updateError,
      updateSuccess,
      resetPending,
      resetError,
      resetSuccess,
      myDiscussions,
      myDiscussionsLoading,
      myReplies,
      totalViews,
      memberSince,
      updateProfile,
      sendPasswordReset,
      formatDate,
      goToDiscussion
    }
  }
}
</script>

<style scoped>
.profile {
  padding: 40px 0;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.profile-avatar {
  font-size: 5rem;
  color: #667eea;
}

.profile-header h2 {
  margin: 0;
  color: #333;
}

.my-discussion-item {
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 3px solid #667eea;
}

.my-discussion-item:hover {
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transform: translateX(5px);
}

.my-discussion-item h5 {
  margin-bottom: 10px;
  color: #333;
}

.discussion-stats {
  display: flex;
  gap: 15px;
  font-size: 0.85rem;
  color: #666;
}

.discussion-stats span i {
  color: #667eea;
  margin-right: 5px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.stat-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.stat-card i {
  font-size: 3rem;
  margin-bottom: 15px;
  opacity: 0.9;
}

.stat-card h3 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.stat-card p {
  margin: 0;
  opacity: 0.9;
}
</style>
