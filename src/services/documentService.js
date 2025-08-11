// src/services/documentService.js

import { API_CONFIG, buildUrl, getAuthHeaders } from '../utils/apiConfig.js'

class DocumentService {
  
  // ================================================
  // MÉTHODE UTILITAIRE POUR LES REQUÊTES
  // ================================================
  
  /**
   * Méthode générique pour faire des requêtes HTTP
   * @param {string} endpoint - L'endpoint de l'API
   * @param {object} options - Options de la requête (method, body, etc.)
   * @returns {Promise} - Promesse avec la réponse
   */
  async makeRequest(endpoint, options = {}) {
    try {
      console.log(`🌐 Requête documents vers: ${buildUrl(endpoint)}`)
      console.log(`📤 Données envoyées:`, options.body instanceof FormData ? 'FormData' : (options.body ? JSON.parse(options.body) : 'Aucune'))
      
      // Configuration de la requête
      const config = {
        method: options.method || 'GET',
        headers: options.headers || getAuthHeaders(),
        ...options
      }
      
      // Faire la requête
      const response = await fetch(buildUrl(endpoint), config)
      
      // Pour les téléchargements de fichiers, retourner la réponse directement
      if (options.responseType === 'blob') {
        if (!response.ok) {
          throw new Error(`Erreur HTTP ${response.status}`)
        }
        return response
      }
      
      // Parser la réponse JSON pour les autres cas
      const data = await response.json()
      
      console.log(`📥 Réponse documents reçue (${response.status}):`, data)
      
      // Vérifier si la requête a réussi
      if (!response.ok) {
        const error = new Error(data.message || `Erreur HTTP ${response.status}`)
        error.status = response.status
        error.data = data
        throw error
      }
      
      return data
      
    } catch (error) {
      console.error(`❌ Erreur lors de la requête documents vers ${endpoint}:`, error)
      throw error
    }
  }
  
  // ================================================
  // MÉTHODES DE GESTION DES DOCUMENTS
  // ================================================
  
  /**
   * Récupérer la liste des documents du client connecté
   * @param {object} filters - Filtres optionnels (page, limit, mimeType, search)
   * @returns {Promise} - Promesse avec la liste des documents et statistiques
   */
  async getDocuments(filters = {}) {
    try {
      console.log('📋 Récupération des documents client...', filters)
      
      // Construire les paramètres de requête
      const params = new URLSearchParams()
      
      if (filters.page) params.append('page', filters.page.toString())
      if (filters.limit) params.append('limit', filters.limit.toString())
      if (filters.mimeType) params.append('mimeType', filters.mimeType)
      if (filters.search) params.append('search', filters.search)
      if (filters.projectId) params.append('projectId', filters.projectId)
      
      const queryString = params.toString()
      const endpoint = queryString ? `${API_CONFIG.ENDPOINTS.DOCUMENTS}?${queryString}` : API_CONFIG.ENDPOINTS.DOCUMENTS
      
      console.log('🔐 Headers utilisés pour GET documents:', getAuthHeaders())
      console.log('🌍 URL complète:', buildUrl(endpoint))
      
      const response = await this.makeRequest(endpoint)
      
      console.log('📊 Réponse GET documents complète:', response)
      
      return response
      
    } catch (error) {
      console.error('❌ Erreur lors de la récupération des documents:', error)
      throw error
    }
  }
  
  /**
   * Upload de fichiers
   * @param {FileList|Array} files - Fichiers à uploader
   * @param {string} projectId - ID du projet (optionnel)
   * @param {function} onProgress - Callback pour le suivi de progression (optionnel)
   * @returns {Promise} - Promesse avec les documents créés
   */
  async uploadDocuments(files, projectId = null, onProgress = null) {
    try {
      console.log('📤 Upload de documents...', { 
        filesCount: files.length, 
        projectId,
        fileNames: Array.from(files).map(f => f.name)
      })
      
      // Validation côté client
      const validationResult = this.validateFiles(files)
      if (!validationResult.isValid) {
        throw new Error(validationResult.errors.join(', '))
      }
      
      // Préparer FormData
      const formData = new FormData()
      
      // Ajouter les fichiers
      Array.from(files).forEach((file, index) => {
        console.log(`📎 Ajout fichier ${index + 1}:`, {
          name: file.name,
          size: file.size,
          type: file.type
        })
        formData.append('documents', file)
      })
      
      // Ajouter l'ID du projet si fourni
      if (projectId) {
        formData.append('projectId', projectId)
        console.log('🏗️ Projet ID ajouté:', projectId)
      }
      
      // Log du contenu de FormData
      console.log('📦 FormData préparée:')
      for (let [key, value] of formData.entries()) {
        console.log(`  ${key}:`, value instanceof File ? `File(${value.name})` : value)
      }
      
      // Headers spéciaux pour multipart/form-data
      const headers = getAuthHeaders()
      delete headers['Content-Type'] // Laisser le navigateur définir le Content-Type avec boundary
      
      const response = await this.makeRequest(API_CONFIG.ENDPOINTS.DOCUMENTS_UPLOAD, {
        method: 'POST',
        headers,
        body: formData
      })
      
      console.log('✅ Upload terminé avec succès:', response)
      console.log('📊 Nombre de documents uploadés:', response.data?.length || 0)
      return response
      
    } catch (error) {
      console.error('❌ Erreur lors de l\'upload des documents:', error)
      throw error
    }
  }
  
