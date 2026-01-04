<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    required: true
  },
  project: {
    type: Object,
    default: null
  },
  mode: {
    type: String,
    default: 'create' // 'create' or 'edit'
  }
})

const emit = defineEmits(['close', 'save'])

const formData = ref({
  name: '',
  description: '',
  color: '#3498db'
})

// Watch for project prop changes (when editing)
watch(() => props.project, (newProject) => {
  if (newProject && props.mode === 'edit') {
    formData.value = {
      name: newProject.name || '',
      description: newProject.description || '',
      color: newProject.color || '#3498db'
    }
  }
}, { immediate: true })

// Reset form when modal closes
watch(() => props.show, (isShow) => {
  if (!isShow && props.mode === 'create') {
    formData.value = {
      name: '',
      description: '',
      color: '#3498db'
    }
  }
})

const handleSubmit = () => {
  if (!formData.value.name.trim()) {
    alert('Le nom du projet est requis')
    return
  }
  emit('save', { ...formData.value })
  handleClose()
}

const handleClose = () => {
  emit('close')
  if (props.mode === 'create') {
    formData.value = {
      name: '',
      description: '',
      color: '#3498db'
    }
  }
}

const predefinedColors = [
  '#3498db', '#e74c3c', '#2ecc71', '#f39c12', 
  '#9b59b6', '#1abc9c', '#34495e', '#e67e22'
]
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-overlay" @click="handleClose">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <h3>{{ mode === 'create' ? 'Nouveau Projet' : 'Modifier le Projet' }}</h3>
          <button @click="handleClose" class="close-btn">&times;</button>
        </div>
        
        <form @submit.prevent="handleSubmit" class="modal-body">
          <div class="form-group">
            <label for="projectName">Nom du projet *</label>
            <input
              id="projectName"
              v-model="formData.name"
              type="text"
              placeholder="Ex: Site web e-commerce"
              required
              maxlength="100"
            />
          </div>

          <div class="form-group">
            <label for="projectDescription">Description</label>
            <textarea
              id="projectDescription"
              v-model="formData.description"
              placeholder="Décrivez votre projet..."
              rows="4"
              maxlength="500"
            ></textarea>
          </div>

          <div class="form-group">
            <label>Couleur distinctive</label>
            <div class="color-picker">
              <div
                v-for="color in predefinedColors"
                :key="color"
                class="color-option"
                :class="{ active: formData.color === color }"
                :style="{ backgroundColor: color }"
                @click="formData.color = color"
              ></div>
              <input
                v-model="formData.color"
                type="color"
                class="color-input"
                title="Choisir une couleur personnalisée"
              />
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" @click="handleClose" class="btn btn-secondary">
              Annuler
            </button>
            <button type="submit" class="btn btn-primary">
              {{ mode === 'create' ? 'Créer' : 'Enregistrer' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-container {
  background: white;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #ecf0f1;
}

.modal-header h3 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.5rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #95a5a6;
  line-height: 1;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #e74c3c;
}

.modal-body {
  padding: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 500;
}

.form-group input[type="text"],
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s;
}

.form-group input[type="text"]:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3498db;
}

.color-picker {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
}

.color-option {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  border: 3px solid transparent;
  transition: transform 0.2s, border-color 0.2s;
}

.color-option:hover {
  transform: scale(1.1);
}

.color-option.active {
  border-color: #2c3e50;
  transform: scale(1.15);
}

.color-input {
  width: 40px;
  height: 40px;
  border: 2px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 1rem;
  margin-top: 1rem;
  border-top: 1px solid #ecf0f1;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
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

/* Modal transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.9);
}
</style>
