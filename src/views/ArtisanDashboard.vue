<template>
  <div class="min-h-screen bg-gray-50">
    <div class="flex">
      <!-- Sidebar -->
      <nav class="w-64 bg-white shadow-sm h-screen sticky top-0">
        <div class="p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-6">Dashboard Artisan</h2>
          <ul class="space-y-2">
            <li>
              <button @click="activeTab = 'overview'" :class="activeTab === 'overview' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-600 hover:bg-gray-50'" class="w-full text-left px-4 py-2 rounded-lg border transition-colors">
                Vue d'ensemble
              </button>
            </li>
            <li>
              <button @click="activeTab = 'new-projects'" :class="activeTab === 'new-projects' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-600 hover:bg-gray-50'" class="w-full text-left px-4 py-2 rounded-lg border transition-colors">
                Nouveaux projets
              </button>
            </li>
            <li>
              <button @click="activeTab = 'project-management'" :class="activeTab === 'project-management' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-600 hover:bg-gray-50'" class="w-full text-left px-4 py-2 rounded-lg border transition-colors">
                Gestion de projets
              </button>
            </li>
            <li>
              <button @click="activeTab = 'documents'" :class="activeTab === 'documents' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-600 hover:bg-gray-50'" class="w-full text-left px-4 py-2 rounded-lg border transition-colors">
                Documents
              </button>
            </li>
            <li>
              <button @click="activeTab = 'notifications'" :class="activeTab === 'notifications' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-600 hover:bg-gray-50'" class="w-full text-left px-4 py-2 rounded-lg border transition-colors">
                Notifications
              </button>
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
                <div class="p-3 rounded-full bg-orange-100">
                  <svg class="h-8 w-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-600">Projets en attente</p>
                  <p class="text-2xl font-bold text-gray-900">{{ dashboardStats.enAttente }}</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-blue-100">
                  <svg class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a1 1 0 011-1h4a1 1 0 011 1v12m-6 0h6" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-600">Projets en cours</p>
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
                <div class="p-3 rounded-full bg-purple-100">
                  <svg class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-600">Chiffre d'affaires</p>
                  <p class="text-2xl font-bold text-gray-900">{{ dashboardStats.chiffreAffaires.toLocaleString('fr-FR') }}€</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Activité récente -->
          <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Activité récente</h2>
            <div class="space-y-4">
              <div v-for="activity in recentActivity" :key="activity.id" class="flex items-center p-4 bg-gray-50 rounded-lg">
                <div class="p-2 rounded-full" :class="activity.iconClass">
                  <svg class="h-5 w-5" :class="activity.iconColor" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="activity.iconPath" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">{{ activity.title }}</p>
                  <p class="text-sm text-gray-600">{{ activity.description }}</p>
                  <p class="text-xs text-gray-500">{{ activity.time }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Nouveaux projets -->
        <div v-if="activeTab === 'new-projects'" class="animate-fade-in">
          <h1 class="text-3xl font-bold text-gray-900 mb-8">Nouveaux projets</h1>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <div v-for="project in newProjects" :key="project.id" class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-lg font-semibold text-gray-900">{{ project.title }}</h3>
                  <span class="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">
                    Nouveau
                  </span>
                </div>
                
                <div class="space-y-3 mb-6">
                  <div class="flex items-center text-sm text-gray-600">
                    <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {{ project.location }}
                  </div>
                  <div class="flex items-center text-sm text-gray-600">
                    <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    {{ project.budget }}
                  </div>
                  <div class="flex items-center text-sm text-gray-600">
                    <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-3.5L17 21V5z" />
                    </svg>
                    AMO: {{ project.amoName }}
                  </div>
                </div>
                
                <div class="flex space-x-2">
                  <button 
                    @click="viewProjectDetails(project)"
                    class="flex-1 py-2 px-3 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Voir plus
                  </button>
                  <button 
                    @click="acceptProject(project)"
                    class="flex-1 py-2 px-3 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-500 transition-colors"
                  >
                    Accepter
                  </button>
                  <button 
                    @click="declineProject(project)"
                    class="flex-1 py-2 px-3 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-500 transition-colors"
                  >
                    Décliner
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Gestion de projets -->
        <div v-if="activeTab === 'project-management'" class="animate-fade-in">
          <h1 class="text-3xl font-bold text-gray-900 mb-8">Gestion de projets</h1>
          
          <div class="bg-white rounded-2xl shadow-xl border border-gray-100">
            <div class="p-6 border-b border-gray-200">
              <h2 class="text-xl font-bold text-gray-900">Projets en cours</h2>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom du projet</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AMO</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email AMO</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="project in managedProjects" :key="project.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-900">{{ project.title }}</div>
                      <div class="text-sm text-gray-500">{{ project.location }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ project.amoName }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ project.amoEmail }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span :class="getStatusClass(project.status)" class="px-2 py-1 text-xs font-medium rounded-full">
                        {{ project.status }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button class="text-blue-600 hover:text-blue-900 mr-3">Gérer</button>
                      <button class="text-green-600 hover:text-green-900">Voir détails</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Documents -->
        <div v-if="activeTab === 'documents'" class="animate-fade-in">
          <h1 class="text-3xl font-bold text-gray-900 mb-8">Documents</h1>
          
          <!-- Filtre projet -->
          <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Filtrer par projet</h2>
            <select v-model="selectedProject" @change="filterDocuments" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">Tous les projets</option>
              <option v-for="project in projects" :key="project.id" :value="project.id">
                {{ project.name }}
              </option>
            </select>
          </div>

          <!-- Zone de dépôt -->
          <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">📤 Déposer un document</h2>
            
            <div 
              class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center transition-all duration-300 hover:border-blue-400 hover:bg-blue-50"
              @dragover="handleDragOver"
              @drop="handleFileDrop"
              @click="$refs.fileInput.click()"
            >
              <svg class="h-10 w-10 text-gray-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p class="text-sm font-medium text-gray-900 mb-1">Glissez vos fichiers ici</p>
              <p class="text-xs text-gray-500">PDF, DOC, DOCX, JPG, PNG</p>
              <input 
                type="file" 
                multiple 
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                class="hidden" 
                ref="fileInput" 
                @change="handleFileUpload" 
              />
              <button class="mt-3 py-2 px-4 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-500 transition-colors">
                Sélectionner
              </button>
            </div>

            <!-- Fichiers sélectionnés -->
            <div v-if="selectedFiles.length > 0" class="mt-4">
              <div class="space-y-2 mb-4">
                <div v-for="(file, index) in selectedFiles" :key="index" class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div class="flex items-center">
                    <span class="text-lg mr-3">📄</span>
                    <div>
                      <p class="text-sm font-medium text-gray-900">{{ file.name }}</p>
                      <p class="text-xs text-gray-500">{{ formatFileSize(file.size) }}</p>
                    </div>
                  </div>
                  <button @click="removeSelectedFile(index)" class="p-1 text-red-600 hover:bg-red-50 rounded">
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex space-x-3">
                <button @click="uploadSelectedFiles" class="flex-1 py-2 px-4 bg-green-600 text-white text-sm rounded-lg hover:bg-green-500">
                  Uploader {{ selectedFiles.length }} fichier(s)
                </button>
                <button @click="selectedFiles = []" class="px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded-lg hover:bg-gray-300">
                  Annuler
                </button>
              </div>
            </div>
          </div>

          <!-- Documents en deux colonnes -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Mes documents -->
            <div class="bg-white rounded-2xl shadow-xl border border-gray-100">
              <div class="p-6 border-b border-gray-200">
                <h3 class="text-lg font-semibold text-gray-900">📄 Mes documents</h3>
              </div>
              <div class="p-6">
                <div v-if="filteredMyDocuments.length === 0" class="text-center py-8">
                  <p class="text-gray-500">Aucun document uploadé</p>
                </div>
                <div v-else class="space-y-4">
                  <div v-for="doc in filteredMyDocuments" :key="doc.id" class="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div class="flex items-center">
                      <div class="p-2 rounded-full bg-green-100">
                        <span class="text-xl">📄</span>
                      </div>
                      <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900">{{ doc.name }}</p>
                        <p class="text-sm text-gray-600">{{ doc.projectName }} • {{ doc.date }}</p>
                      </div>
                    </div>
                    <div class="flex space-x-2">
                      <button class="p-2 text-green-600 hover:bg-green-100 rounded-lg">
                        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </button>
                      <button class="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Documents AMO -->
            <div class="bg-white rounded-2xl shadow-xl border border-gray-100">
              <div class="p-6 border-b border-gray-200">
                <h3 class="text-lg font-semibold text-gray-900">📥 Documents AMO</h3>
              </div>
              <div class="p-6">
                <div v-if="filteredAmoDocuments.length === 0" class="text-center py-8">
                  <p class="text-gray-500">Aucun document AMO pour ce projet</p>
                </div>
                <div v-else class="space-y-4">
                  <div v-for="doc in filteredAmoDocuments" :key="doc.id" class="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div class="flex items-center">
                      <div class="p-2 rounded-full bg-blue-100">
                        <span class="text-xl">📄</span>
                      </div>
                      <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900">{{ doc.name }}</p>
                        <p class="text-sm text-gray-600">{{ doc.amoName }} • {{ doc.date }}</p>
                      </div>
                    </div>
                    <button class="p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
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

        <!-- Notifications -->
        <div v-if="activeTab === 'notifications'" class="animate-fade-in">
          <h1 class="text-3xl font-bold text-gray-900 mb-8">Notifications</h1>
          
          <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Notifications récentes</h2>
            
            <div v-if="artisanNotifications.length === 0" class="text-center py-8">
              <div class="p-3 rounded-full bg-gray-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg class="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM11 7H6l5-5v5z" />
                </svg>
              </div>
              <h3 class="text-lg font-medium text-gray-900 mb-2">Aucune notification</h3>
              <p class="text-gray-600">Vous n'avez pas de nouvelles notifications</p>
            </div>

            <div v-else class="space-y-4">
              <div v-for="notification in artisanNotifications" :key="notification.id" :class="notification.read ? 'bg-gray-50' : 'bg-blue-50 border-blue-200'" class="flex items-center justify-between p-4 rounded-lg border transition-colors">
                <div class="flex items-center">
                  <div :class="notification.read ? 'bg-gray-100' : 'bg-blue-100'" class="p-3 rounded-full">
                    <svg v-if="notification.type === 'document'" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <svg v-else class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a1 1 0 011-1h4a1 1 0 011 1v12m-6 0h6" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-gray-900">{{ notification.title }}</p>
                    <p class="text-sm text-gray-600">{{ notification.message }}</p>
                    <p class="text-xs text-gray-500 mt-1">{{ notification.time }}</p>
                  </div>
                </div>
                <div class="flex space-x-2">
                  <button v-if="!notification.read" @click="markAsRead(notification.id)" class="py-2 px-4 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors">
                    Marquer comme lu
                  </button>
                  <button @click="deleteNotification(notification.id)" class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
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

    <!-- Modal détails projet -->
    <div v-if="showProjectModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-900">Détails du projet</h2>
          <button @click="closeProjectModal" class="text-gray-400 hover:text-gray-600">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div v-if="selectedProjectDetails" class="space-y-4">
          <div>
            <h3 class="font-semibold text-gray-900">{{ selectedProjectDetails.title }}</h3>
            <p class="text-gray-600">{{ selectedProjectDetails.description }}</p>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-sm font-medium text-gray-500">Localisation</p>
              <p class="text-gray-900">{{ selectedProjectDetails.location }}</p>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-500">Budget</p>
              <p class="text-gray-900">{{ selectedProjectDetails.budget }}</p>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-500">AMO</p>
              <p class="text-gray-900">{{ selectedProjectDetails.amoName }}</p>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-500">Contact AMO</p>
              <p class="text-gray-900">{{ selectedProjectDetails.amoEmail }}</p>
            </div>
          </div>

          <div class="flex space-x-4 pt-6">
            <button @click="acceptProject(selectedProjectDetails)" class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Accepter
            </button>
            <button @click="declineProject(selectedProjectDetails)" class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Décliner
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useUserStore } from '@/stores/user.js'
import { useRoleGuard } from '@/composables/useRoleGuard.js'

