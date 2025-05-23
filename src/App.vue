<script setup>
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app" class="w-screen overflow-x-hidden">
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
            <router-link to="/auth?tab=register" class="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg transition-colors">Inscription</router-link>
            <button class="text-gray-500 md:hidden">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
    
    <main class="pt-20 w-screen overflow-x-hidden">
      <router-view />
    </main>

    <!-- Footer commun à toutes les pages -->
    <Footer />
  </div>
</template>

<style>
@import './style.css';

body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow-x: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

/* Nous pouvons garder les effets de hover pour les logos */
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
