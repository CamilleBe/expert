<template>
  <div class="min-h-screen bg-white text-gray-800 pt-20 pb-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Bouton retour -->
      <button @click="goBackToSearch" class="flex items-center text-blue-600 font-medium mb-6 hover:text-blue-500 transition-colors">
        <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Retour aux résultats
      </button>
      
      <!-- En-tête du profil avec photo, nom et métier -->
      <div class="bg-white rounded-2xl shadow-xl mb-8 overflow-hidden animate-fade-in border border-gray-100">
        <!-- Bannière et photo de profil -->
        <div class="relative">
          <div class="h-64 bg-blue-50 flex items-center justify-center overflow-hidden">
            <img :src="artisan.coverImage || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'" alt="Couverture" class="w-full h-full object-cover" />
          </div>
          <div class="absolute -bottom-16 left-8">
            <img :src="artisan.avatar" alt="avatar" class="w-32 h-32 rounded-full border-4 border-white object-cover shadow-xl bg-white" />
          </div>
        </div>
        
        <!-- Informations principales -->
        <div class="pt-20 px-8 pb-8">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ artisan.name }}</h1>
              <p class="text-xl text-blue-600 font-medium">{{ artisan.profession }}</p>
            </div>
            
            <div class="mt-4 md:mt-0 flex items-center space-x-4">
              <div class="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                <svg class="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"></path>
                </svg>
                <span class="font-bold text-gray-800">{{ artisan.rating }}</span>
                <span class="text-gray-600 ml-1">({{ artisan.reviewCount }} avis)</span>
              </div>
              <button class="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg">
                Contacter
              </button>
            </div>
          </div>
          
          <!-- Badges et vérifications -->
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Identité vérifiée
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              Assurance décennale
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              {{ artisan.experience }} ans d'expérience
            </span>
          </div>
          
          <!-- Localisation -->
          <div class="flex items-center mb-6 text-gray-700">
            <svg class="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>{{ artisan.city }}, {{ artisan.region }}</span>
            <span class="mx-2">•</span>
            <span>Rayon d'intervention: {{ artisan.radius }} km</span>
          </div>
          
          <!-- Description -->
          <p class="text-gray-700 leading-relaxed mb-6">{{ artisan.description }}</p>
          
          <!-- Compétences -->
          <div class="mb-6">
            <h3 class="text-lg font-semibold mb-3 text-gray-800">Spécialités</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in artisan.skills" :key="skill" class="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Galerie de projets -->
      <div class="bg-white rounded-2xl shadow-xl mb-8 p-8 animate-fade-in-delay border border-gray-100">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">Galerie de projets</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div v-for="(image, index) in artisan.gallery" :key="index" class="relative group overflow-hidden rounded-lg h-48">
            <img :src="image" alt="Projet" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div class="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <button class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-2">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Avis clients -->
      <div class="bg-white rounded-2xl shadow-xl mb-8 p-8 animate-fade-in-delay-2 border border-gray-100">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 class="text-2xl font-bold text-gray-800">Avis clients</h2>
          <div class="flex items-center mt-2 md:mt-0">
            <div class="flex mr-2">
              <svg v-for="i in 5" :key="i" class="w-5 h-5" :class="i <= Math.floor(artisan.rating) ? 'text-yellow-500' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"></path>
              </svg>
            </div>
            <span class="font-bold text-gray-800">{{ artisan.rating }}</span>
            <span class="text-gray-600 ml-1">({{ artisan.reviewCount }} avis)</span>
          </div>
        </div>
        
        <!-- Liste des avis -->
        <div class="space-y-6">
          <div v-for="(review, index) in artisan.reviews" :key="index" class="border-b border-gray-100 pb-6 last:border-0">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center">
                <img :src="review.avatar" alt="Avatar" class="w-10 h-10 rounded-full mr-3" />
                <div>
                  <h4 class="font-semibold text-gray-900">{{ review.name }}</h4>
                  <p class="text-sm text-gray-500">{{ review.date }}</p>
                </div>
              </div>
              <div class="flex">
                <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= review.rating ? 'text-yellow-500' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"></path>
                </svg>
              </div>
            </div>
            <div>
              <p class="font-medium text-gray-700 mb-2">{{ review.title }}</p>
              <p class="text-gray-600">{{ review.content }}</p>
            </div>
            <div v-if="review.response" class="mt-4 ml-8 p-4 bg-blue-50 rounded-lg">
              <p class="text-sm font-medium text-gray-700 mb-1">Réponse de {{ artisan.name }}</p>
              <p class="text-sm text-gray-600">{{ review.response }}</p>
            </div>
          </div>
        </div>
        
        <!-- Pagination -->
        <div class="flex justify-center mt-8">
          <button class="mx-1 px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">Précédent</button>
          <button class="mx-1 px-3 py-1 rounded bg-blue-600 text-white">1</button>
          <button class="mx-1 px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">2</button>
          <button class="mx-1 px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">3</button>
          <button class="mx-1 px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-50">Suivant</button>
        </div>
      </div>
      
      <!-- Laisser un avis -->
      <div class="bg-white rounded-2xl shadow-xl p-8 animate-fade-in-delay-3 border border-gray-100">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">Laisser un avis</h2>
        <form class="space-y-6">
          <div>
            <label for="rating" class="block mb-2 text-gray-700 font-medium">Votre note</label>
            <div class="flex">
              <button 
                v-for="i in 5" 
                :key="i" 
                type="button"
                @click="newReview.rating = i"
                class="w-8 h-8 mr-1 focus:outline-none">
                <svg class="w-8 h-8" :class="i <= newReview.rating ? 'text-yellow-500' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"></path>
                </svg>
              </button>
            </div>
          </div>
          
          <div>
            <label for="title" class="block mb-2 text-gray-700 font-medium">Titre de l'avis</label>
            <input 
              v-model="newReview.title"
              type="text" 
              id="title" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              placeholder="Résumez votre expérience en quelques mots" 
            />
          </div>
          
          <div>
            <label for="content" class="block mb-2 text-gray-700 font-medium">Détail de votre avis</label>
            <textarea 
              v-model="newReview.content"
              id="content" 
              rows="4" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              placeholder="Partagez votre expérience avec cet artisan...">
            </textarea>
          </div>
          
          <div class="flex items-center">
            <input type="checkbox" id="terms" class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
            <label for="terms" class="ml-2 text-sm text-gray-600">
              J'accepte les conditions d'utilisation et certifie que cet avis est basé sur ma propre expérience.
            </label>
          </div>
          
          <button 
            type="submit" 
            @click.prevent="submitReview"
            class="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold transition-all duration-300 ease-in-out hover:shadow-lg">
            Publier mon avis
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, defineEmits } from 'vue'