  /**
   * Télécharger un document
   * @param {string} documentId - ID du document
   * @param {string} originalName - Nom original du fichier (pour le téléchargement)
   * @returns {Promise} - Promesse avec le fichier
   */
  async downloadDocument(documentId, originalName) {
    try {
      console.log(`📥 Téléchargement du document ${documentId}...`)
      
      const endpoint = API_CONFIG.ENDPOINTS.DOCUMENTS_DOWNLOAD.replace(':id', documentId)
      
      const response = await this.makeRequest(endpoint, {
        method: 'GET',
        responseType: 'blob'
      })
      
      // Créer un lien de téléchargement
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = originalName || `document-${documentId}`
      
      // Trigger le téléchargement
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Nettoyer l'URL
      window.URL.revokeObjectURL(url)
      
      console.log(`✅ Téléchargement de ${originalName} terminé`)
      return { success: true, message: 'Téléchargement réussi' }
      
    } catch (error) {
      console.error('❌ Erreur lors du téléchargement:', error)
      throw error
    }
  }
  
  /**
   * Supprimer un document
   * @param {string} documentId - ID du document à supprimer
   * @returns {Promise} - Promesse avec la confirmation
   */
  async deleteDocument(documentId) {
    try {
      console.log(`🗑️ Suppression du document ${documentId}...`)
      
      const endpoint = API_CONFIG.ENDPOINTS.DOCUMENTS_DELETE.replace(':id', documentId)
      
      const response = await this.makeRequest(endpoint, {
        method: 'DELETE'
      })
      
      console.log('✅ Document supprimé avec succès')
      return response
      
    } catch (error) {
      console.error('❌ Erreur lors de la suppression:', error)
      throw error
    }
  }
  
  /**
   * Récupérer les détails d'un document spécifique
   * @param {string} documentId - ID du document
   * @returns {Promise} - Promesse avec les détails du document
   */
  async getDocumentDetails(documentId) {
    try {
      console.log(`📋 Récupération des détails du document ${documentId}...`)
      
      const endpoint = `${API_CONFIG.ENDPOINTS.DOCUMENTS}/${documentId}`
      
      const response = await this.makeRequest(endpoint)
      
      return response
      
    } catch (error) {
      console.error('❌ Erreur lors de la récupération des détails:', error)
      throw error
    }
  }
  
  // ================================================
  // MÉTHODES UTILITAIRES
  // ================================================
  
  /**
   * Valider les fichiers côté client
   * @param {FileList|Array} files - Fichiers à valider
   * @returns {object} - Résultat de validation
   */
  validateFiles(files) {
    const errors = []
    const maxSize = 10 * 1024 * 1024 // 10MB
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'image/jpeg',
      'image/jpg',
      'image/png'
    ]
    
    // Vérifier le nombre de fichiers
    if (files.length === 0) {
      errors.push('Aucun fichier sélectionné')
    }
    
    if (files.length > 5) {
      errors.push('Maximum 5 fichiers à la fois')
    }
    
    // Valider chaque fichier
    Array.from(files).forEach((file, index) => {
      // Vérifier la taille
      if (file.size > maxSize) {
        errors.push(`${file.name}: Fichier trop volumineux (max 10MB)`)
      }
      
      // Vérifier le type
      if (!allowedTypes.includes(file.type)) {
        errors.push(`${file.name}: Type de fichier non autorisé (PDF, DOC, DOCX, JPG, PNG uniquement)`)
      }
      
      // Vérifier que le fichier n'est pas vide
      if (file.size === 0) {
        errors.push(`${file.name}: Fichier vide`)
      }
    })
    
    return {
      isValid: errors.length === 0,
      errors
    }
  }
  
  /**
   * Formatter la taille d'un fichier en format lisible
   * @param {number} bytes - Taille en bytes
   * @returns {string} - Taille formatée
   */
  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes'
    
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }
  
  /**
   * Obtenir l'icône appropriée selon le type MIME
   * @param {string} mimeType - Type MIME du fichier
   * @returns {string} - Emoji/icône correspondante
   */
  getDocumentIcon(mimeType) {
    const icons = {
      'application/pdf': '📄',
      'application/msword': '📝',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '📝',
      'image/jpeg': '🖼️',
      'image/jpg': '🖼️',
      'image/png': '🖼️'
    }
    
    return icons[mimeType] || '📄'
  }
  
  /**
   * Obtenir le type de fichier en français
   * @param {string} mimeType - Type MIME du fichier
   * @returns {string} - Type en français
   */
  getReadableFileType(mimeType) {
    const types = {
      'application/pdf': 'PDF',
      'application/msword': 'Document Word',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'Document Word',
      'image/jpeg': 'Image JPEG',
      'image/jpg': 'Image JPEG',
      'image/png': 'Image PNG'
    }
    
    return types[mimeType] || 'Fichier'
  }
  
  /**
   * Formatter une date d'upload
   * @param {string} dateString - Date au format ISO
   * @returns {string} - Date formatée en français
   */
  formatUploadDate(dateString) {
    const date = new Date(dateString)
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
    
    return date.toLocaleDateString('fr-FR', options)
  }
}

// Exporter une instance unique du service (Singleton)
export default new DocumentService()
