<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'
import { useProjectStore } from '@/stores/projectStore'
import TaskCard from '@/components/TaskCard.vue'
import TaskModal from '@/components/TaskModal.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const projectStore = useProjectStore()

const showTaskModal = ref(false)
const editingTask = ref(null)
const modalMode = ref('create')
const draggedTask = ref(null)

const projectId = computed(() => route.params.id)

const currentProject = computed(() => {
  return projectStore.projects.find(p => p.id === projectId.value)
})

const todoTasks = computed(() => projectStore.getTasksByStatus('todo'))
const doingTasks = computed(() => projectStore.getTasksByStatus('doing'))
const doneTasks = computed(() => projectStore.getTasksByStatus('done'))

onMounted(() => {
  if (projectId.value) {
    projectStore.listenToTasks(projectId.value)
    
    // If we don't have projects loaded, load them to get current project info
    if (projectStore.projects.length === 0 && authStore.user) {
      projectStore.listenToProjects(authStore.user.uid)
    }
  }
})

onUnmounted(() => {
  projectStore.cleanup()
})

const openCreateModal = () => {
  modalMode.value = 'create'
  editingTask.value = null
  showTaskModal.value = true
}

const openEditModal = (task) => {
  modalMode.value = 'edit'
  editingTask.value = task
  showTaskModal.value = true
}

const handleSaveTask = async (taskData) => {
  if (modalMode.value === 'create') {
    await projectStore.createTask(projectId.value, taskData)
  } else {
    await projectStore.updateTask(editingTask.value.id, taskData)
  }
  showTaskModal.value = false
}

const handleDeleteTask = async (taskId) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
    await projectStore.deleteTask(taskId)
  }
}

const handleStatusChange = async (taskId, newStatus) => {
  await projectStore.updateTask(taskId, { status: newStatus })
}

const goBack = () => {
  router.push('/dashboard')
}

// Drag and Drop handlers
const handleDragStart = (task) => {
  draggedTask.value = task
}

const handleDragOver = (event) => {
  event.preventDefault()
}

const handleDrop = async (newStatus) => {
  if (draggedTask.value && draggedTask.value.status !== newStatus) {
    await projectStore.updateTask(draggedTask.value.id, { status: newStatus })
  }
  draggedTask.value = null
}

const getColumnColor = (status) => {
  const colors = {
    todo: '#3498db',
    doing: '#f39c12',
    done: '#27ae60'
  }
  return colors[status] || '#95a5a6'
}
</script>

