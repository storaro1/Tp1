<template>
  <div class="job-detail" v-if="job">
    <h1>{{ job.title }}</h1>
    <div class="job-info">
      <div class="status-banner" :class="{ completed: job.completed }">
        {{ job.completed ? 'Tâche Terminée' : 'Tâche en Cours' }}
      </div>
      <p class="description">{{ job.description }}</p>
    </div>

    <div class="actions">
      <router-link :to="'/jobs/' + job.id + '/edit'" class="btn edit">Modifier</router-link>
      <button @click="toggleStatus" class="btn toggle">
        {{ job.completed ? 'Marquer comme Non Terminée' : 'Marquer comme Terminée' }}
      </button>
      <button @click="confirmDelete" class="btn delete">Supprimer</button>
      <router-link to="/" class="btn back">Retour à la Liste</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

interface Job {
  id: number
  title: string
  description: string
  completed: boolean
}

const job = ref<Job | null>(null)

const fetchJob = async () => {
  try {
    const response = await fetch(`http://localhost:3000/jobs/${route.params.id}`)
    const data = await response.json()
    job.value = data
  } catch (error) {
    console.error('Error fetching job:', error)
  }
}

const toggleStatus = async () => {
  if (!job.value) return

  try {
    const response = await fetch(`http://localhost:3000/jobs/${route.params.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        completed: !job.value.completed,
      }),
    })

    if (response.ok) {
      job.value.completed = !job.value.completed
    }
  } catch (error) {
    console.error('Error updating job status:', error)
  }
}

const confirmDelete = async () => {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
    try {
      const response = await fetch(`http://localhost:3000/jobs/${route.params.id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        router.push('/')
      }
    } catch (error) {
      console.error('Error deleting job:', error)
    }
  }
}

onMounted(() => {
  fetchJob()
})
</script>

<style scoped>
.job-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.job-info {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.description {
  white-space: pre-line;
  margin-bottom: 20px;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  color: white;
}

.btn.edit {
  background: #2196f3;
}

.btn.delete {
  background: #f44336;
}

.btn.back {
  background: #757575;
}

.btn:hover {
  opacity: 0.9;
}
</style>
