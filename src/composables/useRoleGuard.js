// src/composables/useRoleGuard.js

import { useUserStore } from '@/stores/user.js'
import { useRouter } from 'vue-router'

/**
 * Normaliser les rôles pour gérer les variations possibles
 * @param {string} role - Rôle brut venant de l'API
 * @returns {string} - Rôle normalisé
 */
function normalizeRole(role) {
  if (!role) return 'client'
  
  const normalized = role.toLowerCase().trim()
  
  // Mapper les variations possibles
  const roleMapping = {
    'amo': 'amo',
    'AMO': 'amo',
    'assistant': 'amo',
    'maître d\'ouvrage': 'amo',
    'maitre d\'ouvrage': 'amo',
    'assistant_maitre_ouvrage': 'amo',
    
    'partenaire': 'partenaire',
    'partner': 'partenaire',
    'artisan': 'partenaire', // Backward compatibility
    'craftsman': 'partenaire',
    'entrepreneur': 'partenaire',
    
    'client': 'client',
    'customer': 'client',
    'user': 'client',
    'admin': 'admin'
  }
  
  return roleMapping[normalized] || 'client'
}

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

    // Normaliser le rôle de l'utilisateur
    const normalizedUserRole = normalizeRole(userStore.userType)

    // Convertir en array si c'est un string
    const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles]
    
    // Normaliser les rôles autorisés
    const normalizedAllowedRoles = roles.map(role => normalizeRole(role))
    
    console.log('🔧 Normalisation des rôles:', {
      originalUserRole: userStore.userType,
      normalizedUserRole: normalizedUserRole,
      originalAllowedRoles: roles,
      normalizedAllowedRoles: normalizedAllowedRoles
    })
    
    // Vérifier si le rôle de l'utilisateur est dans la liste des rôles autorisés
    return normalizedAllowedRoles.includes(normalizedUserRole)
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
    console.log('📄 Données utilisateur complètes:', userStore.currentUser)
    console.log('✅ Rôles autorisés:', allowedRoles)

    // Debug supplémentaire
    if (userStore.currentUser) {
      console.log('🔍 Champs role/type dans currentUser:', {
        role: userStore.currentUser.role,
        type: userStore.currentUser.type,
        userType: userStore.userType
      })
    }

    if (!hasPermission(allowedRoles)) {
      console.log('❌ Accès refusé - Redirection vers 404')
      console.log('🚨 Détails de l\'échec:', {
        isAuthenticated: userStore.isAuthenticated,
        userType: userStore.userType,
        allowedRoles: allowedRoles
      })
      
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
   * @param {string} dashboardType - Type de dashboard ('client', 'partenaire', 'amo')
   * @returns {boolean}
   */
  const canAccessDashboard = (dashboardType) => {
    const roleMapping = {
      'client': 'client',
      'partenaire': 'partenaire',
      'artisan': 'partenaire', // Backward compatibility
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
      'partenaire': '/partenaire-dashboard',
      'artisan': '/partenaire-dashboard', // Backward compatibility
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
  return async (to, from, next) => {
    const userStore = useUserStore()
    
    console.log(`🛡️ Navigation guard - Route: ${to.path}`)
    console.log(`👤 Utilisateur initial: ${userStore.isAuthenticated ? userStore.userType : 'non connecté'}`)
    console.log(`✅ Rôles autorisés:`, allowedRoles)

    // Fonction pour vérifier l'accès
    const checkAccess = () => {
      console.log(`📄 Store state final:`, {
        isAuthenticated: userStore.isAuthenticated,
        userType: userStore.userType,
        currentUser: userStore.currentUser
      })

      // Vérifier l'authentification
      if (!userStore.isAuthenticated) {
        console.log('❌ Non authentifié - Redirection vers 404')
        next('/404')
        return
      }

      // Debug supplémentaire pour voir le rôle exact
      if (userStore.currentUser) {
        console.log('🔍 Champs disponibles dans currentUser:', Object.keys(userStore.currentUser))
        console.log('🔍 Valeurs role/type:', {
          role: userStore.currentUser.role,
          type: userStore.currentUser.type,
          userType: userStore.userType
        })
      }

      // Vérifier les permissions avec normalisation des rôles
      const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles]
      const normalizedUserRole = normalizeRole(userStore.userType)
      const normalizedAllowedRoles = roles.map(role => normalizeRole(role))
      
      if (!normalizedAllowedRoles.includes(normalizedUserRole)) {
        console.log('❌ Rôle non autorisé - Redirection vers 404')
        console.log('🚨 Comparaison échouée:', {
          userRole: userStore.userType,
          normalizedUserRole: normalizedUserRole,
          allowedRoles: roles,
          normalizedAllowedRoles: normalizedAllowedRoles,
          match: normalizedAllowedRoles.includes(normalizedUserRole)
        })
        next('/404')
        return
      }

      console.log('✅ Accès autorisé')
      next()
    }

    // Si le store semble initialisé, vérifier directement
    if (userStore.isAuthenticated !== null && userStore.currentUser !== null) {
      checkAccess()
    } else {
      // Attendre un peu que le store se charge depuis localStorage
      console.log('⏳ Attente du chargement du store...')
      setTimeout(() => {
        checkAccess()
      }, 100)
    }
  }
}