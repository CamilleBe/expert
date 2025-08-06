<template>
  <!-- Modal de succès -->
  <div v-if="showSuccessModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="closeSuccessModal">
    <div class="bg-white rounded-lg p-8 max-w-md mx-4 relative" @click.stop>
      <!-- Icône de fermeture -->
      <button @click="closeSuccessModal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      
      <!-- Contenu de la modal -->
      <div class="text-center">
        <!-- Icône de succès -->
        <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
          <svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        
        <!-- Titre -->
        <h3 class="text-lg font-medium text-gray-900 mb-4">
          Projet créé avec succès !
        </h3>
        
        <!-- Message personnalisé -->
        <p class="text-sm text-gray-600 mb-6">
          {{ modalSuccessMessage }}
        </p>
        
        <!-- Bouton de fermeture -->
        <button @click="closeSuccessModal" class="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Parfait !
        </button>
      </div>
    </div>
  </div>

  <div class="bg-white rounded-xl shadow-lg p-6 md:p-8">
    <div class="mb-6">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        Décrivez votre projet
      </h2>
      <p class="text-gray-600">
        Donnez-nous les détails de votre projet pour que nous puissions vous mettre en relation avec les meilleurs artisans.
      </p>
    </div>

    <!-- Message d'erreur global seulement pour erreurs système -->
    <div v-if="globalError && !hasValidationErrors" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
      <div class="flex items-start">
        <svg class="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
        </svg>
        <p class="text-red-700 font-medium">{{ globalError }}</p>
      </div>
    </div>

    <!-- Message récapitulatif pour erreurs de validation -->
    <div v-if="hasValidationErrors" class="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
      <div class="flex items-start">
        <svg class="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
        </svg>
        <div>
          <p class="text-yellow-700 font-medium">Veuillez corriger les erreurs ci-dessous</p>
          <p class="text-yellow-600 text-sm mt-1">{{ validationErrorCount }} erreur(s) à corriger dans le formulaire</p>
        </div>
      </div>
    </div>

    <!-- Message de succès -->
    <div v-if="showSuccess" class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
      <div class="flex items-center">
        <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
        </svg>
        <div>
          <p class="text-green-700 font-medium">Projet créé avec succès !</p>
          <p v-if="successMessage" class="text-green-600 text-sm mt-1">{{ successMessage }}</p>
        </div>
      </div>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Section Informations du projet -->
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-900 flex items-center">
          <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
          </svg>
          Détails du projet
        </h3>

        <!-- Description du projet -->
        <div>
          <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
            Description du projet *
          </label>
          <textarea
            id="description"
            v-model="formData.description"
            placeholder="Décrivez votre projet en détail : type de travaux, objectifs, contraintes particulières..."
            rows="4"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            :class="{ 'border-red-500': hasError('description') }"
          ></textarea>
          <div class="flex justify-between items-center mt-1">
            <div v-if="hasError('description')" class="flex items-start text-red-500 text-sm">
              <svg class="w-4 h-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              <span>{{ getError('description') }}</span>
            </div>
            <span class="text-gray-500 text-sm ml-auto">{{ formData.description.length }}/5000 caractères</span>
          </div>
        </div>

        <!-- Adresse -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="address" class="block text-sm font-medium text-gray-700 mb-2">
              Adresse du projet *
            </label>
            <input
              id="address"
              v-model="formData.address"
              type="text"
              placeholder="123 Rue de la Paix"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :class="{ 'border-red-500': hasError('address') }"
            />
            <div v-if="hasError('address')" class="flex items-start text-red-500 text-sm mt-1">
              <svg class="w-4 h-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              <span>{{ getError('address') }}</span>
            </div>
          </div>

          <div>
            <label for="city" class="block text-sm font-medium text-gray-700 mb-2">
              Ville *
            </label>
            <input
              id="city"
              v-model="formData.city"
              type="text"
              placeholder="Lyon"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :class="{ 'border-red-500': hasError('city') }"
            />
            <div v-if="hasError('city')" class="flex items-start text-red-500 text-sm mt-1">
              <svg class="w-4 h-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              <span>{{ getError('city') }}</span>
            </div>
          </div>
        </div>

        <!-- Code postal -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label for="postalCode" class="block text-sm font-medium text-gray-700 mb-2">
              Code postal *
            </label>
            <input
              id="postalCode"
              v-model="formData.postalCode"
              type="text"
              placeholder="69001"
              maxlength="5"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :class="{ 'border-red-500': hasError('postalCode') }"
            />
            <div v-if="hasError('postalCode')" class="flex items-start text-red-500 text-sm mt-1">
              <svg class="w-4 h-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              <span>{{ getError('postalCode') }}</span>
            </div>
          </div>

          <div>
            <label for="budget" class="block text-sm font-medium text-gray-700 mb-2">
              Budget estimé (€)
            </label>
            <input
              id="budget"
              v-model="formData.budget"
              type="number"
              min="0"
              placeholder="25000"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :class="{ 'border-red-500': hasError('budget') }"
            />
            <div v-if="hasError('budget')" class="flex items-start text-red-500 text-sm mt-1">
              <svg class="w-4 h-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              <span>{{ getError('budget') }}</span>
            </div>
          </div>

          <div>
            <label for="surfaceM2" class="block text-sm font-medium text-gray-700 mb-2">
              Surface (m²)
            </label>
            <input
              id="surfaceM2"
              v-model="formData.surfaceM2"
              type="number"
              min="1"
              placeholder="150"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :class="{ 'border-red-500': hasError('surfaceM2') }"
            />
            <div v-if="hasError('surfaceM2')" class="flex items-start text-red-500 text-sm mt-1">
              <svg class="w-4 h-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              <span>{{ getError('surfaceM2') }}</span>
            </div>
          </div>
        </div>

        <!-- Détails supplémentaires -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="bedrooms" class="block text-sm font-medium text-gray-700 mb-2">
              Nombre de chambres
            </label>
            <input
              id="bedrooms"
              v-model="formData.bedrooms"
              type="number"
              min="0"
              placeholder="3"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :class="{ 'border-red-500': hasError('bedrooms') }"
            />
            <div v-if="hasError('bedrooms')" class="flex items-start text-red-500 text-sm mt-1">
              <svg class="w-4 h-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              <span>{{ getError('bedrooms') }}</span>
            </div>
          </div>

          <div>
            <label for="houseType" class="block text-sm font-medium text-gray-700 mb-2">
              Type de maison
            </label>
            <select
              id="houseType"
              v-model="formData.houseType"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :class="{ 'border-red-500': hasError('houseType') }"
            >
              <option value="">Sélectionnez un type</option>
              <option value="plain-pied">Plain-pied</option>
              <option value="étage">À étage</option>
              <option value="autre">Autre</option>
            </select>
            <div v-if="hasError('houseType')" class="flex items-start text-red-500 text-sm mt-1">
              <svg class="w-4 h-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              <span>{{ getError('houseType') }}</span>
            </div>
          </div>
        </div>

        <!-- Terrain inclus -->
        <div class="flex items-center">
          <input
            id="hasLand"
            v-model="formData.hasLand"
            type="checkbox"
            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label for="hasLand" class="ml-2 block text-sm text-gray-700">
            Le projet inclut un terrain
          </label>
        </div>
      </div>

      <!-- Section Informations client (seulement si non connecté) -->
      <div v-if="!userStore.isAuthenticated" class="space-y-4 border-t pt-6">
        <h3 class="text-lg font-semibold text-gray-900 flex items-center">
          <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          Vos coordonnées
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="clientFirstName" class="block text-sm font-medium text-gray-700 mb-2">
              Prénom *
            </label>
            <input
              id="clientFirstName"
              v-model="formData.clientFirstName"
              type="text"
              placeholder="Jean"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :class="{ 'border-red-500': hasError('clientFirstName') }"
            />
            <div v-if="hasError('clientFirstName')" class="flex items-start text-red-500 text-sm mt-1">
              <svg class="w-4 h-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              <span>{{ getError('clientFirstName') }}</span>
            </div>
          </div>

          <div>
            <label for="clientLastName" class="block text-sm font-medium text-gray-700 mb-2">
              Nom *
            </label>
            <input
              id="clientLastName"
              v-model="formData.clientLastName"
              type="text"
              placeholder="Dupont"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :class="{ 'border-red-500': hasError('clientLastName') }"
            />
            <div v-if="hasError('clientLastName')" class="flex items-start text-red-500 text-sm mt-1">
              <svg class="w-4 h-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              <span>{{ getError('clientLastName') }}</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="clientEmail" class="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              id="clientEmail"
              v-model="formData.clientEmail"
              type="email"
              placeholder="jean.dupont@email.com"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :class="{ 'border-red-500': hasError('clientEmail') }"
            />
            <div v-if="hasError('clientEmail')" class="flex items-start text-red-500 text-sm mt-1">
              <svg class="w-4 h-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              <span>{{ getError('clientEmail') }}</span>
            </div>
          </div>

          <div>
            <label for="clientPhone" class="block text-sm font-medium text-gray-700 mb-2">
              Téléphone *
            </label>
            <input
              id="clientPhone"
              v-model="formData.clientPhone"
              type="tel"
              placeholder="0123456789"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              :class="{ 'border-red-500': hasError('clientPhone') }"
            />
            <div v-if="hasError('clientPhone')" class="flex items-start text-red-500 text-sm mt-1">
              <svg class="w-4 h-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              <span>{{ getError('clientPhone') }}</span>
            </div>
          </div>
        </div>

        <!-- Mot de passe temporaire -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label for="clientPassword" class="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe temporaire *
            </label>
            <div class="relative">
              <input
                id="clientPassword"
                v-model="formData.clientPassword"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Minimum 8 caractères"
                class="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                :class="{ 'border-red-500': hasError('clientPassword') || hasError('password') }"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <svg v-if="showPassword" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
                </svg>
                <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </button>
            </div>
            <div v-if="hasError('clientPassword') || hasError('password')" class="flex items-start text-red-500 text-sm mt-1">
              <svg class="w-4 h-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              <span>{{ getError('clientPassword') || getError('password') }}</span>
            </div>
            <!-- Indicateur de force du mot de passe -->
            <div v-if="formData.clientPassword" class="mt-2">
              <div class="text-xs text-gray-600">
                Force du mot de passe: 
                <span :class="getPasswordStrengthClass()">{{ getPasswordStrengthText() }}</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                <div class="h-1.5 rounded-full transition-all duration-300" :class="getPasswordStrengthBarClass()" :style="{ width: getPasswordStrengthWidth() }"></div>
              </div>
              <p class="text-xs text-gray-500 mt-1">
                ✅ Seuls 8 caractères minimum sont requis • Majuscules et chiffres optionnels
              </p>
            </div>
          </div>

          <div>
            <label for="clientPasswordConfirm" class="block text-sm font-medium text-gray-700 mb-2">
              Confirmer le mot de passe *
            </label>
            <div class="relative">
              <input
                id="clientPasswordConfirm"
                v-model="formData.clientPasswordConfirm"
                :type="showPasswordConfirm ? 'text' : 'password'"
                placeholder="Répétez le mot de passe"
                class="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                :class="{ 'border-red-500': hasError('clientPasswordConfirm') }"
              />
              <button
                type="button"
                @click="showPasswordConfirm = !showPasswordConfirm"
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <svg v-if="showPasswordConfirm" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
                </svg>
                <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </button>
            </div>
            <!-- Erreur de correspondance -->
            <div v-if="hasError('clientPasswordConfirm')" class="flex items-start text-red-500 text-sm mt-1">
              <svg class="w-4 h-4 text-red-500 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              <span>{{ getError('clientPasswordConfirm') }}</span>
            </div>
            
            <!-- Indicateur de correspondance (quand c'est bon) -->
            <div v-else-if="formData.clientPasswordConfirm && formData.clientPassword && !passwordMismatchError" class="flex items-start text-green-500 text-sm mt-1">
              <svg class="w-4 h-4 text-green-500 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span>Les mots de passe correspondent</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bouton de soumission -->
      <div class="pt-6">
        <button
          type="submit"
          :disabled="isSubmitting || !canSubmit"
          class="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg flex items-center justify-center"
        >
          <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ isSubmitting ? 'Création en cours...' : 'Créer mon projet' }}
        </button>

        <p class="mt-3 text-sm text-gray-600">
          En soumettant ce formulaire, vous acceptez que vos informations soient utilisées pour vous mettre en relation avec des artisans qualifiés.
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { useNotificationsStore } from '@/stores/notifications'
import projetService from '@/services/projetService'

