<template>
  <div class="min-h-screen bg-gray-50">
    <div class="flex">
      <!-- Sidebar -->
      <nav class="w-64 bg-white shadow-sm h-screen sticky top-0">
        <div class="p-6">
          <h2 class="text-lg font-semibold text-gray-900 mb-6">Espace Artisan</h2>
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
              <button @click="activeTab = 'invoices'" :class="activeTab === 'invoices' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-600 hover:bg-gray-50'" class="w-full text-left px-4 py-2 rounded-lg border transition-colors">
                Factures
              </button>
            </li>
            <li>
              <button @click="activeTab = 'payments'" :class="activeTab === 'payments' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-600 hover:bg-gray-50'" class="w-full text-left px-4 py-2 rounded-lg border transition-colors">
                Paiements
              </button>
            </li>
            <li>
              <button @click="activeTab = 'messages'" :class="activeTab === 'messages' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-600 hover:bg-gray-50'" class="w-full text-left px-4 py-2 rounded-lg border transition-colors">
                Messagerie
              </button>
            </li>
            <li>
              <button @click="activeTab = 'profile'" :class="activeTab === 'profile' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'text-gray-600 hover:bg-gray-50'" class="w-full text-left px-4 py-2 rounded-lg border transition-colors">
                Mon profil
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Main Content -->
      <main class="flex-1 p-8">
        <!-- Vue d'ensemble -->
        <div v-if="activeTab === 'overview'" class="animate-fade-in">
          <h1 class="text-3xl font-bold text-gray-900 mb-8">Bienvenue, Martin !</h1>
          
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
                  <p class="text-2xl font-bold text-gray-900">5</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-green-100">
                  <svg class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-600">Chiffre d'affaires</p>
                  <p class="text-2xl font-bold text-gray-900">24 580€</p>
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
                  <p class="text-sm font-medium text-gray-600">Factures en attente</p>
                  <p class="text-2xl font-bold text-gray-900">3</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-purple-100">
                  <svg class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-600">Note moyenne</p>
                  <p class="text-2xl font-bold text-gray-900">4.8/5</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Projets urgents -->
          <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Projets urgents</h2>
            <div class="space-y-4">
              <div v-for="project in urgentProjects" :key="project.id" class="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                <div class="flex items-center">
                  <div class="p-2 rounded-full bg-red-100">
                    <svg class="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">{{ project.title }}</p>
                    <p class="text-sm text-gray-600">{{ project.client }} • Échéance: {{ project.deadline }}</p>
                  </div>
                </div>
                <div class="text-right">
                  <span class="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Urgent</span>
                  <p class="text-sm text-gray-500 mt-1">{{ project.budget }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Activité récente -->
          <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Activité récente</h2>
            <div class="space-y-4">
              <div v-for="activity in recentActivity" :key="activity.id" class="flex items-start">
                <div class="p-2 rounded-full bg-blue-100">
                  <svg class="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">{{ activity.action }}</p>
                  <p class="text-sm text-gray-600">{{ activity.project }} • {{ activity.time }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section Mes Projets -->
        <div v-if="activeTab === 'projects'" class="animate-fade-in">
          <div class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold text-gray-900">Mes projets</h1>
            <div class="flex items-center space-x-4">
              <!-- Filtres de statut -->
              <select v-model="selectedStatusFilter" class="rounded-xl border-gray-300 border px-4 py-2 bg-white shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Tous les statuts</option>
                <option value="nouveau">Nouveau</option>
                <option value="en_cours">En cours</option>
                <option value="validation">En validation</option>
                <option value="termine">Terminé</option>
                <option value="facture">Facturé</option>
              </select>
              
              <!-- Recherche -->
              <div class="relative">
                <input 
                  v-model="searchTerm" 
                  type="text" 
                  placeholder="Rechercher un projet..." 
                  class="pl-10 pr-4 py-2 rounded-xl border-gray-300 border bg-white shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                <svg class="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Statistiques rapides -->
          <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-blue-100">
                  <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-xs font-medium text-gray-600">Nouveaux</p>
                  <p class="text-xl font-bold text-gray-900">{{ projectStats.nouveaux }}</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-yellow-100">
                  <svg class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-xs font-medium text-gray-600">En cours</p>
                  <p class="text-xl font-bold text-gray-900">{{ projectStats.en_cours }}</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-orange-100">
                  <svg class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-xs font-medium text-gray-600">Validation</p>
                  <p class="text-xl font-bold text-gray-900">{{ projectStats.validation }}</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-green-100">
                  <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-xs font-medium text-gray-600">Terminés</p>
                  <p class="text-xl font-bold text-gray-900">{{ projectStats.termines }}</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-purple-100">
                  <svg class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-xs font-medium text-gray-600">À facturer</p>
                  <p class="text-xl font-bold text-gray-900">{{ projectStats.a_facturer }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Liste des projets -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div 
              v-for="project in filteredProjects" 
              :key="project.id" 
              class="bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              @click="openProjectDetails(project)"
            >
              <!-- En-tête du projet -->
              <div class="p-6 border-b border-gray-100">
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">{{ project.title }}</h3>
                    <div class="flex items-center text-sm text-gray-600 mb-2">
                      <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {{ project.client.name }}
                    </div>
                    <div class="flex items-center text-sm text-gray-600">
                      <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {{ project.location }}
                    </div>
                  </div>
                  <div class="text-right">
                    <span :class="getStatusClass(project.status)" class="px-3 py-1 text-xs font-medium rounded-full">
                      {{ getStatusLabel(project.status) }}
                    </span>
                    <p class="text-lg font-bold text-gray-900 mt-2">{{ project.budget }}€</p>
                  </div>
                </div>
              </div>

              <!-- Détails du projet -->
              <div class="p-6">
                <p class="text-sm text-gray-600 mb-4">{{ project.description }}</p>
                
                <!-- Informations temporelles -->
                <div class="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p class="text-xs font-medium text-gray-500">Date de début</p>
                    <p class="text-sm font-medium text-gray-900">{{ formatDate(project.startDate) }}</p>
                  </div>
                  <div>
                    <p class="text-xs font-medium text-gray-500">Échéance</p>
                    <p class="text-sm font-medium text-gray-900" :class="isUrgent(project.deadline) ? 'text-red-600' : ''">
                      {{ formatDate(project.deadline) }}
                    </p>
                  </div>
                </div>

                <!-- Documents et progression -->
                <div class="grid grid-cols-2 gap-4 mb-4">
                  <div class="flex items-center">
                    <svg class="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span class="text-sm text-gray-600">{{ project.documents }} docs</span>
                  </div>
                  <div class="flex items-center">
                    <svg class="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span class="text-sm text-gray-600">{{ project.progress }}% fait</span>
                  </div>
                </div>

                <!-- Barre de progression -->
                <div class="mb-4">
                  <div class="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      class="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                      :style="{ width: project.progress + '%' }"
                    ></div>
                  </div>
                </div>

                <!-- Actions rapides -->
                <div class="flex flex-wrap gap-2">
                  <button 
                    v-if="project.status === 'nouveau'"
                    @click.stop="acceptProject(project)" 
                    class="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-medium hover:bg-green-200 transition-colors"
                  >
                    Accepter
                  </button>
                  <button 
                    v-if="project.status === 'en_cours'"
                    @click.stop="addProgress(project)" 
                    class="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-medium hover:bg-blue-200 transition-colors"
                  >
                    Avancer
                  </button>
                  <button 
                    v-if="project.status === 'termine' && !project.invoiced"
                    @click.stop="createInvoice(project)" 
                    class="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium hover:bg-purple-200 transition-colors"
                  >
                    Facturer
                  </button>
                  <button 
                    @click.stop="contactClient(project)" 
                    class="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-200 transition-colors"
                  >
                    Contacter
                  </button>
                  <button 
                    @click.stop="viewDocuments(project)" 
                    class="px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-xs font-medium hover:bg-orange-200 transition-colors"
                  >
                    Documents
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal détails du projet -->
          <div 
            v-if="selectedProject" 
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            @click="closeProjectDetails"
          >
            <div 
              class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              @click.stop
            >
              <!-- En-tête modal -->
              <div class="p-6 border-b border-gray-200">
                <div class="flex justify-between items-start">
                  <div>
                    <h2 class="text-2xl font-bold text-gray-900">{{ selectedProject.title }}</h2>
                    <p class="text-gray-600 mt-1">{{ selectedProject.client.name }} • {{ selectedProject.location }}</p>
                  </div>
                  <button 
                    @click="closeProjectDetails"
                    class="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Contenu modal -->
              <div class="p-6">
                <!-- Infos client (si autorisé) -->
                <div v-if="selectedProject.client.authorized" class="bg-blue-50 rounded-xl p-4 mb-6">
                  <h3 class="font-semibold text-gray-900 mb-3">Informations client</h3>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <p class="text-sm text-gray-600">Email</p>
                      <p class="font-medium">{{ selectedProject.client.email }}</p>
                    </div>
                    <div>
                      <p class="text-sm text-gray-600">Téléphone</p>
                      <p class="font-medium">{{ selectedProject.client.phone }}</p>
                    </div>
                  </div>
                </div>

                <!-- Description complète -->
                <div class="mb-6">
                  <h3 class="font-semibold text-gray-900 mb-3">Description du projet</h3>
                  <p class="text-gray-700 leading-relaxed">{{ selectedProject.fullDescription || selectedProject.description }}</p>
                </div>

                <!-- Documents -->
                <div class="mb-6">
                  <h3 class="font-semibold text-gray-900 mb-3">Documents du projet</h3>
                  <div class="grid grid-cols-2 gap-3">
                    <div 
                      v-for="doc in selectedProject.projectDocuments" 
                      :key="doc.id"
                      class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <svg class="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div>
                        <p class="text-sm font-medium text-gray-900">{{ doc.name }}</p>
                        <p class="text-xs text-gray-500">{{ doc.size }} • {{ doc.uploadDate }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Actions -->
                <div class="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                  <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Mettre à jour le statut
                  </button>
                  <button class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Ajouter des documents
                  </button>
                  <button class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Créer une facture
                  </button>
                  <button class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                    Contacter le client
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section Documents -->
        <div v-if="activeTab === 'documents'" class="animate-fade-in">
          <div class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold text-gray-900">Gestion des documents</h1>
            <div class="flex space-x-3">
              <select v-model="selectedDocumentFilter" class="rounded-xl border-gray-300 border px-4 py-2 bg-white shadow-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Tous les projets</option>
                <option v-for="project in projects" :key="project.id" :value="project.id">{{ project.title }}</option>
              </select>
              <button @click="showUploadModal = true" class="py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 flex items-center">
                <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Envoyer un document
              </button>
            </div>
          </div>

          <!-- Statistiques documents -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-blue-100">
                  <svg class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-xs font-medium text-gray-600">Docs envoyés</p>
                  <p class="text-xl font-bold text-gray-900">{{ documentStats.sent }}</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-green-100">
                  <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-xs font-medium text-gray-600">Validés</p>
                  <p class="text-xl font-bold text-gray-900">{{ documentStats.validated }}</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-yellow-100">
                  <svg class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-xs font-medium text-gray-600">En attente</p>
                  <p class="text-xl font-bold text-gray-900">{{ documentStats.pending }}</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-orange-100">
                  <svg class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-xs font-medium text-gray-600">Des clients</p>
                  <p class="text-xl font-bold text-gray-900">{{ documentStats.fromClients }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Zone d'upload rapide -->
          <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Envoi rapide de documents</h2>
            <div 
              class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors"
              @dragover.prevent
              @drop.prevent="handleFileDrop"
            >
              <svg class="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p class="text-lg font-medium text-gray-900 mb-2">Glissez vos documents ici ou cliquez pour sélectionner</p>
              <p class="text-sm text-gray-500 mb-4">Factures, devis, photos de chantier, certificats - PDF, DOC, JPG, PNG jusqu'à 10MB</p>
              <input type="file" multiple class="hidden" ref="fileInput" @change="handleFileUpload" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" />
              <button @click="$refs.fileInput.click()" class="py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium">
                Sélectionner des fichiers
              </button>
            </div>
          </div>

          <!-- Documents par projet -->
          <div class="space-y-6">
            <div v-for="project in filteredDocumentProjects" :key="project.id" class="bg-white rounded-2xl shadow-xl border border-gray-100">
              <!-- En-tête projet -->
              <div class="p-6 border-b border-gray-200">
                <div class="flex justify-between items-center">
                  <div>
                    <h3 class="text-lg font-bold text-gray-900">{{ project.title }}</h3>
                    <p class="text-sm text-gray-600">{{ project.client.name }} • {{ project.location }}</p>
                  </div>
                  <div class="flex items-center space-x-3">
                    <span :class="getStatusClass(project.status)" class="px-3 py-1 text-xs font-medium rounded-full">
                      {{ getStatusLabel(project.status) }}
                    </span>
                    <button @click="openUploadModal(project)" class="py-2 px-4 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors">
                      Ajouter un document
                    </button>
                  </div>
                </div>
              </div>

              <!-- Documents du projet -->
              <div class="p-6">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <!-- Documents envoyés par l'artisan -->
                  <div>
                    <h4 class="text-md font-semibold text-gray-900 mb-4 flex items-center">
                      <svg class="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Mes documents ({{ project.sentDocuments.length }})
                    </h4>
                    <div class="space-y-3">
                      <div v-for="doc in project.sentDocuments" :key="doc.id" class="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <div class="flex items-center">
                          <div class="p-2 rounded-full bg-blue-100">
                            <svg class="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div class="ml-3">
                            <p class="text-sm font-medium text-gray-900">{{ doc.name }}</p>
                            <p class="text-xs text-gray-600">{{ doc.type }} • {{ doc.size }} • {{ doc.date }}</p>
                          </div>
                        </div>
                        <div class="flex items-center space-x-2">
                          <span :class="getDocumentStatusClass(doc.status)" class="px-2 py-1 text-xs font-medium rounded-full">
                            {{ getDocumentStatusLabel(doc.status) }}
                          </span>
                          <button @click="viewDocument(doc)" class="p-1 text-blue-600 hover:bg-blue-100 rounded transition-colors">
                            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <button @click="openUploadModal(project)" class="w-full py-2 px-4 border-2 border-dashed border-blue-300 text-blue-600 text-sm font-medium rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors">
                        + Ajouter un document
                      </button>
                    </div>
                  </div>

                  <!-- Documents reçus du client -->
                  <div>
                    <h4 class="text-md font-semibold text-gray-900 mb-4 flex items-center">
                      <svg class="h-5 w-5 text-orange-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                      Documents client ({{ project.clientDocuments.length }})
                    </h4>
                    <div class="space-y-3">
                      <div v-for="doc in project.clientDocuments" :key="doc.id" class="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-100">
                        <div class="flex items-center">
                          <div class="p-2 rounded-full bg-orange-100">
                            <svg class="h-4 w-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div class="ml-3">
                            <p class="text-sm font-medium text-gray-900">{{ doc.name }}</p>
                            <p class="text-xs text-gray-600">{{ doc.type }} • {{ doc.size }} • {{ doc.date }}</p>
                          </div>
                        </div>
                        <div class="flex space-x-1">
                          <button @click="viewDocument(doc)" class="p-1 text-orange-600 hover:bg-orange-100 rounded transition-colors">
                            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button @click="downloadDocument(doc)" class="p-1 text-orange-600 hover:bg-orange-100 rounded transition-colors">
                            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div v-if="project.clientDocuments.length === 0" class="text-center py-4 text-gray-500 text-sm">
                        Aucun document reçu du client
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal d'upload -->
          <div 
            v-if="showUploadModal" 
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            @click="closeUploadModal"
          >
            <div 
              class="bg-white rounded-2xl shadow-2xl max-w-md w-full"
              @click.stop
            >
              <div class="p-6 border-b border-gray-200">
                <div class="flex justify-between items-center">
                  <h3 class="text-lg font-bold text-gray-900">Envoyer un document</h3>
                  <button @click="closeUploadModal" class="text-gray-400 hover:text-gray-600">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="p-6">
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Projet</label>
                  <select v-model="uploadForm.projectId" class="w-full rounded-lg border-gray-300 border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Sélectionner un projet</option>
                    <option v-for="project in projects" :key="project.id" :value="project.id">{{ project.title }}</option>
                  </select>
                </div>
                <div class="mb-4">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Type de document</label>
                  <select v-model="uploadForm.type" class="w-full rounded-lg border-gray-300 border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Sélectionner le type</option>
                    <option value="devis">Devis</option>
                    <option value="facture">Facture</option>
                    <option value="photo">Photo de chantier</option>
                    <option value="certificat">Certificat</option>
                    <option value="plan">Plan/Schéma</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div class="mb-6">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Fichier</label>
                  <input type="file" ref="uploadFileInput" class="w-full rounded-lg border-gray-300 border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" />
                </div>
                <div class="flex space-x-3">
                  <button @click="closeUploadModal" class="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Annuler
                  </button>
                  <button @click="submitDocument" class="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors">
                    Envoyer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Autres sections -->
        <div v-if="activeTab !== 'overview' && activeTab !== 'projects' && activeTab !== 'documents'" class="animate-fade-in">
          <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Section {{ activeTab }}</h2>
            <p class="text-gray-600">Cette section sera développée avec les fonctionnalités spécifiques.</p>
            <div class="mt-6 space-y-2">
              <p class="text-sm text-gray-500" v-if="activeTab === 'invoices'">Création et envoi de factures via l'interface</p>
              <p class="text-sm text-gray-500" v-if="activeTab === 'payments'">Suivi des paiements et historique des prestations réalisées</p>
              <p class="text-sm text-gray-500" v-if="activeTab === 'messages'">Messagerie directe avec les clients sur l'application</p>
              <p class="text-sm text-gray-500" v-if="activeTab === 'profile'">Modification et complétion du profil artisan</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// État réactif
const activeTab = ref('overview')

// Filtres et recherche pour la section projets
const selectedStatusFilter = ref('')
const searchTerm = ref('')
const selectedProject = ref(null)

// Variables pour la section documents
const selectedDocumentFilter = ref('')
const showUploadModal = ref(false)
const uploadForm = ref({
  projectId: '',
  type: '',
  file: null
})

const urgentProjects = ref([
  {
    id: 1,
    title: 'Réparation urgente',
    client: 'Sophie Martin',
    deadline: 'Demain',
    budget: '450€'
  },
  {
    id: 2,
    title: 'Finition électrique',
    client: 'Thomas Dubois',
    deadline: 'Vendredi',
    budget: '800€'
  }
])

const recentActivity = ref([
  {
    id: 1,
    action: 'Facture envoyée',
    project: 'Installation électrique',
    time: 'Il y a 2h'
  },
  {
    id: 2,
    action: 'Document validé',
    project: 'Rénovation salle de bain',
    time: 'Il y a 4h'
  },
  {
    id: 3,
    action: 'Projet démarré',
    project: 'Peinture salon',
    time: 'Hier'
  }
])

// Données des projets
const projects = ref([
  {
    id: 1,
    title: 'Rénovation salle de bain',
    description: 'Rénovation complète de la salle de bain avec pose de carrelage et installation sanitaire.',
    fullDescription: 'Rénovation complète d\'une salle de bain de 6m². Démolition de l\'ancien carrelage, pose d\'un nouveau carrelage mural et au sol, installation d\'une nouvelle douche italienne, remplacement du lavabo et des WC. Travaux d\'électricité et de plomberie inclus.',
    status: 'en_cours',
    budget: 3500,
    startDate: '2024-01-15',
    deadline: '2024-02-15',
    progress: 65,
    documents: 8,
    invoiced: false,
    location: 'Paris 15ème',
    client: {
      name: 'Marie Dupont',
      email: 'marie.dupont@email.com',
      phone: '06 12 34 56 78',
      authorized: true
    },
    projectDocuments: [
      { id: 1, name: 'Plan salle de bain.pdf', size: '2.1 MB', uploadDate: '15/01/2024' },
      { id: 2, name: 'Devis carrelage.pdf', size: '450 KB', uploadDate: '18/01/2024' },
      { id: 3, name: 'Photos avant travaux.jpg', size: '3.2 MB', uploadDate: '15/01/2024' },
      { id: 4, name: 'Facture matériaux.pdf', size: '680 KB', uploadDate: '25/01/2024' }
    ]
  },
  {
    id: 2,
    title: 'Installation électrique cuisine',
    description: 'Mise aux normes électriques et installation de nouveaux points lumineux.',
    fullDescription: 'Mise aux normes complète de l\'installation électrique de la cuisine. Remplacement du tableau électrique, création de nouvelles prises, installation d\'un éclairage LED sous les meubles hauts et spots au plafond.',
    status: 'nouveau',
    budget: 1200,
    startDate: '2024-02-01',
    deadline: '2024-02-10',
    progress: 0,
    documents: 3,
    invoiced: false,
    location: 'Boulogne-Billancourt',
    client: {
      name: 'Pierre Martin',
      email: 'p.martin@email.com',
      phone: '06 98 76 54 32',
      authorized: false
    },
    projectDocuments: [
      { id: 5, name: 'Schéma électrique.pdf', size: '1.5 MB', uploadDate: '28/01/2024' },
      { id: 6, name: 'Cahier des charges.docx', size: '280 KB', uploadDate: '29/01/2024' }
    ]
  },
  {
    id: 3,
    title: 'Peinture salon',
    description: 'Peinture complète du salon avec préparation des murs.',
    fullDescription: 'Peinture d\'un salon de 25m². Préparation des murs (rebouchage, ponçage), application d\'une sous-couche et de deux couches de peinture acrylique. Couleurs : blanc cassé pour les murs et gris anthracite pour un mur accent.',
    status: 'termine',
    budget: 800,
    startDate: '2024-01-08',
    deadline: '2024-01-20',
    progress: 100,
    documents: 5,
    invoiced: false,
    location: 'Neuilly-sur-Seine',
    client: {
      name: 'Anne Dubois',
      email: 'anne.dubois@email.com',
      phone: '06 45 67 89 12',
      authorized: true
    },
    projectDocuments: [
      { id: 7, name: 'Nuancier couleurs.pdf', size: '890 KB', uploadDate: '05/01/2024' },
      { id: 8, name: 'Photos avant.jpg', size: '2.8 MB', uploadDate: '08/01/2024' },
      { id: 9, name: 'Photos après.jpg', size: '3.1 MB', uploadDate: '20/01/2024' }
    ]
  },
  {
    id: 4,
    title: 'Pose parquet chambre',
    description: 'Pose de parquet stratifié dans une chambre de 12m².',
    fullDescription: 'Pose de parquet stratifié imitation chêne dans une chambre de 12m². Préparation du sol, pose d\'un isolant phonique, installation du parquet avec plinthes assorties.',
    status: 'validation',
    budget: 650,
    startDate: '2024-01-22',
    deadline: '2024-01-30',
    progress: 90,
    documents: 4,
    invoiced: false,
    location: 'Vincennes',
    client: {
      name: 'Thomas Leroy',
      email: 'thomas.leroy@email.com',
      phone: '06 23 45 67 89',
      authorized: true
    },
    projectDocuments: [
      { id: 10, name: 'Fiche technique parquet.pdf', size: '1.2 MB', uploadDate: '20/01/2024' },
      { id: 11, name: 'Plan de pose.pdf', size: '750 KB', uploadDate: '22/01/2024' }
    ]
  },
  {
    id: 5,
    title: 'Réparation toiture',
    description: 'Réparation urgente de tuiles cassées et étanchéité.',
    fullDescription: 'Intervention d\'urgence pour réparer des tuiles cassées suite aux intempéries. Remplacement de 15 tuiles, vérification de l\'étanchéité et nettoyage des gouttières.',
    status: 'facture',
    budget: 450,
    startDate: '2024-01-10',
    deadline: '2024-01-12',
    progress: 100,
    documents: 3,
    invoiced: true,
    location: 'Versailles',
    client: {
      name: 'Sophie Moreau',
      email: 'sophie.moreau@email.com',
      phone: '06 78 90 12 34',
      authorized: false
    },
    projectDocuments: [
      { id: 12, name: 'Rapport dégâts.pdf', size: '1.8 MB', uploadDate: '10/01/2024' },
      { id: 13, name: 'Facture réparation.pdf', size: '520 KB', uploadDate: '12/01/2024' }
    ]
  }
])

// Computed properties
const projectStats = computed(() => {
  const stats = {
    nouveaux: 0,
    en_cours: 0,
    validation: 0,
    termines: 0,
    a_facturer: 0
  }
  
  projects.value.forEach(project => {
    switch(project.status) {
      case 'nouveau':
        stats.nouveaux++
        break
      case 'en_cours':
        stats.en_cours++
        break
      case 'validation':
        stats.validation++
        break
      case 'termine':
        if (!project.invoiced) stats.a_facturer++
        else stats.termines++
        break
      case 'facture':
        stats.termines++
        break
    }
  })
  
  return stats
})

const filteredProjects = computed(() => {
  let filtered = projects.value
  
  // Filtrage par statut
  if (selectedStatusFilter.value) {
    filtered = filtered.filter(project => project.status === selectedStatusFilter.value)
  }
  
  // Filtrage par recherche
  if (searchTerm.value) {
    const search = searchTerm.value.toLowerCase()
    filtered = filtered.filter(project => 
      project.title.toLowerCase().includes(search) ||
      project.client.name.toLowerCase().includes(search) ||
      project.location.toLowerCase().includes(search)
    )
  }
  
  return filtered
})

// Méthodes
const getStatusClass = (status) => {
  const classes = {
    nouveau: 'bg-blue-100 text-blue-800',
    en_cours: 'bg-yellow-100 text-yellow-800',
    validation: 'bg-orange-100 text-orange-800',
    termine: 'bg-green-100 text-green-800',
    facture: 'bg-purple-100 text-purple-800'
  }
  return classes[status] || 'bg-gray-100 text-gray-800'
}

const getStatusLabel = (status) => {
  const labels = {
    nouveau: 'Nouveau',
    en_cours: 'En cours',
    validation: 'Validation',
    termine: 'Terminé',
    facture: 'Facturé'
  }
  return labels[status] || status
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

const isUrgent = (deadline) => {
  const deadlineDate = new Date(deadline)
  const today = new Date()
  const diffDays = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24))
  return diffDays <= 3
}

const openProjectDetails = (project) => {
  selectedProject.value = project
}

const closeProjectDetails = () => {
  selectedProject.value = null
}

const acceptProject = (project) => {
  project.status = 'en_cours'
  console.log('Projet accepté:', project.title)
}

const addProgress = (project) => {
  if (project.progress < 100) {
    project.progress = Math.min(100, project.progress + 10)
    if (project.progress >= 100) {
      project.status = 'termine'
    }
  }
  console.log('Progression mise à jour:', project.title, project.progress + '%')
}

const createInvoice = (project) => {
  console.log('Création de facture pour:', project.title)
  // Logique de création de facture
}

const contactClient = (project) => {
  console.log('Contacter le client:', project.client.name)
  // Logique de contact client
}

const viewDocuments = (project) => {
  console.log('Voir les documents du projet:', project.title)
  // Logique d'affichage des documents
}

// Ajout des données de documents pour chaque projet
projects.value = projects.value.map(project => ({
  ...project,
  sentDocuments: getSentDocumentsForProject(project.id),
  clientDocuments: getClientDocumentsForProject(project.id)
}))

function getSentDocumentsForProject(projectId) {
  const documentsData = {
    1: [ // Rénovation salle de bain
      { id: 1, name: 'Devis détaillé.pdf', type: 'Devis', size: '450 KB', date: '16/01/2024', status: 'validated' },
      { id: 2, name: 'Photos avancement.jpg', type: 'Photo', size: '2.1 MB', date: '25/01/2024', status: 'pending' },
      { id: 3, name: 'Facture matériaux.pdf', type: 'Facture', size: '680 KB', date: '28/01/2024', status: 'validated' }
    ],
    2: [ // Installation électrique cuisine
      { id: 4, name: 'Devis installation.pdf', type: 'Devis', size: '320 KB', date: '30/01/2024', status: 'pending' }
    ],
    3: [ // Peinture salon
      { id: 5, name: 'Facture finale.pdf', type: 'Facture', size: '410 KB', date: '20/01/2024', status: 'validated' },
      { id: 6, name: 'Photos finition.jpg', type: 'Photo', size: '3.2 MB', date: '20/01/2024', status: 'validated' }
    ],
    4: [ // Pose parquet chambre
      { id: 7, name: 'Devis parquet.pdf', type: 'Devis', size: '380 KB', date: '22/01/2024', status: 'validated' },
      { id: 8, name: 'Certificat pose.pdf', type: 'Certificat', size: '290 KB', date: '29/01/2024', status: 'pending' }
    ],
    5: [ // Réparation toiture
      { id: 9, name: 'Facture réparation.pdf', type: 'Facture', size: '520 KB', date: '12/01/2024', status: 'validated' }
    ]
  }
  return documentsData[projectId] || []
}

function getClientDocumentsForProject(projectId) {
  const clientDocsData = {
    1: [ // Rénovation salle de bain
      { id: 10, name: 'Plan original.pdf', type: 'Plan', size: '1.2 MB', date: '15/01/2024' },
      { id: 11, name: 'Cahier des charges.docx', type: 'Contrat', size: '280 KB', date: '15/01/2024' }
    ],
    2: [ // Installation électrique cuisine
      { id: 12, name: 'Schéma existant.pdf', type: 'Plan', size: '890 KB', date: '28/01/2024' }
    ],
    3: [], // Peinture salon - pas de docs client
    4: [
      { id: 13, name: 'Photos chambre.jpg', type: 'Photo', size: '2.5 MB', date: '20/01/2024' }
    ],
    5: [
      { id: 14, name: 'Photos dégâts.jpg', type: 'Photo', size: '1.8 MB', date: '10/01/2024' }
    ]
  }
  return clientDocsData[projectId] || []
}

// Computed properties pour les documents
const documentStats = computed(() => {
  let sent = 0
  let validated = 0
  let pending = 0
  let fromClients = 0
  
  projects.value.forEach(project => {
    if (project.sentDocuments) {
      sent += project.sentDocuments.length
      validated += project.sentDocuments.filter(doc => doc.status === 'validated').length
      pending += project.sentDocuments.filter(doc => doc.status === 'pending').length
    }
    if (project.clientDocuments) {
      fromClients += project.clientDocuments.length
    }
  })
  
  return { sent, validated, pending, fromClients }
})

const filteredDocumentProjects = computed(() => {
  if (!selectedDocumentFilter.value) {
    return projects.value
  }
  return projects.value.filter(project => project.id === parseInt(selectedDocumentFilter.value))
})

// Méthodes pour les documents
const getDocumentStatusClass = (status) => {
  const classes = {
    validated: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    rejected: 'bg-red-100 text-red-800'
  }
  return classes[status] || 'bg-gray-100 text-gray-800'
}

const getDocumentStatusLabel = (status) => {
  const labels = {
    validated: 'Validé',
    pending: 'En attente',
    rejected: 'Refusé'
  }
  return labels[status] || status
}

const handleFileUpload = (event) => {
  const files = event.target.files
  console.log('Fichiers sélectionnés:', files)
  // Logique de traitement des fichiers
}

const handleFileDrop = (event) => {
  const files = event.dataTransfer.files
  console.log('Fichiers déposés:', files)
  // Logique de traitement des fichiers par drag & drop
}

const openUploadModal = (project = null) => {
  if (project) {
    uploadForm.value.projectId = project.id
  }
  showUploadModal.value = true
}

const closeUploadModal = () => {
  showUploadModal.value = false
  uploadForm.value = {
    projectId: '',
    type: '',
    file: null
  }
}

const submitDocument = () => {
  console.log('Envoi du document:', uploadForm.value)
  // Logique d'envoi du document
  closeUploadModal()
}

const viewDocument = (document) => {
  console.log('Visualiser le document:', document.name)
  // Logique d'ouverture du document
}

const downloadDocument = (document) => {
  console.log('Télécharger le document:', document.name)
  // Logique de téléchargement
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