// src/services/dashboardService.js

import { API_CONFIG, buildUrl, getAuthHeaders } from '../utils/apiConfig.js'
// Note: useErrorHandler ne peut pas être utilisé ici car c'est un service
// La gestion d'erreur sera faite dans les composants

class DashboardService {
  
  // ================================================
  // MÉTHODE UTILITAIRE POUR LES REQUÊTES
  // ================================================
  
  async makeRequest(endpoint, options = {}) {
    try {
      console.log(`🌐 Requête dashboard vers: ${buildUrl(endpoint)}`)
      console.log(`📤 Options:`, options)
      
      const config = {
        method: options.method || 'GET',
        headers: getAuthHeaders(),
        ...options
      }
      
      const response = await fetch(buildUrl(endpoint), config)
      
      // Pour les téléchargements de fichiers
      if (options.responseType === 'blob') {
        if (!response.ok) {
          throw new Error(`Erreur HTTP ${response.status}`)
        }
        return response
      }
      
      const data = await response.json()
      console.log(`📥 Réponse dashboard (${response.status}):`, data)
      
      if (!response.ok) {
        const error = new Error(data.message || `Erreur HTTP ${response.status}`)
        error.status = response.status
        error.data = data
        
        // Pour les erreurs 404 sur les routes dashboard, c'est normal 
        // (utilisateur n'a pas le bon rôle - route hidden)
        if (response.status === 404 && (endpoint.includes('/amo/') || endpoint.includes('/partenaire/'))) {
          console.log('🚫 Route dashboard non accessible (404 - route hidden)')
        }
        
        throw error
      }
      
      return data
      
    } catch (error) {
      console.error(`❌ Erreur requête dashboard ${endpoint}:`, error)
      throw error
    }
  }
  
  // ================================================
  // DASHBOARD AMO
  // ================================================
  
  /**
   * Récupérer les données du dashboard AMO
   */
  async getAmoDashboard() {
    return await this.makeRequest('/amo/dashboard')
  }
  
  /**
   * Récupérer les projets de l'AMO connecté
   */
  async getAmoProjets() {
    return await this.makeRequest('/amo/mes-projets')
  }
  
  /**
   * Récupérer la gestion des missions pour l'AMO
   */
  async getAmoMissions() {
    return await this.makeRequest('/amo/gestion-missions')
  }
  
  /**
   * Récupérer le profil AMO
   */
  async getAmoProfil() {
    return await this.makeRequest('/amo/profil')
  }
  
  /**
   * Upload de documents AMO
   */
  async uploadAmoDocuments(files, projectId = null) {
    try {
      console.log('📤 Upload documents AMO...', { filesCount: files.length, projectId })
      
      const formData = new FormData()
      
      Array.from(files).forEach((file) => {
        formData.append('documents', file)
      })
      
      if (projectId) {
        formData.append('projectId', projectId)
      }
      
      const headers = getAuthHeaders()
      delete headers['Content-Type'] // Laisser le navigateur définir le Content-Type
      
      return await this.makeRequest('/amo/documents/upload', {
        method: 'POST',
        headers,
        body: formData
      })
      
    } catch (error) {
      console.error('❌ Erreur upload documents AMO:', error)
      throw error
    }
  }
  
  /**
   * Récupérer les documents des clients (pour AMO)
   */
  async getAmoClientDocuments() {
    return await this.makeRequest('/amo/documents/client')
  }
  
  /**
   * Télécharger un document client (pour AMO)
   */
  async downloadAmoClientDocument(documentId, fileName) {
    try {
      const response = await this.makeRequest(`/amo/documents/client/${documentId}/download`, {
        method: 'GET',
        responseType: 'blob'
      })
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = fileName || `document-${documentId}`
      
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      window.URL.revokeObjectURL(url)
      
      return { success: true, message: 'Téléchargement réussi' }
      
    } catch (error) {
      console.error('❌ Erreur téléchargement document client:', error)
      throw error
    }
  }
  
  /**
   * Télécharger un document partenaire (pour AMO)
   */
  async downloadAmoPartenaireDocument(documentId, fileName) {
    try {
      const response = await this.makeRequest(`/amo/documents/partenaire/${documentId}/download`, {
        method: 'GET',
        responseType: 'blob'
      })
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = fileName || `document-${documentId}`
      
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      window.URL.revokeObjectURL(url)
      
      return { success: true, message: 'Téléchargement réussi' }
      
    } catch (error) {
      console.error('❌ Erreur téléchargement document partenaire:', error)
      throw error
    }
  }
  
  // ================================================
  // DASHBOARD PARTENAIRE
  // ================================================
  
  /**
   * Récupérer les données du dashboard partenaire
   */
  async getPartenaireDashboard() {
    return await this.makeRequest('/partenaire/dashboard')
  }
  
  /**
   * Récupérer les missions disponibles pour le partenaire
   */
  async getPartenaireMissionsDisponibles() {
    return await this.makeRequest('/partenaire/missions-disponibles')
  }
  
  /**
   * Récupérer les missions du partenaire connecté
   */
  async getPartenaireMissions() {
    return await this.makeRequest('/partenaire/mes-missions')
  }
  
  /**
   * Récupérer le profil partenaire
   */
  async getPartenaireProfil() {
    return await this.makeRequest('/partenaire/profil')
  }
  
  /**
   * Upload de documents partenaire
   */
  async uploadPartenaireDocuments(files, missionId = null) {
    try {
      console.log('📤 Upload documents partenaire...', { filesCount: files.length, missionId })
      
      const formData = new FormData()
      
      Array.from(files).forEach((file) => {
        formData.append('documents', file)
      })
      
      if (missionId) {
        formData.append('missionId', missionId)
      }
      
      const headers = getAuthHeaders()
      delete headers['Content-Type']
      
      return await this.makeRequest('/partenaire/documents/upload', {
        method: 'POST',
        headers,
        body: formData
      })
      
    } catch (error) {
      console.error('❌ Erreur upload documents partenaire:', error)
      throw error
    }
  }
  
  /**
   * Récupérer les documents AMO visibles pour le partenaire
   */
  async getPartenaireAmoDocuments() {
    return await this.makeRequest('/partenaire/documents/amo')
  }
  
  /**
   * Télécharger un document AMO (pour partenaire)
   */
  async downloadPartenaireAmoDocument(documentId, fileName) {
    try {
      const response = await this.makeRequest(`/partenaire/documents/amo/${documentId}/download`, {
        method: 'GET',
        responseType: 'blob'
      })
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = fileName || `document-${documentId}`
      
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      window.URL.revokeObjectURL(url)
      
      return { success: true, message: 'Téléchargement réussi' }
      
    } catch (error) {
      console.error('❌ Erreur téléchargement document AMO:', error)
      throw error
    }
  }
  
  // ================================================
  // GESTION D'ERREURS SPÉCIALISÉE
  // ================================================
  
  /**
   * Gestion spécialisée des erreurs 404 pour les routes hidden
   */
  handleHiddenRouteError(error) {
    if (error.status === 404) {
      console.log('🚫 Route dashboard non accessible - redirection vers 404')
      // L'erreur 404 indique que l'utilisateur n'a pas le bon rôle
      // mais on ne révèle pas l'existence de la route
      return {
        success: false,
        message: 'Page non trouvée',
        shouldRedirect: '/404'
      }
    }
    
    // Pour les autres erreurs, comportement normal
    return {
      success: false,
      message: error.message || 'Erreur lors de la requête',
      shouldRedirect: null
    }
  }
}

// Exporter une instance unique du service (Singleton)
export default new DashboardService()