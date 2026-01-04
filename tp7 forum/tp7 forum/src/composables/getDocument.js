import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

const getDocument = (collection, id) => {
  const document = ref(null)
  const error = ref(null)
  const isPending = ref(false)

  // register the firestore document reference
  let documentRef = projectFirestore.collection(collection).doc(id)

  const unsub = documentRef.onSnapshot(doc => {
    if (doc.data()) {
      document.value = {...doc.data(), id: doc.id}
      error.value = null
      isPending.value = false
    } else {
      error.value = 'That document does not exist'
      isPending.value = false
    }
  }, err => {
    console.log(err.message)
    error.value = 'Could not fetch the document'
    isPending.value = false
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
  })

  return { error, document, isPending }
}

export default getDocument
