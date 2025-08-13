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
  const isAMO = computed(() => userType.value === 'AMO' || userType.value === 'amo')
  const isPartenaire = computed(() => userType.value === 'partenaire')
  // Backward compatibility
  const isArtisan = computed(() => userType.value === 'artisan' || userType.value === 'partenaire')

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
        console.log('🔍 Debug rôles détaillé:', {
          'userData.role': userData.role,
          'userData.type': userData.type, 
          'userType.value': userType.value,
          'isAuthenticated': isAuthenticated.value,
          'Champs disponibles': Object.keys(userData)
        })
        
        // Démarrer la vérification automatique du token après connexion réussie
        startTokenCheck()
        
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
    
    // Arrêter la vérification automatique du token
    stopTokenCheck()
    
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
      
      console.log('✅ Utilisateur chargé depuis storage:', userData)
      console.log('🔍 Debug loadUserFromStorage rôles:', {
        'userData.role': userData.role,
        'userData.type': userData.type, 
        'userType.value': userType.value,
        'isAuthenticated': isAuthenticated.value
      })
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

  // ================================================
  // GESTION DE L'EXPIRATION DU TOKEN
  // ================================================
  
  // Variable pour gérer l'interval de vérification
  let tokenCheckInterval = null
  
  /**
   * Démarrer la vérification périodique du token
   */
  const startTokenCheck = () => {
    // Nettoyer l'ancien interval s'il existe
    if (tokenCheckInterval) {
      clearInterval(tokenCheckInterval)
    }
    
    console.log('🕒 Démarrage de la vérification automatique du token...')
    
    // Vérifier toutes les 5 minutes (300000 ms)
    tokenCheckInterval = setInterval(() => {
      console.log('🔍 Vérification automatique du token...')
      
      const tokenInfo = authService.getTokenInfo()
      
      if (!tokenInfo.valid) {
        console.log('⚠️ Token expiré ou invalide, déconnexion automatique...')
        logout()
        
        // Rediriger vers la page de connexion si pas déjà dessus
        if (window.location.pathname !== '/connexion' && window.location.pathname !== '/') {
          alert('⚠️ Votre session a expiré. Veuillez vous reconnecter.')
          window.location.href = '/connexion'
        }
      } else {
        // Calculer le temps restant en heures et minutes
        const hours = Math.floor(tokenInfo.timeRemaining / 3600)
        const minutes = Math.floor((tokenInfo.timeRemaining % 3600) / 60)
        
        console.log(`✅ Token valide - Temps restant: ${hours}h ${minutes}min`)
        
        // Avertir si moins de 1 heure restante (une seule fois)
        if (tokenInfo.timeRemaining <= 3600 && tokenInfo.timeRemaining > 3540) {
          console.log('⚠️ Avertissement: Session expire bientôt')
          
          // Proposer de renouveler la session
          if (confirm('⚠️ Votre session expire dans moins d\'1 heure. Voulez-vous la renouveler ?')) {
            // Optionnel : appeler une méthode pour renouveler le token
            refreshToken()
          }
        }
      }
    }, 5 * 60 * 1000) // Toutes les 5 minutes
  }
  
  /**
   * Arrêter la vérification périodique
   */
  const stopTokenCheck = () => {
    if (tokenCheckInterval) {
      clearInterval(tokenCheckInterval)
      tokenCheckInterval = null
      console.log('🛑 Vérification automatique du token arrêtée')
    }
  }
  
  /**
   * Renouveler le token (optionnel)
   */
  const refreshToken = async () => {
    try {
      console.log('🔄 Tentative de renouvellement du token...')
      
      // Si votre backend supporte le refresh token
      const response = await authService.makeRequest('/auth/refresh', {
        method: 'POST'
      })
      
      if (response.success && response.data.token) {
        // Mettre à jour le token
        localStorage.setItem('token', response.data.token)
        console.log('✅ Token renouvelé avec succès')
        return true
      }
    } catch (error) {
      console.error('❌ Erreur lors du renouvellement:', error)
      // Si le renouvellement échoue, déconnecter
      logout()
      return false
    }
  }

  // Initialiser au chargement du store
  loadUserFromStorage()
  
  // Si un utilisateur est déjà connecté, démarrer la vérification
  if (isAuthenticated.value) {
    startTokenCheck()
  }

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
    isAMO,
    isPartenaire,
    isArtisan,
    
    // Actions
    login,
    register,
    logout,
    updateProfile,
    loadUserFromStorage,
    
    // Gestion du token
    startTokenCheck,
    stopTokenCheck,
    refreshToken
  }
}) 