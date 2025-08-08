<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-blue-600">Experta</h1>
          </div>
          <div class="flex items-center space-x-4">
            <!-- Notifications -->
            <div class="relative">
              <button @click="showNotifications = !showNotifications" class="p-2 text-gray-400 hover:text-gray-500 relative">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span v-if="unreadNotifications > 0" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{{ unreadNotifications }}</span>
              </button>
              <!-- Dropdown notifications -->
              <div v-if="showNotifications" class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                <div class="p-4 border-b border-gray-200">
                  <h3 class="text-lg font-semibold text-gray-900">Notifications</h3>
                </div>
                <div class="max-h-64 overflow-y-auto">
                  <div v-for="notification in notifications" :key="notification.id" class="p-4 border-b border-gray-100 hover:bg-gray-50">
                    <div class="flex items-start">
                      <div class="flex-shrink-0">
                        <div class="h-2 w-2 bg-blue-500 rounded-full mt-2" v-if="!notification.read"></div>
                      </div>
                      <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900">{{ notification.title }}</p>
                        <p class="text-sm text-gray-600">{{ notification.message }}</p>
                        <p class="text-xs text-gray-500 mt-1">{{ notification.time }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Profile -->
            <div class="flex items-center space-x-2">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profil" class="h-8 w-8 rounded-full" />
              <span class="text-sm font-medium text-gray-700">Jean Dupont</span>
            </div>
          </div>
        </div>
      </div>
    </header>

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
              <button @click="activeTab = 'payments'" :class="activeTab === 'payments' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-600 hover:bg-gray-50'" class="w-full text-left px-4 py-2 rounded-lg border transition-colors">
                Paiements
              </button>
            </li>
            <li>
              <button @click="activeTab = 'meetings'" :class="activeTab === 'meetings' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-600 hover:bg-gray-50'" class="w-full text-left px-4 py-2 rounded-lg border transition-colors">
                Visioconférences
              </button>
            </li>
            <li>
              <button @click="activeTab = 'reviews'" :class="activeTab === 'reviews' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-600 hover:bg-gray-50'" class="w-full text-left px-4 py-2 rounded-lg border transition-colors">
                Évaluations
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Main Content -->
      <main class="flex-1 p-8">
        <!-- Vue d'ensemble -->
        <div v-if="activeTab === 'overview'" class="animate-fade-in">
          <h1 class="text-3xl font-bold text-gray-900 mb-8">Bienvenue, Jean !</h1>
          
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
            <div v-for="project in allProjects" :key="project.id" class="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
              <!-- En-tête du projet avec statut -->
              <div class="flex justify-between items-start mb-4">
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-2">
                    <h3 class="text-xl font-bold text-gray-900">{{ getProjectNumber(project) }}</h3>
                    <span :class="getStatusClass(project.statut)" class="px-3 py-1 text-xs font-medium rounded-full">
                      {{ getStatusLabel(project.statut) }}
                    </span>
                  </div>
                  <p class="text-gray-600 text-sm">
                    Créé le {{ new Date(project.createdAt).toLocaleDateString('fr-FR') }}
                  </p>
                </div>
                
                                <!-- Actions -->
                <div class="flex space-x-2">
                  <button @click="openProjectDetailsModal(project)" class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Voir les détails">
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Description du projet -->
              <div class="mb-4">
                <p class="text-gray-700 leading-relaxed">
                  {{ project.description ? project.description.substring(0, 150) + (project.description.length > 150 ? '...' : '') : 'Aucune description disponible' }}
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
                    {{ project.budget ? project.budget.toLocaleString('fr-FR') + ' €' : 'Non défini' }}
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
                
                <button @click="openProjectDetailsModal(project)" class="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Voir les détails
                </button>
              </div>
            </div>
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

          <!-- Zone de dépôt de documents -->
          <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Dépôt rapide</h2>
            <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <svg class="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p class="text-lg font-medium text-gray-900 mb-2">Glissez vos fichiers ici ou cliquez pour sélectionner</p>
              <p class="text-sm text-gray-500">PDF, DOC, JPG, PNG jusqu'à 10MB</p>
              <input type="file" multiple class="hidden" ref="fileInput" @change="handleFileUpload" />
              <button @click="$refs.fileInput.click()" class="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors">
                Sélectionner des fichiers
              </button>
            </div>
          </div>

          <!-- Liste des documents -->
          <div class="bg-white rounded-2xl shadow-xl border border-gray-100">
            <div class="p-6 border-b border-gray-200">
              <h2 class="text-xl font-bold text-gray-900">Documents uploadés</h2>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <div v-for="document in documents" :key="document.id" class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div class="flex items-center">
                    <div class="p-2 rounded-full bg-blue-100">
                      <svg class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">{{ document.name }}</p>
                      <p class="text-sm text-gray-600">{{ document.type }} • {{ document.size }} • {{ document.date }}</p>
                    </div>
                  </div>
                  <div class="flex space-x-2">
                    <button class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
                    <button class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
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

        <!-- Paiements -->
        <div v-if="activeTab === 'payments'" class="animate-fade-in">
          <h1 class="text-3xl font-bold text-gray-900 mb-8">Gestion des paiements</h1>

          <!-- Résumé financier -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-green-100">
                  <svg class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-600">Factures payées</p>
                  <p class="text-2xl font-bold text-gray-900">8 450€</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-yellow-100">
                  <svg class="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-600">En attente</p>
                  <p class="text-2xl font-bold text-gray-900">2 350€</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-blue-100">
                  <svg class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-600">Total engagé</p>
                  <p class="text-2xl font-bold text-gray-900">10 800€</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Liste des factures -->
          <div class="bg-white rounded-2xl shadow-xl border border-gray-100">
            <div class="p-6 border-b border-gray-200">
              <h2 class="text-xl font-bold text-gray-900">Historique des paiements</h2>
            </div>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Facture</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Artisan</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="payment in payments" :key="payment.id">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ payment.invoice }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{{ payment.contractor }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ payment.amount }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span :class="payment.status === 'Payé' ? 'bg-green-100 text-green-800' : payment.status === 'En attente' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'" class="px-2 py-1 text-xs font-medium rounded-full">
                        {{ payment.status }}
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{{ payment.date }}</td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm">
                      <button v-if="payment.status === 'En attente'" class="text-blue-600 hover:text-blue-900 font-medium">Payer</button>
                      <button v-if="payment.status === 'Payé'" class="text-gray-600 hover:text-gray-900 font-medium">Télécharger</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Visioconférences -->
        <div v-if="activeTab === 'meetings'" class="animate-fade-in">
          <div class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold text-gray-900">Visioconférences</h1>
            <button class="py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300">
              Planifier une réunion
            </button>
          </div>

          <!-- Réunions à venir -->
          <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Réunions à venir</h2>
            <div class="space-y-4">
              <div v-for="meeting in upcomingMeetings" :key="meeting.id" class="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div class="flex items-center">
                  <div class="p-3 rounded-full bg-blue-100">
                    <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-gray-900">{{ meeting.title }}</p>
                    <p class="text-sm text-gray-600">{{ meeting.contractor }} • {{ meeting.date }} à {{ meeting.time }}</p>
                  </div>
                </div>
                <div class="flex space-x-2">
                  <button class="py-2 px-4 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors">
                    Rejoindre
                  </button>
                  <button class="py-2 px-4 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
                    Modifier
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Historique des réunions -->
          <div class="bg-white rounded-2xl shadow-xl border border-gray-100">
            <div class="p-6 border-b border-gray-200">
              <h2 class="text-xl font-bold text-gray-900">Historique des réunions</h2>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <div v-for="meeting in pastMeetings" :key="meeting.id" class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div class="flex items-center">
                    <div class="p-2 rounded-full bg-gray-100">
                      <svg class="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-900">{{ meeting.title }}</p>
                      <p class="text-sm text-gray-600">{{ meeting.contractor }} • {{ meeting.date }}</p>
                    </div>
                  </div>
                  <div class="flex space-x-2">
                    <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Terminée</span>
                    <button class="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
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

        <!-- Évaluations -->
        <div v-if="activeTab === 'reviews'" class="animate-fade-in">
          <h1 class="text-3xl font-bold text-gray-900 mb-8">Évaluations des artisans</h1>

          <!-- Projets à évaluer -->
          <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Projets à évaluer</h2>
            <div class="space-y-4">
              <div v-for="project in projectsToReview" :key="project.id" class="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div class="flex items-center">
                  <img :src="project.contractorImage" :alt="project.contractor" class="h-12 w-12 rounded-full" />
                  <div class="ml-4">
                    <p class="text-sm font-medium text-gray-900">{{ project.title }}</p>
                    <p class="text-sm text-gray-600">{{ project.contractor }} • Terminé le {{ project.completedDate }}</p>
                  </div>
                </div>
                <button @click="openReviewModal(project)" class="py-2 px-4 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors">
                  Évaluer maintenant
                </button>
              </div>
            </div>
          </div>

          <!-- Mes évaluations -->
          <div class="bg-white rounded-2xl shadow-xl border border-gray-100">
            <div class="p-6 border-b border-gray-200">
              <h2 class="text-xl font-bold text-gray-900">Mes évaluations</h2>
            </div>
            <div class="p-6">
              <div class="space-y-6">
                <div v-for="review in myReviews" :key="review.id" class="border-b border-gray-200 pb-6">
                  <div class="flex items-start">
                    <img :src="review.contractorImage" :alt="review.contractor" class="h-12 w-12 rounded-full" />
                    <div class="ml-4 flex-1">
                      <div class="flex items-center justify-between">
                        <h3 class="text-lg font-medium text-gray-900">{{ review.contractor }}</h3>
                        <span class="text-sm text-gray-500">{{ review.date }}</span>
                      </div>
                      <p class="text-sm text-gray-600 mb-2">{{ review.project }}</p>
                      <div class="flex mb-3">
                        <svg v-for="i in 5" :key="i" :class="i <= review.rating ? 'text-yellow-500' : 'text-gray-300'" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"></path>
                        </svg>
                      </div>
                      <p class="text-gray-700">{{ review.comment }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Modal d'évaluation -->
    <div v-if="showReviewModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">Évaluer {{ selectedProject?.contractor }}</h3>
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">Note générale</label>
          <div class="flex space-x-1">
            <button v-for="i in 5" :key="i" @click="newReview.rating = i" :class="i <= newReview.rating ? 'text-yellow-500' : 'text-gray-300'" class="w-8 h-8 hover:text-yellow-400 transition-colors">
              <svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700 mb-2">Votre commentaire</label>
          <textarea v-model="newReview.comment" rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Décrivez votre expérience avec cet artisan..."></textarea>
        </div>
        <div class="flex space-x-4">
          <button @click="submitReview" class="flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors">
            Publier l'évaluation
          </button>
          <button @click="showReviewModal = false" class="flex-1 py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors">
            Annuler
          </button>
        </div>
      </div>
    </div>

    <!-- Modal de détails du projet -->
    <div v-if="showProjectDetailsModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <!-- En-tête du modal -->
        <div class="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 rounded-t-2xl">
          <div class="flex justify-between items-center">
            <div>
              <h3 class="text-2xl font-bold text-gray-900">{{ getProjectNumber(selectedProjectForDetails) }}</h3>
              <div class="flex items-center gap-3 mt-1">
                <span :class="getStatusClass(selectedProjectForDetails?.statut)" class="px-3 py-1 text-xs font-medium rounded-full">
                  {{ getStatusLabel(selectedProjectForDetails?.statut) }}
                </span>
                <span class="text-sm text-gray-500">
                  Créé le {{ selectedProjectForDetails ? new Date(selectedProjectForDetails.createdAt).toLocaleDateString('fr-FR') : '' }}
                </span>
              </div>
            </div>
            <button type="button" @click="closeProjectDetailsModal" class="text-gray-400 hover:text-gray-600 transition-colors">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Contenu du modal -->
        <div class="px-8 py-6" v-if="selectedProjectForDetails">
          <!-- Description complète -->
          <div class="mb-8">
            <h4 class="text-lg font-semibold text-gray-900 mb-3">Description du projet</h4>
            <div class="bg-gray-50 rounded-lg p-4">
              <p class="text-gray-700 leading-relaxed whitespace-pre-line">
                {{ selectedProjectForDetails.description || 'Aucune description disponible' }}
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
                  <p class="text-sm text-gray-600">{{ selectedProjectForDetails.address || 'Non définie' }}</p>
                  <p class="font-medium text-gray-900">
                    {{ selectedProjectForDetails.city || 'Non définie' }}
                    <span v-if="selectedProjectForDetails.postalCode" class="text-gray-600 ml-1">
                      ({{ selectedProjectForDetails.postalCode }})
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
                  {{ selectedProjectForDetails.budget ? selectedProjectForDetails.budget.toLocaleString('fr-FR') + ' €' : 'Non défini' }}
                </p>
              </div>

              <!-- Surface -->
              <div class="bg-white border border-gray-200 rounded-lg p-4" v-if="selectedProjectForDetails.surfaceM2">
                <div class="flex items-center mb-3">
                  <div class="p-2 bg-blue-100 rounded-lg mr-3">
                    <svg class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a1 1 0 011-1h4a1 1 0 011 1v12m-6 0h6" />
                    </svg>
                  </div>
                  <h5 class="font-medium text-gray-900">Surface</h5>
                </div>
                <p class="text-xl font-bold text-blue-600">{{ selectedProjectForDetails.surfaceM2 }} m²</p>
              </div>
            </div>
          </div>

          <!-- Caractéristiques du logement -->
          <div class="mb-8" v-if="selectedProjectForDetails.bedrooms !== null || selectedProjectForDetails.houseType || selectedProjectForDetails.hasLand">
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Caractéristiques du logement</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <!-- Nombre de chambres -->
              <div v-if="selectedProjectForDetails.bedrooms !== null && selectedProjectForDetails.bedrooms !== undefined" class="bg-purple-50 rounded-lg p-4">
                <div class="flex items-center mb-2">
                  <svg class="h-5 w-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a1 1 0 011-1h4a1 1 0 011 1v12m-6 0h6" />
                  </svg>
                  <span class="text-sm font-medium text-purple-800">Chambres</span>
                </div>
                <p class="font-bold text-purple-900">
                  {{ selectedProjectForDetails.bedrooms }} {{ selectedProjectForDetails.bedrooms > 1 ? 'chambres' : 'chambre' }}
                </p>
              </div>

              <!-- Type de logement -->
              <div v-if="selectedProjectForDetails.houseType" class="bg-indigo-50 rounded-lg p-4">
                <div class="flex items-center mb-2">
                  <svg class="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  </svg>
                  <span class="text-sm font-medium text-indigo-800">Type</span>
                </div>
                <p class="font-bold text-indigo-900 capitalize">{{ selectedProjectForDetails.houseType }}</p>
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
                  {{ selectedProjectForDetails.hasLand ? 'Inclus' : 'Non inclus' }}
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
                  <p class="text-sm text-gray-600 mb-1">ID du projet</p>
                  <p class="font-medium text-gray-900">#{{ selectedProjectForDetails.id }}</p>
                </div>
                <div>
                  <p class="text-sm text-gray-600 mb-1">Statut actuel</p>
                  <span :class="getStatusClass(selectedProjectForDetails.statut)" class="inline-block px-3 py-1 text-xs font-medium rounded-full">
                    {{ getStatusLabel(selectedProjectForDetails.statut) }}
                  </span>
                </div>
                <div>
                  <p class="text-sm text-gray-600 mb-1">Date de création</p>
                  <p class="font-medium text-gray-900">{{ new Date(selectedProjectForDetails.createdAt).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
                </div>
                <div v-if="selectedProjectForDetails.dateSubmission">
                  <p class="text-sm text-gray-600 mb-1">Date de soumission</p>
                  <p class="font-medium text-gray-900">{{ new Date(selectedProjectForDetails.dateSubmission).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- AMO assigné (si applicable) -->
          <div v-if="selectedProjectForDetails.amo" class="mb-8">
            <h4 class="text-lg font-semibold text-gray-900 mb-4">AMO assigné</h4>
            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div class="flex items-center">
                <div class="p-2 bg-blue-100 rounded-full mr-3">
                  <svg class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-gray-900">{{ selectedProjectForDetails.amo.firstName }} {{ selectedProjectForDetails.amo.lastName }}</p>
                  <p class="text-sm text-gray-600">{{ selectedProjectForDetails.amo.email }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pied du modal -->
        <div class="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-8 py-6 rounded-b-2xl">
          <div class="flex justify-end space-x-4">
            <button 
              @click="closeProjectDetailsModal"
              class="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
            >
              Fermer
            </button>
            <button 
              class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Modifier le projet
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de création de projet -->
    <div v-if="showCreateProjectModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <form @submit.prevent="submitProject">
          <!-- En-tête du modal -->
          <div class="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 rounded-t-2xl">
            <div class="flex justify-between items-center">
              <h3 class="text-2xl font-bold text-gray-900">Créer un nouveau projet</h3>
              <button type="button" @click="closeCreateProjectModal" class="text-gray-400 hover:text-gray-600 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Contenu du formulaire -->
          <div class="px-8 py-6">
            <!-- Erreur générale -->
            <div v-if="projectFormErrors.general" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div class="flex items-center">
                <svg class="h-5 w-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-red-700 font-medium">{{ projectFormErrors.general }}</span>
              </div>
            </div>

            <div class="space-y-6">
              <!-- Description du projet -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Description du projet <span class="text-red-500">*</span>
                </label>
                <textarea 
                  v-model="projectFormData.description"
                  rows="4" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  :class="{ 'border-red-500': projectFormErrors.description }"
                  placeholder="Décrivez votre projet en détail : type de travaux, objectifs, contraintes particulières..."
                  required
                ></textarea>
                <div class="mt-1 text-sm text-gray-500">
                  {{ projectFormData.description.length }}/5000 caractères
                </div>
                <div v-if="projectFormErrors.description" class="mt-1 text-sm text-red-600">
                  {{ projectFormErrors.description }}
                </div>
              </div>

              <!-- Adresse complète -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Adresse complète <span class="text-red-500">*</span>
                </label>
                <input 
                  v-model="projectFormData.address"
                  type="text" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  :class="{ 'border-red-500': projectFormErrors.address }"
                  placeholder="123 Rue de la République"
                  required
                />
                <div v-if="projectFormErrors.address" class="mt-1 text-sm text-red-600">
                  {{ projectFormErrors.address }}
                </div>
              </div>

              <!-- Ville et Code postal -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Ville <span class="text-red-500">*</span>
                  </label>
                  <input 
                    v-model="projectFormData.city"
                    type="text" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    :class="{ 'border-red-500': projectFormErrors.city }"
                    placeholder="Paris"
                    required
                  />
                  <div v-if="projectFormErrors.city" class="mt-1 text-sm text-red-600">
                    {{ projectFormErrors.city }}
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Code postal <span class="text-red-500">*</span>
                  </label>
                  <input 
                    v-model="projectFormData.postalCode"
                    type="text" 
                    pattern="[0-9]{5}"
                    maxlength="5"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    :class="{ 'border-red-500': projectFormErrors.postalCode }"
                    placeholder="75001"
                    required
                  />
                  <div v-if="projectFormErrors.postalCode" class="mt-1 text-sm text-red-600">
                    {{ projectFormErrors.postalCode }}
                  </div>
                </div>
              </div>

              <!-- Budget estimé -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Budget estimé (€)
                </label>
                <input 
                  v-model="projectFormData.budget"
                  type="number" 
                  min="0"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  :class="{ 'border-red-500': projectFormErrors.budget }"
                  placeholder="150000"
                />
                <div v-if="projectFormErrors.budget" class="mt-1 text-sm text-red-600">
                  {{ projectFormErrors.budget }}
                </div>
              </div>

              <!-- Surface et chambres -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Surface (m²)
                  </label>
                  <input 
                    v-model="projectFormData.surfaceM2"
                    type="number" 
                    min="1"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    :class="{ 'border-red-500': projectFormErrors.surfaceM2 }"
                    placeholder="120"
                  />
                  <div v-if="projectFormErrors.surfaceM2" class="mt-1 text-sm text-red-600">
                    {{ projectFormErrors.surfaceM2 }}
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Nombre de chambres
                  </label>
                  <select 
                    v-model="projectFormData.bedrooms"
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    :class="{ 'border-red-500': projectFormErrors.bedrooms }"
                  >
                    <option value="">Sélectionner</option>
                    <option value="0">Studio</option>
                    <option value="1">1 chambre</option>
                    <option value="2">2 chambres</option>
                    <option value="3">3 chambres</option>
                    <option value="4">4 chambres</option>
                    <option value="5">5 chambres et +</option>
                  </select>
                  <div v-if="projectFormErrors.bedrooms" class="mt-1 text-sm text-red-600">
                    {{ projectFormErrors.bedrooms }}
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Type de logement
                  </label>
                  <select 
                    v-model="projectFormData.houseType"
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
                    v-model="projectFormData.hasLand"
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
                :disabled="isSubmittingProject"
                class="flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-300 text-white font-semibold rounded-lg transition-colors flex items-center justify-center"
              >
                <svg v-if="isSubmittingProject" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ isSubmittingProject ? 'Création en cours...' : 'Créer le projet' }}
              </button>
              <button 
                type="button"
                @click="closeCreateProjectModal"
                :disabled="isSubmittingProject"
                class="flex-1 py-3 px-6 bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 text-gray-700 font-semibold rounded-lg transition-colors"
              >
                Annuler
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import projetService from '@/services/projetService'

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

const documents = ref([])

const payments = ref([])

const upcomingMeetings = ref([])

const pastMeetings = ref([])

const projectsToReview = ref([])

const myReviews = ref([])

const newReview = ref({
  rating: 0,
  comment: ''
})

// Formulaire de création de projet
const isSubmittingProject = ref(false)
const projectFormData = ref({
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
const projectFormErrors = ref({})

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

// Méthodes
function handleFileUpload(event) {
  const files = event.target.files
  // Logique de traitement des fichiers
  console.log('Fichiers sélectionnés:', files)
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

function submitReview() {
  // Logique de soumission de l'évaluation
  console.log('Nouvelle évaluation:', newReview.value)
  showReviewModal.value = false
  // Retirer le projet de la liste des projets à évaluer
  projectsToReview.value = projectsToReview.value.filter(p => p.id !== selectedProject.value.id)
}

// Méthodes pour la création de projet
function resetProjectForm() {
  projectFormData.value = {
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
  projectFormErrors.value = {}
}

function closeCreateProjectModal() {
  showCreateProjectModal.value = false
  resetProjectForm()
}

async function submitProject() {
  if (isSubmittingProject.value) return
  
  isSubmittingProject.value = true
  projectFormErrors.value = {}

  try {
    console.log('🚀 Création d\'un nouveau projet...', projectFormData.value)
    
    // Convertir les données pour l'API
    const formattedData = {
      description: projectFormData.value.description,
      address: projectFormData.value.address,
      city: projectFormData.value.city,
      postalCode: projectFormData.value.postalCode,
      ...(projectFormData.value.budget && { budget: parseInt(projectFormData.value.budget) }),
      ...(projectFormData.value.surfaceM2 && { surfaceM2: parseInt(projectFormData.value.surfaceM2) }),
      ...(projectFormData.value.bedrooms && { bedrooms: parseInt(projectFormData.value.bedrooms) }),
      ...(projectFormData.value.houseType && { houseType: projectFormData.value.houseType }),
      hasLand: projectFormData.value.hasLand
    }

    const result = await projetService.createProject(formattedData)
    
    console.log('✅ Projet créé avec succès:', result)
    
    // Fermer le modal
    closeCreateProjectModal()
    
    // Recharger les données du dashboard
    await loadDashboard()
    
    // Afficher un message de succès (vous pouvez utiliser une notification)
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
      projectFormErrors.value = errorObj
    } else {
      // Erreur générale
      projectFormErrors.value = { general: error.message || 'Erreur lors de la création du projet' }
    }
  } finally {
    isSubmittingProject.value = false
  }
}

// Charger les données au montage du composant
onMounted(() => {
  console.log('🚀 Initialisation du tableau de bord client')
  loadDashboard()
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