<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <form @submit.prevent="submitProject">
        <!-- En-tête du modal -->
        <div class="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 rounded-t-2xl">
          <div class="flex justify-between items-center">
            <h3 class="text-2xl font-bold text-gray-900">Créer un nouveau projet</h3>
            <button type="button" @click="$emit('close')" class="text-gray-400 hover:text-gray-600 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Contenu du formulaire -->
        <div class="px-8 py-6">
          <!-- Erreur générale -->
          <div v-if="formErrors.general" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div class="flex items-center">
              <svg class="h-5 w-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-red-700 font-medium">{{ formErrors.general }}</span>
            </div>
          </div>

          <div class="space-y-6">
            <!-- Description du projet -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Description du projet <span class="text-red-500">*</span>
              </label>
              <textarea 
                v-model="formData.description"
                rows="4" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                :class="{ 'border-red-500': formErrors.description }"
                placeholder="Décrivez votre projet en détail : type de travaux, objectifs, contraintes particulières..."
                required
              ></textarea>
              <div class="mt-1 text-sm text-gray-500">
                {{ formData.description.length }}/5000 caractères
              </div>
              <div v-if="formErrors.description" class="mt-1 text-sm text-red-600">
                {{ formErrors.description }}
              </div>
            </div>

            <!-- Adresse complète -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Adresse complète <span class="text-red-500">*</span>
              </label>
              <input 
                v-model="formData.address"
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                :class="{ 'border-red-500': formErrors.address }"
                placeholder="123 Rue de la République"
                required
              />
              <div v-if="formErrors.address" class="mt-1 text-sm text-red-600">
                {{ formErrors.address }}
              </div>
            </div>

            <!-- Ville et Code postal -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Ville <span class="text-red-500">*</span>
                </label>
                <input 
                  v-model="formData.city"
                  type="text" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  :class="{ 'border-red-500': formErrors.city }"
                  placeholder="Paris"
                  required
                />
                <div v-if="formErrors.city" class="mt-1 text-sm text-red-600">
                  {{ formErrors.city }}
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Code postal <span class="text-red-500">*</span>
                </label>
                <input 
                  v-model="formData.postalCode"
                  type="text" 
                  pattern="[0-9]{5}"
                  maxlength="5"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  :class="{ 'border-red-500': formErrors.postalCode }"
                  placeholder="75001"
                  required
                />
                <div v-if="formErrors.postalCode" class="mt-1 text-sm text-red-600">
                  {{ formErrors.postalCode }}
                </div>
              </div>
            </div>

            <!-- Budget estimé -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Budget estimé (€)
              </label>
              <input 
                v-model="formData.budget"
                type="number" 
                min="0"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                :class="{ 'border-red-500': formErrors.budget }"
                placeholder="150000"
              />
              <div v-if="formErrors.budget" class="mt-1 text-sm text-red-600">
                {{ formErrors.budget }}
              </div>
            </div>

            <!-- Surface et chambres -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Surface (m²)
                </label>
                <input 
                  v-model="formData.surfaceM2"
                  type="number" 
                  min="1"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  :class="{ 'border-red-500': formErrors.surfaceM2 }"
                  placeholder="120"
                />
                <div v-if="formErrors.surfaceM2" class="mt-1 text-sm text-red-600">
                  {{ formErrors.surfaceM2 }}
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Nombre de chambres
                </label>
                <select 
                  v-model="formData.bedrooms"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  :class="{ 'border-red-500': formErrors.bedrooms }"
                >
                  <option value="">Sélectionner</option>
                  <option value="0">Studio</option>
                  <option value="1">1 chambre</option>
                  <option value="2">2 chambres</option>
                  <option value="3">3 chambres</option>
                  <option value="4">4 chambres</option>
                  <option value="5">5 chambres et +</option>
                </select>
                <div v-if="formErrors.bedrooms" class="mt-1 text-sm text-red-600">
                  {{ formErrors.bedrooms }}
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Type de logement
                </label>
                <select 
                  v-model="formData.houseType"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Sélectionner</option>
                  <option value="plain-pied">Plain-pied</option>
                  <option value="étage">À étage</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
            </div>

            <!-- Terrain inclus -->
            <div>
              <label class="flex items-center">
                <input 
                  v-model="formData.hasLand"
                  type="checkbox" 
                  class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <span class="ml-2 text-sm text-gray-700">Le projet inclut un terrain</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Pied du modal -->
        <div class="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-8 py-6 rounded-b-2xl">
          <div class="flex space-x-4">
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-300 text-white font-semibold rounded-lg transition-colors flex items-center justify-center"
            >
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isSubmitting ? 'Création en cours...' : 'Créer le projet' }}
            </button>
            <button 
              type="button"
              @click="$emit('close')"
              :disabled="isSubmitting"
              class="flex-1 py-3 px-6 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 text-gray-700 font-semibold rounded-lg transition-colors"
            >
              Annuler
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import projetService from '@/services/projetService'

