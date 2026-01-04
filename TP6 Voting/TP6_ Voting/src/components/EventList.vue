<template>
  <div class="events-container">
    <div class="header">
      <h1>📋 Événements ENSA Safi</h1>
      <div class="user-info">
        <span>👤 {{ userEmail }}</span>
        <button @click="handleLogout" class="btn-danger">Déconnexion</button>
      </div>
    </div>
    
    <div v-if="loading" class="loading">
      Chargement des événements...
    </div>
    
    <div v-else-if="error" class="error">
      {{ error }}
    </div>
    
    <div v-else-if="events.length === 0" class="no-events">
      <p>Aucun événement disponible pour le moment.</p>
      <p>Revenez plus tard pour découvrir les prochains événements !</p>
    </div>
    
    <div v-else class="events-list">
      <EventCard 
        v-for="event in events" 
        :key="event.id" 
        :event="event"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { db, auth } from '../firebase/config'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import EventCard from './EventCard.vue'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  setup() {
    const router = useRouter()
    const events = ref([])
    const loading = ref(true)
    const error = ref(null)
    const userEmail = ref(auth.currentUser?.email || '')
    let unsubscribe = null

    const loadEvents = () => {
      try {
        const eventsRef = collection(db, 'events')
        const q = query(eventsRef, orderBy('date', 'asc'))
        
        // Écoute en temps réel
        unsubscribe = onSnapshot(q, (snapshot) => {
          events.value = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }))
          loading.value = false
        }, (err) => {
          console.error('Erreur lors du chargement des événements:', err)
          error.value = 'Erreur lors du chargement des événements'
          loading.value = false
        })
      } catch (err) {
        console.error('Erreur:', err)
        error.value = 'Erreur lors de la connexion à la base de données'
        loading.value = false
      }
    }

    const handleLogout = async () => {
      try {
        await signOut(auth)
        router.push('/login')
      } catch (err) {
        console.error('Erreur de déconnexion:', err)
      }
    }

    onMounted(() => {
      loadEvents()
    })

    onUnmounted(() => {
      if (unsubscribe) {
        unsubscribe()
      }
    })

    return {
      events,
      loading,
      error,
      userEmail,
      handleLogout
    }
  }
}
</script>

<style scoped>
.events-container {
  max-width: 900px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #646cff;
}

.header h1 {
  margin: 0;
  color: #646cff;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-info span {
  font-size: 0.9rem;
}

.loading,
.no-events {
  text-align: center;
  padding: 3rem;
  opacity: 0.7;
}

.no-events p {
  margin: 0.5rem 0;
}

.events-list {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .user-info {
    flex-direction: column;
  }
}
</style>
