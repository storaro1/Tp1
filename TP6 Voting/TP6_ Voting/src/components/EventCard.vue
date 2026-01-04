<template>
  <div class="event-card card">
    <div class="event-header">
      <img v-if="event.img" :src="event.img" :alt="event.title" class="event-img" />
      <div class="event-info">
        <h3>{{ event.title }}</h3>
        <p class="event-description">{{ event.description }}</p>
        <p class="event-date">📅 {{ formatDate(event.date) }}</p>
        <p class="event-price">
          {{ event.isFree ? '🎫 Gratuit' : `💰 ${event.price} DH` }}
        </p>
      </div>
    </div>
    
    <div class="vote-section">
      <div class="vote-stats">
        <div class="stat yes">
          <span class="stat-label">👍 Oui</span>
          <span class="stat-count">{{ event.yesVotes }}</span>
        </div>
        <div class="stat no">
          <span class="stat-label">👎 Non</span>
          <span class="stat-count">{{ event.noVotes }}</span>
        </div>
      </div>
      
      <div v-if="userVote" class="user-vote-info">
        Vous avez voté: <strong>{{ userVote === 'yes' ? 'Oui ✓' : 'Non ✗' }}</strong>
      </div>
      
      <div v-if="!userVote" class="vote-buttons">
        <button 
          @click="handleVote('yes')" 
          class="btn-success"
          :disabled="voting"
        >
          {{ voting ? 'Vote...' : '👍 Voter Oui' }}
        </button>
        <button 
          @click="handleVote('no')" 
          class="btn-danger"
          :disabled="voting"
        >
          {{ voting ? 'Vote...' : '👎 Voter Non' }}
        </button>
      </div>
      
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { db, auth } from '../firebase/config'
import { collection, addDoc, updateDoc, doc, query, where, getDocs, serverTimestamp } from 'firebase/firestore'

export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const userVote = ref(null)
    const voting = ref(false)
    const error = ref(null)

    const formatDate = (dateString) => {
      const date = new Date(dateString)
      return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }

    const checkUserVote = async () => {
      try {
        const votesRef = collection(db, 'votes')
        const q = query(
          votesRef,
          where('eventId', '==', props.event.id),
          where('userId', '==', auth.currentUser.uid)
        )
        const querySnapshot = await getDocs(q)
        
        if (!querySnapshot.empty) {
          userVote.value = querySnapshot.docs[0].data().vote
        }
      } catch (err) {
        console.error('Erreur lors de la vérification du vote:', err)
      }
    }

    const handleVote = async (voteType) => {
      error.value = null
      voting.value = true

      try {
        // Vérifier si l'utilisateur a déjà voté
        const votesRef = collection(db, 'votes')
        const q = query(
          votesRef,
          where('eventId', '==', props.event.id),
          where('userId', '==', auth.currentUser.uid)
        )
        const querySnapshot = await getDocs(q)

        if (!querySnapshot.empty) {
          error.value = 'Vous avez déjà voté pour cet événement'
          voting.value = false
          return
        }

        // Créer le vote
        await addDoc(collection(db, 'votes'), {
          eventId: props.event.id,
          userId: auth.currentUser.uid,
          vote: voteType,
          createdAt: serverTimestamp()
        })

        // Mettre à jour les compteurs
        const eventRef = doc(db, 'events', props.event.id)
        const updateData = {
          updatedAt: serverTimestamp()
        }

        if (voteType === 'yes') {
          updateData.yesVotes = props.event.yesVotes + 1
        } else {
          updateData.noVotes = props.event.noVotes + 1
        }

        await updateDoc(eventRef, updateData)
        
        userVote.value = voteType
      } catch (err) {
        console.error('Erreur lors du vote:', err)
        error.value = 'Erreur lors du vote. Veuillez réessayer.'
      } finally {
        voting.value = false
      }
    }

    onMounted(() => {
      checkUserVote()
    })

    return {
      userVote,
      voting,
      error,
      formatDate,
      handleVote
    }
  }
}
</script>

<style scoped>
.event-card {
  margin-bottom: 1.5rem;
}

.event-header {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.event-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.event-info {
  flex: 1;
}

.event-info h3 {
  margin-bottom: 0.5rem;
  color: #646cff;
}

.event-description {
  margin-bottom: 0.5rem;
  opacity: 0.8;
}

.event-date,
.event-price {
  margin: 0.25rem 0;
  font-size: 0.9rem;
}

.vote-section {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
  margin-top: 1rem;
}

.vote-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
}

.stat-count {
  font-size: 1.5rem;
  font-weight: bold;
}

.stat.yes .stat-count {
  color: #4caf50;
}

.stat.no .stat-count {
  color: #f44336;
}

.user-vote-info {
  padding: 0.75rem;
  background-color: rgba(100, 108, 255, 0.1);
  border-radius: 4px;
  text-align: center;
  margin-bottom: 1rem;
}

.vote-buttons {
  display: flex;
  gap: 1rem;
}

.vote-buttons button {
  flex: 1;
}

@media (max-width: 768px) {
  .event-header {
    flex-direction: column;
  }
  
  .event-img {
    width: 100%;
    height: 200px;
  }
  
  .vote-buttons {
    flex-direction: column;
  }
}
</style>
