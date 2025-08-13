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
      
      // Documents client dashboard
      DOCUMENTS: '/client-documents',
      DOCUMENTS_UPLOAD: '/client-documents/upload',
      DOCUMENTS_DOWNLOAD: '/client-documents/:id/download',
      DOCUMENTS_DELETE: '/client-documents/:id',
      
      // Documents AMO (envoyés par l'AMO aux clients)
      DOCUMENTS_AMO: '/client-documents/amo',
      DOCUMENTS_AMO_DETAILS: '/client-documents/amo/:id',
      DOCUMENTS_AMO_DOWNLOAD: '/client-documents/amo/:id/download',
      
      // Dashboard AMO
      AMO_DASHBOARD: '/amo/dashboard',
      AMO_PROJETS: '/amo/mes-projets',
      AMO_MISSIONS: '/amo/gestion-missions',
      AMO_PROFIL: '/amo/profil',
      AMO_DOCUMENTS_UPLOAD: '/amo/documents/upload',
      AMO_DOCUMENTS_CLIENT: '/amo/documents/client',
      AMO_DOCUMENTS_CLIENT_DETAILS: '/amo/documents/client/:id',
      AMO_DOCUMENTS_CLIENT_DOWNLOAD: '/amo/documents/client/:id/download',
      AMO_DOCUMENTS_PARTENAIRE_DOWNLOAD: '/amo/documents/partenaire/:id/download',
      
      // Dashboard Partenaire
      PARTENAIRE_DASHBOARD: '/partenaire/dashboard',
      PARTENAIRE_MISSIONS_DISPONIBLES: '/partenaire/missions-disponibles',
      PARTENAIRE_MISSIONS: '/partenaire/mes-missions',
      PARTENAIRE_PROFIL: '/partenaire/profil',
      PARTENAIRE_DOCUMENTS_UPLOAD: '/partenaire/documents/upload',
      PARTENAIRE_DOCUMENTS_AMO: '/partenaire/documents/amo',
      PARTENAIRE_DOCUMENTS_AMO_DETAILS: '/partenaire/documents/amo/:id',
      PARTENAIRE_DOCUMENTS_AMO_DOWNLOAD: '/partenaire/documents/amo/:id/download',
      
      // Autres
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