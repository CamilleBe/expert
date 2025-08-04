# Architecture API - Guide d'utilisation

Cette architecture vous permet de connecter facilement votre front-end Vue.js avec votre API back-end.

## 🏗️ Structure

```
src/
├── services/
│   └── authService.js      # Service d'authentification
├── utils/
│   └── apiConfig.js        # Configuration globale de l'API
├── composables/
│   └── useAuth.js          # Hook Vue pour l'authentification
└── components/
    └── forms/
        ├── LoginForm.vue       # Formulaire de connexion
        ├── RegisterForm.vue    # Formulaire d'inscription
        └── index.js           # Export des formulaires
```

## 🔧 Configuration

### 1. Variables d'environnement

Dans votre fichier `.env` :
```
VITE_API_URL=http://localhost:3000/api
```

### 2. Configuration API

Le fichier `src/utils/apiConfig.js` contient :
- L'URL de base de votre API
- Les headers par défaut
- Les endpoints de l'API
- Une instance Axios configurée avec intercepteurs

## 🚀 Utilisation

### Dans un composant Vue

```vue
<template>
  <div>
    <!-- Formulaire de connexion -->
    <LoginForm @success="handleLoginSuccess" @error="handleLoginError" />
    
    <!-- Ou utilisez le composable -->
    <button @click="logout" v-if="isAuthenticated">
      Déconnexion ({{ userName }})
    </button>
  </div>
</template>

<script>
import { LoginForm } from '@/components/forms'
import { useAuth } from '@/composables/useAuth'

export default {
  components: {
    LoginForm
  },
  setup() {
    const { isAuthenticated, userName, logout } = useAuth()
    
    const handleLoginSuccess = (user) => {
      console.log('Connexion réussie:', user)
      // Redirection ou action après connexion
    }
    
    const handleLoginError = (error) => {
      console.error('Erreur de connexion:', error)
    }
    
    return {
      isAuthenticated,
      userName,
      logout,
      handleLoginSuccess,
      handleLoginError
    }
  }
}
</script>
```

### Utilisation directe du service

```javascript
import authService from '@/services/authService'

// Connexion
try {
  const result = await authService.login({
    email: 'user@example.com',
    password: 'password123'
  })
  console.log('Utilisateur connecté:', result.user)
} catch (error) {
  console.error('Erreur:', error)
}

// Vérifier l'authentification
if (authService.isAuthenticated()) {
  const user = authService.getCurrentUser()
  console.log('Utilisateur actuel:', user)
}
```

## 🔐 Sécurité

- Les tokens sont automatiquement ajoutés aux headers des requêtes
- Gestion automatique de l'expiration des tokens (redirection vers login)
- Stockage sécurisé dans localStorage
- Validation des formulaires côté client

## 🛠️ Personnalisation

### Ajouter de nouveaux endpoints

Dans `apiConfig.js` :
```javascript
ENDPOINTS: {
  AUTH: { /* ... */ },
  USERS: {
    LIST: '/users',
    CREATE: '/users',
    UPDATE: '/users/:id',
    DELETE: '/users/:id'
  }
}
```

### Créer un nouveau service

```javascript
// src/services/userService.js
import { apiClient, API_CONFIG } from '../utils/apiConfig.js'

class UserService {
  async getUsers() {
    const response = await apiClient.get(API_CONFIG.ENDPOINTS.USERS.LIST)
    return response.data
  }
}

export default new UserService()
```

## 📋 À faire côté back-end

Assurez-vous que votre API back-end :

1. **Endpoints d'authentification** :
   - `POST /api/auth/login` - Connexion
   - `POST /api/auth/register` - Inscription
   - `POST /api/auth/logout` - Déconnexion
   - `GET /api/auth/profile` - Profil utilisateur
   - `POST /api/auth/refresh` - Rafraîchir le token

2. **Format des réponses** :
   ```json
   {
     "success": true,
     "data": {
       "user": { /* données utilisateur */ },
       "token": "jwt-token-here"
     }
   }
   ```

3. **Gestion CORS** :
   ```javascript
   // Exemple Express.js
   app.use(cors({
     origin: 'http://localhost:5173', // URL de votre front-end
     credentials: true
   }))
   ```

4. **Headers JWT** :
   ```
   Authorization: Bearer <token>
   ```

## 🔍 Debug

Pour activer les logs de debug, dans votre `.env` :
```
VITE_DEBUG_MODE=true
```