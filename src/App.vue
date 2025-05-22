<script>
import HomePage from './components/HomePage.vue'
import ArtisanSearch from './components/ArtisanSearch.vue'
import ArtisanProfile from './components/ArtisanProfile.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    ArtisanSearch,
    ArtisanProfile,
    Footer
  },
  data() {
    return {
      currentPage: 'home',
      selectedArtisanId: null
    }
  },
  methods: {
    showHome() {
      this.currentPage = 'home'
    },
    showSearch() {
      this.currentPage = 'search'
    },
    showProfile(artisanId) {
      this.selectedArtisanId = artisanId
      this.currentPage = 'profile'
    }
  }
}
</script>

<template>
  <div id="app" class="w-screen overflow-x-hidden">
    <header class="bg-white shadow-md fixed top-0 left-0 right-0 z-50 w-screen">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="flex items-center">
            <a href="#" @click.prevent="showHome" class="text-blue-600 font-bold text-2xl">Experta</a>
          </div>
          
          <nav class="hidden md:flex space-x-8">
            <a href="#" @click.prevent="showHome" class="text-gray-700 hover:text-blue-600 font-medium">Accueil</a>
            <a href="#" @click.prevent="showSearch" class="text-gray-700 hover:text-blue-600 font-medium">Trouver un artisan</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">Services</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">Comment ça marche</a>
            <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </nav>
          
          <div class="flex items-center space-x-4">
            <a href="#" class="text-gray-700 hover:text-blue-600 font-medium hidden md:block">Connexion</a>
            <a href="#" class="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg transition-colors">Inscription</a>
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
      <!-- Page d'accueil -->
      <HomePage v-if="currentPage === 'home'" />
      
      <!-- Page de recherche -->
      <ArtisanSearch v-else-if="currentPage === 'search'" @view-profile="showProfile" />
      
      <!-- Page de profil -->
      <ArtisanProfile v-else-if="currentPage === 'profile'" :artisan-id="selectedArtisanId" @back-to-search="showSearch" />
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
