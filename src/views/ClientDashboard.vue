<template>
  <div class="min-h-screen bg-gray-50">
    

    <div class="flex">
      <!-- Sidebar -->
      <nav class="w-64 bg-white shadow-sm h-screen sticky top-0">
        <div class="p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-6">Tableau de bord</h2>
          <ul class="space-y-2">
            <li>
              <button @click="activeTab = 'overview'" :class="activeTab === 'overview' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-600 hover:bg-gray-50'" class="w-full text-left px-4 py-2 rounded-lg border transition-colors">
                Vue d'ensemble
              </button>
            </li>
            <li>
              <button @click="activeTab = 'projects'" :class="activeTab === 'projects' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-600 hover:bg-gray-50'" class="w-full text-left px-4 py-2 rounded-lg border transition-colors">
                Mes projets
              </button>
            </li>
            <li>
              <button @click="activeTab = 'documents'" :class="activeTab === 'documents' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-600 hover:bg-gray-50'" class="w-full text-left px-4 py-2 rounded-lg border transition-colors">
                Documents
              </button>
            </li>
            <li>
              <button @click="activeTab = 'notifications'" :class="activeTab === 'notifications' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-600 hover:bg-gray-50'" class="w-full text-left px-4 py-2 rounded-lg border transition-colors relative">
                Notifications
                <!-- Pastille pour nouvelles notifications -->
                <span 
                  v-if="clientNotifications.filter(n => !n.read).length > 0" 
                  class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse"
                >
                  {{ clientNotifications.filter(n => !n.read).length }}
                </span>
              </button>
            </li>
            <li>

            </li>
          </ul>
        </div>
      </nav>

      <!-- Main Content -->
      <main class="flex-1 p-8">
        <!-- Vue d'ensemble -->
        <div v-if="activeTab === 'overview'" class="animate-fade-in">
          <h1 class="text-3xl font-bold text-gray-900 mb-8">Bienvenue, {{ userStore.userName || 'Utilisateur' }} !</h1>
          
          <!-- Statistiques rapides -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-blue-100">
                  <svg class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a1 1 0 011-1h4a1 1 0 011 1v12m-6 0h6" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-600">Projets actifs</p>
                  <p class="text-2xl font-bold text-gray-900">{{ dashboardStats.enCours }}</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-green-100">
                  <svg class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-600">Projets terminés</p>
                  <p class="text-2xl font-bold text-gray-900">{{ dashboardStats.termines }}</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-yellow-100">
                  <svg class="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-600">Projets brouillons</p>
                  <p class="text-2xl font-bold text-gray-900">{{ dashboardStats.brouillons }}</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-purple-100">
                  <svg class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-600">Budget total</p>
                  <p class="text-2xl font-bold text-gray-900">{{ dashboardStats.budgetTotal.toLocaleString('fr-FR') }}€</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Projets récents -->
          <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Projets récents</h2>
            
            <!-- Chargement -->
            <div v-if="isLoadingProjects" class="flex items-center justify-center py-8">
              <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span class="ml-3 text-gray-600">Chargement de vos projets...</span>
            </div>
            
            <!-- Erreur -->
            <div v-else-if="projectsError" class="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div class="flex items-center">
                <svg class="h-5 w-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-red-700 font-medium">{{ projectsError }}</span>
              </div>
              <button @click="loadDashboard" class="mt-2 text-sm text-red-600 hover:text-red-500 underline">
                Réessayer
              </button>
            </div>
            
            <!-- Aucun projet -->
            <div v-else-if="recentProjects.length === 0" class="text-center py-8">
              <div class="p-3 rounded-full bg-gray-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg class="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a1 1 0 011-1h4a1 1 0 011 1v12m-6 0h6" />
                </svg>
              </div>
              <h3 class="text-lg font-medium text-gray-900 mb-2">Aucun projet pour le moment</h3>
              <p class="text-gray-600 mb-4">Créez votre premier projet pour commencer</p>
              <button @click="showCreateProjectModal = true" class="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Créer un projet
              </button>
            </div>
            
            <!-- Liste des projets -->
            <div v-else class="space-y-4">
              <div v-for="project in recentProjects" :key="project.id" class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center">
                  <div class="p-2 rounded-full bg-blue-100">
                    <svg class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a1 1 0 011-1h4a1 1 0 011 1v12m-6 0h6" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">{{ project.description ? project.description.substring(0, 50) + '...' : 'Projet sans titre' }}</p>
                    <p class="text-sm text-gray-600">{{ project.adresseComplete || (project.city + ', ' + project.postalCode) }}</p>
                  </div>
                </div>
                <div class="text-right">
                  <span :class="getStatusClass(project.statut)" class="px-2 py-1 text-xs font-medium rounded-full">
                    {{ getStatusLabel(project.statut) }}
                  </span>
                  <p class="text-sm text-gray-500 mt-1">{{ project.budgetFormate || (project.budget ? project.budget + '€' : 'Budget non défini') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mes projets -->
        <div v-if="activeTab === 'projects'" class="animate-fade-in">
          <div class="flex justify-between items-start mb-8">
            <div>
              <h1 class="text-3xl font-bold text-gray-900 mb-2">Mes projets</h1>
              <p class="text-gray-600">Retrouvez ici tous vos projets en cours</p>
            </div>
            <button @click="showCreateProjectModal = true" class="py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300">
              Nouveau projet
            </button>
          </div>

          <!-- Liste des projets -->
          <div v-if="allProjects.length === 0 && !isLoadingProjects" class="text-center py-12">
            <div class="p-3 rounded-full bg-gray-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <svg class="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a1 1 0 011-1h4a1 1 0 011 1v12m-6 0h6" />
              </svg>
            </div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Aucun projet pour le moment</h3>
            <p class="text-gray-600 mb-4">Créez votre premier projet pour commencer</p>
            <button @click="showCreateProjectModal = true" class="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Créer un projet
            </button>
          </div>

          <div v-else class="space-y-6">
            <ProjectCard 
              v-for="project in allProjects" 
              :key="project.id"
              :project="project"
              :all-projects="allProjects"
              @view-details="openProjectDetailsModal(project)"
            />
          </div>
        </div>

        <!-- Documents -->
        <div v-if="activeTab === 'documents'" class="animate-fade-in">
          <div class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold text-gray-900">Mes documents</h1>
            <button @click="showUploadModal = true" class="py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300">
              Déposer un document
            </button>
          </div>

          <!-- Zone de dépôt de documents (en haut) -->
          <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">📤 Dépôt de documents</h2>
            
            <!-- Zone de drag & drop améliorée -->
            <div 
              class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center transition-all duration-300 hover:border-blue-400 hover:bg-blue-50"
              @dragover="handleDragOver"
              @drop="handleFileDrop"
              @click="$refs.fileInput.click()"
            >
              <svg class="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p class="text-lg font-medium text-gray-900 mb-2">Glissez vos fichiers ici ou cliquez pour sélectionner</p>
              <p class="text-sm text-gray-500">PDF, DOC, DOCX, JPG, PNG jusqu'à 10MB par fichier</p>
              <input 
                type="file" 
                multiple 
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                class="hidden" 
                ref="fileInput" 
                @change="handleFileUpload" 
              />
              <button 
                @click.stop="$refs.fileInput.click()" 
                class="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
              >
                Sélectionner des fichiers
              </button>
            </div>
            
            <!-- Fichiers sélectionnés -->
            <div v-if="selectedFiles.length > 0" class="mt-6">
              <h3 class="text-md font-semibold text-gray-900 mb-3">Fichiers sélectionnés :</h3>
              <div class="space-y-2 mb-4">
                <div 
                  v-for="(file, index) in selectedFiles" 
                  :key="index"
                  class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div class="flex items-center">
                    <span class="text-lg mr-3">{{ documentService.getDocumentIcon(file.type) }}</span>
                    <div>
                      <p class="text-sm font-medium text-gray-900">{{ file.name }}</p>
                      <p class="text-xs text-gray-500">{{ documentService.formatFileSize(file.size) }}</p>
                    </div>
                  </div>
                  <button 
                    @click="removeSelectedFile(index)"
                    class="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                  >
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex space-x-3">
                <button 
                  @click="uploadSelectedFiles"
                  :disabled="uploadingDocuments"
                  :class="uploadingDocuments ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-500'"
                  class="flex-1 py-2 px-4 text-white rounded-lg transition-colors"
                >
                  <span v-if="uploadingDocuments">
                    <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Upload en cours...
                  </span>
                  <span v-else>🚀 Uploader {{ selectedFiles.length }} fichier(s)</span>
                </button>
                <button 
                  @click="selectedFiles = []"
                  class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>

          <!-- Layout en deux colonnes pour les listes de documents -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <!-- Colonne 1: Documents uploadés par le client -->
            <div>
              <div class="bg-white rounded-2xl shadow-xl border border-gray-100">
                <div class="p-6 border-b border-gray-200">
                  <div class="flex justify-between items-center">
                    <h3 class="text-lg font-semibold text-gray-900">📄 Mes documents</h3>
                    
                    <!-- Statistiques -->
                    <div v-if="documentsStats.total > 0" class="flex items-center space-x-4 text-sm text-gray-600">
                      <span>📄 {{ documentsStats.total }} document(s)</span>
                      <span>📦 {{ documentService.formatFileSize(documentsStats.totalSize) }}</span>
                    </div>
                  </div>
                </div>
                
                <div class="p-6">
                  <!-- Chargement -->
                  <div v-if="isLoadingDocuments" class="flex items-center justify-center py-8">
                    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <span class="ml-3 text-gray-600">Chargement de vos documents...</span>
                  </div>
                  
                  <!-- Erreur -->
                  <div v-else-if="documentsError" class="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div class="flex items-center">
                      <svg class="h-5 w-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                      </svg>
                      <span class="text-red-700 font-medium">{{ documentsError }}</span>
                    </div>
                    <button @click="loadDocuments" class="mt-2 text-sm text-red-600 hover:text-red-500 underline">
                      Réessayer
                    </button>
                  </div>
                  
                  <!-- Aucun document -->
                  <div v-else-if="documents.length === 0" class="text-center py-8">
                    <div class="p-3 rounded-full bg-gray-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <svg class="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 class="text-lg font-medium text-gray-900 mb-2">Aucun document uploadé</h4>
                    <p class="text-gray-600 mb-4">Uploadez votre premier document pour commencer</p>
                  </div>
                  
                  <!-- Liste des documents -->
                  <div v-else class="space-y-4">
                    <div 
                      v-for="document in documents" 
                      :key="document.id" 
                      class="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div class="flex items-center">
                        <div class="p-2 rounded-full bg-blue-100">
                          <span class="text-xl">{{ document.icon }}</span>
                        </div>
                        <div class="ml-3">
                          <p class="text-sm font-medium text-gray-900">{{ document.originalName }}</p>
                          <p class="text-sm text-gray-600">
                            {{ document.readableFileType }} • 
                            {{ document.formattedSize }} • 
                            {{ document.formattedUploadDate }}
                          </p>
                        </div>
                      </div>
                      <div class="flex space-x-2">
                        <button 
                          @click="downloadDocument(document)"
                          class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Télécharger"
                        >
                          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </button>
                        <button 
                          @click="deleteDocument(document)"
                          class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Supprimer"
                        >
                          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Colonne 2: Documents envoyés par l'AMO -->
            <div>
              <div class="bg-white rounded-2xl shadow-xl border border-gray-100">
                <div class="p-6 border-b border-gray-200">
                  <div class="flex justify-between items-center">
                    <h3 class="text-lg font-semibold text-gray-900">📥 Documents AMO</h3>
                    
                    <!-- Statistiques -->
                    <div v-if="amoDocumentsStats.total > 0" class="flex items-center space-x-4 text-sm text-gray-600">
                      <span>📄 {{ amoDocumentsStats.total }} document(s)</span>
                      <span>📦 {{ documentService.formatFileSize(amoDocumentsStats.totalSize) }}</span>
                    </div>
                  </div>
                </div>
                
                <div class="p-6">
                  <!-- Chargement -->
                  <div v-if="isLoadingAmoDocuments" class="flex items-center justify-center py-8">
                    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                    <span class="ml-3 text-gray-600">Chargement des documents AMO...</span>
                  </div>
                  
                  <!-- Erreur -->
                  <div v-else-if="amoDocumentsError" class="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div class="flex items-center">
                      <svg class="h-5 w-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                      </svg>
                      <span class="text-red-700 font-medium">{{ amoDocumentsError }}</span>
                    </div>
                    <button @click="loadAmoDocuments" class="mt-2 text-sm text-red-600 hover:text-red-500 underline">
                      Réessayer
                    </button>
                  </div>
                  
                  <!-- Aucun document AMO -->
                  <div v-else-if="amoDocuments.length === 0" class="text-center py-8">
                    <div class="p-3 rounded-full bg-green-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <svg class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 class="text-lg font-medium text-gray-900 mb-2">Aucun document reçu</h4>
                    <p class="text-gray-600">Votre AMO n'a pas encore envoyé de documents</p>
                  </div>
                  
                  <!-- Liste des documents AMO -->
                  <div v-else class="space-y-4">
                    <div 
                      v-for="document in amoDocuments" 
                      :key="document.id" 
                      class="flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                    >
                      <div class="flex items-center">
                        <div class="p-2 rounded-full bg-green-100">
                          <span class="text-xl">{{ document.icon }}</span>
                        </div>
                        <div class="ml-3">
                          <p class="text-sm font-medium text-gray-900">{{ document.originalName }}</p>
                          <p class="text-sm text-gray-600">
                            {{ document.readableFileType }} • 
                            {{ document.formattedSize }} • 
                            {{ document.formattedUploadDate }}
                          </p>
                          <div v-if="document.amoName" class="mt-1">
                            <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              🏗️ {{ document.amoName }}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="flex space-x-2">
                        <button 
                          @click="downloadDocument(document)"
                          class="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Télécharger"
                        >
                          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Notifications -->
        <div v-if="activeTab === 'notifications'" class="animate-fade-in">
          <div class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold text-gray-900">Notifications</h1>
            <button @click="markAllAsRead" class="py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300">
              Marquer tout comme lu
            </button>
          </div>

          <!-- Notifications récentes -->
          <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Notifications récentes</h2>
            
            <!-- Aucune notification -->
            <div v-if="clientNotifications.length === 0" class="text-center py-8">
              <div class="p-3 rounded-full bg-gray-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg class="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM11 7H6l5-5v5z" />
                </svg>
              </div>
              <h3 class="text-lg font-medium text-gray-900 mb-2">Aucune notification</h3>
              <p class="text-gray-600">Vous n'avez pas de nouvelles notifications pour le moment</p>
            </div>

            <!-- Liste des notifications -->
            <div v-else class="space-y-4">
              <div 
                v-for="notification in clientNotifications" 
                :key="notification.id" 
                :class="notification.read ? 'bg-gray-50' : 'bg-blue-50 border-blue-200'"
                class="flex items-center justify-between p-4 rounded-lg border transition-colors"
              >
                <div class="flex items-center">
                  <div :class="notification.read ? 'bg-gray-100' : 'bg-blue-100'" class="p-3 rounded-full">
                    <svg v-if="notification.type === 'document'" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <svg v-else-if="notification.type === 'project'" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a1 1 0 011-1h4a1 1 0 011 1v12m-6 0h6" />
                    </svg>
                    <svg v-else class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-gray-900">{{ notification.title }}</p>
                    <p class="text-sm text-gray-600">{{ notification.message }}</p>
                    <p class="text-xs text-gray-500 mt-1">{{ notification.formattedDate }}</p>
                  </div>
                </div>
                <div class="flex space-x-2">
                  <button 
                    v-if="!notification.read"
                    @click="markAsRead(notification.id)"
                    class="py-2 px-4 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors"
                  >
                    Marquer comme lu
                  </button>
                  <button 
                    @click="deleteNotification(notification.id)"
                    class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Modals -->
    <ProjectDetailsModal 
      :show="showProjectDetailsModal"
      :project="selectedProjectForDetails"
      :all-projects="allProjects"
      @close="closeProjectDetailsModal"
    />

    <CreateProjectModal 
      :show="showCreateProjectModal"
      @close="closeCreateProjectModal"
      @project-created="onProjectCreated"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/stores/user.js'
import { useNotificationsStore } from '@/stores/notifications.js'
import { useRoleGuard } from '@/composables/useRoleGuard.js'
import projetService from '@/services/projetService'
import documentService from '@/services/documentService'
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectDetailsModal from '@/components/ProjectDetailsModal.vue'
import CreateProjectModal from '@/components/CreateProjectModal.vue'

// Store utilisateur
const userStore = useUserStore()

// Store notifications
const notificationsStore = useNotificationsStore()

// Protection de la route
const { protectRoute } = useRoleGuard()

// État réactif
const activeTab = ref('overview')
const showNotifications = ref(false)
const showUploadModal = ref(false)
const showReviewModal = ref(false)
const showCreateProjectModal = ref(false)
const showProjectDetailsModal = ref(false)
const selectedProject = ref(null)
const selectedProjectForDetails = ref(null)
const unreadNotifications = ref(0)

// Données du dashboard
const notifications = ref([])

const recentProjects = ref([])
const allProjects = ref([])
const dashboardStats = ref({
  total: 0,
  enCours: 0,
  termines: 0,
  brouillons: 0,
  budgetTotal: 0
})

// États de chargement et d'erreur
const isLoadingProjects = ref(false)
const projectsError = ref('')

// Documents
const documents = ref([])
const documentsStats = ref({
  total: 0,
  totalSize: 0,
  byType: {}
})
const isLoadingDocuments = ref(false)
const documentsError = ref('')
const uploadingDocuments = ref(false)
const selectedFiles = ref([])

// Documents AMO
const amoDocuments = ref([])
const amoDocumentsStats = ref({
  total: 0,
  totalSize: 0,
  byType: {}
})
const isLoadingAmoDocuments = ref(false)
const amoDocumentsError = ref('')

// Notifications client avec persistance localStorage
const clientNotifications = ref([])

const payments = ref([])

const upcomingMeetings = ref([])

const pastMeetings = ref([])

const projectsToReview = ref([])

const myReviews = ref([])

const newReview = ref({
  rating: 0,
  comment: ''
})



// Méthodes pour charger les données du dashboard
async function loadDashboard() {
  isLoadingProjects.value = true
  projectsError.value = ''
  
  try {
    console.log('🔄 Chargement du dashboard client...')
    const dashboardData = await projetService.getClientDashboard()
    
    console.log('✅ Dashboard récupéré:', dashboardData)
    
    // Mettre à jour les projets
    allProjects.value = dashboardData.projets || []
    
    // Prendre les 3 projets les plus récents pour la vue d'ensemble
    recentProjects.value = (dashboardData.projets || [])
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 3)
    
    // Mettre à jour les statistiques
    dashboardStats.value = dashboardData.statistiques || {
      total: 0,
      enCours: 0,
      termines: 0,
      brouillons: 0,
      budgetTotal: 0
    }
    
    console.log('📊 Projets récents:', recentProjects.value)
    console.log('📈 Statistiques:', dashboardStats.value)
    
  } catch (error) {
    console.error('❌ Erreur lors du chargement du dashboard:', error)
    projectsError.value = error.message || 'Erreur lors du chargement du dashboard'
  } finally {
    isLoadingProjects.value = false
  }
}

// Méthodes utilitaires pour les statuts de projets
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

// Calculer le numéro de projet chronologique pour le client
function getProjectNumber(project) {
  // Trier tous les projets par date de création (plus ancien en premier)
  const sortedProjects = [...allProjects.value].sort((a, b) => 
    new Date(a.createdAt) - new Date(b.createdAt)
  )
  
  // Trouver l'index du projet actuel dans la liste triée
  const projectIndex = sortedProjects.findIndex(p => p.id === project.id)
  const projectNumber = projectIndex + 1 // +1 car on commence à 1, pas 0
  
  // Formatage du numéro avec les bonnes terminaisons françaises
  if (projectNumber === 1) return "Mon 1er projet"
  if (projectNumber === 2) return "Mon 2ème projet"
  if (projectNumber === 3) return "Mon 3ème projet"
  
  return `Mon ${projectNumber}ème projet`
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

// ================================================
// MÉTHODES POUR LES DOCUMENTS
// ================================================

/**
 * Charger la liste des documents
 */
async function loadDocuments() {
  isLoadingDocuments.value = true
  documentsError.value = ''
  
  try {
    console.log('📋 Chargement des documents...')
    const response = await documentService.getDocuments()
    
    if (response.success) {
      documents.value = response.data.documents || []
      
      // Adapter la structure des statistiques selon la nouvelle API
      const stats = response.data.statistics || {}
      documentsStats.value = {
        total: stats.total || 0,
        totalSize: stats.totalSize || 0,
        byType: stats.byType || {}
      }
      
      // Normaliser les documents pour l'affichage avec la nouvelle structure API
      documents.value = documents.value.map(doc => documentService.normalizeDocument(doc))
      
      console.log('✅ Documents chargés:', documents.value)
    }
    
  } catch (error) {
    console.error('❌ Erreur lors du chargement des documents:', error)
    documentsError.value = error.message || 'Erreur lors du chargement des documents'
    
    // Afficher une notification d'erreur
    notificationsStore.showError(error.message || 'Erreur lors du chargement des documents', {
      title: 'Erreur de chargement',
      autoRemove: false
    })
  } finally {
    isLoadingDocuments.value = false
  }
}

/**
 * Gérer la sélection de fichiers (input file ou drag & drop)
 */
function handleFileUpload(event) {
  const files = event.target.files
  if (files && files.length > 0) {
    selectedFiles.value = Array.from(files)
    console.log('📁 Fichiers sélectionnés:', selectedFiles.value.map(f => f.name))
  }
}

/**
 * Gérer le drag & drop
 */
function handleFileDrop(event) {
  event.preventDefault()
  const files = event.dataTransfer.files
  if (files && files.length > 0) {
    selectedFiles.value = Array.from(files)
    console.log('📁 Fichiers déposés:', selectedFiles.value.map(f => f.name))
  }
}

/**
 * Prévenir le comportement par défaut du drag over
 */
function handleDragOver(event) {
  event.preventDefault()
}

/**
 * Upload des fichiers sélectionnés
 */
async function uploadSelectedFiles() {
  if (!selectedFiles.value.length) return
  
  uploadingDocuments.value = true
  
  try {
    console.log('📤 Upload en cours...')
    const response = await documentService.uploadDocuments(selectedFiles.value)
    
    if (response.success) {
      console.log('✅ Upload réussi:', response.data)
      
      // Effacer la sélection
      selectedFiles.value = []
      
      // Recharger la liste des documents
      await loadDocuments()
      
      // Afficher une notification de succès (toast)
      notificationsStore.showSuccess(response.message || 'Documents uploadés avec succès !', {
        title: 'Upload réussi',
        autoRemove: true,
        duration: 4000
      })
      
      // Ajouter à l'onglet notifications persistantes
      const uploadedCount = response.data?.length || selectedFiles.value.length
      const fileNames = response.data?.map(doc => doc.nomOriginal || doc.nom).join(', ') || 
                        selectedFiles.value.map(f => f.name).join(', ')
      
      const notificationDate = new Date()
      clientNotifications.value.unshift({
        id: Date.now(),
        type: 'document',
        title: 'Documents uploadés',
        message: `${uploadedCount} document(s) uploadé(s) avec succès: ${fileNames}`,
        formattedDate: formatRelativeDate(notificationDate),
        timestamp: notificationDate.toISOString(),
        read: false
      })
      saveNotificationsToStorage()
    }
    
  } catch (error) {
    console.error('❌ Erreur lors de l\'upload:', error)
    documentsError.value = error.message || 'Erreur lors de l\'upload'
    
    // Afficher une notification d'erreur
    notificationsStore.showError(error.message || 'Erreur lors de l\'upload des documents', {
      title: 'Erreur d\'upload',
      autoRemove: false
    })
  } finally {
    uploadingDocuments.value = false
  }
}

/**
 * Télécharger un document
 */
async function downloadDocument(document) {
  try {
    console.log('📥 Téléchargement de:', document.originalName)
    await documentService.downloadDocument(document.id, document.originalName)
    console.log('✅ Téléchargement réussi')
    
    // Afficher une notification de succès
    notificationsStore.showSuccess(`Téléchargement de "${document.originalName}" terminé`, {
      title: 'Téléchargement réussi',
      autoRemove: true,
      duration: 3000
    })
  } catch (error) {
    console.error('❌ Erreur lors du téléchargement:', error)
    documentsError.value = error.message || 'Erreur lors du téléchargement'
    
    // Afficher une notification d'erreur
    notificationsStore.showError(error.message || 'Erreur lors du téléchargement', {
      title: 'Erreur de téléchargement',
      autoRemove: false
    })
  }
}

/**
 * Supprimer un document
 */
async function deleteDocument(document) {
  if (!confirm(`Êtes-vous sûr de vouloir supprimer "${document.originalName}" ?`)) {
    return
  }
  
  try {
    console.log('🗑️ Suppression de:', document.originalName)
    const response = await documentService.deleteDocument(document.id)
    
    if (response.success) {
      console.log('✅ Document supprimé')
      
      // Recharger la liste des documents
      await loadDocuments()
      
      // Afficher une notification de succès (toast)
      notificationsStore.showSuccess(response.message || `"${document.originalName}" supprimé avec succès`, {
        title: 'Document supprimé',
        autoRemove: true,
        duration: 3000
      })
      
      // Ajouter à l'onglet notifications persistantes
      const notificationDate = new Date()
      clientNotifications.value.unshift({
        id: Date.now(),
        type: 'document',
        title: 'Document supprimé',
        message: `Le document "${document.originalName}" a été supprimé avec succès`,
        formattedDate: formatRelativeDate(notificationDate),
        timestamp: notificationDate.toISOString(),
        read: false
      })
      saveNotificationsToStorage()
    }
    
  } catch (error) {
    console.error('❌ Erreur lors de la suppression:', error)
    documentsError.value = error.message || 'Erreur lors de la suppression'
    
    // Afficher une notification d'erreur
    notificationsStore.showError(error.message || 'Erreur lors de la suppression', {
      title: 'Erreur de suppression',
      autoRemove: false
    })
  }
}

/**
 * Retirer un fichier de la sélection
 */
function removeSelectedFile(index) {
  selectedFiles.value.splice(index, 1)
}

// ================================================
// MÉTHODES POUR LES DOCUMENTS AMO
// ================================================

/**
 * Charger la liste des documents envoyés par l'AMO
 */
async function loadAmoDocuments() {
  isLoadingAmoDocuments.value = true
  amoDocumentsError.value = ''
  
  try {
    console.log('📋 Chargement des documents AMO...')
    const response = await documentService.getAmoDocuments()
    
    if (response.success) {
      amoDocuments.value = response.data.documents || []
      
      // Adapter la structure des statistiques selon la nouvelle API
      const stats = response.data.statistics || {}
      amoDocumentsStats.value = {
        total: stats.total || 0,
        totalSize: stats.totalSize || 0,
        byType: stats.byType || {}
      }
      
      // Normaliser les documents pour l'affichage avec la nouvelle structure API
      amoDocuments.value = amoDocuments.value.map(doc => documentService.normalizeDocument(doc))
      
      console.log('✅ Documents AMO chargés:', amoDocuments.value)
    }
    
  } catch (error) {
    console.error('❌ Erreur lors du chargement des documents AMO:', error)
    amoDocumentsError.value = error.message || 'Erreur lors du chargement des documents AMO'
    
    // Afficher une notification d'erreur
    notificationsStore.showError(error.message || 'Erreur lors du chargement des documents AMO', {
      title: 'Erreur de chargement AMO',
      autoRemove: false
    })
  } finally {
    isLoadingAmoDocuments.value = false
  }
}

function openReviewModal(project) {
  selectedProject.value = project
  showReviewModal.value = true
  newReview.value = { rating: 0, comment: '' }
}

function openProjectDetailsModal(project) {
  selectedProjectForDetails.value = project
  showProjectDetailsModal.value = true
}

function closeProjectDetailsModal() {
  showProjectDetailsModal.value = false
  selectedProjectForDetails.value = null
}



function closeCreateProjectModal() {
  showCreateProjectModal.value = false
}

function onProjectCreated(newProject) {
  // Recharger les données du dashboard
  loadDashboard()
  
  // Afficher une notification de succès (toast)
  notificationsStore.showSuccess('Votre projet a été créé avec succès !', {
    title: 'Projet créé',
    autoRemove: true,
    duration: 4000
  })
  
  // Ajouter à l'onglet notifications persistantes
  const notificationDate = new Date()
  clientNotifications.value.unshift({
    id: Date.now(),
    type: 'project',
    title: 'Nouveau projet créé',
    message: `Votre projet "${newProject?.description || 'Nouveau projet'}" a été créé avec succès`,
    formattedDate: formatRelativeDate(notificationDate),
    timestamp: notificationDate.toISOString(),
    read: false
  })
  saveNotificationsToStorage()
}

// ================================================
// MÉTHODES POUR LES NOTIFICATIONS CLIENT
// ================================================

/**
 * Charger les notifications depuis le localStorage
 */
function loadNotificationsFromStorage() {
  try {
    const userId = userStore.userId || 'default'
    const storageKey = `client_notifications_${userId}`
    const stored = localStorage.getItem(storageKey)
    
    if (stored) {
      const notifications = JSON.parse(stored)
      clientNotifications.value = notifications
      console.log('🔔 Notifications chargées depuis localStorage:', notifications.length)
    } else {
      // Données par défaut si aucune notification sauvegardée
      clientNotifications.value = [
        {
          id: Date.now() + 1,
          type: 'document',
          title: 'Nouveau document reçu',
          message: 'Votre AMO a envoyé un nouveau document pour votre projet de rénovation',
          formattedDate: 'Il y a 2 heures',
          timestamp: new Date().toISOString(),
          read: false
        },
        {
          id: Date.now() + 2,
          type: 'project',
          title: 'Projet pris en compte',
          message: 'Votre projet de rénovation de cuisine a été pris en compte par un AMO',
          formattedDate: 'Il y a 1 jour',
          timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
          read: false
        },
        {
          id: Date.now() + 3,
          type: 'document',
          title: 'Document validé',
          message: 'Votre devis a été validé et traité',
          formattedDate: 'Il y a 3 jours',
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
          read: true
        }
      ]
      saveNotificationsToStorage()
    }
  } catch (error) {
    console.error('❌ Erreur lors du chargement des notifications:', error)
    // Fallback avec données par défaut
    clientNotifications.value = []
  }
}

/**
 * Sauvegarder les notifications dans le localStorage
 */
function saveNotificationsToStorage() {
  try {
    const userId = userStore.userId || 'default'
    const storageKey = `client_notifications_${userId}`
    localStorage.setItem(storageKey, JSON.stringify(clientNotifications.value))
    console.log('💾 Notifications sauvegardées dans localStorage')
  } catch (error) {
    console.error('❌ Erreur lors de la sauvegarde des notifications:', error)
  }
}

/**
 * Formatter la date relative (ex: "Il y a 2 minutes")
 * @param {Date} date - Date à formater
 * @returns {string} - Date formatée
 */
function formatRelativeDate(date) {
  const now = new Date()
  const diffMs = now - date
  const diffMinutes = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  
  if (diffMinutes < 1) return 'À l\'instant'
  if (diffMinutes < 60) return `Il y a ${diffMinutes} minute${diffMinutes > 1 ? 's' : ''}`
  if (diffHours < 24) return `Il y a ${diffHours} heure${diffHours > 1 ? 's' : ''}`
  if (diffDays < 7) return `Il y a ${diffDays} jour${diffDays > 1 ? 's' : ''}`
  
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

function markAsRead(notificationId) {
  const notification = clientNotifications.value.find(n => n.id === notificationId)
  if (notification) {
    notification.read = true
    saveNotificationsToStorage()
  }
}

function markAllAsRead() {
  clientNotifications.value.forEach(notification => {
    notification.read = true
  })
  saveNotificationsToStorage()
}

function deleteNotification(notificationId) {
  const index = clientNotifications.value.findIndex(n => n.id === notificationId)
  if (index !== -1) {
    clientNotifications.value.splice(index, 1)
    saveNotificationsToStorage()
  }
}

// Charger les données au montage du composant
onMounted(() => {
  console.log('🚀 Initialisation du tableau de bord client')
  
  // Protection de la route - vérifier que seuls les clients peuvent accéder
  if (!protectRoute('client')) {
    return // La redirection sera gérée par protectRoute
  }
  
  loadNotificationsFromStorage() // Charger les notifications sauvegardées
  loadDashboard()
  loadDocuments() // Charger aussi les documents
  loadAmoDocuments() // Charger les documents AMO
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
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