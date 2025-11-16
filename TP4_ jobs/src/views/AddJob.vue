<template>
  <div class="add-job">
    <h1>Ajouter une Tâche</h1>
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
        <button type="submit" class="btn submit">Ajouter la Tâche</button>
        <router-link to="/" class="btn cancel">Annuler</router-link>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface JobForm {
  title: string
  description: string
  completed: boolean
}

const jobForm = ref<JobForm>({
  title: '',
  description: '',
  completed: false,
})

const submitJob = async () => {
  try {
    const response = await fetch('http://localhost:3000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobForm.value),
    })

    if (response.ok) {
      router.push('/')
    }
  } catch (error) {
    console.error('Error adding job:', error)
  }
}
</script>

<style scoped>
.add-job {
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

input[type='text'],
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

textarea {
  height: 100px;
  resize: vertical;
}

input[type='checkbox'] {
  margin-right: 8px;
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
  font-size: 1rem;
  transition: background-color 0.3s;
}

.btn.submit {
  background: #4caf50;
  color: white;
}

.btn.cancel {
  background: #f44336;
  color: white;
}

.btn:hover {
  opacity: 0.9;
}
</style>

<style scoped>
.add-job {
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
