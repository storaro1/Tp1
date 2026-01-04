import { ref } from 'vue'
import { projectFirestore, timestamp } from '../firebase/config'

const useDiscussions = () => {
  const error = ref(null)
  const isPending = ref(false)

  // Create a new discussion
  const createDiscussion = async (discussion) => {
    error.value = null
    isPending.value = true
    
    try {
      const res = await projectFirestore.collection('discussions').add({
        ...discussion,
        createdAt: timestamp(),
        replies: 0,
        views: 0,
        reported: false,
        reportCount: 0
      })
      isPending.value = false
      return res
    } catch (err) {
      console.error(err.message)
      error.value = 'Could not create discussion'
      isPending.value = false
    }
  }

  // Update a discussion
  const updateDiscussion = async (id, updates) => {
    error.value = null
    isPending.value = true
    
    try {
      await projectFirestore.collection('discussions').doc(id).update({
        ...updates,
        updatedAt: timestamp()
      })
      isPending.value = false
    } catch (err) {
      console.error(err.message)
      error.value = 'Could not update discussion'
      isPending.value = false
    }
  }

  // Delete a discussion
  const deleteDiscussion = async (id) => {
    error.value = null
    isPending.value = true
    
    try {
      await projectFirestore.collection('discussions').doc(id).delete()
      // Also delete all replies
      const repliesSnapshot = await projectFirestore
        .collection('replies')
        .where('discussionId', '==', id)
        .get()
      
      const batch = projectFirestore.batch()
      repliesSnapshot.docs.forEach(doc => {
        batch.delete(doc.ref)
      })
      await batch.commit()
      
      isPending.value = false
    } catch (err) {
      console.error(err.message)
      error.value = 'Could not delete discussion'
      isPending.value = false
    }
  }

  // Increment view count
  const incrementViews = async (id) => {
    try {
      await projectFirestore.collection('discussions').doc(id).update({
        views: projectFirestore.FieldValue.increment(1)
      })
    } catch (err) {
      console.error('Could not increment views:', err.message)
    }
  }

  return { 
    error, 
    isPending, 
    createDiscussion, 
    updateDiscussion, 
    deleteDiscussion,
    incrementViews
  }
}

export default useDiscussions
