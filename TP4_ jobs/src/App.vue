<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/" class="logo">Job Board</router-link>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/add" class="nav-link">Post a Job</router-link>
      </div>
    </nav>
  </header>

  <main class="main">
    <RouterView />
  </main>

  <footer class="footer">
    <p>&copy; 2025 Job Board. All rights reserved.</p>
  </footer>
</template>

<style>
/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background: #f5f5f5;
  color: #333;
}

/* Layout */
.header {
  background: #2c3e50;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 120px);
}

.footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 1rem;
  margin-top: auto;
}

/* Common styles */
.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background: #2980b9;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* Responsive design */
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .nav-links {
    flex-direction: column;
  }

  .main {
    padding: 1rem;
  }
}
</style>
