<template>
  <div v-if="tokenInfo && tokenInfo.valid" class="fixed bottom-4 right-4 bg-gray-800 text-white text-xs p-3 rounded-lg shadow-lg max-w-xs">
    <div class="flex items-center mb-2">
      <div class="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
      <span class="font-medium">Session active</span>
    </div>
    
    <div class="space-y-1 text-gray-300">
      <div>Utilisateur: {{ tokenInfo.email }}</div>
      <div>Rôle: {{ tokenInfo.role }}</div>
      <div>Expire dans: {{ formatTimeRemaining(tokenInfo.timeRemaining) }}</div>
      <div>Expire le: {{ formatDate(tokenInfo.expiresAt) }}</div>
    </div>
    
    <!-- Barre de progression du temps restant -->
    <div class="mt-2">
      <div class="w-full bg-gray-600 rounded-full h-1">
        <div 
          class="bg-green-400 h-1 rounded-full transition-all duration-300"
          :style="{ width: progressPercentage + '%' }"
          :class="{ 
            'bg-yellow-400': progressPercentage < 50, 
            'bg-red-400': progressPercentage < 25 
          }"
        ></div>
      </div>
    </div>
    
    <!-- Bouton pour fermer -->
    <button 
      @click="hideStatus = true"
      class="absolute top-1 right-1 text-gray-400 hover:text-white"
    >
      ×
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import authService from '@/services/authService.js'

// État local
const tokenInfo = ref(null)
const hideStatus = ref(false)
let updateInterval = null

// Calculer le pourcentage de temps restant (24h = 100%)
const progressPercentage = computed(() => {
  if (!tokenInfo.value) return 0
  
  const totalDuration = 24 * 60 * 60 // 24 heures en secondes
  const percentage = (tokenInfo.value.timeRemaining / totalDuration) * 100
  return Math.max(0, Math.min(100, percentage))
})

// Mettre à jour les informations du token
const updateTokenInfo = () => {
  const info = authService.getTokenInfo()
  
  if (info.valid) {
    tokenInfo.value = info
  } else {
    tokenInfo.value = null
  }
}

// Formater le temps restant
const formatTimeRemaining = (seconds) => {
  if (!seconds) return '0m'
  
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`
  } else {
    return `${minutes}m`
  }
}

// Formater la date
const formatDate = (date) => {
  if (!date) return 'N/A'
  
  return date.toLocaleString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Lifecycle
onMounted(() => {
  updateTokenInfo()
  
  // Mettre à jour toutes les 30 secondes
  updateInterval = setInterval(updateTokenInfo, 30000)
})

onUnmounted(() => {
  if (updateInterval) {
    clearInterval(updateInterval)
  }
})
</script>

<style scoped>
/* Styles sont déjà dans le template avec Tailwind */
</style>