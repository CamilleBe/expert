<script setup>
import ArtisanSearch from './components/ArtisanSearch.vue'
import MainNav from './components/MainNav.vue'
import ArtisanProfile from './components/ArtisanProfile.vue'
import { ref } from 'vue'

// État pour contrôler quelle page est affichée
const currentPage = ref('search')
const selectedArtisanId = ref(null)

// Fonctions pour la navigation
function showProfile(artisanId) {
  selectedArtisanId.value = artisanId
  currentPage.value = 'profile'
}

function showSearch() {
  currentPage.value = 'search'
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <MainNav />
    
    <!-- Page de recherche -->
    <ArtisanSearch v-if="currentPage === 'search'" @view-profile="showProfile" />
    
    <!-- Page de profil -->
    <ArtisanProfile v-else-if="currentPage === 'profile'" :artisan-id="selectedArtisanId" @back-to-search="showSearch" />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Nous pouvons garder les effets de hover pour les logos */
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