// Stores
const userStore = useUserStore()
const notificationsStore = useNotificationsStore()

// État du formulaire
const isSubmitting = ref(false)
const globalError = ref('')
const showSuccess = ref(false)
const successMessage = ref('')
const errors = ref([])

// État pour afficher/masquer les mots de passe
const showPassword = ref(false)
const showPasswordConfirm = ref(false)

// État pour la popup de succès
const showSuccessModal = ref(false)
const modalSuccessMessage = ref('')

// Données du formulaire
const formData = reactive({
  // Champs projet
  description: '',
  address: '',
  city: '',
  postalCode: '',
  budget: '',
  surfaceM2: '',
  bedrooms: '',
  houseType: '',
  hasLand: false,
  
  // Champs client (pour utilisateurs non connectés)
  clientFirstName: '',
  clientLastName: '',
  clientEmail: '',
  clientPhone: '',
  clientPassword: '',
  clientPasswordConfirm: ''
})

// Computed
const canSubmit = computed(() => {
  const basicFields = formData.description.trim() && 
                     formData.address.trim() && 
                     formData.city.trim() && 
                     formData.postalCode.trim()
  
  if (userStore.isAuthenticated) {
    return basicFields
  }
  
  // Pour les utilisateurs anonymes, vérifier tous les champs + correspondance des mots de passe
  return basicFields && 
         formData.clientFirstName.trim() && 
         formData.clientLastName.trim() && 
         formData.clientEmail.trim() && 
         formData.clientPhone.trim() &&
         formData.clientPassword.trim() &&
         formData.clientPasswordConfirm.trim() &&
         !passwordMismatchError.value // Les mots de passe doivent correspondre
})