// Store utilisateur
const userStore = useUserStore()

// Protection de la route
const { protectRoute } = useRoleGuard()

// État réactif
const activeTab = ref('overview')
const showProjectModal = ref(false)
const selectedProjectDetails = ref(null)
const selectedProject = ref('')
const selectedFiles = ref([])

// Données fictives du dashboard
const dashboardStats = ref({
  enAttente: 4,
  enCours: 6,
  termines: 12,
  chiffreAffaires: 24580
})

const recentActivity = ref([
  {
    id: 1,
    title: 'Nouveau projet reçu',
    description: 'Installation électrique - Maison Lyon',
    time: 'Il y a 1 heure',
    iconClass: 'bg-green-100',
    iconColor: 'text-green-600',
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a1 1 0 011-1h4a1 1 0 011 1v12m-6 0h6'
  },
  {
    id: 2,
    title: 'Document reçu',
    description: 'Plans électriques - Marie Dupont (AMO)',
    time: 'Il y a 3 heures',
    iconClass: 'bg-blue-100',
    iconColor: 'text-blue-600',
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    id: 3,
    title: 'Projet terminé',
    description: 'Rénovation salle de bain - Appartement Marseille',
    time: 'Il y a 1 jour',
    iconClass: 'bg-purple-100',
    iconColor: 'text-purple-600',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  }
])

