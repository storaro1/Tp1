<script setup>
defineProps({
  size: {
    type: String,
    default: 'medium' // 'small', 'medium', 'large'
  },
  message: {
    type: String,
    default: 'Chargement...'
  }
})

const sizeMap = {
  small: '24px',
  medium: '48px',
  large: '72px'
}
</script>

<template>
  <div class="loading-container">
    <div class="spinner" :style="{ width: sizeMap[size], height: sizeMap[size] }"></div>
    <p v-if="message" class="loading-message">{{ message }}</p>
  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-message {
  margin-top: 1rem;
  color: #7f8c8d;
  font-size: 0.875rem;
}
</style>
