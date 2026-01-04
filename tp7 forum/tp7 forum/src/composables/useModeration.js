import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useModeration = () => {
  const error = ref(null)
  const isPending = ref(false)

  // Report a discussion or reply
  const reportContent = async (collection, id) => {
    error.value = null
    isPending.value = true
    
    try {
      await projectFirestore.collection(collection).doc(id).update({
        reported: true,
        reportCount: projectFirestore.FieldValue.increment(1)
      })
      isPending.value = false
    } catch (err) {
      console.error(err.message)
      error.value = 'Could not report content'
      isPending.value = false
    }
  }

  // Unreport content (moderator action)
  const unreportContent = async (collection, id) => {
    error.value = null
    isPending.value = true
    
    try {
      await projectFirestore.collection(collection).doc(id).update({
        reported: false,
        reportCount: 0
      })
      isPending.value = false
    } catch (err) {
      console.error(err.message)
      error.value = 'Could not unreport content'
      isPending.value = false
    }
  }

  // Delete content (moderator action)
  const deleteContent = async (collection, id) => {
    error.value = null
    isPending.value = true
    
    try {
      await projectFirestore.collection(collection).doc(id).delete()
      isPending.value = false
    } catch (err) {
      console.error(err.message)
      error.value = 'Could not delete content'
      isPending.value = false
    }
  }

  return { 
    error, 
    isPending, 
    reportContent, 
    unreportContent,
    deleteContent
  }
}

export default useModeration