// Computed pour gérer l'affichage des erreurs
const hasValidationErrors = computed(() => {
  return errors.value.length > 0 || passwordMismatchError.value
})

const validationErrorCount = computed(() => {
  let count = errors.value.length
  if (passwordMismatchError.value) count++
  return count
})

// État pour l'erreur de correspondance des mots de passe en temps réel
const passwordMismatchError = ref('')

// Watcher pour vérifier la correspondance des mots de passe en temps réel
watch(() => [formData.clientPassword, formData.clientPasswordConfirm], ([password, confirmPassword]) => {
  if (!userStore.isAuthenticated && confirmPassword && password !== confirmPassword) {
    passwordMismatchError.value = 'Les mots de passe ne correspondent pas'
  } else {
    passwordMismatchError.value = ''
  }
}, { immediate: true })

// Méthodes de gestion des erreurs
const hasError = (field) => {
  // Vérification spéciale pour la confirmation du mot de passe
  if (field === 'clientPasswordConfirm' && passwordMismatchError.value) {
    return true
  }
  
  const fieldName = getFieldName(field)
  return errors.value.some(error => {
    if (typeof error === 'string') {
      // Erreur côté client (chaîne simple)
      return error.toLowerCase().includes(fieldName.toLowerCase())
    } else if (error && typeof error === 'object' && error.field) {
      // Erreur côté serveur (objet avec field)
      return error.field === field
    }
    return false
  })
}



