<template>
  <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
    <!-- En-tête du projet avec statut -->
    <div class="flex justify-between items-start mb-4">
      <div class="flex-1">
        <div class="flex items-center gap-3 mb-2">
          <h3 class="text-xl font-bold text-gray-900">{{ projectNumber }}</h3>
          <span :class="statusClass" class="px-3 py-1 text-xs font-medium rounded-full">
            {{ statusLabel }}
          </span>
        </div>
        <p class="text-gray-600 text-sm">
          Créé le {{ createdDate }}
        </p>
      </div>
      
      <!-- Actions -->
      <div class="flex space-x-2">
        <button @click="$emit('view-details')" class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Voir les détails">
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </button>
        <!-- Bouton supprimer pour projets en brouillon -->
        <button 
          v-if="project.statut === 'brouillon'" 
          @click="$emit('delete-project', project.id)" 
          class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" 
          title="Supprimer le projet"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Description du projet -->
    <div class="mb-4">
      <p class="text-gray-700 leading-relaxed text-sm">
        {{ project.description || 'Aucune description disponible' }}
      </p>
    </div>

    <!-- Informations du projet en grille -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
      <!-- Localisation -->
      <div class="bg-gray-50 rounded-lg p-3">
        <div class="flex items-center mb-1">
          <svg class="h-4 w-4 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span class="text-xs font-medium text-gray-500 uppercase">Localisation</span>
        </div>
        <p class="text-sm font-semibold text-gray-900">{{ project.city || 'Non définie' }}</p>
        <p class="text-xs text-gray-600">{{ project.postalCode || '' }}</p>
      </div>

      <!-- Budget -->
      <div class="bg-green-50 rounded-lg p-3">
        <div class="flex items-center mb-1">
          <svg class="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
          <span class="text-xs font-medium text-green-600 uppercase">Budget</span>
        </div>
        <p class="text-sm font-semibold text-gray-900">
          {{ formatBudget(project.budget) }}
        </p>
      </div>

      <!-- Surface -->
      <div class="bg-blue-50 rounded-lg p-3" v-if="project.surfaceM2">
        <div class="flex items-center mb-1">
          <svg class="h-4 w-4 text-blue-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a1 1 0 011-1h4a1 1 0 011 1v12m-6 0h6" />
          </svg>
          <span class="text-xs font-medium text-blue-600 uppercase">Surface</span>
        </div>
        <p class="text-sm font-semibold text-gray-900">{{ project.surfaceM2 }} m²</p>
      </div>

      <!-- Type de logement -->
      <div class="bg-purple-50 rounded-lg p-3" v-if="project.houseType">
        <div class="flex items-center mb-1">
          <svg class="h-4 w-4 text-purple-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 21l8-8-8-8" />
          </svg>
          <span class="text-xs font-medium text-purple-600 uppercase">Type</span>
        </div>
        <p class="text-sm font-semibold text-gray-900 capitalize">{{ project.houseType }}</p>
      </div>
    </div>

    <!-- Informations additionnelles -->
    <div class="flex items-center justify-between pt-4 border-t border-gray-100">
      <div class="flex items-center space-x-4 text-sm text-gray-600">
        <span v-if="project.bedrooms !== null && project.bedrooms !== undefined">
          <svg class="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a1 1 0 011-1h4a1 1 0 011 1v12m-6 0h6" />
          </svg>
          {{ project.bedrooms }} {{ project.bedrooms > 1 ? 'chambres' : 'chambre' }}
        </span>
        <span v-if="project.hasLand" class="inline-flex items-center">
          <svg class="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          Terrain inclus
        </span>
      </div>
      
      <button @click="$emit('view-details')" class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
        Voir les détails
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  allProjects: {
    type: Array,
    required: true
  }
})

// Émissions
defineEmits(['view-details', 'delete-project'])

// Fonctions utilitaires
function getStatusLabel(statut) {
  const statusMap = {
    'brouillon': 'Brouillon',
    'en_attente_AMO': 'En attente AMO',
    'en_mise_en_relation': 'Mise en relation',
    'devis_reçus': 'Devis reçus',
    'clôturé': 'Clôturé'
  }
  return statusMap[statut] || statut || 'Inconnu'
}

function getStatusClass(statut) {
  const classMap = {
    'brouillon': 'bg-gray-100 text-gray-800',
    'en_attente_AMO': 'bg-orange-100 text-orange-800', 
    'en_mise_en_relation': 'bg-blue-100 text-blue-800',
    'devis_reçus': 'bg-purple-100 text-purple-800',
    'clôturé': 'bg-green-100 text-green-800'
  }
  return classMap[statut] || 'bg-gray-100 text-gray-800'
}

function getProjectNumber(project, allProjects) {
  const sortedProjects = [...allProjects].sort((a, b) => 
    new Date(a.createdAt) - new Date(b.createdAt)
  )
  
  const projectIndex = sortedProjects.findIndex(p => p.id === project.id)
  const projectNumber = projectIndex + 1
  
  if (projectNumber === 1) return "Mon 1er projet"
  if (projectNumber === 2) return "Mon 2ème projet"
  if (projectNumber === 3) return "Mon 3ème projet"
  
  return `Mon ${projectNumber}ème projet`
}

function formatBudget(budget) {
  return budget ? budget.toLocaleString('fr-FR') + ' €' : 'Non défini'
}

// Propriétés calculées
const projectNumber = computed(() => getProjectNumber(props.project, props.allProjects))
const statusLabel = computed(() => getStatusLabel(props.project.statut))
const statusClass = computed(() => getStatusClass(props.project.statut))
const createdDate = computed(() => new Date(props.project.createdAt).toLocaleDateString('fr-FR'))
</script>
