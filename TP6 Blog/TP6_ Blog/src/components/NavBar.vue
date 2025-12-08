<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-brand">
        <router-link to="/">Mon Blog</router-link>
      </div>
      <ul class="nav-links">
        <li>
          <router-link to="/" exact-active-class="active">Home</router-link>
        </li>
        <li>
          <router-link to="/posts/create" active-class="active">Ajouter un Post</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand a {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.nav-brand a:hover {
  transform: translateY(-2px);
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s;
}

.nav-links a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.nav-links a.active {
  background-color: rgba(255, 255, 255, 0.3);
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
