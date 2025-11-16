<template>
  <div class="home">
    <h1>Liste des Tâches</h1>
    <div class="add-job">
      <router-link to="/add" class="btn">Ajouter une Tâche</router-link>
    </div>
    <div class="jobs-list">
      <div v-for="job in jobs" :key="job.id" class="job-card">
        <div class="job-header">
          <h2>{{ job.title }}</h2>
          <span :class="['status', job.completed ? 'completed' : 'pending']">
            {{ job.completed ? 'Terminé' : 'En cours' }}
          </span>
        </div>
        <p class="description">{{ job.description }}</p>
        <div class="actions">
          <router-link :to="'/jobs/' + job.id" class="btn">Voir Détails</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Job {
  id: number
  title: string
  description: string
  completed: boolean
}

const jobs = ref<Job[]>([])

const fetchJobs = async () => {
  try {
    const response = await fetch('http://localhost:3000/jobs')
    const data = await response.json()
    jobs.value = data
  } catch (error) {
    console.error('Error fetching jobs:', error)
  }
}

onMounted(() => {
  fetchJobs()
})
</script>

<style scoped>
.home {
  padding: 20px;
}

.add-job {
  margin: 20px 0;
}

.jobs-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.job-card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.status {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.875rem;
}

.completed {
  background-color: #4caf50;
  color: white;
}

.pending {
  background-color: #ffc107;
  color: #000;
}

.description {
  color: #666;
  margin-bottom: 15px;
}

.btn {
  display: inline-block;
  padding: 8px 16px;
  background: #2196f3;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.btn:hover {
  background: #1976d2;
}

.actions {
  margin-top: 15px;
}
</style>
