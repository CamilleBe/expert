<template>
  <header class="bg-white shadow-md fixed top-0 left-0 right-0 z-50 w-screen">
    <div class="w-full px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <div class="flex items-center">
          <router-link to="/" class="text-blue-600 font-bold text-2xl">Experta</router-link>
        </div>
        
        <nav class="hidden md:flex space-x-8">
          <router-link to="/" class="text-gray-700 hover:text-blue-600 font-medium">Accueil</router-link>
          <router-link to="/search" class="text-gray-700 hover:text-blue-600 font-medium">Trouver un artisan</router-link>
          <router-link to="/services" class="text-gray-700 hover:text-blue-600 font-medium">Services</router-link>
          <router-link to="/how-it-works" class="text-gray-700 hover:text-blue-600 font-medium">Comment ça marche</router-link>
          <router-link to="/contact" class="text-gray-700 hover:text-blue-600 font-medium">Contact</router-link>
        </nav>
        
        <div class="flex items-center space-x-4">
          <router-link to="/auth" class="text-gray-700 hover:text-blue-600 font-medium hidden md:block">Connexion</router-link>
          <router-link to="/register" class="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg transition-colors">Inscription</router-link>
          <button @click="menuOpen = !menuOpen" class="text-gray-500 md:hidden">
            <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu Mobile -->
    <div v-if="menuOpen" class="md:hidden bg-white shadow-lg border-t border-gray-100">
      <div class="container mx-auto px-4 py-4">
        <nav class="flex flex-col space-y-3">
          <router-link @click="menuOpen = false" to="/" class="text-gray-700 font-medium hover:text-blue-600 transition py-2">Accueil</router-link>
          <router-link @click="menuOpen = false" to="/search" class="text-gray-700 font-medium hover:text-blue-600 transition py-2">Trouver un artisan</router-link>
          <router-link @click="menuOpen = false" to="/services" class="text-gray-700 font-medium hover:text-blue-600 transition py-2">Services</router-link>
          <router-link @click="menuOpen = false" to="/how-it-works" class="text-gray-700 font-medium hover:text-blue-600 transition py-2">Comment ça marche</router-link>
          <router-link @click="menuOpen = false" to="/contact" class="text-gray-700 font-medium hover:text-blue-600 transition py-2">Contact</router-link>
        </nav>
        <div class="flex flex-col space-y-3 mt-4 pt-4 border-t border-gray-100">
          <router-link @click="menuOpen = false" to="/auth" class="py-2 text-blue-600 hover:text-blue-700 transition font-medium">Connexion</router-link>
          <router-link @click="menuOpen = false" to="/register" class="bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-white font-medium transition shadow-sm text-center">Inscription</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

// Fermer le menu mobile quand on clique en dehors
const closeMenu = () => {
  menuOpen.value = false
}

// Optionnel : fermer le menu quand on change de route
import { useRouter } from 'vue-router'
const router = useRouter()

router.afterEach(() => {
  menuOpen.value = false
})
</script> 