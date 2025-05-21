<template>
  <div class="min-h-screen bg-white text-gray-800 pt-20 pb-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- En-tête de page avec animations -->
      <div class="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          <span class="text-blue-600">Trouvez</span> le bon artisan pour votre projet
        </h1>
        <p class="text-lg text-gray-600 mb-6 animate-fade-in-delay">
          Mise en relation simple et directe avec des professionnels qualifiés pour concrétiser votre projet de construction
        </p>
      </div>
      
      <!-- Barre de recherche améliorée -->
      <div class="bg-white rounded-2xl p-5 sm:p-8 shadow-xl mb-10 sm:mb-16 max-w-5xl mx-auto transition-all hover:shadow-2xl transform hover:-translate-y-1 animate-slide-up border border-gray-100">
        <h2 class="text-xl sm:text-2xl font-semibold mb-6 text-center text-gray-800">Rechercher un artisan</h2>
        <div class="flex flex-col md:flex-row items-center gap-4">
          <div class="relative w-full">
            <svg class="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input
              v-model="search.profession"
              type="text"
              placeholder="Métier recherché (ex: maçon, électricien...)"
              class="w-full pl-10 p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 text-gray-900 text-sm md:text-base bg-white shadow-inner"
            />
          </div>
          <div class="relative w-full">
            <svg class="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <input
              v-model="search.location"
              type="text"
              placeholder="Ville ou code postal"
              class="w-full pl-10 p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 text-gray-900 text-sm md:text-base bg-white shadow-inner"
            />
          </div>
          <button
            @click="searchArtisans"
            class="w-full md:w-auto px-6 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-bold text-sm md:text-base shadow-lg transition-all duration-300 ease-in-out hover:shadow-blue-500/30 focus:ring-4 focus:ring-blue-500/50 focus:outline-none"
          >
            <span class="flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Rechercher
            </span>
          </button>
        </div>
      </div>

      <!-- Filtres rapides -->
      <div class="flex flex-wrap gap-3 justify-center mb-10 animate-fade-in-delay-2 max-w-5xl mx-auto">
        <button class="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full text-sm font-medium transition">Maçonnerie</button>
        <button class="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full text-sm font-medium transition">Plomberie</button>
        <button class="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full text-sm font-medium transition">Électricité</button>
        <button class="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full text-sm font-medium transition">Charpente</button>
        <button class="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full text-sm font-medium transition">Peinture</button>
      </div>

      <!-- Résultats -->
      <div v-if="artisans.length">
        <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">{{ artisans.length }} artisans trouvés</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          <div
            v-for="(artisan, index) in artisans"
            :key="artisan.id"
            :style="{ animationDelay: `${index * 100}ms` }"
            class="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col animate-slide-up-stagger transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group border border-gray-100"
          >
            <div class="relative">
              <div class="h-48 bg-blue-50 flex items-center justify-center overflow-hidden">
                <img :src="artisan.coverImage || 'https://images.unsplash.com/photo-1598449426314-8b02525e8733?w=800'" alt="Couverture" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div class="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                <img :src="artisan.avatar" alt="avatar" class="w-24 h-24 rounded-full border-4 border-blue-400 object-cover shadow-xl bg-white" />
              </div>
            </div>
            
            <div class="pt-14 px-5 pb-6 flex flex-col flex-grow">
              <div class="text-center mb-4">
                <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-1">{{ artisan.name }}</h3>
                <p class="text-blue-600 font-medium">{{ artisan.profession }}</p>
              </div>
              
              <div class="flex justify-between items-center mb-4 text-sm">
                <div class="flex items-center gap-1">
                  <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span class="text-gray-700">{{ artisan.city }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <span class="font-bold text-yellow-500">{{ artisan.rating }}</span>
                  <div class="flex">
                    <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= Math.floor(artisan.rating) ? 'text-yellow-500' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              <p class="text-gray-600 text-sm mb-6 line-clamp-3">{{ artisan.description || "Artisan qualifié avec plusieurs années d'expérience, proposant des services de qualité et professionnels pour tous vos projets." }}</p>
              
              <div class="mt-auto">
                <button class="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg">
                  Voir le profil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else class="bg-white rounded-xl p-6 shadow-lg text-center max-w-3xl mx-auto animate-fade-in border border-gray-100">
        <svg class="w-16 h-16 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h3 class="text-xl font-bold text-gray-800 mb-2">Aucun artisan trouvé</h3>
        <p class="text-gray-600 mb-4">Veuillez modifier vos critères de recherche ou essayer dans une autre région</p>
        <button @click="clearFilters" class="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium transition">
          Effacer les filtres
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const search = ref({
  profession: '',
  location: ''
})

const artisans = ref([])

// Réinitialise les filtres de recherche
function clearFilters() {
  search.value.profession = ''
  search.value.location = ''
}

// Simule une recherche (remplace par un appel API réel)
function searchArtisans() {
  // Ici tu peux faire un fetch/axios vers ton backend
  artisans.value = [
    {
      id: 1,
      name: 'Jean Dupont',
      profession: 'Maçon',
      city: 'Lyon',
      rating: 4.8,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      description: 'Maçon expérimenté avec plus de 15 ans de métier, spécialisé dans la construction et rénovation de maisons individuelles.'
    },
    {
      id: 2,
      name: 'Sophie Martin',
      profession: 'Électricienne',
      city: 'Villeurbanne',
      rating: 4.6,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      description: 'Électricienne qualifiée, certifiée pour tous types d\'installations. Interventions rapides et soignées.'
    },
    {
      id: 3,
      name: 'Antoine Moreau',
      profession: 'Plombier',
      city: 'Lyon',
      rating: 4.9,
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      description: 'Plombier sanitaire et chauffagiste, spécialiste des installations écologiques et économes en énergie.'
    },
    {
      id: 4,
      name: 'Marie Dubois',
      profession: 'Peintre',
      city: 'Villeurbanne',
      rating: 4.7,
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      description: 'Artisan peintre décoratrice, passionnée par les finitions soignées et les designs contemporains.'
    },
    {
      id: 5,
      name: 'Thomas Bernard',
      profession: 'Charpentier',
      city: 'Lyon',
      rating: 4.5,
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      description: 'Charpentier traditionnel formé aux techniques ancestrales et modernes. Travail du bois de qualité.'
    },
    {
      id: 6,
      name: 'Julie Petit',
      profession: 'Architecte d\'intérieur',
      city: 'Lyon',
      rating: 4.9,
      avatar: 'https://randomuser.me/api/portraits/women/56.jpg',
      description: 'Architecte d\'intérieur avec un œil pour le détail et les tendances actuelles. Transformation d\'espaces pour plus de fonctionnalité.'
    }
  ]
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-in-out;
}

.animate-fade-in-delay {
  animation: fadeIn 0.8s ease-in-out 0.2s both;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 0.8s ease-in-out 0.4s both;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out;
}

.animate-slide-up-stagger {
  animation: slideUp 0.5s ease-out both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>