<template>
  <div class="project-details">
    <div class="project-header">
      <button @click="goBack" class="btn-back">← Retour</button>
      <div v-if="currentProject" class="project-info">
        <div class="project-color-badge" :style="{ backgroundColor: currentProject.color }"></div>
        <div>
          <h1>{{ currentProject.name }}</h1>
          <p v-if="currentProject.description" class="project-desc">
            {{ currentProject.description }}
          </p>
        </div>
      </div>
      <button @click="openCreateModal" class="btn btn-primary">
        ➕ Nouvelle Tâche
      </button>
    </div>

    <LoadingSpinner v-if="projectStore.loading" message="Chargement des tâches..." />

    <div v-else class="kanban-board">
      <!-- TODO Column -->
      <div 
        class="kanban-column"
        :style="{ borderTopColor: getColumnColor('todo') }"
        @dragover="handleDragOver"
        @drop="handleDrop('todo')"
      >
        <div class="column-header">
          <h3>
            <span class="status-dot" :style="{ backgroundColor: getColumnColor('todo') }"></span>
            À faire
          </h3>
          <span class="task-count">{{ todoTasks.length }}</span>
        </div>
        <div class="column-content">
          <div
            v-for="task in todoTasks"
            :key="task.id"
            draggable="true"
            @dragstart="handleDragStart(task)"
          >
            <TaskCard
              :task="task"
              @delete="handleDeleteTask"
              @edit="openEditModal"
              @statusChange="handleStatusChange"
            />
          </div>
          <p v-if="todoTasks.length === 0" class="empty-column">
            Aucune tâche à faire
          </p>
        </div>
      </div>

      <!-- DOING Column -->
      <div 
        class="kanban-column"
        :style="{ borderTopColor: getColumnColor('doing') }"
        @dragover="handleDragOver"
        @drop="handleDrop('doing')"
      >
        <div class="column-header">
          <h3>
            <span class="status-dot" :style="{ backgroundColor: getColumnColor('doing') }"></span>
            En cours
          </h3>
          <span class="task-count">{{ doingTasks.length }}</span>
        </div>
        <div class="column-content">
          <div
            v-for="task in doingTasks"
            :key="task.id"
            draggable="true"
            @dragstart="handleDragStart(task)"
          >
            <TaskCard
              :task="task"
              @delete="handleDeleteTask"
              @edit="openEditModal"
              @statusChange="handleStatusChange"
            />
          </div>
          <p v-if="doingTasks.length === 0" class="empty-column">
            Aucune tâche en cours
          </p>
        </div>
      </div>

      <!-- DONE Column -->
      <div 
        class="kanban-column"
        :style="{ borderTopColor: getColumnColor('done') }"
        @dragover="handleDragOver"
        @drop="handleDrop('done')"
      >
        <div class="column-header">
          <h3>
            <span class="status-dot" :style="{ backgroundColor: getColumnColor('done') }"></span>
            Terminé
          </h3>
          <span class="task-count">{{ doneTasks.length }}</span>
        </div>
        <div class="column-content">
          <div
            v-for="task in doneTasks"
            :key="task.id"
            draggable="true"
            @dragstart="handleDragStart(task)"
          >
            <TaskCard
              :task="task"
              @delete="handleDeleteTask"
              @edit="openEditModal"
              @statusChange="handleStatusChange"
            />
          </div>
          <p v-if="doneTasks.length === 0" class="empty-column">
            Aucune tâche terminée
          </p>
        </div>
      </div>
    </div>

    <TaskModal
      :show="showTaskModal"
      :task="editingTask"
      :mode="modalMode"
      @close="showTaskModal = false"
      @save="handleSaveTask"
    />
  </div>
</template>

<style scoped>
.project-details {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-back {
  background: #ecf0f1;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: #2c3e50;
  transition: all 0.2s;
}

.btn-back:hover {
  background: #bdc3c7;
  transform: translateX(-2px);
}

.project-info {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.project-color-badge {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  flex-shrink: 0;
}

.project-info h1 {
  color: #2c3e50;
  margin: 0 0 0.25rem 0;
  font-size: 1.75rem;
}

.project-desc {
  color: #7f8c8d;
  margin: 0;
  font-size: 0.95rem;
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

.kanban-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  align-items: start;
}

.kanban-column {
  background: #f8f9fa;
  border-radius: 12px;
  border-top: 4px solid;
  min-height: 500px;
  display: flex;
  flex-direction: column;
}

.column-header {
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #e0e0e0;
  background: white;
  border-radius: 12px 12px 0 0;
}

.column-header h3 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.task-count {
  background: #e0e0e0;
  color: #2c3e50;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 600;
}

.column-content {
  padding: 1rem;
  flex: 1;
  overflow-y: auto;
  max-height: calc(100vh - 300px);
}

.empty-column {
  text-align: center;
  color: #95a5a6;
  font-style: italic;
  padding: 2rem 1rem;
}

@media (max-width: 1024px) {
  .kanban-board {
    grid-template-columns: 1fr;
  }
  
  .kanban-column {
    min-height: auto;
  }
  
  .column-content {
    max-height: none;
  }
}

@media (max-width: 768px) {
  .project-header {
    flex-direction: column;
    align-items: stretch;
  }
  
  .project-info {
    order: -1;
  }
  
  .project-info h1 {
    font-size: 1.5rem;
  }
}
</style>
