<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useProjectStore } from '@/stores/projectStore'
import { useRouter } from 'vue-router'
import ProjectModal from '@/components/ProjectModal.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const authStore = useAuthStore()
const projectStore = useProjectStore()
const router = useRouter()

const showModal = ref(false)
const editingProject = ref(null)
const modalMode = ref('create')

onMounted(() => {
  if (authStore.user) {
    projectStore.listenToProjects(authStore.user.uid)
  }
})

onUnmounted(() => {
  projectStore.cleanup()
})

const openCreateModal = () => {
  modalMode.value = 'create'
  editingProject.value = null
  showModal.value = true
}

const openEditModal = (project) => {
  modalMode.value = 'edit'
  editingProject.value = project
  showModal.value = true
}

const handleSaveProject = async (projectData) => {
  if (modalMode.value === 'create') {
    await projectStore.createProject(authStore.user.uid, projectData)
  } else {
    await projectStore.updateProject(editingProject.value.id, projectData)
  }
  showModal.value = false
}

const handleDeleteProject = async (projectId) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce projet et toutes ses tâches ?')) {
    await projectStore.deleteProject(projectId)
  }
}

const goToProject = (projectId) => {
  router.push(`/project/${projectId}`)
}

const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2)
}
</script>

<template>
  <div class="dashboard">
    <div class="dashboard-header">
      <div>
        <h1>Mes Projets</h1>
        <p class="subtitle">Gérez tous vos projets en un seul endroit</p>
      </div>
      <button @click="openCreateModal" class="btn btn-primary">
        ➕ Nouveau Projet
      </button>
    </div>

    <LoadingSpinner v-if="projectStore.loading" message="Chargement des projets..." />

    <div v-else-if="projectStore.projects.length === 0" class="empty-state">
      <div class="empty-icon">📋</div>
      <h2>Aucun projet pour le moment</h2>
      <p>Créez votre premier projet pour commencer à organiser vos tâches</p>
      <button @click="openCreateModal" class="btn btn-primary">
        Créer mon premier projet
      </button>
    </div>

    <div v-else class="projects-grid">
      <div
        v-for="project in projectStore.projects"
        :key="project.id"
        class="project-card"
        :style="{ borderTopColor: project.color }"
      >
        <div class="project-header">
          <div class="project-avatar" :style="{ backgroundColor: project.color }">
            {{ getInitials(project.name) }}
          </div>
          <div class="project-actions">
            <button @click="openEditModal(project)" class="btn-icon" title="Modifier">
              ✏️
            </button>
            <button @click="handleDeleteProject(project.id)" class="btn-icon" title="Supprimer">
              🗑️
            </button>
          </div>
        </div>

        <h3 class="project-name">{{ project.name }}</h3>
        <p v-if="project.description" class="project-description">
          {{ project.description }}
        </p>
        <p v-else class="project-description empty">Aucune description</p>

        <div class="project-footer">
          <button @click="goToProject(project.id)" class="btn btn-secondary btn-block">
            Voir les tâches →
          </button>
        </div>
      </div>
    </div>

    <ProjectModal
      :show="showModal"
      :project="editingProject"
      :mode="modalMode"
      @close="showModal = false"
      @save="handleSaveProject"
    />
  </div>
</template>

<style scoped>
.dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.dashboard-header h1 {
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
}

.subtitle {
  color: #7f8c8d;
  margin: 0;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.empty-state h2 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.empty-state p {
  color: #7f8c8d;
  margin-bottom: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-top: 4px solid #3498db;
  transition: transform 0.2s, box-shadow 0.2s;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.project-avatar {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;
}

.project-actions {
  display: flex;
  gap: 0.25rem;
}

.btn-icon {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.125rem;
  padding: 0.25rem;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.btn-icon:hover {
  opacity: 1;
}

.project-name {
  color: #2c3e50;
  margin: 0 0 0.75rem 0;
  font-size: 1.25rem;
  font-weight: 600;
}

.project-description {
  color: #7f8c8d;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  min-height: 3em;
}

.project-description.empty {
  font-style: italic;
  opacity: 0.6;
}

.project-footer {
  padding-top: 1rem;
  border-top: 1px solid #ecf0f1;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-primary:hover {
  background: #2980b9;
  transform: translateY(-1px);
}

.btn-secondary {
  background: #ecf0f1;
  color: #2c3e50;
}

.btn-secondary:hover {
  background: #bdc3c7;
}

.btn-block {
  width: 100%;
}

@media (max-width: 768px) {
  .dashboard-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .dashboard-header h1 {
    font-size: 1.5rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>