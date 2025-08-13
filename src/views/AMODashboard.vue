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
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {{ project.clientName }}
                  </div>
                </div>
                
                <div class="flex space-x-2">
                  <button 
                    @click="viewProjectDetails(project)"
                    class="flex-1 py-2 px-3 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Voir détails
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
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
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
                      <div class="text-sm text-gray-900">{{ project.clientName }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ project.clientEmail }}</div>
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

          <!-- Documents -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                    <button class="p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
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
                    <button class="p-2 text-orange-600 hover:bg-orange-100 rounded-lg">
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
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/user.js'

// Store utilisateur
const userStore = useUserStore()

// État réactif
const activeTab = ref('overview')
const showProjectModal = ref(false)
const showArtisanModal = ref(false)
const selectedProjectDetails = ref(null)
const selectedProject = ref('')
const artisanSearch = ref('')

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
    title: 'Rénovation salle de bain',
    location: 'Nice, 06000',
    clientName: 'Sophie Moreau',
    clientEmail: 'sophie.moreau@email.com',
    status: 'En cours'
  },
  {
    id: 2,
    title: 'Extension maison',
    location: 'Bordeaux, 33000',
    clientName: 'Antoine Roux',
    clientEmail: 'antoine.roux@email.com',
    status: 'Planification'
  },
  {
    id: 3,
    title: 'Réfection toiture',
    location: 'Nantes, 44000',
    clientName: 'Claire Dubois',
    clientEmail: 'claire.dubois@email.com',
    status: 'En attente'
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

function getStatusClass(status) {
  const statusClasses = {
    'En cours': 'bg-blue-100 text-blue-800',
    'Planification': 'bg-yellow-100 text-yellow-800',
    'En attente': 'bg-orange-100 text-orange-800',
    'Terminé': 'bg-green-100 text-green-800'
  }
  return statusClasses[status] || 'bg-gray-100 text-gray-800'
}
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