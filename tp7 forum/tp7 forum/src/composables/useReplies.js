import { ref } from 'vue'
import { projectFirestore, timestamp } from '../firebase/config'

const useReplies = () => {
  const error = ref(null)
  const isPending = ref(false)

  // Create a reply
  const createReply = async (reply) => {
    error.value = null
    isPending.value = true
    
    try {
      const res = await projectFirestore.collection('replies').add({
        ...reply,
        createdAt: timestamp(),
        reported: false,
        reportCount: 0
      })
      
      // Increment reply count on discussion
      await projectFirestore
        .collection('discussions')
        .doc(reply.discussionId)
        .update({
          replies: projectFirestore.FieldValue.increment(1),
          lastReplyAt: timestamp()
        })
      
      isPending.value = false
      return res
    } catch (err) {
      console.error(err.message)
      error.value = 'Could not create reply'
      isPending.value = false
    }
  }

  // Update a reply
  const updateReply = async (id, updates) => {
    error.value = null
    isPending.value = true
    
    try {
      await projectFirestore.collection('replies').doc(id).update({
        ...updates,
        updatedAt: timestamp()
      })
      isPending.value = false
    } catch (err) {
      console.error(err.message)
      error.value = 'Could not update reply'
      isPending.value = false
    }
  }

  // Delete a reply
  const deleteReply = async (id, discussionId) => {
    error.value = null
    isPending.value = true
    
    try {
      await projectFirestore.collection('replies').doc(id).delete()
      
      // Decrement reply count on discussion
      await projectFirestore
        .collection('discussions')
        .doc(discussionId)
        .update({
          replies: projectFirestore.FieldValue.increment(-1)
        })
      
      isPending.value = false
    } catch (err) {
      console.error(err.message)
      error.value = 'Could not delete reply'
      isPending.value = false
    }
  }

  return { 
    error, 
    isPending, 
    createReply, 
    updateReply, 
    deleteReply 
  }
}

export default useReplies
