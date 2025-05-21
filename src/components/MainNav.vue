<template>
  <header class="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm border-b border-gray-100">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="#" class="flex items-center space-x-2">
            <svg class="w-8 h-8 md:w-10 md:h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="text-xl md:text-2xl font-bold text-gray-900">Experta</span>
          </a>
        </div>

        <!-- Menu Desktop -->
        <nav class="hidden md:flex space-x-8">
          <a href="#" class="text-gray-700 font-medium hover:text-blue-600 transition">Accueil</a>
          <a href="#" class="text-gray-700 font-medium hover:text-blue-600 transition">Rechercher</a>
          <a href="#" class="text-gray-700 font-medium hover:text-blue-600 transition">Comment ça marche</a>
          <a href="#" class="text-gray-700 font-medium hover:text-blue-600 transition">Blog</a>
          <a href="#" class="text-gray-700 font-medium hover:text-blue-600 transition">Contact</a>
        </nav>

        <!-- Boutons connexion/inscription (Desktop) -->
        <div class="hidden md:flex items-center space-x-4">
          <button class="px-4 py-2 text-blue-600 hover:text-blue-700 transition font-medium">Connexion</button>
          <button class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-medium transition shadow-sm">Inscription</button>
        </div>

        <!-- Bouton menu mobile -->
        <button @click="menuOpen = !menuOpen" class="md:hidden text-gray-700">
          <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Menu Mobile -->
    <div v-if="menuOpen" class="md:hidden bg-white shadow-lg border-t border-gray-100">
      <div class="container mx-auto px-4 py-4">
        <nav class="flex flex-col space-y-3">
          <a href="#" class="text-gray-700 font-medium hover:text-blue-600 transition py-2">Accueil</a>
          <a href="#" class="text-gray-700 font-medium hover:text-blue-600 transition py-2">Rechercher</a>
          <a href="#" class="text-gray-700 font-medium hover:text-blue-600 transition py-2">Comment ça marche</a>
          <a href="#" class="text-gray-700 font-medium hover:text-blue-600 transition py-2">Blog</a>
          <a href="#" class="text-gray-700 font-medium hover:text-blue-600 transition py-2">Contact</a>
        </nav>
        <div class="flex flex-col space-y-3 mt-4 pt-4 border-t border-gray-100">
          <button class="py-2 text-blue-600 hover:text-blue-700 transition font-medium">Connexion</button>
          <button class="bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-white font-medium transition shadow-sm">Inscription</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script> 