const newProjects = ref([
  {
    id: 1,
    title: 'Installation électrique complète',
    description: 'Mise aux normes électriques d\'une maison de 120m² avec tableau électrique neuf',
    location: 'Lyon, 69000',
    budget: '8 000 - 12 000€',
    amoName: 'Marie Dupont',
    amoEmail: 'marie.dupont@amo.com'
  },
  {
    id: 2,
    title: 'Rénovation plomberie',
    description: 'Réfection complète de la plomberie d\'un appartement 3 pièces',
    location: 'Marseille, 13000',
    budget: '6 000 - 9 000€',
    amoName: 'Pierre Martin',
    amoEmail: 'pierre.martin@amo.com'
  },
  {
    id: 3,
    title: 'Pose carrelage',
    description: 'Pose de carrelage dans une cuisine de 20m² et une salle de bain de 8m²',
    location: 'Toulouse, 31000',
    budget: '4 000 - 6 000€',
    amoName: 'Sophie Bernard',
    amoEmail: 'sophie.bernard@amo.com'
  }
])

const managedProjects = ref([
  {
    id: 1,
    title: 'Rénovation salle de bain',
    location: 'Nice, 06000',
    amoName: 'Marie Dupont',
    amoEmail: 'marie.dupont@amo.com',
    status: 'En cours'
  },
  {
    id: 2,
    title: 'Installation cuisine',
    location: 'Bordeaux, 33000',
    amoName: 'Pierre Martin',
    amoEmail: 'pierre.martin@amo.com',
    status: 'Planification'
  },
  {
    id: 3,
    title: 'Électricité maison',
    location: 'Nantes, 44000',
    amoName: 'Sophie Bernard',
    amoEmail: 'sophie.bernard@amo.com',
    status: 'En attente'
  }
])

