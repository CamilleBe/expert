<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 text-center">
      <!-- Icône 404 -->
      <div class="mb-8">
        <div class="mx-auto h-32 w-32 flex items-center justify-center bg-gray-200 rounded-full">
          <svg class="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
      </div>

      <!-- Message principal -->
      <div>
        <h1 class="text-9xl font-bold text-gray-300 mb-4">404</h1>
        <h2 class="text-3xl font-bold text-gray-900 mb-2">Page non trouvée</h2>
        <p class="text-lg text-gray-600 mb-8">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
      </div>

      <!-- Suggestions -->
      <div class="space-y-4">
        <p class="text-sm text-gray-500">Que souhaitez-vous faire ?</p>
        
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <router-link 
            to="/" 
            class="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Retour à l'accueil
          </router-link>
          
          <button 
            @click="goBack"
            class="inline-flex items-center px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
          >
            <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Page précédente
          </button>
        </div>
      </div>

      <!-- Liens utiles -->
      <div class="pt-8 border-t border-gray-200">
        <p class="text-sm text-gray-500 mb-4">Liens utiles :</p>
        <div class="flex flex-wrap justify-center gap-4 text-sm">
          <router-link to="/services" class="text-blue-600 hover:text-blue-500">Nos services</router-link>
          <router-link to="/contact" class="text-blue-600 hover:text-blue-500">Contact</router-link>
          <router-link to="/how-it-works" class="text-blue-600 hover:text-blue-500">Comment ça marche</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  // Vérifier s'il y a un historique, sinon rediriger vers l'accueil
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}
</script>