const getError = (field) => {
  // Vérification spéciale pour la confirmation du mot de passe
  if (field === 'clientPasswordConfirm' && passwordMismatchError.value) {
    return passwordMismatchError.value
  }
  
  const fieldName = getFieldName(field)
  const foundError = errors.value.find(error => {
    if (typeof error === 'string') {
      // Erreur côté client (chaîne simple)
      return error.toLowerCase().includes(fieldName.toLowerCase())
    } else if (error && typeof error === 'object' && error.field) {
      // Erreur côté serveur (objet avec field)
      return error.field === field
    }
    return false
  })
  
  if (!foundError) return ''
  
  // Retourner le message approprié selon le type d'erreur
  if (typeof foundError === 'string') {
    return foundError
  } else if (foundError.message) {
    return foundError.message
  } else {
    return String(foundError)
  }
}

const getFieldName = (field) => {
  const fieldNames = {
    description: 'description',
    address: 'adresse',
    city: 'ville',
    postalCode: 'code postal',
    budget: 'budget',
    surfaceM2: 'surface',
    bedrooms: 'chambres',
    houseType: 'type de maison',
    clientFirstName: 'prénom',
    clientLastName: 'nom',
    clientEmail: 'email',
    clientPhone: 'téléphone',
    clientPassword: 'mot de passe',
    clientPasswordConfirm: 'confirmation mot de passe',
    password: 'mot de passe'
  }
  return fieldNames[field] || field
}

// Réinitialiser les erreurs et messages
const resetMessages = () => {
  globalError.value = ''
  showSuccess.value = false
  successMessage.value = ''
  errors.value = []
  passwordMismatchError.value = ''
  showSuccessModal.value = false
  modalSuccessMessage.value = ''
}

