<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <!-- En-tête du modal -->
      <div class="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 rounded-t-2xl">
        <div class="flex justify-between items-center">
          <div>
            <h3 class="text-2xl font-bold text-gray-900">{{ projectNumber }}</h3>
            <div class="flex items-center gap-3 mt-1">
              <span :class="statusClass" class="px-3 py-1 text-xs font-medium rounded-full">
                {{ statusLabel }}
              </span>
              <span class="text-sm text-gray-500">
                Créé le {{ createdDate }}
              </span>
            </div>
          </div>
          <button type="button" @click="$emit('close')" class="text-gray-400 hover:text-gray-600 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Contenu du modal -->
      <div class="px-8 py-6" v-if="project">
        <!-- Description complète -->
        <div class="mb-8">
          <h4 class="text-lg font-semibold text-gray-900 mb-3">Description du projet</h4>
          <div class="bg-gray-50 rounded-lg p-4">
            <p class="text-gray-700 leading-relaxed whitespace-pre-line">
              {{ project.description || 'Aucune description disponible' }}
            </p>
          </div>
        </div>

        <!-- Informations principales en grille -->
        <div class="mb-8">
          <h4 class="text-lg font-semibold text-gray-900 mb-4">Informations principales</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- Localisation -->
            <div class="bg-white border border-gray-200 rounded-lg p-4">
              <div class="flex items-center mb-3">
                <div class="p-2 bg-gray-100 rounded-lg mr-3">
                  <svg class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h5 class="font-medium text-gray-900">Localisation</h5>
              </div>
              <div class="space-y-1">
                <p class="text-sm text-gray-600">{{ project.address || 'Non définie' }}</p>
                <p class="font-medium text-gray-900">
                  {{ project.city || 'Non définie' }}
                  <span v-if="project.postalCode" class="text-gray-600 ml-1">
                    ({{ project.postalCode }})
                  </span>
                </p>
              </div>
            </div>

            <!-- Budget -->
            <div class="bg-white border border-gray-200 rounded-lg p-4">
              <div class="flex items-center mb-3">
                <div class="p-2 bg-green-100 rounded-lg mr-3">
                  <svg class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h5 class="font-medium text-gray-900">Budget estimé</h5>
              </div>
              <p class="text-2xl font-bold text-green-600">
                {{ formatBudget(project.budget) }}
              </p>
            </div>

            <!-- Surface -->
            <div class="bg-white border border-gray-200 rounded-lg p-4" v-if="project.surfaceM2">
              <div class="flex items-center mb-3">
                <div class="p-2 bg-blue-100 rounded-lg mr-3">
                  <svg class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a1 1 0 011-1h4a1 1 0 011 1v12m-6 0h6" />
                  </svg>
                </div>
                <h5 class="font-medium text-gray-900">Surface</h5>
              </div>
              <p class="text-xl font-bold text-blue-600">{{ project.surfaceM2 }} m²</p>
            </div>
          </div>
        </div>

        <!-- Caractéristiques du logement -->
        <div class="mb-8" v-if="project.bedrooms !== null || project.houseType || project.hasLand">
          <h4 class="text-lg font-semibold text-gray-900 mb-4">Caractéristiques du logement</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <!-- Nombre de chambres -->
            <div v-if="project.bedrooms !== null && project.bedrooms !== undefined" class="bg-purple-50 rounded-lg p-4">
              <div class="flex items-center mb-2">
                <svg class="h-5 w-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a1 1 0 011-1h4a1 1 0 011 1v12m-6 0h6" />
                </svg>
                <span class="text-sm font-medium text-purple-800">Chambres</span>
              </div>
              <p class="font-bold text-purple-900">
                {{ project.bedrooms }} {{ project.bedrooms > 1 ? 'chambres' : 'chambre' }}
              </p>
            </div>

            <!-- Type de logement -->
            <div v-if="project.houseType" class="bg-indigo-50 rounded-lg p-4">
              <div class="flex items-center mb-2">
                <svg class="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
                <span class="text-sm font-medium text-indigo-800">Type</span>
              </div>
              <p class="font-bold text-indigo-900 capitalize">{{ project.houseType }}</p>
            </div>

            <!-- Terrain -->
            <div class="bg-green-50 rounded-lg p-4">
              <div class="flex items-center mb-2">
                <svg class="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span class="text-sm font-medium text-green-800">Terrain</span>
              </div>
              <p class="font-bold text-green-900">
                {{ project.hasLand ? 'Inclus' : 'Non inclus' }}
              </p>
            </div>
          </div>
        </div>

        <!-- Informations administratives -->
        <div class="mb-8">
          <h4 class="text-lg font-semibold text-gray-900 mb-4">Informations administratives</h4>
          <div class="bg-gray-50 rounded-lg p-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p class="text-sm text-gray-600 mb-1">Statut actuel</p>
                <span :class="statusClass" class="inline-block px-3 py-1 text-xs font-medium rounded-full">
                  {{ statusLabel }}
                </span>
              </div>
              <div>
                <p class="text-sm text-gray-600 mb-1">Date de création</p>
                <p class="font-medium text-gray-900">{{ fullCreatedDate }}</p>
              </div>
              <div v-if="project.dateSubmission">
                <p class="text-sm text-gray-600 mb-1">Date de soumission</p>
                <p class="font-medium text-gray-900">{{ submissionDate }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- AMO assigné (si applicable) -->
        <div v-if="project.amo" class="mb-8">
          <h4 class="text-lg font-semibold text-gray-900 mb-4">AMO assigné</h4>
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div class="flex items-center">
              <div class="p-2 bg-blue-100 rounded-full mr-3">
                <svg class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p class="font-medium text-gray-900">{{ project.amo.firstName }} {{ project.amo.lastName }}</p>
                <p class="text-sm text-gray-600">{{ project.amo.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pied du modal -->
      <div class="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-8 py-6 rounded-b-2xl">
        <div class="flex justify-end space-x-4">
          <button 
            @click="$emit('close')"
            class="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  project: {
    type: Object,
    default: null
  },
  allProjects: {
    type: Array,
    required: true
  }
})

// Émissions
defineEmits(['close'])

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
  if (!project || !allProjects) return ''
  
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
const statusLabel = computed(() => props.project ? getStatusLabel(props.project.statut) : '')
const statusClass = computed(() => props.project ? getStatusClass(props.project.statut) : '')
const createdDate = computed(() => props.project ? new Date(props.project.createdAt).toLocaleDateString('fr-FR') : '')
const fullCreatedDate = computed(() => props.project ? new Date(props.project.createdAt).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : '')
const submissionDate = computed(() => props.project?.dateSubmission ? new Date(props.project.dateSubmission).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : '')
</script>
