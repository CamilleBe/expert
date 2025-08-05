// src/services/authService.js

import { API_CONFIG, buildUrl, getAuthHeaders } from '../utils/apiConfig.js';

class AuthService {
  
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
      console.log(`🌐 Requête vers: ${buildUrl(endpoint)}`);
      console.log(`📤 Données envoyées:`, options.body ? JSON.parse(options.body) : 'Aucune');
      
      // Configuration de la requête
      const config = {
        method: options.method || 'GET',
        headers: getAuthHeaders(),
        ...options
      };
      
      // Faire la requête
      const response = await fetch(buildUrl(endpoint), config);
      
      // Parser la réponse JSON
      const data = await response.json();
      
      console.log(`📥 Réponse reçue (${response.status}):`, data);
      
      // Vérifier si la requête a réussi
      if (!response.ok) {
        // Créer une erreur avec le message du serveur
        const error = new Error(data.message || `Erreur HTTP ${response.status}`);
        error.status = response.status;
        error.data = data;
        throw error;
      }
      
      return data;
      
    } catch (error) {
      console.error(`❌ Erreur lors de la requête vers ${endpoint}:`, error);
      
      // Re-lancer l'erreur pour que le composant puisse la gérer
      throw error;
    }
  }
  
  // ================================================
  // MÉTHODES D'INSCRIPTION
  // ================================================
  
  /**
   * Inscription d'un client
   * @param {object} userData - Données du client
   * @returns {Promise} - Promesse avec les données de l'utilisateur créé
   */
  async registerClient(userData) {
    console.log('👤 Inscription client...');
    
    // Validation des données requises
    this.validateClientData(userData);
    
    return await this.makeRequest(API_CONFIG.ENDPOINTS.REGISTER_CLIENT, {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  }
  
  /**
   * Inscription d'un AMO
   * @param {object} userData - Données de l'AMO
   * @returns {Promise} - Promesse avec les données de l'utilisateur créé
   */
  async registerAMO(userData) {
    console.log('👨‍💼 Inscription AMO...');
    
    // Validation des données requises
    this.validateAMOData(userData);
    
    return await this.makeRequest(API_CONFIG.ENDPOINTS.REGISTER_AMO, {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  }
  
  /**
   * Inscription d'un partenaire
   * @param {object} userData - Données du partenaire
   * @returns {Promise} - Promesse avec les données de l'utilisateur créé
   */
  async registerPartner(userData) {
    console.log('🏗️ Inscription partenaire...');
    
    // Validation des données requises
    this.validatePartnerData(userData);
    
    return await this.makeRequest(API_CONFIG.ENDPOINTS.REGISTER_PARTNER, {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  }
  
  /**
   * Méthode d'inscription générique (par défaut: client)
   * @param {object} userData - Données de l'utilisateur
   * @param {string} type - Type d'inscription ('client', 'amo', 'partner')
   * @returns {Promise} - Promesse avec les données de l'utilisateur créé
   */
  async register(userData, type = 'client') {
    console.log(`📝 Inscription générique (type: ${type})...`);
    
    switch (type.toLowerCase()) {
      case 'client':
        return await this.registerClient(userData);
      case 'amo':
        return await this.registerAMO(userData);
      case 'partner':
        return await this.registerPartner(userData);
      default:
        console.log('ℹ️ Type non spécifié, inscription en tant que client par défaut');
        return await this.registerClient(userData);
    }
  }

  // ================================================
  // MÉTHODES D'AUTHENTIFICATION
  // ================================================
  
  /**
   * Connexion d'un utilisateur
   * @param {string} email - Email de l'utilisateur
   * @param {string} password - Mot de passe
   * @returns {Promise} - Promesse avec les données de connexion
   */
  async login(email, password) {
    console.log(`🔐 Connexion de ${email}...`);
    
    // Validation des données
    if (!email || !password) {
      throw new Error('Email et mot de passe sont requis');
    }
    
    const response = await this.makeRequest(API_CONFIG.ENDPOINTS.LOGIN, {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    
    // Sauvegarder les données de connexion
    if (response.success && response.data) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      console.log('✅ Connexion sauvegardée localement');
    }
    
    return response;
  }
  
  /**
   * Déconnexion
   */
  logout() {
    console.log('🚪 Déconnexion...');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    console.log('✅ Données de connexion supprimées');
  }
  
  /**
   * Vérifier si l'utilisateur est connecté
   * @returns {boolean} - True si connecté
   */
  isAuthenticated() {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return !!(token && user);
  }
  
  /**
   * Obtenir l'utilisateur connecté
   * @returns {object|null} - Données utilisateur ou null
   */
  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (error) {
        console.error('❌ Erreur lors du parsing des données utilisateur:', error);
        this.logout(); // Nettoyer les données corrompues
        return null;
      }
    }
    return null;
  }

  /**
   * Obtenir le token d'authentification
   * @returns {string|null} - Token ou null
   */
  getToken() {
    return localStorage.getItem('token');
  }

  /**
   * Obtenir le profil utilisateur depuis l'API
   * @returns {Promise} - Promesse avec les données du profil
   */
  async getProfile() {
    console.log('👤 Récupération du profil utilisateur...');
    
    const response = await this.makeRequest(API_CONFIG.ENDPOINTS.PROFILE, {
      method: 'GET'
    });
    
    // Mettre à jour les données locales
    if (response.success && response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
      console.log('✅ Profil utilisateur mis à jour');
    }
    
    return response.data;
  }
  
  // ================================================
  // MÉTHODES DE VALIDATION
  // ================================================
  
  /**
   * Validation des données client
   */
  validateClientData(userData) {
    const required = ['firstName', 'lastName', 'email', 'password'];
    
    for (const field of required) {
      if (!userData[field] || userData[field].trim() === '') {
        throw new Error(`Le champ ${field} est requis`);
      }
    }
    
    // Validation email
    if (!this.isValidEmail(userData.email)) {
      throw new Error('Format d\'email invalide');
    }
    
    // Validation mot de passe
    if (userData.password.length < 6) {
      throw new Error('Le mot de passe doit contenir au moins 6 caractères');
    }
  }
  
  /**
   * Validation des données AMO
   */
  validateAMOData(userData) {
    const required = ['firstName', 'lastName', 'email', 'password', 'passwordConfirm', 'telephone', 'siret'];
    
    for (const field of required) {
      if (!userData[field] || userData[field].trim() === '') {
        throw new Error(`Le champ ${field} est requis pour l'inscription AMO`);
      }
    }
    
    // Validation confirmation mot de passe
    if (userData.password !== userData.passwordConfirm) {
      throw new Error('Les mots de passe ne correspondent pas');
    }
    
    // Validation mot de passe renforcée
    if (userData.password.length < 8) {
      throw new Error('Le mot de passe doit contenir au moins 8 caractères pour les professionnels');
    }
    
    // Validation SIRET
    if (!this.isValidSiret(userData.siret)) {
      throw new Error('Le SIRET doit contenir exactement 14 chiffres');
    }
    
    // Validation email
    if (!this.isValidEmail(userData.email)) {
      throw new Error('Format d\'email invalide');
    }
  }
  
  /**
   * Validation des données partenaire
   */
  validatePartnerData(userData) {
    const required = ['firstName', 'lastName', 'nomEntreprise', 'email', 'password', 'passwordConfirm', 'telephone', 'siret'];
    
    for (const field of required) {
      if (!userData[field] || userData[field].trim() === '') {
        throw new Error(`Le champ ${field} est requis pour l'inscription partenaire`);
      }
    }
    
    // Validations communes avec AMO
    this.validateAMOData(userData);
    
    // Validation tags métiers
    if (!userData.tagsMetiers || !Array.isArray(userData.tagsMetiers) || userData.tagsMetiers.length === 0) {
      throw new Error('Au moins un tag métier est requis');
    }
    
    // Validation zones d'intervention
    if (!userData.zoneIntervention || !Array.isArray(userData.zoneIntervention) || userData.zoneIntervention.length === 0) {
      throw new Error('Au moins une zone d\'intervention est requise');
    }
    
    // Validation site web (optionnel)
    if (userData.siteWeb && userData.siteWeb.trim() !== '' && !this.isValidUrl(userData.siteWeb)) {
      throw new Error('Le site web doit être une URL valide (http:// ou https://)');
    }
  }
  
  // ================================================
  // MÉTHODES UTILITAIRES DE VALIDATION
  // ================================================
  
  /**
   * Validation email
   */
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  /**
   * Validation SIRET
   */
  isValidSiret(siret) {
    const siretRegex = /^\d{14}$/;
    return siretRegex.test(siret);
  }
  
  /**
   * Validation URL
   */
  isValidUrl(url) {
    const urlRegex = /^https?:\/\/.+/;
    return urlRegex.test(url);
  }
}

// Exporter une instance unique du service (Singleton)
export default new AuthService();