// Fermer la modal de succès
const closeSuccessModal = () => {
  showSuccessModal.value = false
  modalSuccessMessage.value = ''
}

// Gestion de la touche Escape pour fermer la modal
const handleKeydown = (event) => {
  if (event.key === 'Escape' && showSuccessModal.value) {
    closeSuccessModal()
  }
}

// Écouter les événements clavier
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

// Préparer les données pour l'API
const prepareDataForAPI = () => {
  const data = {
    description: formData.description.trim(),
    address: formData.address.trim(),
    city: formData.city.trim(),
    postalCode: formData.postalCode.trim()
  }
  
  // Ajouter les champs optionnels s'ils sont remplis
  if (formData.budget) data.budget = parseInt(formData.budget)
  if (formData.surfaceM2) data.surfaceM2 = parseInt(formData.surfaceM2)
  if (formData.bedrooms) data.bedrooms = parseInt(formData.bedrooms)
  if (formData.houseType) data.houseType = formData.houseType
  if (formData.hasLand !== undefined) data.hasLand = formData.hasLand
  
  // Ajouter les informations client si utilisateur non connecté
  if (!userStore.isAuthenticated) {
    data.clientFirstName = formData.clientFirstName.trim()
    data.clientLastName = formData.clientLastName.trim()
    data.clientEmail = formData.clientEmail.trim()
    data.clientPhone = formData.clientPhone.trim()
    data.clientPassword = formData.clientPassword.trim()
    data.clientPasswordConfirm = formData.clientPasswordConfirm.trim()
  }
  
  return data
}

// Fonctions pour évaluer la force du mot de passe (validation simple)
const getPasswordStrength = () => {
  const password = formData.clientPassword
  let strength = 0
  
  // Critère principal : longueur (plus important)
  if (password.length >= 8) strength += 2  // Valide selon nos règles
  if (password.length >= 12) strength += 1 // Bonus pour longueur
  
  // Critères optionnels (bonus, pas obligatoires)
  if (/[a-z]/.test(password)) strength += 1
  if (/[A-Z]/.test(password)) strength += 1
  if (/[0-9]/.test(password)) strength += 1
  if (/[^A-Za-z0-9]/.test(password)) strength += 1
  
  return strength
}

const getPasswordStrengthText = () => {
  const password = formData.clientPassword
  const strength = getPasswordStrength()
  
  // Si moins de 8 caractères, toujours faible
  if (password.length < 8) return 'Trop court'
  
  // À partir de 8 caractères, c'est au minimum "Correct"
  if (strength <= 3) return 'Correct'
  if (strength <= 5) return 'Bon'
  return 'Excellent'
}

const getPasswordStrengthClass = () => {
  const password = formData.clientPassword
  const strength = getPasswordStrength()
  
  if (password.length < 8) return 'text-red-600 font-medium'
  if (strength <= 3) return 'text-blue-600 font-medium' // Correct = bleu
  if (strength <= 5) return 'text-green-600 font-medium'
  return 'text-green-700 font-bold' // Excellent
}

const getPasswordStrengthBarClass = () => {
  const password = formData.clientPassword
  const strength = getPasswordStrength()
  
  if (password.length < 8) return 'bg-red-500'
  if (strength <= 3) return 'bg-blue-500'    // Correct = bleu
  if (strength <= 5) return 'bg-green-500'
  return 'bg-green-600' // Excellent
}

const getPasswordStrengthWidth = () => {
  const password = formData.clientPassword
  const strength = getPasswordStrength()
  
  if (password.length < 8) return `${Math.min(password.length * 10, 60)}%`
  
  // À partir de 8 caractères, minimum 70% de la barre
  const baseWidth = 70
  const bonusWidth = Math.min(strength * 5, 30)
  return `${baseWidth + bonusWidth}%`
}

