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
          <!-- Si l'utilisateur est connecté -->
          <div v-if="userStore.isAuthenticated" class="flex items-center space-x-4">
            <!-- Notifications -->
            <div class="relative">
              <button @click="showNotifications = !showNotifications" class="relative p-2 text-gray-600 hover:text-blue-600 transition">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM10.97 4.97a.75.75 0 0 0-1.08 1.05L15.39 12l-5.5 6.02a.75.75 0 0 0 1.08 1.05L18 12.05l-7.03-7.08zM5.5 3l5.5 6-5.5 6"></path>
                </svg>
                <!-- Badge de notifications non lues -->
                <span v-if="notificationsStore.unreadCount > 0" 
                      class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {{ notificationsStore.unreadCount }}
                </span>
              </button>
              
              <!-- Dropdown des notifications -->
              <div v-if="showNotifications" 
                   class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                <div class="px-4 py-2 border-b border-gray-100">
                  <h3 class="font-semibold text-gray-900">Notifications</h3>
                </div>
                <div class="max-h-64 overflow-y-auto">
                  <div v-if="notificationsStore.notifications.length === 0" class="px-4 py-3 text-gray-500 text-sm">
                    Aucune notification
                  </div>
                  <div v-else>
                    <div v-for="notification in notificationsStore.recentNotifications" 
                         :key="notification.id"
                         class="px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                         :class="{ 'bg-blue-50': !notification.read }">
                      <div class="flex items-start space-x-3">
                        <span class="text-lg">{{ notification.icon }}</span>
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-gray-900">{{ notification.title }}</p>
                          <p class="text-sm text-gray-600 truncate">{{ notification.message }}</p>
                        </div>
                        <button v-if="!notification.read" 
                                @click="notificationsStore.markAsRead(notification.id)"
                                class="text-blue-600 hover:text-blue-800 text-xs">
                          Marquer lu
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Menu utilisateur -->
            <div class="relative">
              <button @click="showUserMenu = !showUserMenu" class="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
                <img :src="userStore.currentUser?.avatar" 
                     :alt="userStore.userName" 
                     class="w-8 h-8 rounded-full object-cover">
                <span class="hidden md:block font-medium">{{ userStore.userName }}</span>
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
            <router-link to="/auth" class="text-gray-700 hover:text-blue-600 font-medium">Connexion</router-link>
            <router-link to="/register" class="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg transition-colors">Inscription</router-link>
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
          <router-link @click="menuOpen = false" to="/search" class="text-gray-700 font-medium hover:text-blue-600 transition py-2">Trouver un artisan</router-link>
          <router-link @click="menuOpen = false" to="/services" class="text-gray-700 font-medium hover:text-blue-600 transition py-2">Services</router-link>
          <router-link @click="menuOpen = false" to="/how-it-works" class="text-gray-700 font-medium hover:text-blue-600 transition py-2">Comment ça marche</router-link>
          <router-link @click="menuOpen = false" to="/contact" class="text-gray-700 font-medium hover:text-blue-600 transition py-2">Contact</router-link>
        </nav>
        
        <div v-if="userStore.isAuthenticated" class="flex flex-col space-y-3 mt-4 pt-4 border-t border-gray-100">
          <router-link @click="menuOpen = false" 
                       :to="userStore.isClient ? '/dashboard' : '/artisan-dashboard'" 
                       class="py-2 text-blue-600 hover:text-blue-700 transition font-medium">
            Mon dashboard
          </router-link>
          <button @click="handleLogout" 
                  class="py-2 text-red-600 hover:text-red-700 transition font-medium text-left">
            Se déconnecter
          </button>
        </div>
        <div v-else class="flex flex-col space-y-3 mt-4 pt-4 border-t border-gray-100">
          <router-link @click="menuOpen = false" to="/auth" class="py-2 text-blue-600 hover:text-blue-700 transition font-medium">Connexion</router-link>
          <router-link @click="menuOpen = false" to="/register" class="bg-blue-600 hover:bg-blue-700 py-2 rounded-lg text-white font-medium transition shadow-sm text-center">Inscription</router-link>
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