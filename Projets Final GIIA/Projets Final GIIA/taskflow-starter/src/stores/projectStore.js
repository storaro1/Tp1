import { defineStore } from 'pinia'
import { ref } from 'vue'
import { db } from '@/firebase/config'
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  where, 
  onSnapshot,
  orderBy,
  serverTimestamp,
  getDocs
} from 'firebase/firestore'

export const useProjectStore = defineStore('project', () => {
  const projects = ref([])
  const currentProject = ref(null)
  const tasks = ref([])
  const loading = ref(false)
  const error = ref(null)
  
  let unsubscribeProjects = null
  let unsubscribeTasks = null

  // ============ PROJECT OPERATIONS ============

  // Listen to user's projects in real-time
  const listenToProjects = (userId) => {
    if (!userId) return

    loading.value = true
    error.value = null

    const q = query(
      collection(db, 'projects'),
      where('userId', '==', userId)
    )

    unsubscribeProjects = onSnapshot(
      q,
      (snapshot) => {
        projects.value = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })).sort((a, b) => {
          // Sort by createdAt descending (client-side)
          const aTime = a.createdAt?.seconds || 0
          const bTime = b.createdAt?.seconds || 0
          return bTime - aTime
        })
        loading.value = false
      },
      (err) => {
        console.error('Error listening to projects:', err)
        error.value = err.message
        loading.value = false
      }
    )
  }

  // Create a new project
  const createProject = async (userId, projectData) => {
    try {
      error.value = null
      const docRef = await addDoc(collection(db, 'projects'), {
        ...projectData,
        userId,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      })
      return { success: true, id: docRef.id }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    }
  }

  // Update project
  const updateProject = async (projectId, updates) => {
    try {
      error.value = null
      const projectRef = doc(db, 'projects', projectId)
      await updateDoc(projectRef, {
        ...updates,
        updatedAt: serverTimestamp()
      })
      return { success: true }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    }
  }

  // Delete project (and all its tasks)
  const deleteProject = async (projectId) => {
    try {
      error.value = null
      
      // Delete all tasks in the project
      const tasksQuery = query(collection(db, 'tasks'), where('projectId', '==', projectId))
      const tasksSnapshot = await getDocs(tasksQuery)
      const deletePromises = tasksSnapshot.docs.map(doc => deleteDoc(doc.ref))
      await Promise.all(deletePromises)
      
      // Delete the project
      const projectRef = doc(db, 'projects', projectId)
      await deleteDoc(projectRef)
      
      return { success: true }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    }
  }

  // ============ TASK OPERATIONS ============

  // Listen to tasks of a specific project in real-time
  const listenToTasks = (projectId) => {
    if (!projectId) return

    loading.value = true
    error.value = null

    const q = query(
      collection(db, 'tasks'),
      where('projectId', '==', projectId)
    )

    unsubscribeTasks = onSnapshot(
      q,
      (snapshot) => {
        tasks.value = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })).sort((a, b) => {
          // Sort by createdAt descending (client-side)
          const aTime = a.createdAt?.seconds || 0
          const bTime = b.createdAt?.seconds || 0
          return bTime - aTime
        })
        loading.value = false
      },
      (err) => {
        console.error('Error listening to tasks:', err)
        error.value = err.message
        loading.value = false
      }
    )
  }

  // Create a new task
  const createTask = async (projectId, taskData) => {
    try {
      error.value = null
      const docRef = await addDoc(collection(db, 'tasks'), {
        ...taskData,
        projectId,
        status: taskData.status || 'todo',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      })
      return { success: true, id: docRef.id }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    }
  }

  // Update task (including status change for drag & drop)
  const updateTask = async (taskId, updates) => {
    try {
      error.value = null
      const taskRef = doc(db, 'tasks', taskId)
      await updateDoc(taskRef, {
        ...updates,
        updatedAt: serverTimestamp()
      })
      return { success: true }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    }
  }

  // Delete task
  const deleteTask = async (taskId) => {
    try {
      error.value = null
      const taskRef = doc(db, 'tasks', taskId)
      await deleteDoc(taskRef)
      return { success: true }
    } catch (err) {
      error.value = err.message
      return { success: false, error: err.message }
    }
  }

  // Get tasks by status (for Kanban columns)
  const getTasksByStatus = (status) => {
    return tasks.value.filter(task => task.status === status)
  }

  // Cleanup listeners
  const cleanup = () => {
    if (unsubscribeProjects) {
      unsubscribeProjects()
      unsubscribeProjects = null
    }
    if (unsubscribeTasks) {
      unsubscribeTasks()
      unsubscribeTasks = null
    }
    projects.value = []
    tasks.value = []
    currentProject.value = null
  }

  return {
    projects,
    currentProject,
    tasks,
    loading,
    error,
    listenToProjects,
    createProject,
    updateProject,
    deleteProject,
    listenToTasks,
    createTask,
    updateTask,
    deleteTask,
    getTasksByStatus,
    cleanup
  }
})
