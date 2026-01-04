import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap and BootstrapVueNext
import { createBootstrap } from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// Global styles
import './assets/main.css'

// Firebase
import { projectAuth } from './firebase/config'

let app

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .use(createBootstrap())
      .mount('#app')
  }
})