const projects = ref([
  { id: 1, name: 'Projet 1 - Rénovation salle de bain' },
  { id: 2, name: 'Projet 2 - Installation cuisine' },
  { id: 3, name: 'Projet 3 - Électricité maison' }
])

const amoDocuments = ref([
  { id: 1, name: 'Plans électriques.pdf', amoName: 'Marie Dupont', projectId: 1, date: '12 août 2024' },
  { id: 2, name: 'Cahier des charges.pdf', amoName: 'Pierre Martin', projectId: 2, date: '11 août 2024' },
  { id: 3, name: 'Normes sécurité.pdf', amoName: 'Sophie Bernard', projectId: 3, date: '10 août 2024' }
])

const myDocuments = ref([
  { id: 1, name: 'Devis électricité.pdf', projectName: 'Projet 1', projectId: 1, date: '12 août 2024' },
  { id: 2, name: 'Facture matériaux.pdf', projectName: 'Projet 2', projectId: 2, date: '11 août 2024' }
])

const artisanNotifications = ref([
  {
    id: 1,
    type: 'document',
    title: 'Nouveau document reçu',
    message: 'Marie Dupont (AMO) a envoyé les plans électriques',
    time: 'Il y a 1 heure',
    read: false
  },
  {
    id: 2,
    type: 'project',
    title: 'Nouveau projet',
    message: 'Nouvelle proposition de projet d\'installation électrique',
    time: 'Il y a 3 heures',
    read: false
  },
  {
    id: 3,
    type: 'document',
    title: 'Document validé',
    message: 'Votre devis a été approuvé par l\'AMO',
    time: 'Il y a 1 jour',
    read: true
  }
])

