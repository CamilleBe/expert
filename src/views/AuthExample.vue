<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {{ isAuthenticated ? 'Tableau de bord' : (showLogin ? 'Connexion' : 'Inscription') }}
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <!-- Interface utilisateur connecté -->
        <div v-if="isAuthenticated" class="space-y-6">
          <div class="text-center">
            <div class="text-lg font-medium text-gray-900">
              Bonjour {{ userName }} !
            </div>
            <div class="text-sm text-gray-500">
              Rôle : {{ userRole || 'Utilisateur' }}
            </div>
          </div>
          
          <div class="border-t border-gray-200 pt-6">
            <button
              @click="handleLogout"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Se déconnecter
            </button>
          </div>
        </div>

        <!-- Formulaires d'authentification -->
        <div v-else>
          <!-- Formulaire de connexion -->
          <LoginForm 
            v-if="showLogin"
            @success="handleAuthSuccess"
            @error="handleAuthError"
          />
          
          <!-- Formulaire d'inscription -->
          <RegisterForm 
            v-else
            @success="handleAuthSuccess"
            @error="handleAuthError"
          />
          
          <!-- Basculer entre connexion et inscription -->
          <div class="mt-6 text-center">
            <button
              @click="showLogin = !showLogin"
              class="text-indigo-600 hover:text-indigo-500 text-sm"
            >
              {{ showLogin ? 'Créer un compte' : 'Déjà un compte ? Se connecter' }}
            </button>
          </div>
        </div>

        <!-- Messages d'erreur globaux -->
        <div v-if="globalError" class="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {{ globalError }}
        </div>

        <!-- Messages de succès -->
        <div v-if="successMessage" class="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          {{ successMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useAuth } from '../composables/useAuth.js'
import { LoginForm, RegisterForm } from '../components/forms'

export default {
  name: 'AuthExample',
  components: {
    LoginForm,
    RegisterForm
  },
  setup() {
    const showLogin = ref(true)
    const globalError = ref('')
    const successMessage = ref('')
    
    const { 
      isAuthenticated, 
      userName, 
      userRole, 
      logout 
    } = useAuth()

    const handleAuthSuccess = (result) => {
      successMessage.value = showLogin.value ? 'Connexion réussie !' : 'Inscription réussie !'
      globalError.value = ''
      
      // Effacer le message après 3 secondes
      setTimeout(() => {
        successMessage.value = ''
      }, 3000)
      
      console.log('Authentification réussie:', result)
    }

    const handleAuthError = (error) => {
      const message = error.response?.data?.message || 
                     (showLogin.value ? 'Erreur lors de la connexion' : 'Erreur lors de l\'inscription')
      
      globalError.value = message
      successMessage.value = ''
      
      console.error('Erreur d\'authentification:', error)
    }

    const handleLogout = async () => {
      try {
        await logout()
        successMessage.value = 'Déconnexion réussie'
        globalError.value = ''
        
        setTimeout(() => {
          successMessage.value = ''
        }, 3000)
      } catch (error) {
        globalError.value = 'Erreur lors de la déconnexion'
        console.error('Erreur de déconnexion:', error)
      }
    }

    return {
      showLogin,
      globalError,
      successMessage,
      isAuthenticated,
      userName,
      userRole,
      handleAuthSuccess,
      handleAuthError,
      handleLogout
    }
  }
}
</script>