import { ref, computed, onMounted } from 'vue'
import authService from '../services/authService.js'

// État global de l'authentification
const user = ref(null)
const isAuthenticated = ref(false)
const loading = ref(false)

export function useAuth() {
  // Initialiser l'état au chargement
  const initAuth = () => {
    const token = authService.getToken()
    const userData = authService.getCurrentUser()
    
    if (token && userData) {
      user.value = userData
      isAuthenticated.value = true
    }
  }

  // Connexion
  const login = async (credentials) => {
    loading.value = true
    try {
      const result = await authService.login(credentials)
      user.value = result.user
      isAuthenticated.value = true
      return result
    } catch (error) {
      throw error
    } finally {
      loading.value = false
    }
  }

  // Inscription
  const register = async (userData) => {
    loading.value = true
    try {
      const result = await authService.register(userData)
      user.value = result.user
      isAuthenticated.value = true
      return result
    } catch (error) {
      throw error
    } finally {
      loading.value = false
    }
  }

  // Déconnexion
  const logout = async () => {
    try {
      await authService.logout()
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error)
    } finally {
      user.value = null
      isAuthenticated.value = false
    }
  }

  // Récupérer le profil utilisateur
  const fetchProfile = async () => {
    try {
      const profile = await authService.getProfile()
      user.value = profile
      return profile
    } catch (error) {
      console.error('Erreur lors de la récupération du profil:', error)
      throw error
    }
  }

  // Vérifier l'état d'authentification
  const checkAuthStatus = () => {
    const token = authService.getToken()
    const userData = authService.getCurrentUser()
    
    if (token && userData) {
      user.value = userData
      isAuthenticated.value = true
      return true
    } else {
      user.value = null
      isAuthenticated.value = false
      return false
    }
  }

  // Propriétés calculées
  const userRole = computed(() => user.value?.role || null)
  const userName = computed(() => {
    if (!user.value) return ''
    return `${user.value.firstName} ${user.value.lastName}`.trim()
  })

  // Initialiser lors du premier appel
  if (!user.value && !isAuthenticated.value) {
    initAuth()
  }

  return {
    // État
    user: computed(() => user.value),
    isAuthenticated: computed(() => isAuthenticated.value),
    loading: computed(() => loading.value),
    userRole,
    userName,
    
    // Méthodes
    login,
    register,
    logout,
    fetchProfile,
    checkAuthStatus,
    initAuth
  }
}