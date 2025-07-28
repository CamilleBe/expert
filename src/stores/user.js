import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  // État réactif
  const currentUser = ref(null)
  const isAuthenticated = ref(false)
  const userType = ref(null) // 'client' ou 'artisan'
  const loading = ref(false)
  const error = ref(null)

  // Getters (computed)
  const userName = computed(() => {
    if (!currentUser.value) return null
    return `${currentUser.value.firstName} ${currentUser.value.lastName}`
  })

  const isClient = computed(() => userType.value === 'client')
  const isArtisan = computed(() => userType.value === 'artisan')

  // Actions
  const login = async (credentials) => {
    loading.value = true
    error.value = null
    
    try {
      // Simulation d'un appel API - À remplacer par votre vraie API
      console.log('Tentative de connexion avec:', credentials)
      
      // Simuler une réponse d'API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Données utilisateur simulées
      const userData = {
        id: 1,
        firstName: 'Jean',
        lastName: 'Dupont',
        email: credentials.email,
        type: 'client', // ou 'artisan'
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      }
      
      currentUser.value = userData
      userType.value = userData.type
      isAuthenticated.value = true
      
      // Sauvegarder dans localStorage pour la persistance
      localStorage.setItem('user', JSON.stringify(userData))
      localStorage.setItem('isAuthenticated', 'true')
      
      return { success: true, user: userData }
    } catch (err) {
      error.value = err.message || 'Erreur de connexion'
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  const register = async (userData) => {
    loading.value = true
    error.value = null
    
    try {
      // Simulation d'un appel API - À remplacer par votre vraie API
      console.log('Tentative d\'inscription avec:', userData)
      
      // Simuler une réponse d'API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const newUser = {
        id: Date.now(), // ID temporaire
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        type: 'client', // Par défaut
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      }
      
      currentUser.value = newUser
      userType.value = newUser.type
      isAuthenticated.value = true
      
      // Sauvegarder dans localStorage
      localStorage.setItem('user', JSON.stringify(newUser))
      localStorage.setItem('isAuthenticated', 'true')
      
      return { success: true, user: newUser }
    } catch (err) {
      error.value = err.message || 'Erreur d\'inscription'
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  const logout = () => {
    currentUser.value = null
    isAuthenticated.value = false
    userType.value = null
    error.value = null
    
    // Nettoyer localStorage
    localStorage.removeItem('user')
    localStorage.removeItem('isAuthenticated')
  }

  const loadUserFromStorage = () => {
    const storedUser = localStorage.getItem('user')
    const storedAuth = localStorage.getItem('isAuthenticated')
    
    if (storedUser && storedAuth === 'true') {
      currentUser.value = JSON.parse(storedUser)
      userType.value = currentUser.value.type
      isAuthenticated.value = true
    }
  }

  const updateProfile = async (profileData) => {
    loading.value = true
    
    try {
      // Simulation d'un appel API
      await new Promise(resolve => setTimeout(resolve, 500))
      
      currentUser.value = { ...currentUser.value, ...profileData }
      localStorage.setItem('user', JSON.stringify(currentUser.value))
      
      return { success: true }
    } catch (err) {
      error.value = err.message || 'Erreur de mise à jour'
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  // Initialiser au chargement du store
  loadUserFromStorage()

  return {
    // État
    currentUser,
    isAuthenticated,
    userType,
    loading,
    error,
    
    // Getters
    userName,
    isClient,
    isArtisan,
    
    // Actions
    login,
    register,
    logout,
    updateProfile,
    loadUserFromStorage
  }
}) 