// Gérer la soumission du formulaire
const handleSubmit = async () => {
  resetMessages()
  
  // Validation côté client
  const dataToValidate = prepareDataForAPI()
  const validation = projetService.validateProjectData(dataToValidate, userStore.isAuthenticated)
  
  console.log('🔍 Debug validation:', {
    isAuthenticated: userStore.isAuthenticated,
    dataToValidate,
    validationResult: validation,
    errorsTypes: validation.errors.map(err => typeof err)
  })
  
  if (!validation.isValid) {
    // S'assurer que toutes les erreurs sont des chaînes
    errors.value = validation.errors.map(err => typeof err === 'string' ? err : String(err))
    globalError.value = '' // Pas de message global pour les erreurs de validation
    return
  }
  
  isSubmitting.value = true
  
  try {
    const result = await projetService.createProject(dataToValidate)
    
    console.log('🔍 Debug - Résultat API complet:', result)
    console.log('🔍 Debug - result.success:', result.success)
    console.log('🔍 Debug - showSuccess avant:', showSuccess.value)
    
    if (result.success) {
      console.log('✅ Entrée dans le bloc de succès')
      showSuccess.value = true
      console.log('✅ showSuccess après:', showSuccess.value)
      
      // Messages personnalisés selon le contexte
      if (userStore.isAuthenticated) {
        // Utilisateur connecté - projet créé directement
        const message = '🎉 Projet bien envoyé ! Nous allons vous mettre en relation avec des artisans qualifiés.'
        successMessage.value = message
        modalSuccessMessage.value = message
        console.log('✅ Message utilisateur connecté défini:', successMessage.value)
        notificationsStore.showSuccess('Projet créé avec succès !')
      } else {
        // Utilisateur anonyme - compte + projet créés
        if (result.userCreated) {
          const message = '🎉 Compte créé et projet bien envoyé ! Un email de bienvenue vous a été envoyé pour confirmer votre inscription.'
          successMessage.value = message
          modalSuccessMessage.value = message
          console.log('✅ Message nouveau compte défini:', successMessage.value)
          notificationsStore.showSuccess('Compte créé et projet envoyé avec succès !')
        } else {
          // Email existant mais projet créé
          const message = '🎉 Projet bien envoyé ! Nous allons vous mettre en relation avec des artisans qualifiés.'
          successMessage.value = message
          modalSuccessMessage.value = message
          console.log('✅ Message compte existant défini:', successMessage.value)
          notificationsStore.showSuccess('Projet créé avec succès !')
        }
      }
      
      // Afficher la modal de succès
      showSuccessModal.value = true
      
      console.log('✅ État final - showSuccess:', showSuccess.value, 'successMessage:', successMessage.value, 'showSuccessModal:', showSuccessModal.value)
      
      // Afficher un message d'information supplémentaire
      setTimeout(() => {
        if (result.userCreated && !userStore.isAuthenticated) {
          notificationsStore.showInfo('💡 Vous pouvez maintenant vous connecter avec votre email et mot de passe pour suivre l\'avancement de votre projet.')
        }
      }, 2000)
      
      // Fermer automatiquement la modal après 8 secondes
      setTimeout(() => {
        closeSuccessModal()
      }, 8000)
      
      // Réinitialiser le formulaire après un délai plus long pour laisser lire
      setTimeout(() => {
        Object.keys(formData).forEach(key => {
          if (typeof formData[key] === 'boolean') {
            formData[key] = false
          } else {
            formData[key] = ''
          }
        })
        showSuccess.value = false
        // Réinitialiser aussi l'état des mots de passe
        showPassword.value = false
        showPasswordConfirm.value = false
      }, 10000)
    }
    
  } catch (error) {
    console.error('❌ Erreur lors de la création du projet:', error)
    console.log('❌ Type d\'erreur:', typeof error)
    console.log('❌ Status:', error.status)
    console.log('❌ Message:', error.message)
    
    if (error.errors && Array.isArray(error.errors)) {
      // Erreurs de validation du serveur - afficher sous les champs
      errors.value = error.errors.map(err => typeof err === 'string' ? err : err)
      globalError.value = '' // Pas de message global pour les erreurs de validation
    } else if (error.status === 403) {
      globalError.value = 'Accès refusé - Seuls les clients peuvent créer des projets'
      errors.value = [] // Pas d'erreurs de champs
    } else if (error.status === 409) {
      globalError.value = 'Un compte avec cet email existe déjà mais n\'est pas un compte client. Veuillez vous connecter.'
      errors.value = [] // Pas d'erreurs de champs
    } else {
      globalError.value = error.message || 'Une erreur est survenue lors de la création du projet'
      errors.value = [] // Pas d'erreurs de champs
    }
    
    // Notification d'erreur
    notificationsStore.showError(globalError.value)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Styles spécifiques au composant */
.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>