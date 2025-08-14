// src/services/amoProjectService.js

import { API_CONFIG, buildUrl, getAuthHeaders } from '../utils/apiConfig.js'

class AmoProjectService {
  
  /**
   * Récupérer les nouveaux projets disponibles (statut brouillon)
   * @returns {Promise} - Promesse avec les projets disponibles
   */
  async getAvailableProjects() {
    try {
      console.log('🔔 Récupération des nouveaux projets disponibles...')
      
      const config = {
        method: 'GET',
        headers: getAuthHeaders()
      }
      
      const response = await fetch(buildUrl('/projets/status/brouillon'), config)
      console.log(`🌐 Statut de réponse projets brouillon: ${response.status} ${response.statusText}`)
      
      const textResponse = await response.text()
      console.log(`📄 Réponse brute projets brouillon: "${textResponse}"`)
      
      let data = {}
      if (textResponse.trim() !== '') {
        try {
          data = JSON.parse(textResponse)
        } catch (parseError) {
          console.error('❌ Erreur parsing JSON projets brouillon:', parseError)
          throw new Error(`Réponse invalide du serveur: ${textResponse.substring(0, 100)}`)
        }
      }
      
      if (!response.ok) {
        const error = new Error(data.message || `Erreur HTTP ${response.status}`)
        error.status = response.status
        error.data = data
        throw error
      }
      
      console.log('✅ Projets brouillon récupérés:', data.data?.length || 0)
      return data
      
    } catch (error) {
      console.error('❌ Erreur lors de la récupération des projets brouillon:', error)
      throw error
    }
  }
  
  /**
   * Accepter un projet (nouvel endpoint dédié)
   * @param {number} projectId - ID du projet à accepter
   * @returns {Promise} - Promesse avec la réponse de l'API
   */
  async acceptProject(projectId) {
    try {
      console.log('✅ Acceptation du projet:', projectId)
      
      const config = {
        method: 'POST',
        headers: getAuthHeaders()
      }
      
      const response = await fetch(buildUrl(`/projets/${projectId}/accept`), config)
      console.log(`🌐 Statut de réponse acceptation: ${response.status} ${response.statusText}`)
      
      const textResponse = await response.text()
      console.log(`📄 Réponse brute acceptation: "${textResponse}"`)
      
      let data = {}
      if (textResponse.trim() !== '') {
        try {
          data = JSON.parse(textResponse)
        } catch (parseError) {
          console.warn('⚠️ Impossible de parser la réponse JSON, mais acceptation potentiellement réussie')
          data = { message: 'Projet accepté avec succès' }
        }
      }
      
      if (!response.ok) {
        const error = new Error(data.message || `Erreur HTTP ${response.status}`)
        error.status = response.status
        error.data = data
        throw error
      }
      
      return {
        success: true,
        status: response.status,
        data: data,
        message: data.message || 'Projet accepté avec succès'
      }
      
    } catch (error) {
      console.error('❌ Erreur lors de l\'acceptation du projet:', error)
      throw error
    }
  }
  
  /**
   * Dashboard AMO - Récupérer mes projets acceptés
   * @returns {Promise} - Promesse avec les projets et statistiques AMO
   */
  async getMyAMOProjects() {
    try {
      console.log('📊 Récupération du dashboard AMO...')
      
      const config = {
        method: 'GET',
        headers: getAuthHeaders()
      }
      
      const response = await fetch(buildUrl('/projets/my-amo-projects'), config)
      console.log(`🌐 Statut de réponse dashboard AMO: ${response.status} ${response.statusText}`)
      
      const textResponse = await response.text()
      console.log(`📄 Réponse brute dashboard AMO: "${textResponse}"`)
      
      let data = {}
      if (textResponse.trim() !== '') {
        try {
          data = JSON.parse(textResponse)
        } catch (parseError) {
          console.error('❌ Erreur parsing JSON dashboard AMO:', parseError)
          throw new Error(`Réponse invalide du serveur: ${textResponse.substring(0, 100)}`)
        }
      }
      
      if (!response.ok) {
        const error = new Error(data.message || `Erreur HTTP ${response.status}`)
        error.status = response.status
        error.data = data
        throw error
      }
      
      console.log('✅ Dashboard AMO récupéré:', data.data)
      return data
      
    } catch (error) {
      console.error('❌ Erreur lors de la récupération du dashboard AMO:', error)
      throw error
    }
  }
  
  /**
   * Récupérer les projets d'un AMO spécifique (pour admin)
   * @param {number} amoId - ID de l'AMO
   * @returns {Promise} - Promesse avec les projets de l'AMO
   */
  async getProjectsByAMO(amoId) {
    try {
      console.log('📋 Récupération des projets AMO:', amoId)
      
      const config = {
        method: 'GET',
        headers: getAuthHeaders()
      }
      
      const response = await fetch(buildUrl(`/projets/amo/${amoId}`), config)
      console.log(`🌐 Statut de réponse projets AMO: ${response.status} ${response.statusText}`)
      
      const textResponse = await response.text()
      console.log(`📄 Réponse brute projets AMO: "${textResponse}"`)
      
      let data = {}
      if (textResponse.trim() !== '') {
        try {
          data = JSON.parse(textResponse)
        } catch (parseError) {
          console.error('❌ Erreur parsing JSON projets AMO:', parseError)
          throw new Error(`Réponse invalide du serveur: ${textResponse.substring(0, 100)}`)
        }
      }
      
      if (!response.ok) {
        const error = new Error(data.message || `Erreur HTTP ${response.status}`)
        error.status = response.status
        error.data = data
        throw error
      }
      
      console.log('✅ Projets AMO récupérés:', data.data?.length || 0)
      return data
      
    } catch (error) {
      console.error('❌ Erreur lors de la récupération des projets AMO:', error)
      throw error
    }
  }
  
  /**
   * Filtrer les projets par zone d'intervention (côté frontend)
   * @param {Array} projects - Liste des projets
   * @param {Array} amoZones - Zones d'intervention de l'AMO (codes postaux)
   * @returns {Array} - Projets filtrés
   */
  filterByZone(projects, amoZones) {
    if (!amoZones || amoZones.length === 0) {
      return projects
    }
    
    return projects.filter(project => 
      amoZones.some(zone => 
        project.postalCode && project.postalCode.startsWith(zone)
      )
    )
  }
  
  /**
   * Déterminer si un projet est récent (moins d'1 heure)
   * @param {Object} project - Projet à vérifier
   * @returns {boolean} - True si récent
   */
  isRecentProject(project) {
    if (!project.createdAt) return false
    
    const now = new Date()
    const created = new Date(project.createdAt)
    const diffMinutes = (now - created) / (1000 * 60)
    return diffMinutes < 60 // Nouveau si créé il y a moins d'1h
  }
  
  /**
   * Formater le budget d'un projet
   * @param {number} budget - Budget à formater
   * @returns {string} - Budget formaté
   */
  formatBudget(budget) {
    if (!budget) return 'Non spécifié'
    
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(budget)
  }
  
  /**
   * Formater une date en français
   * @param {string} dateString - Date ISO string
   * @returns {string} - Date formatée
   */
  formatDate(dateString) {
    if (!dateString) return 'Date inconnue'
    
    return new Date(dateString).toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }
}

// Exporter une instance unique du service (Singleton)
export default new AmoProjectService()