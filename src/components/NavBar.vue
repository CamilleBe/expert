<template>
  <header class="bg-white shadow-md fixed top-0 left-0 right-0 z-50 w-screen">
    <div class="w-full px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <div class="flex items-center">
          <router-link to="/" class="text-blue-600 font-bold text-2xl">Experta</router-link>
        </div>
        
        <nav class="hidden md:flex space-x-8">
          <router-link to="/" class="text-gray-700 hover:text-blue-600 font-medium">Accueil</router-link>
          <a href="/#how-it-works" class="text-gray-700 hover:text-blue-600 font-medium">Comment ça marche ?</a>
          <!-- Dashboard uniquement pour les utilisateurs connectés -->
          <router-link v-if="userStore.isAuthenticated" 
                       :to="userStore.isClient ? '/dashboard' : userStore.isAMO ? '/amo-dashboard' : '/artisan-dashboard'" 
                       class="text-gray-700 hover:text-blue-600 font-medium">Dashboard</router-link>
        </nav>
        
        <div class="flex items-center space-x-4">
          <!-- Si l'utilisateur est connecté -->
          <div v-if="userStore.isAuthenticated" class="flex items-center space-x-4">
            <!-- Menu utilisateur -->
            <div class="relative">
              <button @click="showUserMenu = !showUserMenu" class="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
                <span class="font-medium">Profil</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <!-- Dropdown utilisateur -->
              <div v-if="showUserMenu" 
                   class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                <router-link v-if="userStore.isClient" 
                           to="/dashboard" 
                           class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Mon dashboard
                </router-link>
                <router-link v-if="userStore.isAMO" 
                           to="/amo-dashboard" 
                           class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Mon dashboard
                </router-link>
                <router-link v-if="userStore.isArtisan" 
                           to="/artisan-dashboard" 
                           class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Mon dashboard
                </router-link>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mon profil</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Paramètres</a>
                <hr class="my-2">
                <button @click="handleLogout" 
                        class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                  Se déconnecter
                </button>
              </div>
            </div>
          </div>

          <!-- Si l'utilisateur n'est pas connecté -->
          <div v-else class="hidden md:flex items-center space-x-4">
            <router-link to="/connexion" class="text-gray-700 hover:text-blue-600 font-medium">Connexion</router-link>
            <router-link to="/inscription" class="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg transition-colors">Inscription</router-link>
          </div>

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
          <a @click="menuOpen = false" href="/#how-it-works" class="text-gray-700 font-medium hover:text-blue-600 transition py-2">Comment ça marche ?</a>
          <!-- Dashboard dans le menu mobile uniquement pour les utilisateurs connectés -->
          <router-link v-if="userStore.isAuthenticated" 
                       @click="menuOpen = false" 
                       :to="userStore.isClient ? '/dashboard' : userStore.isAMO ? '/amo-dashboard' : '/artisan-dashboard'" 
                       class="text-gray-700 font-medium hover:text-blue-600 transition py-2">Dashboard</router-link>
        </nav>
        
        <div v-if="userStore.isAuthenticated" class="flex flex-col space-y-3 mt-4 pt-4 border-t border-gray-100">
          <router-link @click="menuOpen = false" 
                       :to="userStore.isClient ? '/dashboard' : userStore.isAMO ? '/amo-dashboard' : '/artisan-dashboard'" 
                       class="py-2 text-blue-600 hover:text-blue-700 transition font-medium">
            Mon dashboard
          </router-link>
          <button @click="handleLogout" 
                  class="py-2 text-red-600 hover:text-red-700 transition font-medium text-left">
            Se déconnecter
          </button>
        </div>
        <div v-else class="flex flex-col space-y-3 mt-4 pt-4 border-t border-gray-100">
          <router-link @click="menuOpen = false" to="/connexion" class="py-2 text-blue-600 hover:text-blue-700 transition font-medium">Connexion</router-link>
          <router-link @click="menuOpen = false" to="/inscription" class="bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-white font-medium transition shadow-sm text-center">Inscription</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { useNotificationsStore } from '@/stores/notifications'

const router = useRouter()
const userStore = useUserStore()
const notificationsStore = useNotificationsStore()

const menuOpen = ref(false)
const showNotifications = ref(false)
const showUserMenu = ref(false)

// Fermer le menu mobile quand on clique en dehors
const closeMenu = () => {
  menuOpen.value = false
  showNotifications.value = false
  showUserMenu.value = false
}

// Gestion de la déconnexion
const handleLogout = () => {
  userStore.logout()
  notificationsStore.showInfo('Vous avez été déconnecté.')
  router.push('/')
  closeMenu()
}

// Optionnel : fermer le menu quand on change de route
router.afterEach(() => {
  menuOpen.value = false
  showNotifications.value = false
  showUserMenu.value = false
})

// Initialiser les notifications simulées au montage du composant
onMounted(() => {
  notificationsStore.initializeMockNotifications()
})
</script> 