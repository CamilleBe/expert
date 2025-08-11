// src/utils/apiConfig.js

// Configuration de l'API
export const API_CONFIG = {
    // URL de base de ton API
    BASE_URL: 'http://localhost:3000/api',
    
    // Headers par défaut
    DEFAULT_HEADERS: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    
    // Endpoints spécifiques
    ENDPOINTS: {
      // Inscription
      REGISTER_CLIENT: '/users',
      REGISTER_AMO: '/users/register-amo',
      REGISTER_PARTNER: '/users/register-partner',
      
      // Authentification
      LOGIN: '/users/login',
      
      // Documents
      DOCUMENTS: '/client-documents',
      DOCUMENTS_UPLOAD: '/client-documents/upload',
      DOCUMENTS_DOWNLOAD: '/client-documents/:id/download',
      DOCUMENTS_DELETE: '/client-documents/:id',
      
      // Autres (pour plus tard)
      USERS: '/users',
      PROFILE: '/users'
    }
  };
  
  // Fonction utilitaire pour construire l'URL complète
  export const buildUrl = (endpoint) => {
    return `${API_CONFIG.BASE_URL}${endpoint}`;
  };
  
  // Fonction pour obtenir les headers avec token
  export const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      ...API_CONFIG.DEFAULT_HEADERS,
      ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    };
  };