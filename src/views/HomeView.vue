<template>
  <div class="w-screen overflow-x-hidden bg-white text-gray-800">
    <!-- Section Héro -->
    <div class="relative bg-blue-600 text-white overflow-hidden w-screen">
      <div class="absolute inset-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600" alt="" class="w-full h-full object-cover" />
      </div>
      <div class="w-full px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div class="w-full max-w-5xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Trouvez l'artisan idéal pour vos projets
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in-delay">
            Des milliers d'artisans qualifiés prêts à réaliser vos travaux en toute confiance
          </p>
          <div class="animate-fade-in-delay-2 w-full">
            <form class="bg-white rounded-xl shadow-lg p-2 sm:p-3 md:p-4 flex flex-col sm:flex-row items-stretch w-full">
              <div class="flex-1 mb-2 sm:mb-0 sm:mr-2">
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input type="text" placeholder="Quel type d'artisan recherchez-vous ?" class="pl-10 pr-4 py-3 w-full bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900" />
                </div>
              </div>
              <div class="flex-1 mb-2 sm:mb-0 sm:mr-2">
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <input type="text" placeholder="Où ? (ville, code postal)" class="pl-10 pr-4 py-3 w-full bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900" />
                </div>
              </div>
              <button type="submit" class="py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg">
                Rechercher
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Services -->
    <div class="w-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white">
      <div class="w-full mx-auto">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Services proposés</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Des artisans qualifiés pour tous vos besoins en rénovation et construction
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-delay max-w-7xl mx-auto">
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-transform hover:transform hover:scale-105 duration-300">
            <div class="h-48 bg-blue-50 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800" alt="Construction" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2 text-gray-900">Maçonnerie</h3>
              <p class="text-gray-600 mb-4">Construction de murs, fondations, rénovation de structures existantes.</p>
              <a href="#" class="text-blue-600 font-medium hover:text-blue-500 inline-flex items-center">
                Découvrir
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-transform hover:transform hover:scale-105 duration-300">
            <div class="h-48 bg-blue-50 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1558618666-c291f71742a0?w=800" alt="Plomberie" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2 text-gray-900">Plomberie</h3>
              <p class="text-gray-600 mb-4">Installation et réparation de systèmes de plomberie, sanitaires et chauffage.</p>
              <a href="#" class="text-blue-600 font-medium hover:text-blue-500 inline-flex items-center">
                Découvrir
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-transform hover:transform hover:scale-105 duration-300">
            <div class="h-48 bg-blue-50 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800" alt="Électricité" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2 text-gray-900">Électricité</h3>
              <p class="text-gray-600 mb-4">Installation électrique, mise aux normes, domotique et systèmes intelligents.</p>
              <a href="#" class="text-blue-600 font-medium hover:text-blue-500 inline-flex items-center">
                Découvrir
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-transform hover:transform hover:scale-105 duration-300">
            <div class="h-48 bg-blue-50 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800" alt="Peinture" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2 text-gray-900">Peinture</h3>
              <p class="text-gray-600 mb-4">Travaux de peinture intérieure et extérieure, revêtements muraux, décoration.</p>
              <a href="#" class="text-blue-600 font-medium hover:text-blue-500 inline-flex items-center">
                Découvrir
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <a href="#" class="inline-block py-3 px-8 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg">
            Voir tous les services
          </a>
        </div>
      </div>
    </div>
    
    <!-- Section Comment ça marche -->
    <div class="w-screen bg-gray-50 py-16 md:py-24">
      <div class="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Comment ça marche</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            En seulement 3 étapes simples, trouvez l'artisan idéal pour votre projet
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-delay max-w-7xl mx-auto">
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-600 text-white text-2xl font-bold">1</div>
            <h3 class="text-2xl font-bold mb-3 text-gray-900">Décrivez votre projet</h3>
            <p class="text-gray-600">Précisez votre besoin, votre localisation et votre budget pour obtenir des devis adaptés.</p>
          </div>
          
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-600 text-white text-2xl font-bold">2</div>
            <h3 class="text-2xl font-bold mb-3 text-gray-900">Comparez les artisans</h3>
            <p class="text-gray-600">Consultez les profils, les avis et les réalisations des artisans intéressés par votre projet.</p>
          </div>
          
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-600 text-white text-2xl font-bold">3</div>
            <h3 class="text-2xl font-bold mb-3 text-gray-900">Faites votre choix</h3>
            <p class="text-gray-600">Sélectionnez l'artisan qui correspond le mieux à vos attentes et suivez l'avancement de votre projet.</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Sections suivantes... [Suite du contenu complet] -->
    <!-- Section CTA -->
    <div class="bg-blue-600 py-16 md:py-20 w-screen">
      <div class="w-full px-4 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div class="mb-8 lg:mb-0 text-center lg:text-left">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Prêt à démarrer votre projet ?</h2>
          <p class="text-xl text-blue-100 max-w-2xl">
            Trouvez dès maintenant l'artisan qualifié qui réalisera vos travaux dans les meilleures conditions.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#" class="py-3 px-8 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 ease-in-out hover:shadow-lg text-center">
            Trouver un artisan
          </a>
          <a href="#" class="py-3 px-8 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-300 ease-in-out text-center">
            S'inscrire gratuitement
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Variable pour gérer l'accordéon de la FAQ
const openFaq = ref(null)

// Fonction pour ouvrir/fermer les questions de la FAQ
function toggleFaq(id) {
  openFaq.value = openFaq.value === id ? null : id
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 0.6s ease-out 0.2s both;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 0.6s ease-out 0.4s both;
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