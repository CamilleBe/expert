// src/composables/useRoleGuard.js

import { useUserStore } from '@/stores/user.js'
import { useRouter } from 'vue-router'

/**
 * Composable pour gérer la protection des routes basée sur les rôles
 * Redirige vers une page 404 si l'accès n'est pas autorisé (pour brouiller les pistes)
 */
export function useRoleGuard() {
  const userStore = useUserStore()
  const router = useRouter()

  /**
   * Vérifier si l'utilisateur a le rôle requis
   * @param {string|array} allowedRoles - Rôle(s) autorisé(s) pour accéder à la route
   * @returns {boolean} - True si l'accès est autorisé
   */
  const hasPermission = (allowedRoles) => {
    // Si pas d'utilisateur connecté, pas d'accès
    if (!userStore.isAuthenticated || !userStore.userType) {
      return false
    }

    // Convertir en array si c'est un string
    const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles]
    
    // Vérifier si le rôle de l'utilisateur est dans la liste des rôles autorisés
    return roles.includes(userStore.userType)
  }

  /**
   * Protéger une route en vérifiant les rôles autorisés
   * Redirige vers 404 si l'accès n'est pas autorisé
   * @param {string|array} allowedRoles - Rôle(s) autorisé(s)
   * @param {string} redirectTo - Route de redirection (par défaut: 404)
   */
  const guardRoute = (allowedRoles, redirectTo = '/404') => {
    console.log('🛡️ Vérification des permissions de route...')
    console.log('👤 Utilisateur connecté:', userStore.isAuthenticated)
    console.log('🎭 Rôle utilisateur:', userStore.userType)
    console.log('✅ Rôles autorisés:', allowedRoles)

    if (!hasPermission(allowedRoles)) {
      console.log('❌ Accès refusé - Redirection vers 404')
      
      // Petite temporisation pour éviter les redirections trop rapides
      setTimeout(() => {
        router.push(redirectTo)
      }, 100)
      
      return false
    }

    console.log('✅ Accès autorisé')
    return true
  }

  /**
   * Vérifier si l'utilisateur peut accéder à un dashboard spécifique
   * @param {string} dashboardType - Type de dashboard ('client', 'artisan', 'amo')
   * @returns {boolean}
   */
  const canAccessDashboard = (dashboardType) => {
    const roleMapping = {
      'client': 'client',
      'artisan': 'artisan', 
      'amo': 'amo'
    }

    const requiredRole = roleMapping[dashboardType]
    return hasPermission(requiredRole)
  }

  /**
   * Rediriger l'utilisateur vers le bon dashboard selon son rôle
   */
  const redirectToCorrectDashboard = () => {
    if (!userStore.isAuthenticated) {
      router.push('/connexion')
      return
    }

    const dashboardRoutes = {
      'client': '/dashboard',
      'artisan': '/artisan-dashboard',
      'amo': '/amo-dashboard'
    }

    const correctRoute = dashboardRoutes[userStore.userType]
    if (correctRoute && router.currentRoute.value.path !== correctRoute) {
      console.log(`🔄 Redirection vers le dashboard ${userStore.userType}:`, correctRoute)
      router.push(correctRoute)
    }
  }

  /**
   * Hook pour protéger automatiquement une route lors de l'entrée
   * À utiliser dans le composant avec onMounted
   * @param {string|array} allowedRoles - Rôles autorisés
   */
  const protectRoute = (allowedRoles) => {
    // Attendre que le store soit initialisé
    const checkAccess = () => {
      if (!guardRoute(allowedRoles)) {
        return false
      }
      return true
    }

    // Vérification immédiate
    if (userStore.isAuthenticated !== null) {
      return checkAccess()
    }

    // Si l'état d'auth n'est pas encore déterminé, attendre un peu
    setTimeout(() => {
      checkAccess()
    }, 500)

    return true
  }

  return {
    hasPermission,
    guardRoute,
    canAccessDashboard,
    redirectToCorrectDashboard,
    protectRoute
  }
}

// Fonction utilitaire pour les navigation guards du router
export function createRoleGuard(allowedRoles) {
  return (to, from, next) => {
    const userStore = useUserStore()
    
    console.log(`🛡️ Navigation guard - Route: ${to.path}`)
    console.log(`👤 Utilisateur: ${userStore.isAuthenticated ? userStore.userType : 'non connecté'}`)
    console.log(`✅ Rôles autorisés:`, allowedRoles)

    // Vérifier l'authentification
    if (!userStore.isAuthenticated) {
      console.log('❌ Non authentifié - Redirection vers 404')
      next('/404')
      return
    }

    // Vérifier les permissions
    const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles]
    if (!roles.includes(userStore.userType)) {
      console.log('❌ Rôle non autorisé - Redirection vers 404')
      next('/404')
      return
    }

    console.log('✅ Accès autorisé')
    next()
  }
}