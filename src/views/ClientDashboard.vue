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
                  <p class="text-2xl font-bold text-gray-900">3</p>
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
                  <p class="text-2xl font-bold text-gray-900">12</p>
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
                  <p class="text-sm font-medium text-gray-600">Documents en attente</p>
                  <p class="text-2xl font-bold text-gray-900">2</p>
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
                  <p class="text-2xl font-bold text-gray-900">15 240€</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Projets récents -->
          <div class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 mb-8">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Projets récents</h2>
            <div class="space-y-4">
              <div v-for="project in recentProjects" :key="project.id" class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div class="flex items-center">
                  <div class="p-2 rounded-full bg-blue-100">
                    <svg class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m4 0V9a1 1 0 011-1h4a1 1 0 011 1v12m-6 0h6" />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900">{{ project.title }}</p>
                    <p class="text-sm text-gray-600">{{ project.contractor }}</p>
                  </div>
                </div>
                <div class="text-right">
                  <span :class="project.status === 'En cours' ? 'bg-yellow-100 text-yellow-800' : project.status === 'Terminé' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'" class="px-2 py-1 text-xs font-medium rounded-full">
                    {{ project.status }}
                  </span>
                  <p class="text-sm text-gray-500 mt-1">{{ project.budget }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mes projets -->
        <div v-if="activeTab === 'projects'" class="animate-fade-in">
          <div class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold text-gray-900">Mes projets</h1>
            <button class="py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300">
              Nouveau projet
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="project in allProjects" :key="project.id" class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div class="h-48 bg-gray-200">
                <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
              </div>
              <div class="p-6">
                <div class="flex justify-between items-start mb-3">
                  <h3 class="text-lg font-bold text-gray-900">{{ project.title }}</h3>
                  <span :class="project.status === 'En cours' ? 'bg-yellow-100 text-yellow-800' : project.status === 'Terminé' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'" class="px-2 py-1 text-xs font-medium rounded-full">
                    {{ project.status }}
                  </span>
                </div>
                <p class="text-gray-600 mb-3">{{ project.description }}</p>
                <div class="flex justify-between items-center mb-4">
                  <span class="text-sm font-medium text-gray-600">{{ project.contractor }}</span>
                  <span class="text-lg font-bold text-blue-600">{{ project.budget }}</span>
                </div>
                <div class="flex space-x-2">
                  <button class="flex-1 py-2 px-4 bg-blue-50 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-100 transition-colors">
                    Voir détails
                  </button>
                  <button v-if="project.status === 'Terminé'" class="py-2 px-4 bg-yellow-50 text-yellow-600 text-sm font-medium rounded-lg hover:bg-yellow-100 transition-colors">
                    Noter
                  </button>
                </div>
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
  </div>
</template>

<script setup>
import { ref } from 'vue'

// État réactif
const activeTab = ref('overview')
const showNotifications = ref(false)
const showUploadModal = ref(false)
const showReviewModal = ref(false)
const selectedProject = ref(null)
const unreadNotifications = ref(0)

// Données du dashboard
const notifications = ref([])

const recentProjects = ref([])

const allProjects = ref([])

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

function submitReview() {
  // Logique de soumission de l'évaluation
  console.log('Nouvelle évaluation:', newReview.value)
  showReviewModal.value = false
  // Retirer le projet de la liste des projets à évaluer
  projectsToReview.value = projectsToReview.value.filter(p => p.id !== selectedProject.value.id)
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