const props = defineProps({
  artisanId: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['backToSearch'])

// Données de l'artisan (à remplacer par un appel API réel)
const artisan = ref({
  id: 1,
  name: 'Jean Dupont',
  profession: 'Maçon',
  city: 'Lyon',
  region: 'Auvergne-Rhône-Alpes',
  rating: 4.8,
  reviewCount: 47,
  experience: 15,
  radius: 50,
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  description: 'Maçon expérimenté avec plus de 15 ans de métier, spécialisé dans la construction et rénovation de maisons individuelles. Je travaille avec des matériaux de qualité et respecte les délais convenus. Mon expertise comprend la construction de murs porteurs, la pose de briques et parpaings, ainsi que la réalisation de fondations solides pour tous types de projets résidentiels et commerciaux.',
  skills: ['Construction murs', 'Rénovation', 'Fondations', 'Pierre naturelle', 'Isolation', 'Maçonnerie traditionnelle'],
  gallery: [
    'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=800',
    'https://images.unsplash.com/photo-1621149650090-2c9d5abc35c0?w=800',
    'https://images.unsplash.com/photo-1607472586893-edb57bdc0545?w=800',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
    'https://images.unsplash.com/photo-1604339454100-c1e268afba76?w=800',
    'https://images.unsplash.com/photo-1560748952-1d2d768c2337?w=800',
    'https://images.unsplash.com/photo-1590579491624-f98f36d4c595?w=800',
  ],
  reviews: [
    {
      id: 1,
      name: 'Marie Leroy',
      avatar: 'https://randomuser.me/api/portraits/women/62.jpg',
      rating: 5,
      date: '15 juin 2023',
      title: 'Travail remarquable et professionnel',
      content: 'Jean a réalisé l\'extension de notre maison avec beaucoup de professionnalisme. Le travail a été livré dans les délais et le résultat est impeccable. Je recommande vivement ses services pour toute construction ou rénovation.',
      response: 'Merci beaucoup Marie pour votre confiance et ces gentils mots. Ça a été un plaisir de travailler sur votre projet d\'extension. N\'hésitez pas à me recontacter pour vos futurs projets.'
    },
    {
      id: 2,
      name: 'Pierre Martin',
      avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
      rating: 4,
      date: '22 mai 2023',
      title: 'Bonne prestation malgré quelques délais',
      content: 'Nous avons fait appel à Jean pour la rénovation de notre terrasse. Le travail final est de qualité mais il y a eu un léger retard sur le délai prévu. La communication était bonne et il a su s\'adapter à nos demandes en cours de chantier.'
    },
    {
      id: 3,
      name: 'Sophie Dubois',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      rating: 5,
      date: '7 avril 2023',
      title: 'Un artisan à recommander',
      content: 'Jean a construit un mur de soutènement dans notre jardin. Son expertise et ses conseils nous ont beaucoup aidés. Le travail a été réalisé avec soin et précision. Nous sommes très satisfaits du résultat et n\'hésiterons pas à faire appel à lui pour d\'autres travaux.'
    },
  ]
})

// Nouvel avis
const newReview = ref({
  rating: 0,
  title: '',
  content: ''
})

// Soumission d'un nouvel avis
function submitReview() {
  // Ici, implémentez la logique pour envoyer l'avis à votre backend
  console.log('Avis soumis:', newReview.value)
  
  // Réinitialiser le formulaire
  newReview.value = {
    rating: 0,
    title: '',
    content: ''
  }
  
  // Afficher une confirmation (à implémenter)
  alert('Merci pour votre avis ! Il sera publié après modération.')
}

// Fonction pour retourner à la recherche
function goBackToSearch() {
  emit('backToSearch')
}

// Charger les données de l'artisan au chargement de la page
onMounted(() => {
  // Simuler un chargement depuis une API en utilisant l'ID
  console.log('Chargement des données pour l\'artisan ID:', props.artisanId)
  
  // Dans une application réelle, vous feriez un appel API ici
  // fetchArtisanData(props.artisanId).then(data => artisan.value = data)
})
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

.animate-fade-in-delay-3 {
  animation: fadeIn 0.6s ease-out 0.6s both;
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