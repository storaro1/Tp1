<template>
  <div class="edit-job" v-if="jobForm">
    <h1>Modifier la Tâche</h1>
    <form @submit.prevent="submitJob">
      <div class="form-group">
        <label for="title">Titre</label>
        <input
          type="text"
          id="title"
          v-model="jobForm.title"
          required
          placeholder="Entrez le titre de la tâche"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          id="description"
          v-model="jobForm.description"
          required
          placeholder="Décrivez la tâche"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="completed">
          <input type="checkbox" id="completed" v-model="jobForm.completed" />
          Tâche terminée
        </label>
      </div>

      <div class="actions">
        <button type="submit" class="btn submit">Mettre à jour</button>
        <router-link :to="'/jobs/' + id" class="btn cancel">Annuler</router-link>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const id = route.params.id

interface JobForm {
  title: string
  description: string
  completed: boolean
}

const jobForm = ref<JobForm | null>(null)

const fetchJob = async () => {
  try {
    const response = await fetch(`http://localhost:3000/jobs/${id}`)
    const data = await response.json()
    jobForm.value = {
      title: data.title,
      description: data.description,
      completed: data.completed,
    }
  } catch (error) {
    console.error('Error fetching job:', error)
  }
}

const submitJob = async () => {
  if (!jobForm.value) return

  try {
    const response = await fetch(`http://localhost:3000/jobs/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobForm.value),
    })

    if (response.ok) {
      router.push(`/jobs/${id}`)
    }
  } catch (error) {
    console.error('Error updating job:', error)
  }
}

onMounted(() => {
  fetchJob()
})
</script>

<style scoped>
.edit-job {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

textarea {
  height: 100px;
}

.btn {
  padding: 8px 16px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  margin-right: 10px;
}

.btn.cancel {
  background: #f44336;
}

.btn:hover {
  opacity: 0.9;
}
</style>
