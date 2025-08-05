<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Nom -->
    <div>
      <label for="lastName" class="block text-sm font-medium text-gray-700">
        Nom *
      </label>
      <div class="mt-1">
        <input
          id="lastName"
          v-model="form.lastName"
          name="lastName"
          type="text"
          autocomplete="family-name"
          required
          class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Votre nom de famille"
        />
      </div>
      <div v-if="errors.lastName" class="mt-1 text-sm text-red-600">
        {{ errors.lastName }}
      </div>
    </div>

    <!-- Prénom -->
    <div>
      <label for="firstName" class="block text-sm font-medium text-gray-700">
        Prénom *
      </label>
      <div class="mt-1">
        <input
          id="firstName"
          v-model="form.firstName"
          name="firstName"
          type="text"
          autocomplete="given-name"
          required
          class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Votre prénom"
        />
      </div>
      <div v-if="errors.firstName" class="mt-1 text-sm text-red-600">
        {{ errors.firstName }}
      </div>
    </div>

    <!-- Email -->
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">
        Email *
      </label>
      <div class="mt-1">
        <input
          id="email"
          v-model="form.email"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="votre.email@exemple.com"
        />
      </div>
      <div v-if="errors.email" class="mt-1 text-sm text-red-600">
        {{ errors.email }}
      </div>
    </div>

    <!-- Mot de passe -->
    <div>
      <label for="password" class="block text-sm font-medium text-gray-700">
        Mot de passe *
      </label>
      <div class="mt-1">
        <input
          id="password"
          v-model="form.password"
          name="password"
          type="password"
          autocomplete="new-password"
          required
          class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Minimum 8 caractères"
        />
      </div>
      <div v-if="errors.password" class="mt-1 text-sm text-red-600">
        {{ errors.password }}
      </div>
    </div>

    <!-- Bouton de soumission -->
    <div>
      <button
        type="submit"
        :disabled="loading"
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="loading" class="mr-2">
          <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
          </svg>
        </span>
        {{ loading ? 'Inscription en cours...' : 'S\'inscrire' }}
      </button>
    </div>

    <!-- Message d'erreur global -->
    <div v-if="generalError" class="text-sm text-red-600 text-center">
      {{ generalError }}
    </div>
  </form>
</template>

<script>
import { ref, reactive } from 'vue'
import authService from '../../services/authService.js'

export default {
  name: 'SimpleRegisterForm',
  emits: ['success', 'error'],
  setup(props, { emit }) {
    const loading = ref(false)
    const generalError = ref('')
    
    // Données du formulaire avec les 4 champs obligatoires
    const form = reactive({
      lastName: '',     // Nom
      firstName: '',    // Prénom  
      email: '',        // Email
      password: ''      // Mot de passe
    })
    
    // Erreurs de validation pour chaque champ
    const errors = reactive({
      lastName: '',
      firstName: '',
      email: '',
      password: ''
    })

    // Validation du formulaire
    const validateForm = () => {
      // Réinitialiser les erreurs
      Object.keys(errors).forEach(key => errors[key] = '')
      
      let isValid = true
      
      // Validation du nom
      if (!form.lastName.trim()) {
        errors.lastName = 'Le nom est obligatoire'
        isValid = false
      } else if (form.lastName.trim().length < 2) {
        errors.lastName = 'Le nom doit contenir au moins 2 caractères'
        isValid = false
      }
      
      // Validation du prénom
      if (!form.firstName.trim()) {
        errors.firstName = 'Le prénom est obligatoire'
        isValid = false
      } else if (form.firstName.trim().length < 2) {
        errors.firstName = 'Le prénom doit contenir au moins 2 caractères'
        isValid = false
      }
      
      // Validation de l'email
      if (!form.email.trim()) {
        errors.email = 'L\'email est obligatoire'
        isValid = false
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(form.email)) {
          errors.email = 'Format d\'email invalide'
          isValid = false
        }
      }
      
      // Validation du mot de passe
      if (!form.password) {
        errors.password = 'Le mot de passe est obligatoire'
        isValid = false
      } else if (form.password.length < 8) {
        errors.password = 'Le mot de passe doit contenir au moins 8 caractères'
        isValid = false
      }
      
      return isValid
    }

    // Gestion de la soumission du formulaire
    const handleSubmit = async () => {
      if (!validateForm()) {
        return
      }

      loading.value = true
      generalError.value = ''

      try {
        // Appel au service d'inscription avec les données du formulaire
        const result = await authService.register({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          password: form.password
        })

        // Émettre l'événement de succès vers le composant parent
        emit('success', result)
        
        // Optionnel : Réinitialiser le formulaire après succès
        Object.keys(form).forEach(key => form[key] = '')
        
      } catch (error) {
        // Gestion des erreurs de l'API
        let message = 'Erreur lors de l\'inscription'
        
        if (error.response?.data?.message) {
          message = error.response.data.message
        } else if (error.response?.status === 409) {
          message = 'Cet email est déjà utilisé'
        } else if (error.response?.status === 400) {
          message = 'Données invalides'
        }
        
        generalError.value = message
        emit('error', error)
        
      } finally {
        loading.value = false
      }
    }

    return {
      form,
      errors,
      loading,
      generalError,
      handleSubmit
    }
  }
}
</script>

<style scoped>
/* Styles personnalisés si nécessaire */
.required-field::after {
  content: " *";
  color: #ef4444;
}
</style>