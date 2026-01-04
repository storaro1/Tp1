<template>
  <div id="app">
    <Navbar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import getUser from './composables/getUser'

export default {
  name: 'App',
  components: { Navbar },
  setup() {
    const { user } = getUser()
    return { user }
  }
}
</script>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background: #f5f7fa;
}

.main-content {
  padding-top: 70px;
  min-height: calc(100vh - 70px);
}
</style>
