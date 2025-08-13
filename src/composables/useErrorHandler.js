// src/composables/useErrorHandler.js

import { useRouter } from 'vue-router'

/**
 * Composable pour gérer les erreurs API, notamment les routes hidden qui retournent 404
 */
export function useErrorHandler() {
  const router = useRouter()

  /**
   * Gérer les erreurs de façon appropriée selon le type d'erreur
   * @param {Error} error - L'erreur à traiter
   * @param {string} context - Le contexte de l'erreur (dashboard, documents, etc.)
   * @returns {object} - Informations sur la façon de traiter l'erreur
   */
  const handleError = (error, context = '') => {
    console.error(`❌ Erreur ${context}:`, error)

    // Erreurs 404 pour les routes hidden (dashboard)
    if (error.status === 404) {
      console.log('🚫 Route non accessible - utilisateur non autorisé')
      
      // Pour les routes dashboard, rediriger vers 404 
      // (cela masque l'existence de la route aux utilisateurs non autorisés)
      if (context.includes('dashboard') || context.includes('amo') || context.includes('partenaire')) {
        return {
          shouldRedirect: true,
          redirectPath: '/404',
          userMessage: null, // Pas de message d'erreur pour ne pas révéler l'existence
          logMessage: `Route ${context} masquée pour utilisateur non autorisé`
        }
      }
      
      // Pour les autres 404, traitement normal
      return {
        shouldRedirect: false,
        redirectPath: null,
        userMessage: 'Ressource non trouvée',
        logMessage: `Ressource ${context} non trouvée`
      }
    }

    // Erreurs 401 - Non authentifié
    if (error.status === 401) {
      console.log('🔐 Utilisateur non authentifié')
      return {
        shouldRedirect: true,
        redirectPath: '/connexion',
        userMessage: 'Veuillez vous connecter pour accéder à cette ressource',
        logMessage: `Authentification requise pour ${context}`
      }
    }

    // Erreurs 403 - Accès refusé (pour les routes normales)
    if (error.status === 403) {
      console.log('⛔ Accès refusé')
      return {
        shouldRedirect: false,
        redirectPath: null,
        userMessage: 'Vous n\'avez pas les permissions pour accéder à cette ressource',
        logMessage: `Accès refusé pour ${context}`
      }
    }

    // Erreurs 500 - Erreur serveur
    if (error.status === 500) {
      console.log('🚨 Erreur serveur')
      return {
        shouldRedirect: false,
        redirectPath: null,
        userMessage: 'Erreur serveur. Veuillez réessayer plus tard.',
        logMessage: `Erreur serveur pour ${context}`
      }
    }

    // Erreurs réseau ou autres
    if (!error.status) {
      console.log('🌐 Erreur réseau')
      return {
        shouldRedirect: false,
        redirectPath: null,
        userMessage: 'Erreur de connexion. Vérifiez votre réseau.',
        logMessage: `Erreur réseau pour ${context}`
      }
    }

    // Erreur générique
    return {
      shouldRedirect: false,
      redirectPath: null,
      userMessage: error.message || 'Une erreur est survenue',
      logMessage: `Erreur générique pour ${context}: ${error.message}`
    }
  }

  /**
   * Traiter une erreur et exécuter les actions appropriées
   * @param {Error} error - L'erreur à traiter
   * @param {string} context - Le contexte de l'erreur
   * @param {function} onError - Callback optionnel pour traiter l'erreur
   */
  const processError = async (error, context = '', onError = null) => {
    const errorInfo = handleError(error, context)
    
    console.log('🔍 Traitement erreur:', errorInfo)

    // Redirection si nécessaire
    if (errorInfo.shouldRedirect && errorInfo.redirectPath) {
      console.log(`🔄 Redirection vers: ${errorInfo.redirectPath}`)
      
      // Petite temporisation pour éviter les redirections trop rapides
      setTimeout(() => {
        router.push(errorInfo.redirectPath)
      }, 100)
    }

    // Message utilisateur si fourni
    if (errorInfo.userMessage && onError) {
      onError(errorInfo.userMessage)
    }

    // Log de l'erreur
    if (errorInfo.logMessage) {
      console.log(`📝 ${errorInfo.logMessage}`)
    }

    return errorInfo
  }

  /**
   * Wrapper pour les appels API qui gère automatiquement les erreurs
   * @param {function} apiCall - La fonction d'appel API
   * @param {string} context - Le contexte de l'appel
   * @param {function} onError - Callback pour gérer les erreurs utilisateur
   * @returns {Promise} - Résultat de l'appel API ou null en cas d'erreur
   */
  const safeApiCall = async (apiCall, context = '', onError = null) => {
    try {
      return await apiCall()
    } catch (error) {
      await processError(error, context, onError)
      return null
    }
  }

  /**
   * Vérifier si une erreur nécessite une redirection masquée (404 pour route hidden)
   * @param {Error} error - L'erreur à vérifier
   * @param {string} context - Le contexte
   * @returns {boolean} - True si c'est une erreur de route hidden
   */
  const isHiddenRouteError = (error, context) => {
    return error.status === 404 && 
           (context.includes('dashboard') || 
            context.includes('amo') || 
            context.includes('partenaire'))
  }

  return {
    handleError,
    processError,
    safeApiCall,
    isHiddenRouteError
  }
}