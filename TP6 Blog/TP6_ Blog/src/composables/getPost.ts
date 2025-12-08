import { ref } from 'vue'
import type { Post } from './getPosts'

// JSON Server API URL
const API_URL = 'http://localhost:3000/posts'

export const getPost = (id: string) => {
  const post = ref<Post | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(false)

  const load = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(`${API_URL}/${id}`)

      if (!response.ok) {
        if (response.status === 404) {
          error.value = 'Article non trouvé'
        } else {
          error.value = "Erreur lors du chargement de l'article"
        }
        return
      }

      post.value = await response.json()
    } catch (err) {
      error.value = "Erreur lors du chargement de l'article"
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return { post, error, loading, load }
}
