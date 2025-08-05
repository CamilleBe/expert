import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import authService from '@/services/authService.js'

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
      console.log('🔐 Tentative de connexion avec:', credentials.email)
      
      // Appel réel à l'API via authService
      const response = await authService.login(credentials.email, credentials.password)
      
      console.log('✅ Réponse de connexion:', response)
      
      // Vérifier que la réponse contient les données utilisateur
      if (response.success && response.data && response.data.user) {
        const userData = response.data.user
        
        currentUser.value = userData
        userType.value = userData.role || userData.type || 'client' // Adapter selon la structure de votre API
        isAuthenticated.value = true
        
        // La sauvegarde est déjà faite par authService.login()
        // Mais on peut double-vérifier
        console.log('✅ Utilisateur connecté:', userData)
        
        return { success: true, user: userData }
      } else {
        throw new Error('Réponse de connexion invalide')
      }
      
    } catch (err) {
      console.error('❌ Erreur de connexion:', err)
      
      // Mapper les erreurs serveur aux messages appropriés
      let errorMessage = 'Erreur lors de la connexion'
      
      if (err.status) {
        switch (err.status) {
          case 400:
            errorMessage = 'Email et mot de passe sont requis'
            break
          case 401:
            // Distinguer entre identifiants invalides et compte désactivé
            if (err.data && err.data.message && err.data.message.includes('désactivé')) {
              errorMessage = 'Compte désactivé - Contactez l\'administrateur'
            } else {
              errorMessage = 'Email ou mot de passe incorrect'
            }
            break
          case 500:
            errorMessage = 'Erreur lors de la connexion'
            break
          default:
            errorMessage = err.message || 'Erreur lors de la connexion'
        }
      } else if (err.message) {
        errorMessage = err.message
      }
      
      error.value = errorMessage
      return { success: false, error: errorMessage }
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
    console.log('🚪 Déconnexion...')
    
    // Utiliser authService pour nettoyer proprement
    authService.logout()
    
    // Réinitialiser l'état du store
    currentUser.value = null
    isAuthenticated.value = false
    userType.value = null
    error.value = null
    
    console.log('✅ Déconnexion terminée')
  }

  const loadUserFromStorage = () => {
    console.log('🔄 Chargement utilisateur depuis le stockage...')
    
    // Utiliser authService pour vérifier l'authentification
    const isAuth = authService.isAuthenticated()
    const userData = authService.getCurrentUser()
    
    if (isAuth && userData) {
      currentUser.value = userData
      userType.value = userData.role || userData.type || 'client'
      isAuthenticated.value = true
      
      console.log('✅ Utilisateur chargé:', userData)
    } else {
      console.log('ℹ️ Aucun utilisateur connecté trouvé')
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