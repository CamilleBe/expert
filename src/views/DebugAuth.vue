<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h1 class="text-2xl font-bold text-gray-900 mb-6">🔍 Debug Authentification</h1>
        
        <!-- Informations du store -->
        <div class="bg-blue-50 p-4 rounded-lg mb-6">
          <h2 class="text-lg font-semibold text-blue-900 mb-3">Store Utilisateur</h2>
          <div class="space-y-2 text-sm">
            <div><strong>isAuthenticated:</strong> {{ userStore.isAuthenticated }}</div>
            <div><strong>userType:</strong> {{ userStore.userType }}</div>
            <div><strong>userName:</strong> {{ userStore.userName }}</div>
          </div>
          
          <div class="mt-4">
            <h3 class="font-semibold text-blue-800 mb-2">currentUser complet:</h3>
            <pre class="bg-white p-2 rounded text-xs overflow-auto">{{ JSON.stringify(userStore.currentUser, null, 2) }}</pre>
          </div>
        </div>

        <!-- Informations du localStorage -->
        <div class="bg-green-50 p-4 rounded-lg mb-6">
          <h2 class="text-lg font-semibold text-green-900 mb-3">localStorage</h2>
          <div class="space-y-2 text-sm">
            <div><strong>Token présent:</strong> {{ !!localStorage.getItem('token') }}</div>
            <div><strong>User présent:</strong> {{ !!localStorage.getItem('user') }}</div>
          </div>
          
          <div class="mt-4" v-if="localStorage.getItem('user')">
            <h3 class="font-semibold text-green-800 mb-2">User depuis localStorage:</h3>
            <pre class="bg-white p-2 rounded text-xs overflow-auto">{{ JSON.stringify(JSON.parse(localStorage.getItem('user') || '{}'), null, 2) }}</pre>
          </div>
        </div>

        <!-- Test des permissions -->
        <div class="bg-yellow-50 p-4 rounded-lg mb-6">
          <h2 class="text-lg font-semibold text-yellow-900 mb-3">Test des permissions</h2>
          <div class="grid grid-cols-3 gap-4 text-sm">
            <div class="bg-white p-3 rounded">
              <strong>Client Dashboard:</strong>
              <div :class="canAccessDashboard('client') ? 'text-green-600' : 'text-red-600'">
                {{ canAccessDashboard('client') ? '✅ Autorisé' : '❌ Refusé' }}
              </div>
            </div>
            <div class="bg-white p-3 rounded">
              <strong>Artisan Dashboard:</strong>
              <div :class="canAccessDashboard('artisan') ? 'text-green-600' : 'text-red-600'">
                {{ canAccessDashboard('artisan') ? '✅ Autorisé' : '❌ Refusé' }}
              </div>
            </div>
            <div class="bg-white p-3 rounded">
              <strong>AMO Dashboard:</strong>
              <div :class="canAccessDashboard('amo') ? 'text-green-600' : 'text-red-600'">
                {{ canAccessDashboard('amo') ? '✅ Autorisé' : '❌ Refusé' }}
              </div>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="bg-gray-50 p-4 rounded-lg">
          <h2 class="text-lg font-semibold text-gray-900 mb-3">Actions de debug</h2>
          <div class="flex flex-wrap gap-3">
            <button @click="reloadStore" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Recharger Store
            </button>
            <button @click="forceRole('client')" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Force Client
            </button>
            <button @click="forceRole('artisan')" class="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
              Force Artisan
            </button>
            <button @click="forceRole('amo')" class="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              Force AMO
            </button>
            <button @click="clearAuth" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Clear Auth
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user.js'
import { useRoleGuard } from '@/composables/useRoleGuard.js'

const userStore = useUserStore()
const { canAccessDashboard } = useRoleGuard()

function reloadStore() {
  console.log('🔄 Rechargement du store...')
  userStore.loadUserFromStorage()
}

function forceRole(role) {
  console.log(`🔧 Force role to: ${role}`)
  userStore.userType = role
  
  // Également mettre à jour les données utilisateur si elles existent
  if (userStore.currentUser) {
    userStore.currentUser.role = role
    userStore.currentUser.type = role
    localStorage.setItem('user', JSON.stringify(userStore.currentUser))
  }
}

function clearAuth() {
  console.log('🗑️ Nettoyage authentification...')
  userStore.logout()
}
</script>