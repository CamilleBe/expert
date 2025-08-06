// src/services/projetService.js

import { API_CONFIG, buildUrl, getAuthHeaders } from '../utils/apiConfig.js'

class ProjetService {
  
  /**
   * Récupérer les projets du client connecté
   * @returns {Promise} - Promesse avec la liste des projets
   */
  async getClientProjects() {
    try {
      console.log('📋 Récupération des projets du client...')
      
      // Configuration de la requête
      const config = {
        method: 'GET',
        headers: getAuthHeaders()
      }
      
      // Faire la requête vers l'endpoint projets du client
      const response = await fetch(buildUrl('/projets'), config)
      
      // Parser la réponse JSON
      const data = await response.json()
      
      console.log(`📥 Réponse projets client (${response.status}):`, data)
      
      // Vérifier si la requête a réussi
      if (!response.ok) {
        // Créer une erreur avec le message du serveur
        const error = new Error(data.message || `Erreur HTTP ${response.status}`)
        error.status = response.status
        error.data = data
        throw error
      }
      
      // Retourner les projets (soit data directement soit data.data selon la structure de l'API)
      return data.data || data
      
    } catch (error) {
      console.error('❌ Erreur lors de la récupération des projets:', error)
      throw error
    }
  }
  
  /**
   * Créer un nouveau projet
   * @param {object} projetData - Données du projet
   * @returns {Promise} - Promesse avec la réponse de l'API
   */
  async createProject(projetData) {
    try {
      console.log('🏗️ Création d\'un nouveau projet:', projetData)
      
      // Configuration de la requête
      const config = {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify(projetData)
      }
      
      // Faire la requête vers l'endpoint projets
      const response = await fetch(buildUrl('/projets'), config)
      
      // Parser la réponse JSON
      const data = await response.json()
      
      console.log(`📥 Réponse création projet (${response.status}):`, data)
      
      // Vérifier si la requête a réussi
      if (!response.ok) {
        // Créer une erreur avec le message du serveur
        const error = new Error(data.message || `Erreur HTTP ${response.status}`)
        error.status = response.status
        error.data = data
        error.errors = data.errors // Pour les erreurs de validation
        throw error
      }
      
      return data
      
    } catch (error) {
      console.error('❌ Erreur lors de la création du projet:', error)
      throw error
    }
  }
  
  /**
   * Valider les données du projet côté client
   * @param {object} projetData - Données à valider
   * @param {boolean} isAuthenticated - Si l'utilisateur est connecté
   * @returns {object} - Objet avec isValid et errors
   */
  validateProjectData(projetData, isAuthenticated = false) {
    const errors = []
    
    // Validation des champs projet (obligatoires pour tous)
    if (!projetData.description || projetData.description.trim().length < 100) {
      errors.push('La description doit faire au moins 100 caractères')
    }
    if (projetData.description && projetData.description.length > 5000) {
      errors.push('La description ne peut pas dépasser 5000 caractères')
    }
    
    if (!projetData.address || projetData.address.trim().length < 5) {
      errors.push('L\'adresse doit faire au moins 5 caractères')
    }
    if (projetData.address && projetData.address.length > 255) {
      errors.push('L\'adresse ne peut pas dépasser 255 caractères')
    }
    
    if (!projetData.city || projetData.city.trim().length < 2) {
      errors.push('La ville doit faire au moins 2 caractères')
    }
    if (projetData.city && projetData.city.length > 100) {
      errors.push('La ville ne peut pas dépasser 100 caractères')
    }
    
    if (!projetData.postalCode || !/^\d{5}$/.test(projetData.postalCode)) {
      errors.push('Le code postal doit contenir exactement 5 chiffres')
    }
    
    // Validation des champs optionnels du projet
    if (projetData.budget && (projetData.budget < 0 || !Number.isInteger(Number(projetData.budget)))) {
      errors.push('Le budget doit être un nombre positif')
    }
    
    if (projetData.surfaceM2 && (projetData.surfaceM2 < 1 || !Number.isInteger(Number(projetData.surfaceM2)))) {
      errors.push('La surface doit être un nombre entier supérieur à 0')
    }
    
    if (projetData.bedrooms && (projetData.bedrooms < 0 || !Number.isInteger(Number(projetData.bedrooms)))) {
      errors.push('Le nombre de chambres doit être un nombre entier positif')
    }
    
    if (projetData.houseType && !['plain-pied', 'étage', 'autre'].includes(projetData.houseType)) {
      errors.push('Le type de maison doit être : plain-pied, étage ou autre')
    }
    
    // Validation des champs client (obligatoires si utilisateur non connecté)
    if (!isAuthenticated) {
      if (!projetData.clientFirstName || projetData.clientFirstName.trim().length < 2) {
        errors.push('Le prénom est obligatoire (min. 2 caractères)')
      }
      if (projetData.clientFirstName && projetData.clientFirstName.length > 50) {
        errors.push('Le prénom ne peut pas dépasser 50 caractères')
      }
      
      if (!projetData.clientLastName || projetData.clientLastName.trim().length < 2) {
        errors.push('Le nom est obligatoire (min. 2 caractères)')
      }
      if (projetData.clientLastName && projetData.clientLastName.length > 50) {
        errors.push('Le nom ne peut pas dépasser 50 caractères')
      }
      
      if (!projetData.clientEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(projetData.clientEmail)) {
        errors.push('Un email valide est obligatoire')
      }
      
      if (!projetData.clientPhone || !/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/.test(projetData.clientPhone)) {
        errors.push('Un numéro de téléphone français valide est obligatoire')
      }
      
      // Validation du mot de passe
      if (!projetData.clientPassword || projetData.clientPassword.length < 8) {
        errors.push('Le mot de passe doit contenir au moins 8 caractères')
      }
      
      if (projetData.clientPassword !== projetData.clientPasswordConfirm) {
        errors.push('Les mots de passe ne correspondent pas')
      }
    }
    
    return {
      isValid: errors.length === 0,
      errors: errors
    }
  }
}

// Exporter une instance unique du service (Singleton)
export default new ProjetService()