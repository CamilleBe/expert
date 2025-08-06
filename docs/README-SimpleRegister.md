# 📝 Formulaire d'inscription simplifié

## Description

`SimpleRegisterForm.vue` est un formulaire d'inscription épuré avec uniquement les **4 champs obligatoires** demandés :

- ✅ **Nom** (minimum 2 caractères)
- ✅ **Prénom** (minimum 2 caractères)  
- ✅ **Email** (format valide requis)
- ✅ **Mot de passe** (minimum 8 caractères)

## 🚀 Utilisation

### Import du composant

```vue
<script>
import { SimpleRegisterForm } from '@/components/forms'

export default {
  components: {
    SimpleRegisterForm
  }
}
</script>
```

### Utilisation dans le template

```vue
<template>
  <div>
    <SimpleRegisterForm 
      @success="handleSuccess" 
      @error="handleError"
    />
  </div>
</template>

<script>
export default {
  setup() {
    const handleSuccess = (result) => {
      console.log('Inscription réussie:', result)
      // result.user contient les données de l'utilisateur créé
      // result.token contient le token JWT (si retourné par l'API)
    }

    const handleError = (error) => {
      console.error('Erreur:', error)
      // Gestion des erreurs d'inscription
    }

    return {
      handleSuccess,
      handleError
    }
  }
}
</script>
```

## 📋 Données du formulaire

```javascript
{
  lastName: 'Dupont',      // Nom de famille
  firstName: 'Jean',       // Prénom
  email: 'jean@exemple.fr', // Email
  password: 'motdepasse123' // Mot de passe
}
```

## ✅ Validation automatique

- **Nom/Prénom** : Minimum 2 caractères, pas de caractères vides
- **Email** : Format email valide (regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
- **Mot de passe** : Minimum 8 caractères

## 🔗 Intégration API

Le formulaire utilise automatiquement :
- `authService.register()` pour l'inscription
- Configuration API définie dans `utils/apiConfig.js`
- Endpoint API : `POST /api/auth/register` (endpoint backend)
- Route frontend : `/inscription`

### Format de réponse attendu

```json
{
  "success": true,
  "user": {
    "id": 123,
    "firstName": "Jean",
    "lastName": "Dupont", 
    "email": "jean@exemple.fr"
  },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

## 🎨 Styles inclus

- Classes Tailwind CSS pour le design
- États interactifs (focus, hover, disabled)
- Indicateurs de chargement avec spinner animé
- Messages d'erreur stylisés en rouge

## 📱 Responsive

Le formulaire est entièrement responsive et s'adapte aux écrans :
- Mobile (320px+)
- Tablette (768px+)
- Desktop (1024px+)

## 🔄 États du formulaire

- **Normal** : Saisie utilisateur
- **Validation** : Vérification des champs en temps réel  
- **Chargement** : Pendant l'appel API (bouton désactivé + spinner)
- **Succès** : Émission de l'événement `@success`
- **Erreur** : Affichage des messages d'erreur + émission `@error`

## 🧪 Exemple complet

Voir le fichier `views/SimpleAuthExample.vue` pour un exemple d'implémentation complète avec gestion des succès et erreurs.

## 🆚 Différences avec RegisterForm.vue

| Critère | SimpleRegisterForm | RegisterForm |
|---------|-------------------|--------------|
| Champs | 4 champs obligatoires | 6 champs + conditions |
| Confirmation mot de passe | ❌ | ✅ |
| Conditions d'utilisation | ❌ | ✅ |
| Simplicité | ✅ Très simple | ⚠️ Plus complet |
| Cas d'usage | MVP, test rapide | Production complète |