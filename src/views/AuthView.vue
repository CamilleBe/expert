<template>
  <div class="w-screen min-h-screen overflow-x-hidden bg-white text-gray-800">


    <!-- Section principale avec formulaires -->
    <div class="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div class="w-full max-w-md mx-auto">
        <!-- Titre de la page -->
        <div class="text-center mb-10 animate-fade-in">
          <h1 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Connectez-vous à votre compte
          </h1>
          <p class="text-xl text-gray-600">
            Accédez à votre espace personnel Experta
          </p>
        </div>

        <!-- Formulaire de connexion -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 animate-fade-in">
          <form @submit.prevent="handleLogin">
            <div class="mb-6">
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input 
                  type="email" 
                  id="email" 
                  v-model="loginForm.email" 
                  placeholder="votre@email.com" 
                  class="pl-10 pr-4 py-3 w-full bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900" 
                  required
                />
              </div>
            </div>
            
            <div class="mb-6">
              <div class="flex justify-between items-center mb-2">
                <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
                <a href="#" class="text-sm text-blue-600 hover:text-blue-500">Mot de passe oublié ?</a>
              </div>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input 
                  :type="showPassword ? 'text' : 'password'" 
                  id="password" 
                  v-model="loginForm.password" 
                  placeholder="••••••••" 
                  class="pl-10 pr-10 py-3 w-full bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900" 
                  required
                />
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button 
                    @click.prevent="showPassword = !showPassword" 
                    type="button" 
                    class="text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!showPassword">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-else>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="mb-6 flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                v-model="loginForm.remember" 
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label for="remember" class="ml-2 block text-sm text-gray-700">Se souvenir de moi</label>
            </div>

            <button 
              type="submit" 
              class="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg"
            >
              Se connecter
            </button>

            <div class="text-center mt-8">
              <p class="text-sm text-gray-600">
                Vous n'avez pas de compte ?
                <router-link to="/register" class="text-blue-600 font-medium hover:text-blue-500">
                  Inscrivez-vous
                </router-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Formulaire de connexion
const loginForm = reactive({
  email: '',
  password: '',
  remember: false
})

// Variable pour afficher/masquer le mot de passe
const showPassword = ref(false)

// Méthode de connexion
const handleLogin = () => {
  // Logique de connexion à implémenter
  console.log('Tentative de connexion avec:', loginForm)
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 