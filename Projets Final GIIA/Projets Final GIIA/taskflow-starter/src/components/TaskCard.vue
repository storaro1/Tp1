<script setup>
defineProps({
  task: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['delete', 'edit', 'statusChange'])

const formatDate = (dateString) => {
  if (!dateString) return 'Pas de date limite'
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR')
}

const getStatusColor = (status) => {
  const colors = {
    todo: '#3498db',
    doing: '#f39c12',
    done: '#27ae60'
  }
  return colors[status] || '#95a5a6'
}
</script>

<template>
  <div class="task-card" :style="{ borderLeftColor: getStatusColor(task.status) }">
    <div class="task-header">
      <h4>{{ task.title }}</h4>
      <div class="task-actions">
        <button @click="$emit('edit', task)" class="btn-icon" title="Modifier">
          ✏️
        </button>
        <button @click="$emit('delete', task.id)" class="btn-icon" title="Supprimer">
          🗑️
        </button>
      </div>
    </div>
    
    <p v-if="task.description" class="task-description">{{ task.description }}</p>
    
    <div class="task-footer">
      <span class="task-deadline">📅 {{ formatDate(task.deadline) }}</span>
      <select 
        :value="task.status" 
        @change="$emit('statusChange', task.id, $event.target.value)"
        class="status-select"
      >
        <option value="todo">À faire</option>
        <option value="doing">En cours</option>
        <option value="done">Terminé</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.task-card {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-left: 4px solid #3498db;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: move;
}

.task-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.task-header h4 {
  margin: 0;
  font-size: 1rem;
  color: #2c3e50;
  flex: 1;
}

.task-actions {
  display: flex;
  gap: 0.25rem;
}

.btn-icon {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.btn-icon:hover {
  opacity: 1;
}

.task-description {
  color: #7f8c8d;
  font-size: 0.875rem;
  margin: 0.5rem 0;
  line-height: 1.4;
}

.task-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #ecf0f1;
}

.task-deadline {
  font-size: 0.75rem;
  color: #95a5a6;
}

.status-select {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}

.status-select:focus {
  outline: none;
  border-color: #3498db;
}
</style>
