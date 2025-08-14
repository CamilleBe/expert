<template>
  <div class="min-h-screen bg-gray-50">
    <div class="flex">
      <!-- Sidebar -->
      <nav class="w-64 bg-white shadow-sm h-screen sticky top-0">
        <div class="p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-6">Dashboard AMO</h2>
          <ul class="space-y-2">
            <li>
              <button @click="activeTab = 'overview'" :class="activeTab === 'overview' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-600 hover:bg-gray-50'" class="w-full text-left px-4 py-2 rounded-lg border transition-colors">
                Vue d'ensemble
              </button>
            </li>
            <li>
              <button @click="activeTab = 'new-projects'" :class="activeTab === 'new-projects' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-600 hover:bg-gray-50'" class="w-full text-left px-4 py-2 rounded-lg border transition-colors relative">
                Nouveaux projets
                <!-- Pastille pour nouveaux projets -->
                <span 
                  v-if="newProjectsCount > 0" 
                  class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {{ newProjectsCount }}
                </span>
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
                  <p class="text-sm font-medium text-gray-600">Projets gérés</p>
                  <p class="text-2xl font-bold text-gray-900">{{ dashboardStats.geres }}</p>
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
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-600">Clients actifs</p>
                  <p class="text-2xl font-bold text-gray-900">{{ dashboardStats.clients }}</p>
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
          <div class="flex justify-between items-center mb-8">
            <div>
              <h1 class="text-3xl font-bold text-gray-900">Nouveaux projets</h1>
              <p class="text-gray-600 mt-1">{{ newProjectsCount }} projet{{ newProjectsCount > 1 ? 's' : '' }} disponible{{ newProjectsCount > 1 ? 's' : '' }} dans votre zone</p>
            </div>
            <div class="flex space-x-2">
              <button 
                @click="loadAvailableProjects()"
                :disabled="isLoading"
                class="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <svg v-if="isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <svg v-else class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Actualiser
              </button>
            </div>
          </div>
          
          <!-- Aucun projet -->
          <div v-if="newProjects.length === 0" class="text-center py-16">
            <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
              <svg class="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a1 1 0 011-1h4a1 1 0 011 1v12m-6 0h6" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Aucun nouveau projet</h3>
            <p class="text-gray-600 max-w-md mx-auto">
              Aucun nouveau projet n'est disponible dans votre zone d'intervention pour le moment. Nous vous notifierons dès qu'il y en aura !
            </p>
          </div>
          
          <!-- Liste des projets -->
          <div v-else class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            <div 
              v-for="project in newProjects" 
              :key="project.id" 
              class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              :class="{ 'ring-2 ring-blue-500 ring-opacity-50': amoProjectService.isRecentProject(project) }"
            >
              <div class="p-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-lg font-semibold text-gray-900 leading-tight">{{ project.title }}</h3>
                  <div class="flex space-x-1">
                    <span v-if="amoProjectService.isRecentProject(project)" class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full animate-pulse">
                      🆕 Nouveau
                    </span>
                    <span class="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">
                      Disponible
                    </span>
                  </div>
                </div>
                
                <div class="space-y-3 mb-6">
                  <div class="flex items-center text-sm text-gray-600">
                    <svg class="h-4 w-4 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 616 0z" />
                    </svg>
                    <span class="font-medium">{{ project.location }}</span>
                  </div>
                  <div class="flex items-center text-sm text-gray-600">
                    <svg class="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    <span class="font-semibold text-green-700">{{ project.budget }}</span>
                  </div>
                  <div class="flex items-center text-sm text-gray-600">
                    <svg class="h-4 w-4 mr-2 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span class="font-medium">{{ project.clientName }}</span>
                  </div>
                  <div v-if="project.surfaceM2" class="flex items-center text-sm text-gray-600">
                    <svg class="h-4 w-4 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a1 1 0 011-1h4a1 1 0 011 1v12m-6 0h6" />
                    </svg>
                    <span>{{ project.surfaceM2 }}m²</span>
                    <span v-if="project.bedrooms" class="ml-2">• {{ project.bedrooms }} chambres</span>
                    <span v-if="project.houseType" class="ml-2 capitalize">• {{ project.houseType }}</span>
                  </div>
                  <div v-if="project.createdAt" class="flex items-center text-xs text-gray-500">
                    <svg class="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Créé {{ amoProjectService.formatDate(project.createdAt) }}
                  </div>
                </div>
                
                <div class="space-y-2">
                  <button 
                    @click="viewProjectDetails(project)"
                    class="w-full py-2 px-3 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    👁️ Voir détails complets
                  </button>
                  <div class="flex space-x-2">
                    <button 
                      @click="acceptProject(project)"
                      :disabled="isLoading"
                      class="flex-1 py-2 px-3 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      ✅ Accepter
                    </button>
                    <button 
                      @click="declineProject(project)"
                      :disabled="isLoading"
                      class="flex-1 py-2 px-3 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      ❌ Ignorer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Gestion de projets -->
        <div v-if="activeTab === 'project-management'" class="animate-fade-in">
          <div class="flex justify-between items-center mb-8">
            <div>
              <h1 class="text-3xl font-bold text-gray-900">Gestion de projets</h1>
              <p class="text-gray-600 mt-1">{{ managedProjects.length }} projet{{ managedProjects.length > 1 ? 's' : '' }} en cours de gestion</p>
            </div>
            <div class="flex space-x-2">
              <button 
                @click="loadManagedProjects()"
                :disabled="isLoading"
                class="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <svg v-if="isLoading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <svg v-else class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Actualiser
              </button>
            </div>
          </div>
          
          <!-- Aucun projet géré -->
          <div v-if="managedProjects.length === 0" class="text-center py-16">
            <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
              <svg class="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Aucun projet en cours</h3>
            <p class="text-gray-600 max-w-md mx-auto">
              Vous n'avez pas encore accepté de projets. Consultez l'onglet "Nouveaux projets" pour voir les projets disponibles.
            </p>
          </div>
          
          <!-- Liste des projets gérés -->
          <div v-else class="bg-white rounded-2xl shadow-xl border border-gray-100">
            <div class="p-6 border-b border-gray-200">
              <h2 class="text-xl font-bold text-gray-900">Mes projets acceptés</h2>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Projet</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Budget</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Créé</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="project in managedProjects" :key="project.id" class="hover:bg-gray-50">
                    <td class="px-6 py-4">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <svg class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a1 1 0 011-1h4a1 1 0 011 1v12m-6 0h6" />
                            </svg>
                          </div>
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium text-gray-900">
                            {{ project.description ? project.description.substring(0, 60) + '...' : 'Projet sans titre' }}
                          </div>
                          <div class="text-sm text-gray-500">
                            📍 {{ project.city }}, {{ project.postalCode }}
                            <span v-if="project.surfaceM2"> • {{ project.surfaceM2 }}m²</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ project.client.firstName }} {{ project.client.lastName }}</div>
                      <div class="text-sm text-gray-500">{{ project.client.email }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-semibold text-green-700">
                        {{ amoProjectService.formatBudget(project.budget) }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span :class="getStatusClassFromApi(project.statut)" class="px-2 py-1 text-xs font-medium rounded-full">
                        {{ getStatusLabelFromApi(project.statut) }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {{ amoProjectService.formatDate(project.createdAt) }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div class="flex space-x-2">
                        <button 
                          @click="viewProjectDetails(project)"
                          class="text-blue-600 hover:text-blue-900 hover:bg-blue-50 px-2 py-1 rounded transition-colors"
                        >
                          👁️ Voir
                        </button>
                        <button 
                          v-if="project.statut === 'accepte'"
                          @click="startProject(project)"
                          class="text-green-600 hover:text-green-900 hover:bg-green-50 px-2 py-1 rounded transition-colors"
                        >
                          🚀 Démarrer
                        </button>
                        <button 
                          v-if="project.statut === 'en_cours'"
                          @click="completeProject(project)"
                          class="text-purple-600 hover:text-purple-900 hover:bg-purple-50 px-2 py-1 rounded transition-colors"
                        >
                          ✅ Terminer
                        </button>
                      </div>
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

          <!-- Documents en trois colonnes -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Mes documents AMO -->
            <div class="bg-white rounded-2xl shadow-xl border border-gray-100">
              <div class="p-6 border-b border-gray-200">
                <h3 class="text-lg font-semibold text-gray-900">🏗️ Mes documents</h3>
              </div>
              <div class="p-6">
                <div v-if="filteredAmoOwnDocuments.length === 0" class="text-center py-8">
                  <p class="text-gray-500">Aucun document uploadé</p>
                </div>
                <div v-else class="space-y-4">
                  <div v-for="doc in filteredAmoOwnDocuments" :key="doc.id" class="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div class="flex items-center">
                      <div class="p-2 rounded-full bg-green-100">
                        <span class="text-xl">🏗️</span>
                      </div>
                      <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900">{{ doc.name }}</p>
                        <p class="text-sm text-gray-600">{{ doc.projectName }} • {{ doc.date }}</p>
                      </div>
                    </div>
                    <div class="flex space-x-2">
                      <button @click="downloadDocument(doc)" class="p-2 text-green-600 hover:bg-green-100 rounded-lg" title="Télécharger">
                        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </button>
                      <button @click="deleteDocument(doc)" class="p-2 text-red-600 hover:bg-red-50 rounded-lg" title="Supprimer">
                        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Documents clients -->
            <div class="bg-white rounded-2xl shadow-xl border border-gray-100">
              <div class="p-6 border-b border-gray-200">
                <h3 class="text-lg font-semibold text-gray-900">📄 Documents clients</h3>
              </div>
              <div class="p-6">
                <div v-if="filteredClientDocuments.length === 0" class="text-center py-8">
                  <p class="text-gray-500">Aucun document client</p>
                </div>
                <div v-else class="space-y-4">
                  <div v-for="doc in filteredClientDocuments" :key="doc.id" class="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div class="flex items-center">
                      <div class="p-2 rounded-full bg-blue-100">
                        <span class="text-xl">📄</span>
                      </div>
                      <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900">{{ doc.name }}</p>
                        <p class="text-sm text-gray-600">{{ doc.clientName }} • {{ doc.date }}</p>
                      </div>
                    </div>
                    <button @click="downloadDocument(doc)" class="p-2 text-blue-600 hover:bg-blue-100 rounded-lg" title="Télécharger">
                      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Documents artisans -->
            <div class="bg-white rounded-2xl shadow-xl border border-gray-100">
              <div class="p-6 border-b border-gray-200">
                <h3 class="text-lg font-semibold text-gray-900">🔨 Documents artisans</h3>
              </div>
              <div class="p-6">
                <div v-if="filteredArtisanDocuments.length === 0" class="text-center py-8">
                  <p class="text-gray-500">Aucun document artisan</p>
                </div>
                <div v-else class="space-y-4">
                  <div v-for="doc in filteredArtisanDocuments" :key="doc.id" class="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                    <div class="flex items-center">
                      <div class="p-2 rounded-full bg-orange-100">
                        <span class="text-xl">🔨</span>
                      </div>
                      <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900">{{ doc.name }}</p>
                        <p class="text-sm text-gray-600">{{ doc.artisanName }} • {{ doc.date }}</p>
                      </div>
                    </div>
                    <button @click="downloadDocument(doc)" class="p-2 text-orange-600 hover:bg-orange-100 rounded-lg" title="Télécharger">
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
            
            <div v-if="amoNotifications.length === 0" class="text-center py-8">
              <div class="p-3 rounded-full bg-gray-100 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg class="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM11 7H6l5-5v5z" />
                </svg>
              </div>
              <h3 class="text-lg font-medium text-gray-900 mb-2">Aucune notification</h3>
              <p class="text-gray-600">Vous n'avez pas de nouvelles notifications</p>
            </div>

            <div v-else class="space-y-4">
              <div v-for="notification in amoNotifications" :key="notification.id" class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center">
                  <div class="p-3 rounded-full bg-blue-100">
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
              <p class="text-sm font-medium text-gray-500">Client</p>
              <p class="text-gray-900">{{ selectedProjectDetails.clientName }}</p>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-500">Contact</p>
              <p class="text-gray-900">{{ selectedProjectDetails.clientEmail }}</p>
            </div>
          </div>

          <div class="flex space-x-4 pt-6">
            <button 
              @click="findArtisans"
              class="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Artisan 🔍
            </button>
            <button 
              @click="acceptProject(selectedProjectDetails)"
              class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Accepter
            </button>
            <button 
              @click="declineProject(selectedProjectDetails)"
              class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Décliner
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal recherche artisans -->
    <div v-if="showArtisanModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl p-8 max-w-4xl w-full mx-4 max-h-96 overflow-y-auto">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-gray-900">Recherche d'artisans</h2>
          <button @click="closeArtisanModal" class="text-gray-400 hover:text-gray-600">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="mb-6">
          <input 
            v-model="artisanSearch" 
            type="text" 
            placeholder="Rechercher par compétence (ex: électricité, plomberie...)"
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="artisan in filteredArtisans" :key="artisan.id" class="p-4 border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-semibold text-gray-900">{{ artisan.name }}</h3>
                <p class="text-sm text-gray-600">{{ artisan.specialty }}</p>
                <p class="text-sm text-gray-500">{{ artisan.location }}</p>
                <div class="flex items-center mt-1">
                  <span class="text-yellow-400">★</span>
                  <span class="text-sm text-gray-600 ml-1">{{ artisan.rating }} ({{ artisan.reviews }} avis)</span>
                </div>
              </div>
              <button 
                @click="addArtisanToProject(artisan)"
                class="px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useUserStore } from '@/stores/user.js'
import { useNotificationsStore } from '@/stores/notifications.js'
import { useRoleGuard } from '@/composables/useRoleGuard.js'
import { useErrorHandler } from '@/composables/useErrorHandler.js'
import dashboardService from '@/services/dashboardService.js'
import documentService from '@/services/documentService.js'
import amoProjectService from '@/services/amoProjectService.js'

// Store utilisateur et notifications
const userStore = useUserStore()
const notificationsStore = useNotificationsStore()

// Protection de la route
const { protectRoute } = useRoleGuard()

// Gestion d'erreurs
const { safeApiCall, processError } = useErrorHandler()

// État réactif
const activeTab = ref('overview')
const showProjectModal = ref(false)
const showArtisanModal = ref(false)
const selectedProjectDetails = ref(null)
const selectedProject = ref('')
const selectedFiles = ref([])
const artisanSearch = ref('')

// Notifications et projets temps réel
const newProjectsCount = ref(0)
const isLoading = ref(false)
const pollInterval = ref(null)
const lastProjectCount = ref(0)

// Données fictives du dashboard
const dashboardStats = ref({
  enAttente: 3,
  geres: 12,
  termines: 8,
  clients: 15
})

const recentActivity = ref([
  {
    id: 1,
    title: 'Nouveau projet reçu',
    description: 'Rénovation cuisine - Jean Dupont',
    time: 'Il y a 2 heures',
    iconClass: 'bg-green-100',
    iconColor: 'text-green-600',
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a1 1 0 011-1h4a1 1 0 011 1v12m-6 0h6'
  },
  {
    id: 2,
    title: 'Document reçu',
    description: 'Devis électricité - Marie Martin',
    time: 'Il y a 4 heures',
    iconClass: 'bg-blue-100',
    iconColor: 'text-blue-600',
    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    id: 3,
    title: 'Projet terminé',
    description: 'Isolation combles - Pierre Bernard',
    time: 'Il y a 1 jour',
    iconClass: 'bg-purple-100',
    iconColor: 'text-purple-600',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  }
])

const newProjects = ref([
  {
    id: 1,
    title: 'Rénovation cuisine complète',
    description: 'Rénovation complète d\'une cuisine de 15m² avec remplacement des équipements',
    location: 'Lyon, 69000',
    budget: '15 000 - 20 000€',
    clientName: 'Jean Dupont',
    clientEmail: 'jean.dupont@email.com'
  },
  {
    id: 2,
    title: 'Installation système électrique',
    description: 'Mise aux normes électriques d\'un appartement de 60m²',
    location: 'Marseille, 13000',
    budget: '8 000 - 12 000€',
    clientName: 'Marie Martin',
    clientEmail: 'marie.martin@email.com'
  },
  {
    id: 3,
    title: 'Isolation des combles',
    description: 'Isolation thermique des combles perdus sur 80m²',
    location: 'Toulouse, 31000',
    budget: '3 000 - 5 000€',
    clientName: 'Pierre Bernard',
    clientEmail: 'pierre.bernard@email.com'
  }
])

const managedProjects = ref([
  {
    id: 1,
    description: 'Rénovation complète salle de bain de 12m² avec pose de faïence, installation d\'une douche italienne et rénovation de la plomberie',
    city: 'Nice',
    postalCode: '06000',
    budget: '25000.00',
    surfaceM2: 12,
    bedrooms: 0,
    houseType: 'appartement',
    statut: 'accepte',
    createdAt: '2025-01-10T10:30:00.000Z',
    client: {
      firstName: 'Sophie',
      lastName: 'Moreau',
      email: 'sophie.moreau@email.com'
    }
  },
  {
    id: 2,
    description: 'Extension de maison individuelle de 25m² avec création d\'une cuisine ouverte sur salon',
    city: 'Bordeaux',
    postalCode: '33000',
    budget: '45000.00',
    surfaceM2: 25,
    bedrooms: 0,
    houseType: 'extension',
    statut: 'en_cours',
    createdAt: '2025-01-05T14:20:00.000Z',
    client: {
      firstName: 'Antoine',
      lastName: 'Roux',
      email: 'antoine.roux@email.com'
    }
  },
  {
    id: 3,
    description: 'Réfection complète de toiture avec isolation thermique renforcée sur maison de 120m²',
    city: 'Nantes',
    postalCode: '44000',
    budget: '18000.00',
    surfaceM2: 120,
    bedrooms: 4,
    houseType: 'étage',
    statut: 'accepte',
    createdAt: '2025-01-08T09:15:00.000Z',
    client: {
      firstName: 'Claire',
      lastName: 'Dubois',
      email: 'claire.dubois@email.com'
    }
  },
  {
    id: 4,
    description: 'Isolation des combles perdus et aménagés sur 80m² avec pose de velux',
    city: 'Lyon',
    postalCode: '69000',
    budget: '12000.00',
    surfaceM2: 80,
    bedrooms: 2,
    houseType: 'étage',
    statut: 'en_cours',
    createdAt: '2025-01-12T16:45:00.000Z',
    client: {
      firstName: 'Marc',
      lastName: 'Durand',
      email: 'marc.durand@email.com'
    }
  },
  {
    id: 5,
    description: 'Mise aux normes électriques complète d\'un appartement T3 de 70m²',
    city: 'Marseille',
    postalCode: '13000',
    budget: '8500.00',
    surfaceM2: 70,
    bedrooms: 2,
    houseType: 'appartement',
    statut: 'termine',
    createdAt: '2024-12-20T11:30:00.000Z',
    client: {
      firstName: 'Emma',
      lastName: 'Martin',
      email: 'emma.martin@email.com'
    }
  },
  {
    id: 6,
    description: 'Création d\'une cuisine équipée moderne avec îlot central dans maison contemporaine',
    city: 'Toulouse',
    postalCode: '31000',
    budget: '35000.00',
    surfaceM2: 18,
    bedrooms: 0,
    houseType: 'plain-pied',
    statut: 'en_cours',
    createdAt: '2025-01-03T08:20:00.000Z',
    client: {
      firstName: 'Paul',
      lastName: 'Bernard',
      email: 'paul.bernard@email.com'
    }
  }
])

const projects = ref([
  { id: 1, name: 'Rénovation cuisine - Jean Dupont' },
  { id: 2, name: 'Installation électrique - Marie Martin' },
  { id: 3, name: 'Isolation combles - Pierre Bernard' },
  { id: 4, name: 'Rénovation salle de bain - Sophie Moreau' },
  { id: 5, name: 'Extension maison - Antoine Roux' }
])

const clientDocuments = ref([
  { id: 1, name: 'Plan cuisine.pdf', clientName: 'Jean Dupont', projectId: 1, date: '12 août 2024' },
  { id: 2, name: 'Devis électricité.pdf', clientName: 'Marie Martin', projectId: 2, date: '11 août 2024' },
  { id: 3, name: 'Photos avant travaux.jpg', clientName: 'Pierre Bernard', projectId: 3, date: '10 août 2024' }
])

const artisanDocuments = ref([
  { id: 1, name: 'Facture plomberie.pdf', artisanName: 'Plomberie Durand', projectId: 1, date: '12 août 2024' },
  { id: 2, name: 'Certificat électrique.pdf', artisanName: 'Électricité Pro', projectId: 2, date: '11 août 2024' }
])

const amoOwnDocuments = ref([
  { id: 1, name: 'Cahier des charges.pdf', projectName: 'Rénovation cuisine - Jean Dupont', projectId: 1, date: '10 août 2024' },
  { id: 2, name: 'Plans techniques.pdf', projectName: 'Installation électrique - Marie Martin', projectId: 2, date: '9 août 2024' },
  { id: 3, name: 'Spécifications.docx', projectName: 'Isolation combles - Pierre Bernard', projectId: 3, date: '8 août 2024' }
])

const artisans = ref([
  { id: 1, name: 'Électricité Pro', specialty: 'Électricité', location: 'Lyon', rating: 4.8, reviews: 124 },
  { id: 2, name: 'Plomberie Expert', specialty: 'Plomberie', location: 'Lyon', rating: 4.6, reviews: 89 },
  { id: 3, name: 'Carrelage Plus', specialty: 'Carrelage', location: 'Lyon', rating: 4.9, reviews: 156 },
  { id: 4, name: 'Peinture Service', specialty: 'Peinture', location: 'Marseille', rating: 4.5, reviews: 98 }
])

const amoNotifications = ref([
  {
    id: 1,
    type: 'document',
    title: 'Nouveau document reçu',
    message: 'Jean Dupont a envoyé un nouveau document',
    time: 'Il y a 1 heure'
  },
  {
    id: 2,
    type: 'project',
    title: 'Nouveau projet',
    message: 'Nouveau projet de rénovation soumis',
    time: 'Il y a 3 heures'
  }
])

// Computed properties
const filteredClientDocuments = computed(() => {
  if (!selectedProject.value) return clientDocuments.value
  return clientDocuments.value.filter(doc => doc.projectId === parseInt(selectedProject.value))
})

const filteredArtisanDocuments = computed(() => {
  if (!selectedProject.value) return artisanDocuments.value
  return artisanDocuments.value.filter(doc => doc.projectId === parseInt(selectedProject.value))
})

const filteredAmoOwnDocuments = computed(() => {
  if (!selectedProject.value) return amoOwnDocuments.value
  return amoOwnDocuments.value.filter(doc => doc.projectId === parseInt(selectedProject.value))
})

const filteredArtisans = computed(() => {
  if (!artisanSearch.value) return artisans.value
  return artisans.value.filter(artisan => 
    artisan.specialty.toLowerCase().includes(artisanSearch.value.toLowerCase()) ||
    artisan.name.toLowerCase().includes(artisanSearch.value.toLowerCase())
  )
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

async function acceptProject(project) {
  if (isLoading.value) return
  
  try {
    isLoading.value = true
    console.log('✅ Acceptation du projet:', project.title || project.id)
    
    const response = await amoProjectService.acceptProject(project.id)
    
    if (response.success) {
      console.log('✅ Projet accepté avec succès!')
      
      // Afficher notification de succès
      notificationsStore.showSuccess(response.message || 'Projet accepté avec succès', {
        title: 'Acceptation réussie',
        autoRemove: true,
        duration: 4000
      })
      
      // Retirer le projet de la liste des nouveaux projets
      const index = newProjects.value.findIndex(p => p.id === project.id)
      if (index !== -1) {
        newProjects.value.splice(index, 1)
        newProjectsCount.value = Math.max(0, newProjectsCount.value - 1)
      }
      
      // Recharger les données pour mettre à jour les statistiques
      await loadAvailableProjects()
      await loadDashboardData()
      
      closeProjectModal()
      
    } else {
      throw new Error(response.message || 'Erreur lors de l\'acceptation')
    }
    
  } catch (error) {
    console.error('❌ Erreur acceptation projet:', error)
    
    let errorMessage = 'Erreur lors de l\'acceptation du projet'
    if (error.message.includes('déjà été accepté')) {
      errorMessage = 'Ce projet a déjà été accepté par un autre AMO'
    } else if (error.message.includes('plus disponible')) {
      errorMessage = 'Ce projet n\'est plus disponible'
    } else {
      errorMessage = error.message || errorMessage
    }
    
    notificationsStore.showError(errorMessage, {
      title: 'Erreur d\'acceptation',
      autoRemove: true,
      duration: 6000
    })
    
  } finally {
    isLoading.value = false
  }
}

async function declineProject(project) {
  if (isLoading.value) return
  
  try {
    console.log('❌ Déclin du projet:', project.title || project.id)
    
    // Pour le moment, juste retirer de la liste (pas d'API de déclin)
    const index = newProjects.value.findIndex(p => p.id === project.id)
    if (index !== -1) {
      newProjects.value.splice(index, 1)
      newProjectsCount.value = Math.max(0, newProjectsCount.value - 1)
    }
    
    notificationsStore.showInfo('Projet ignoré', {
      title: 'Projet retiré',
      autoRemove: true,
      duration: 3000
    })
    
    closeProjectModal()
    
  } catch (error) {
    console.error('❌ Erreur déclin projet:', error)
  }
}

function findArtisans() {
  showArtisanModal.value = true
}

function closeArtisanModal() {
  showArtisanModal.value = false
  artisanSearch.value = ''
}

function addArtisanToProject(artisan) {
  console.log('Artisan ajouté au projet:', artisan.name)
  closeArtisanModal()
}

function filterDocuments() {
  // La filtration se fait automatiquement via les computed properties
}

// Fonctions pour les statuts de l'API
function getStatusClassFromApi(statut) {
  const statusClasses = {
    'brouillon': 'bg-gray-100 text-gray-800',
    'accepte': 'bg-blue-100 text-blue-800', 
    'en_cours': 'bg-orange-100 text-orange-800',
    'termine': 'bg-green-100 text-green-800',
    'clôturé': 'bg-purple-100 text-purple-800'
  }
  return statusClasses[statut] || 'bg-gray-100 text-gray-800'
}

function getStatusLabelFromApi(statut) {
  const statusLabels = {
    'brouillon': 'Brouillon',
    'accepte': '📋 Accepté',
    'en_cours': '🔄 En cours',
    'termine': '✅ Terminé', 
    'clôturé': '🏁 Clôturé'
  }
  return statusLabels[statut] || statut
}

// Actions sur les projets
async function startProject(project) {
  if (isLoading.value) return
  
  try {
    isLoading.value = true
    console.log('🚀 Démarrage du projet:', project.id)
    
    // Ici on devrait appeler une API pour changer le statut vers "en_cours"
    // Pour l'instant, on simule en mettant à jour localement
    const projectIndex = managedProjects.value.findIndex(p => p.id === project.id)
    if (projectIndex !== -1) {
      managedProjects.value[projectIndex].statut = 'en_cours'
    }
    
    notificationsStore.showSuccess('Projet démarré avec succès!', {
      title: 'Projet démarré',
      autoRemove: true,
      duration: 3000
    })
    
  } catch (error) {
    console.error('❌ Erreur démarrage projet:', error)
    notificationsStore.showError(`Erreur: ${error.message}`, {
      title: 'Erreur démarrage',
      autoRemove: true,
      duration: 4000
    })
  } finally {
    isLoading.value = false
  }
}

async function completeProject(project) {
  if (isLoading.value) return
  
  try {
    isLoading.value = true
    console.log('✅ Finalisation du projet:', project.id)
    
    // Ici on devrait appeler une API pour changer le statut vers "termine" 
    // Pour l'instant, on simule en mettant à jour localement
    const projectIndex = managedProjects.value.findIndex(p => p.id === project.id)
    if (projectIndex !== -1) {
      managedProjects.value[projectIndex].statut = 'termine'
    }
    
    notificationsStore.showSuccess('Projet terminé avec succès!', {
      title: 'Projet terminé',
      autoRemove: true,
      duration: 3000
    })
    
  } catch (error) {
    console.error('❌ Erreur finalisation projet:', error)
    notificationsStore.showError(`Erreur: ${error.message}`, {
      title: 'Erreur finalisation',
      autoRemove: true,
      duration: 4000
    })
  } finally {
    isLoading.value = false
  }
}

// Fonction de statut pour compatibilité (anciennes données fictives)
function getStatusClass(status) {
  const statusClasses = {
    'En cours': 'bg-blue-100 text-blue-800',
    'Planification': 'bg-yellow-100 text-yellow-800',
    'En attente': 'bg-orange-100 text-orange-800',
    'Terminé': 'bg-green-100 text-green-800'
  }
  return statusClasses[status] || 'bg-gray-100 text-gray-800'
}

// ================================================
// GESTION DES FICHIERS
// ================================================

function handleFileUpload(event) {
  const files = event.target.files
  if (files && files.length > 0) {
    selectedFiles.value = Array.from(files)
    console.log('📁 Fichiers sélectionnés:', selectedFiles.value.map(f => f.name))
  }
}

function handleFileDrop(event) {
  event.preventDefault()
  const files = event.dataTransfer.files
  if (files && files.length > 0) {
    selectedFiles.value = Array.from(files)
    console.log('📁 Fichiers déposés:', selectedFiles.value.map(f => f.name))
  }
}

function handleDragOver(event) {
  event.preventDefault()
}

function removeSelectedFile(index) {
  selectedFiles.value.splice(index, 1)
}

// Cette fonction est déjà définie plus haut avec la vraie API

// Cette fonction est déjà définie plus haut avec la vraie API

function deleteDocument(document) {
  if (!confirm(`Êtes-vous sûr de vouloir supprimer "${document.name}" ?`)) {
    return
  }
  
  console.log('🗑️ Suppression de:', document.name)
  const index = amoOwnDocuments.value.findIndex(doc => doc.id === document.id)
  if (index !== -1) {
    amoOwnDocuments.value.splice(index, 1)
    console.log('✅ Document supprimé avec succès!')
  }
}

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// Charger les nouveaux projets disponibles
async function loadAvailableProjects() {
  try {
    console.log('🔔 Chargement des nouveaux projets disponibles...')
    
    const response = await amoProjectService.getAvailableProjects()
    console.log('📥 Réponse brute getAvailableProjects:', response)
    
    // Analyser la structure de la réponse
    if (response && response.data) {
      console.log('📋 Données projets brouillon reçues:', response.data)
      console.log('📊 Type de données:', typeof response.data, 'Est array:', Array.isArray(response.data))
      
      let projects = []
      
      // Adapter selon la structure retournée par l'API
      if (Array.isArray(response.data)) {
        projects = response.data
      } else if (response.data && Array.isArray(response.data.data)) {
        projects = response.data.data
      } else if (response.data && response.data.projets && Array.isArray(response.data.projets)) {
        projects = response.data.projets
      } else {
        console.warn('⚠️ Structure de données inconnue:', response.data)
        projects = []
      }
      
      console.log(`📈 ${projects.length} projet(s) brouillon trouvé(s)`)
      
      if (projects.length > 0) {
        // Afficher la structure du premier projet pour debug
        console.log('🔍 Structure du premier projet:', projects[0])
        
        // Filtrer les projets qui n'ont pas encore d'AMO assigné (amoId === null)
        const availableProjects = projects.filter(project => project.amoId === null)
        console.log(`📊 ${availableProjects.length} projets disponibles (sans AMO assigné) sur ${projects.length} projets brouillon`)
        
        // Transformer les données de l'API au format attendu par le template
        newProjects.value = availableProjects.map(project => {
          // Vérifier la structure des données client
          const client = project.client || {}
          const clientName = client.firstName && client.lastName 
            ? `${client.firstName} ${client.lastName}`
            : client.fullName || client.nom || client.name || 'Client inconnu'
          
          return {
            id: project.id,
            title: project.description 
              ? project.description.substring(0, 50) + (project.description.length > 50 ? '...' : '')
              : 'Projet sans description',
            description: project.description || 'Aucune description disponible',
            location: `${project.city || 'Ville inconnue'}, ${project.postalCode || '00000'}`,
            budget: project.formattedBudget || amoProjectService.formatBudget(parseFloat(project.budget)),
            clientName: clientName,
            clientEmail: client.email || 'Email non disponible',
            // Données complètes pour le modal
            address: project.address || 'Adresse non spécifiée',
            city: project.city || 'Ville inconnue',
            postalCode: project.postalCode || '00000',
            surfaceM2: project.surfaceM2 || null,
            bedrooms: project.bedrooms || null,
            houseType: project.houseType || null,
            hasLand: project.hasLand || false,
            createdAt: project.createdAt || project.dateSubmission || null,
            client: client
          }
        })
        
        newProjectsCount.value = newProjects.value.length
        
        // Notification si nouveaux projets détectés
        const newCount = newProjects.value.length
        if (lastProjectCount.value > 0 && newCount > lastProjectCount.value) {
          const diff = newCount - lastProjectCount.value
          
          notificationsStore.showSuccess(`${diff} nouveau${diff > 1 ? 'x' : ''} projet${diff > 1 ? 's' : ''} disponible${diff > 1 ? 's' : ''} !`, {
            title: 'Nouveaux projets',
            autoRemove: true,
            duration: 5000
          })
          
          // Notification navigateur si permission accordée
          if (Notification.permission === 'granted') {
            new Notification('Nouveaux projets Experta', {
              body: `${diff} nouveau${diff > 1 ? 'x' : ''} projet${diff > 1 ? 's' : ''} dans votre zone`,
              icon: '/favicon.ico',
              tag: 'new-projects'
            })
          }
        }
        
        lastProjectCount.value = newCount
        console.log(`✅ ${newCount} nouveaux projets chargés et transformés`)
        
      } else {
        console.warn('⚠️ Aucun projet en statut brouillon trouvé ou tous déjà assignés')
        newProjects.value = []
        newProjectsCount.value = 0
      }
      
    } else {
      console.warn('⚠️ Réponse API invalide ou vide:', response)
      newProjects.value = []
      newProjectsCount.value = 0
    }
    
  } catch (error) {
    console.error('❌ Erreur lors du chargement des nouveaux projets:', error)
    console.error('❌ Détails de l\'erreur:', {
      message: error.message,
      status: error.status,
      data: error.data
    })
    
    // Afficher l'erreur à l'utilisateur seulement si ce n'est pas du polling silencieux
    if (!pollInterval.value) {
      notificationsStore.showError(`Erreur lors du chargement des projets: ${error.message}`, {
        title: 'Erreur de chargement',
        autoRemove: true,
        duration: 5000
      })
    }
  }
}

// Charger les projets que l'AMO gère (acceptés)
async function loadManagedProjects() {
  try {
    console.log('📋 Chargement des projets gérés par l\'AMO...')
    
    const response = await amoProjectService.getMyAMOProjects()
    console.log('📥 Réponse brute getMyAMOProjects:', response)
    
    if (response && response.success && response.data) {
      console.log('📋 Données projets AMO reçues:', response.data)
      
      // Mettre à jour les projets gérés
      if (response.data.projets && Array.isArray(response.data.projets) && response.data.projets.length > 0) {
        managedProjects.value = response.data.projets
        console.log(`✅ ${managedProjects.value.length} projets gérés chargés depuis l'API`)
        
        // Mettre à jour les statistiques si disponibles
        if (response.data.statistiques) {
          console.log('📊 Statistiques AMO:', response.data.statistiques)
          Object.assign(dashboardStats.value, {
            geres: response.data.statistiques.total || managedProjects.value.length,
            enAttente: response.data.statistiques.acceptes || 0,
            termines: response.data.statistiques.termines || 0
          })
        }
        
      } else {
        console.warn('⚠️ Aucun projet géré trouvé dans l\'API, conservation des données fictives')
        // Ne pas écraser les données fictives si l'API ne retourne rien
        console.log(`📋 Projets fictifs conservés: ${managedProjects.value.length}`)
      }
      
    } else {
      console.warn('⚠️ Réponse API projets gérés invalide, conservation des données fictives:', response)
      // Ne pas écraser les données fictives en cas d'erreur API
    }
    
  } catch (error) {
    console.error('❌ Erreur lors du chargement des projets gérés:', error)
    console.log('📋 Conservation des données fictives suite à l\'erreur API')
    // En cas d'erreur, conserver les données fictives
    
    notificationsStore.showError(`Erreur lors du chargement des projets: ${error.message}`, {
      title: 'Erreur de chargement',
      autoRemove: true,
      duration: 5000
    })
  }
}

// Charger les données du dashboard
async function loadDashboardData() {
  try {
    console.log('🔄 Chargement des données dashboard AMO...')
    
    // Charger les projets gérés via la nouvelle API
    await loadManagedProjects()
    
    // Charger les données du dashboard en parallèle avec gestion d'erreurs (pour compatibilité)
    const [dashboardData, missionsData] = await Promise.all([
      safeApiCall(
        () => dashboardService.getAmoDashboard(),
        'amo-dashboard'
      ),
      safeApiCall(
        () => dashboardService.getAmoMissions(),
        'amo-missions'
      )
    ])
    
    if (dashboardData?.data) {
      console.log('✅ Données dashboard chargées:', dashboardData.data)
      // Mettre à jour les stats avec les vraies données
      Object.assign(dashboardStats.value, dashboardData.data)
    }
    
  } catch (error) {
    console.error('❌ Erreur lors du chargement des données:', error)
  }
}

// Test API projets gérés pour debug
async function testManagedProjectsApi() {
  console.log('🔍 === TEST API PROJETS GÉRÉS ===')
  
  try {
    // Test API brut
    const { buildUrl, getAuthHeaders } = await import('../utils/apiConfig.js')
    const url = buildUrl('/projets/my-amo-projects')
    const headers = getAuthHeaders()
    
    console.log('🌐 URL à appeler:', url)
    console.log('📋 Headers:', headers)
    
    const response = await fetch(url, {
      method: 'GET',
      headers: headers
    })
    
    console.log('📡 Statut réponse:', response.status, response.statusText)
    
    const textResponse = await response.text()
    console.log('📄 Réponse texte brute:', textResponse)
    
    if (textResponse) {
      try {
        const jsonResponse = JSON.parse(textResponse)
        console.log('📦 Réponse JSON parsée:', jsonResponse)
        
        if (jsonResponse.data && jsonResponse.data.projets && Array.isArray(jsonResponse.data.projets)) {
          console.log(`📊 ${jsonResponse.data.projets.length} projets gérés trouvés`)
          if (jsonResponse.data.projets.length > 0) {
            console.log('🔍 Premier projet géré:', jsonResponse.data.projets[0])
          }
        }
        
      } catch (parseError) {
        console.error('❌ Erreur parsing JSON:', parseError)
      }
    }
    
    notificationsStore.showInfo(`API Projets Response: ${response.status} - Voir console`, {
      title: 'Test API Projets',
      autoRemove: true,
      duration: 4000
    })
    
  } catch (error) {
    console.error('❌ Erreur test API projets:', error)
    notificationsStore.showError(`Erreur test: ${error.message}`, {
      title: 'Erreur Test API',
      autoRemove: true,
      duration: 4000
    })
  }
  
  console.log('🔍 === FIN TEST API PROJETS ===')
}

// Démarrer le polling pour les nouveaux projets
async function startProjectPolling() {
  // Demander permission pour les notifications navigateur
  if (Notification.permission === 'default') {
    await Notification.requestPermission()
  }
  
  // Charger immédiatement
  await loadAvailableProjects()
  
  // Puis vérifier toutes les 30 secondes
  pollInterval.value = setInterval(loadAvailableProjects, 30000)
  console.log('🔄 Polling des nouveaux projets démarré (30s)')
}

// Arrêter le polling
function stopProjectPolling() {
  if (pollInterval.value) {
    clearInterval(pollInterval.value)
    pollInterval.value = null
    console.log('⏹️ Polling des nouveaux projets arrêté')
  }
}

// Test API direct pour debug
async function testApiDirectly() {
  console.log('🔍 === TEST API DIRECT ===')
  
  try {
    // Test de l'authentification
    const userInfo = userStore.user || userStore.userData || {}
    console.log('👤 Utilisateur actuel:', userInfo)
    console.log('🔑 Token présent:', !!userStore.token)
    console.log('🏷️ Rôle utilisateur:', userStore.userRole)
    
    // Test API brut
    const { buildUrl, getAuthHeaders } = await import('../utils/apiConfig.js')
    const url = buildUrl('/projets/status/brouillon')
    const headers = getAuthHeaders()
    
    console.log('🌐 URL à appeler:', url)
    console.log('📋 Headers:', headers)
    
    const response = await fetch(url, {
      method: 'GET',
      headers: headers
    })
    
    console.log('📡 Statut réponse:', response.status, response.statusText)
    console.log('📋 Headers réponse:', Object.fromEntries(response.headers.entries()))
    
    const textResponse = await response.text()
    console.log('📄 Réponse texte brute:', textResponse)
    
    if (textResponse) {
      try {
        const jsonResponse = JSON.parse(textResponse)
        console.log('📦 Réponse JSON parsée:', jsonResponse)
        
        // Vérifier si ce sont des projets
        if (jsonResponse.data && Array.isArray(jsonResponse.data)) {
          console.log(`📊 ${jsonResponse.data.length} projets trouvés dans l'API`)
          if (jsonResponse.data.length > 0) {
            console.log('🔍 Premier projet:', jsonResponse.data[0])
          }
        } else {
          console.log('⚠️ Format de données inattendu')
        }
        
      } catch (parseError) {
        console.error('❌ Erreur parsing JSON:', parseError)
      }
    }
    
    // Afficher le résultat à l'utilisateur
    notificationsStore.showInfo(`API Response: ${response.status} - Voir console pour détails`, {
      title: 'Test API',
      autoRemove: true,
      duration: 4000
    })
    
  } catch (error) {
    console.error('❌ Erreur test API:', error)
    notificationsStore.showError(`Erreur test API: ${error.message}`, {
      title: 'Erreur Test',
      autoRemove: true,
      duration: 4000
    })
  }
  
  console.log('🔍 === FIN TEST API ===')
}

// Charger les documents réels
async function loadDocuments() {
  try {
    console.log('📁 Chargement des documents...')
    
    // Charger les documents clients pour AMO
    const clientDocsResult = await safeApiCall(
      () => dashboardService.getAmoClientDocuments(),
      'amo-documents-clients'
    )
    
    if (clientDocsResult?.data) {
      console.log('✅ Documents clients chargés:', clientDocsResult.data)
      clientDocuments.value = clientDocsResult.data
    }
    
  } catch (error) {
    console.error('❌ Erreur lors du chargement des documents:', error)
  }
}

// Upload de fichiers réel
async function uploadSelectedFiles() {
  if (!selectedFiles.value.length) return
  
  try {
    console.log('📤 Upload des fichiers AMO...', selectedFiles.value.map(f => f.name))
    
    const result = await dashboardService.uploadAmoDocuments(
      selectedFiles.value,
      selectedProject.value ? parseInt(selectedProject.value) : null
    )
    
    if (result.success) {
      console.log('✅ Documents uploadés avec succès!')
      
      // Recharger les documents
      await loadDocuments()
      
      // Vider la sélection
      selectedFiles.value = []
    }
    
  } catch (error) {
    console.error('❌ Erreur upload:', error)
    alert('Erreur lors de l\'upload: ' + error.message)
  }
}

// Téléchargement de document réel
async function downloadDocument(document) {
  try {
    console.log('📥 Téléchargement de:', document.name)
    
    if (document.type === 'client') {
      await dashboardService.downloadAmoClientDocument(document.id, document.name)
    } else if (document.type === 'partenaire') {
      await dashboardService.downloadAmoPartenaireDocument(document.id, document.name)
    } else {
      // Documents propres AMO - utiliser documentService
      await documentService.downloadDocument(document.id, document.name)
    }
    
    console.log('✅ Téléchargement initié')
  } catch (error) {
    console.error('❌ Erreur téléchargement:', error)
    alert('Erreur lors du téléchargement: ' + error.message)
  }
}

// Protection de la route au montage du composant
onMounted(async () => {
  console.log('🚀 Initialisation du tableau de bord AMO')
  
  // Protection de la route - vérifier que seuls les AMO peuvent accéder
  if (!protectRoute('amo')) {
    return // La redirection sera gérée par protectRoute
  }
  
  console.log('✅ Accès autorisé au dashboard AMO')
  
  // Charger les données réelles en parallèle
  await Promise.all([
    loadDashboardData(),
    loadDocuments(),
    loadManagedProjects()
  ])
  
  // Démarrer le polling des nouveaux projets
  await startProjectPolling()
})

// Nettoyer le polling quand le composant est détruit
onUnmounted(() => {
  stopProjectPolling()
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