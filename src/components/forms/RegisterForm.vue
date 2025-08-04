<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div>
      <label for="firstName" class="block text-sm font-medium text-gray-700">
        Prénom
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

    <div>
      <label for="lastName" class="block text-sm font-medium text-gray-700">
        Nom
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
          placeholder="Votre nom"
        />
      </div>
      <div v-if="errors.lastName" class="mt-1 text-sm text-red-600">
        {{ errors.lastName }}
      </div>
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">
        Email
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
          placeholder="Votre email"
        />
      </div>
      <div v-if="errors.email" class="mt-1 text-sm text-red-600">
        {{ errors.email }}
      </div>
    </div>

    <div>
      <label for="password" class="block text-sm font-medium text-gray-700">
        Mot de passe
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
          placeholder="Votre mot de passe"
        />
      </div>
      <div v-if="errors.password" class="mt-1 text-sm text-red-600">
        {{ errors.password }}
      </div>
    </div>

    <div>
      <label for="confirmPassword" class="block text-sm font-medium text-gray-700">
        Confirmer le mot de passe
      </label>
      <div class="mt-1">
        <input
          id="confirmPassword"
          v-model="form.confirmPassword"
          name="confirmPassword"
          type="password"
          autocomplete="new-password"
          required
          class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Confirmez votre mot de passe"
        />
      </div>
      <div v-if="errors.confirmPassword" class="mt-1 text-sm text-red-600">
        {{ errors.confirmPassword }}
      </div>
    </div>

    <div class="flex items-center">
      <input
        id="acceptTerms"
        v-model="form.acceptTerms"
        name="acceptTerms"
        type="checkbox"
        class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      />
      <label for="acceptTerms" class="ml-2 block text-sm text-gray-900">
        J'accepte les 
        <a href="#" class="text-indigo-600 hover:text-indigo-500">conditions d'utilisation</a>
      </label>
    </div>
    <div v-if="errors.acceptTerms" class="mt-1 text-sm text-red-600">
      {{ errors.acceptTerms }}
    </div>

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
        {{ loading ? 'Inscription...' : 'S\'inscrire' }}
      </button>
    </div>

    <div v-if="generalError" class="text-sm text-red-600 text-center">
      {{ generalError }}
    </div>
  </form>
</template>

<script>
import { ref, reactive } from 'vue'
import authService from '../../services/authService.js'

export default {
  name: 'RegisterForm',
  emits: ['success', 'error'],
  setup(props, { emit }) {
    const loading = ref(false)
    const generalError = ref('')
    
    const form = reactive({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false
    })
    
    const errors = reactive({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: ''
    })

    const validateForm = () => {
      // Réinitialiser les erreurs
      Object.keys(errors).forEach(key => errors[key] = '')
      
      let isValid = true
      
      if (!form.firstName.trim()) {
        errors.firstName = 'Le prénom est requis'
        isValid = false
      }
      
      if (!form.lastName.trim()) {
        errors.lastName = 'Le nom est requis'
        isValid = false
      }
      
      if (!form.email) {
        errors.email = 'L\'email est requis'
        isValid = false
      } else if (!form.email.includes('@')) {
        errors.email = 'Format d\'email invalide'
        isValid = false
      }
      
      if (!form.password) {
        errors.password = 'Le mot de passe est requis'
        isValid = false
      } else if (form.password.length < 6) {
        errors.password = 'Le mot de passe doit contenir au moins 6 caractères'
        isValid = false
      }
      
      if (!form.confirmPassword) {
        errors.confirmPassword = 'La confirmation du mot de passe est requise'
        isValid = false
      } else if (form.password !== form.confirmPassword) {
        errors.confirmPassword = 'Les mots de passe ne correspondent pas'
        isValid = false
      }
      
      if (!form.acceptTerms) {
        errors.acceptTerms = 'Vous devez accepter les conditions d\'utilisation'
        isValid = false
      }
      
      return isValid
    }

    const handleSubmit = async () => {
      if (!validateForm()) {
        return
      }

      loading.value = true
      generalError.value = ''

      try {
        const result = await authService.register({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email,
          password: form.password
        })

        emit('success', result)
      } catch (error) {
        const message = error.response?.data?.message || 'Erreur lors de l\'inscription'
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