import { ref } from 'vue'

export interface Post {
  id: string
  title: string
  body: string
  tags: string[]
}

// JSON Server API URL
const API_URL = 'http://localhost:3000/posts'

export const getPosts = () => {
  const posts = ref<Post[]>([])
  const error = ref<string | null>(null)
  const loading = ref(false)

  const load = async () => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(API_URL)
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des articles')
      }
      posts.value = await response.json()
    } catch (err) {
      error.value = 'Erreur lors du chargement des articles'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return { posts, error, loading, load }
}

export const addPost = async (post: Omit<Post, 'id'>): Promise<Post> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })

  if (!response.ok) {
    throw new Error("Erreur lors de l'ajout de l'article")
  }

  return await response.json()
}

export const updatePost = async (
  id: string,
  updatedPost: Partial<Omit<Post, 'id'>>,
): Promise<Post | null> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedPost),
  })

  if (!response.ok) {
    throw new Error("Erreur lors de la mise à jour de l'article")
  }

  return await response.json()
}

export const deletePost = async (id: string): Promise<boolean> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error("Erreur lors de la suppression de l'article")
  }

  return true
}
