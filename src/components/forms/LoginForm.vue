<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
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
          autocomplete="current-password"
          required
          class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Votre mot de passe"
        />
      </div>
      <div v-if="errors.password" class="mt-1 text-sm text-red-600">
        {{ errors.password }}
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input
          id="remember-me"
          v-model="form.rememberMe"
          name="remember-me"
          type="checkbox"
          class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label for="remember-me" class="ml-2 block text-sm text-gray-900">
          Se souvenir de moi
        </label>
      </div>

      <div class="text-sm">
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
          Mot de passe oublié ?
        </a>
      </div>
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
        {{ loading ? 'Connexion...' : 'Se connecter' }}
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
  name: 'LoginForm',
  emits: ['success', 'error'],
  setup(props, { emit }) {
    const loading = ref(false)
    const generalError = ref('')
    
    const form = reactive({
      email: '',
      password: '',
      rememberMe: false
    })
    
    const errors = reactive({
      email: '',
      password: ''
    })

    const validateForm = () => {
      errors.email = ''
      errors.password = ''
      
      if (!form.email) {
        errors.email = 'L\'email est requis'
        return false
      }
      
      if (!form.email.includes('@')) {
        errors.email = 'Format d\'email invalide'
        return false
      }
      
      if (!form.password) {
        errors.password = 'Le mot de passe est requis'
        return false
      }
      
      if (form.password.length < 6) {
        errors.password = 'Le mot de passe doit contenir au moins 6 caractères'
        return false
      }
      
      return true
    }

    const handleSubmit = async () => {
      if (!validateForm()) {
        return
      }

      loading.value = true
      generalError.value = ''

      try {
        const result = await authService.login({
          email: form.email,
          password: form.password,
          rememberMe: form.rememberMe
        })

        emit('success', result)
      } catch (error) {
        const message = error.response?.data?.message || 'Erreur lors de la connexion'
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