// Props
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

// Émissions
const emit = defineEmits(['close', 'project-created'])

// État réactif
const isSubmitting = ref(false)
const formData = ref({
  description: '',
  address: '',
  city: '',
  postalCode: '',
  budget: '',
  surfaceM2: '',
  bedrooms: '',
  houseType: '',
  hasLand: false
})
const formErrors = ref({})

// Méthodes
function resetForm() {
  formData.value = {
    description: '',
    address: '',
    city: '',
    postalCode: '',
    budget: '',
    surfaceM2: '',
    bedrooms: '',
    houseType: '',
    hasLand: false
  }
  formErrors.value = {}
}

async function submitProject() {
  if (isSubmitting.value) return
  
  isSubmitting.value = true
  formErrors.value = {}

  try {
    console.log('🚀 Création d\'un nouveau projet...', formData.value)
    
    // Convertir les données pour l'API
    const formattedData = {
      description: formData.value.description,
      address: formData.value.address,
      city: formData.value.city,
      postalCode: formData.value.postalCode,
      ...(formData.value.budget && { budget: parseInt(formData.value.budget) }),
      ...(formData.value.surfaceM2 && { surfaceM2: parseInt(formData.value.surfaceM2) }),
      ...(formData.value.bedrooms && { bedrooms: parseInt(formData.value.bedrooms) }),
      ...(formData.value.houseType && { houseType: formData.value.houseType }),
      hasLand: formData.value.hasLand
    }

    const result = await projetService.createProject(formattedData)
    
    console.log('✅ Projet créé avec succès:', result)
    
    // Émettre l'événement de création réussie
    emit('project-created', result.data)
    
    // Fermer le modal et réinitialiser
    emit('close')
    resetForm()
    
    // Afficher un message de succès
    alert('Projet créé avec succès !')
    
  } catch (error) {
    console.error('❌ Erreur lors de la création du projet:', error)
    
    if (error.errors && Array.isArray(error.errors)) {
      // Erreurs de validation de l'API
      const errorObj = {}
      error.errors.forEach(err => {
        if (typeof err === 'string') {
          const field = err.toLowerCase()
          if (field.includes('description')) errorObj.description = err
          else if (field.includes('adresse')) errorObj.address = err
          else if (field.includes('ville')) errorObj.city = err
          else if (field.includes('code postal')) errorObj.postalCode = err
          else if (field.includes('budget')) errorObj.budget = err
          else if (field.includes('surface')) errorObj.surfaceM2 = err
          else if (field.includes('chambre')) errorObj.bedrooms = err
          else errorObj.general = err
        }
      })
      formErrors.value = errorObj
    } else {
      // Erreur générale
      formErrors.value = { general: error.message || 'Erreur lors de la création du projet' }
    }
  } finally {
    isSubmitting.value = false
  }
}

// Watcher pour réinitialiser le formulaire quand le modal se ferme
watch(() => props.show, (newValue) => {
  if (!newValue) {
    resetForm()
  }
})
</script>