// Computed properties
const filteredAmoDocuments = computed(() => {
  if (!selectedProject.value) return amoDocuments.value
  return amoDocuments.value.filter(doc => doc.projectId === parseInt(selectedProject.value))
})

const filteredMyDocuments = computed(() => {
  if (!selectedProject.value) return myDocuments.value
  return myDocuments.value.filter(doc => doc.projectId === parseInt(selectedProject.value))
})

// Méthodes
function viewProjectDetails(project) {
  selectedProjectDetails.value = project
  showProjectModal.value = true
}

function closeProjectModal() {
  showProjectModal.value = false
  selectedProjectDetails.value = null
}

function acceptProject(project) {
  console.log('Projet accepté:', project.title)
  const index = newProjects.value.findIndex(p => p.id === project.id)
  if (index !== -1) {
    newProjects.value.splice(index, 1)
  }
  closeProjectModal()
}

function declineProject(project) {
  console.log('Projet décliné:', project.title)
  const index = newProjects.value.findIndex(p => p.id === project.id)
  if (index !== -1) {
    newProjects.value.splice(index, 1)
  }
  closeProjectModal()
}

function filterDocuments() {
  // La filtration se fait automatiquement via les computed properties
}

function getStatusClass(status) {
  const statusClasses = {
    'En cours': 'bg-blue-100 text-blue-800',
    'Planification': 'bg-yellow-100 text-yellow-800',
    'En attente': 'bg-orange-100 text-orange-800',
    'Terminé': 'bg-green-100 text-green-800'
  }
  return statusClasses[status] || 'bg-gray-100 text-gray-800'
}

function handleFileUpload(event) {
  const files = event.target.files
  if (files && files.length > 0) {
    selectedFiles.value = Array.from(files)
  }
}

function handleFileDrop(event) {
  event.preventDefault()
  const files = event.dataTransfer.files
  if (files && files.length > 0) {
    selectedFiles.value = Array.from(files)
  }
}

function handleDragOver(event) {
  event.preventDefault()
}

function removeSelectedFile(index) {
  selectedFiles.value.splice(index, 1)
}

function uploadSelectedFiles() {
  console.log('Upload des fichiers:', selectedFiles.value.map(f => f.name))
  selectedFiles.value = []
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

function markAsRead(notificationId) {
  const notification = artisanNotifications.value.find(n => n.id === notificationId)
  if (notification) {
    notification.read = true
  }
}

function deleteNotification(notificationId) {
  const index = artisanNotifications.value.findIndex(n => n.id === notificationId)
  if (index !== -1) {
    artisanNotifications.value.splice(index, 1)
  }
}

// Protection de la route au montage du composant
onMounted(() => {
  console.log('🚀 Initialisation du tableau de bord artisan')
  
  // Protection de la route - vérifier que seuls les artisans peuvent accéder
  if (!protectRoute('artisan')) {
    return // La redirection sera gérée par protectRoute
  }
  
  console.log('✅ Accès autorisé au dashboard artisan')
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