<template>
  <div class="w-screen overflow-x-hidden bg-white text-gray-800">
    <!-- Section Héro -->
    <div class="relative bg-blue-600 text-white overflow-hidden w-screen">
      <div class="absolute inset-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1613743983303-b3e89f8a2b80?w=1600" alt="" class="w-full h-full object-cover" />
      </div>
      <div class="w-full px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div class="w-full max-w-5xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Trouvez l'artisan idéal pour vos projets
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in-delay">
            Des milliers d'artisans qualifiés prêts à réaliser vos travaux en toute confiance
          </p>
          <div class="animate-fade-in-delay-2 w-full">
            <form class="bg-white rounded-xl shadow-lg p-2 sm:p-3 md:p-4 flex flex-col sm:flex-row items-stretch w-full">
              <div class="flex-1 mb-2 sm:mb-0 sm:mr-2">
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input type="text" placeholder="Quel type d'artisan recherchez-vous ?" class="pl-10 pr-4 py-3 w-full bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900" />
                </div>
              </div>
              <div class="flex-1 mb-2 sm:mb-0 sm:mr-2">
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <input type="text" placeholder="Où ? (ville, code postal)" class="pl-10 pr-4 py-3 w-full bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900" />
                </div>
              </div>
              <button type="submit" class="py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg">
                Rechercher
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Services -->
    <div class="w-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white">
      <div class="w-full mx-auto">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Services proposés</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Des artisans qualifiés pour tous vos besoins en rénovation et construction
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-delay max-w-7xl mx-auto">
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-transform hover:transform hover:scale-105 duration-300">
            <div class="h-48 bg-blue-50 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800" alt="Construction" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2 text-gray-900">Maçonnerie</h3>
              <p class="text-gray-600 mb-4">Construction de murs, fondations, rénovation de structures existantes.</p>
              <a href="#" class="text-blue-600 font-medium hover:text-blue-500 inline-flex items-center">
                Découvrir
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-transform hover:transform hover:scale-105 duration-300">
            <div class="h-48 bg-blue-50 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800" alt="Plomberie" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2 text-gray-900">Plomberie</h3>
              <p class="text-gray-600 mb-4">Installation et réparation de systèmes de plomberie, sanitaires et chauffage.</p>
              <a href="#" class="text-blue-600 font-medium hover:text-blue-500 inline-flex items-center">
                Découvrir
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-transform hover:transform hover:scale-105 duration-300">
            <div class="h-48 bg-blue-50 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1558618666-c291f71742a0?w=800" alt="Électricité" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2 text-gray-900">Électricité</h3>
              <p class="text-gray-600 mb-4">Installation électrique, mise aux normes, domotique et systèmes intelligents.</p>
              <a href="#" class="text-blue-600 font-medium hover:text-blue-500 inline-flex items-center">
                Découvrir
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-transform hover:transform hover:scale-105 duration-300">
            <div class="h-48 bg-blue-50 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800" alt="Peinture" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="font-bold text-xl mb-2 text-gray-900">Peinture</h3>
              <p class="text-gray-600 mb-4">Travaux de peinture intérieure et extérieure, revêtements muraux, décoration.</p>
              <a href="#" class="text-blue-600 font-medium hover:text-blue-500 inline-flex items-center">
                Découvrir
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <a href="#" class="inline-block py-3 px-8 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg">
            Voir tous les services
          </a>
        </div>
      </div>
    </div>
    
    <!-- Section Comment ça marche -->
    <div class="w-screen bg-gray-50 py-16 md:py-24">
      <div class="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Comment ça marche</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            En seulement 3 étapes simples, trouvez l'artisan idéal pour votre projet
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-delay max-w-7xl mx-auto">
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-600 text-white text-2xl font-bold">1</div>
            <h3 class="text-2xl font-bold mb-3 text-gray-900">Décrivez votre projet</h3>
            <p class="text-gray-600">Précisez votre besoin, votre localisation et votre budget pour obtenir des devis adaptés.</p>
          </div>
          
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-600 text-white text-2xl font-bold">2</div>
            <h3 class="text-2xl font-bold mb-3 text-gray-900">Comparez les artisans</h3>
            <p class="text-gray-600">Consultez les profils, les avis et les réalisations des artisans intéressés par votre projet.</p>
          </div>
          
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-600 text-white text-2xl font-bold">3</div>
            <h3 class="text-2xl font-bold mb-3 text-gray-900">Faites votre choix</h3>
            <p class="text-gray-600">Sélectionnez l'artisan qui correspond le mieux à vos attentes et suivez l'avancement de votre projet.</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Section Fonctionnalités principales -->
    <div class="w-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white">
      <div class="w-full mx-auto">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Fonctionnalités principales</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Des outils innovants pour simplifier la gestion de vos projets de rénovation et construction
          </p>
        </div>
        
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 animate-fade-in-delay relative">
            <!-- Fonctionnalité 1 - Suivi de projet -->
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white">
                  <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Suivi de projet en temps réel</h3>
                <p class="text-gray-600 leading-relaxed">
                  Suivez l'avancement de vos travaux à chaque étape. Recevez des notifications importantes, consultez les photos d'avancement et gardez un œil sur le calendrier des interventions directement depuis votre espace client.
                </p>
                <div class="mt-4 flex items-center">
                  <a href="#" class="text-blue-600 font-medium hover:text-blue-500 inline-flex items-center">
                    En savoir plus
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            
            <!-- Fonctionnalité 3 - Gestion documentaire -->
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white">
                  <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Gestion documentaire centralisée</h3>
                <p class="text-gray-600 leading-relaxed">
                  Stockez tous vos documents importants au même endroit : devis, factures, contrats, plans, garanties et assurances. Fini les papiers perdus ou les recherches fastidieuses dans vos emails.
                </p>
                <div class="mt-4 flex items-center">
                  <a href="#" class="text-blue-600 font-medium hover:text-blue-500 inline-flex items-center">
                    En savoir plus
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Fonctionnalité 4 - Paiement en ligne -->
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center h-16 w-16 rounded-md bg-blue-600 text-white">
                  <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">Paiement sécurisé en ligne</h3>
                <p class="text-gray-600 leading-relaxed">
                  Réglez vos acomptes et factures directement via notre plateforme sécurisée. Suivez l'historique de vos paiements et bénéficiez de notre système de paiement par étapes qui libère les fonds uniquement lorsque le travail est validé.
                </p>
                <div class="mt-4 flex items-center">
                  <a href="#" class="text-blue-600 font-medium hover:text-blue-500 inline-flex items-center">
                    En savoir plus
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Image interface -->
            <div class="relative rounded-2xl overflow-hidden shadow-xl max-h-[180px] animate-fade-in-delay-2">
              <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200" alt="Interface Experta" class="w-full h-[180px] object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30"></div>
              <div class="absolute bottom-0 left-0 right-0 p-3 text-white">
                <p class="text-lg font-semibold mb-0">Interface intuitive</p>
                <p class="text-sm">Accessible sur tous vos appareils, gardez le contrôle sur vos projets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Section À propos d'Experta -->
    <div class="w-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white">
      <div class="w-full mx-auto">
        <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div class="w-full lg:w-1/2 animate-fade-in">
            <div class="rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200" alt="L'équipe Experta" class="w-full h-auto object-cover" />
            </div>
          </div>
          
          <div class="w-full lg:w-1/2 animate-fade-in-delay">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">À propos d'Experta</h2>
            
            <div class="space-y-6 text-gray-600">
              <p class="text-lg">
                Fondée en 2020, Experta est née d'un constat simple : trouver le bon artisan pour son projet de rénovation ou de construction reste un parcours semé d'embûches pour de nombreux particuliers.
              </p>
              
              <p class="text-lg">
                <span class="font-semibold text-blue-600">Notre mission :</span> Simplifier la mise en relation entre particuliers et artisans qualifiés, tout en garantissant qualité, transparence et sérénité à chaque étape de vos projets immobiliers.
              </p>
              
              <p class="text-lg">
                <span class="font-semibold text-blue-600">Notre innovation :</span> Experta se distingue par une approche centrée sur la vérification rigoureuse des artisans, un système d'évaluation transparent et un accompagnement personnalisé tout au long de votre projet.
              </p>
              
              <p class="text-lg">
                Grâce à notre plateforme, fini les mauvaises surprises ! Nous vous aidons à concrétiser vos projets immobiliers en toute confiance, en vous connectant avec des professionnels dont les compétences et le sérieux sont reconnus.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Section Témoignages -->
    <div class="w-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gray-50">
      <div class="w-full mx-auto">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ce que disent nos clients</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Des milliers de clients satisfaits ont trouvé leur artisan idéal sur notre plateforme
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-delay max-w-7xl mx-auto">
          <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div class="flex mb-6">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"></path>
              </svg>
            </div>
            <p class="text-gray-600 italic mb-6">"Grâce à Experta, j'ai trouvé un excellent électricien pour la rénovation complète de mon installation. Travail soigné, devis respecté et délais tenus !"</p>
            <div class="flex items-center">
              <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Client" class="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 class="font-semibold text-gray-900">Sophie Martin</h4>
                <p class="text-sm text-gray-500">Lyon</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div class="flex mb-6">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"></path>
              </svg>
            </div>
            <p class="text-gray-600 italic mb-6">"Le plombier que j'ai engagé via la plateforme a été très professionnel. Il a résolu rapidement mon problème de fuite et m'a donné de précieux conseils pour éviter que cela ne se reproduise."</p>
            <div class="flex items-center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" class="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 class="font-semibold text-gray-900">Thomas Dubois</h4>
                <p class="text-sm text-gray-500">Paris</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div class="flex mb-6">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"></path>
              </svg>
            </div>
            <p class="text-gray-600 italic mb-6">"J'ai fait appel à un peintre pour rafraîchir mon appartement. Le résultat est impeccable et le prix très compétitif. Je recommande vivement cette plateforme !"</p>
            <div class="flex items-center">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client" class="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 class="font-semibold text-gray-900">Claire Petit</h4>
                <p class="text-sm text-gray-500">Bordeaux</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <a href="#" class="inline-block py-3 px-8 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-300 ease-in-out">
            Voir plus de témoignages
          </a>
        </div>
      </div>
    </div>
    
    <!-- Section Blog -->
    <div class="w-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-white">
      <div class="w-full mx-auto">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Notre Blog</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos conseils, astuces et actualités pour réussir vos projets de rénovation et construction
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto animate-fade-in-delay">
          <!-- Article 1 -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-transform hover:transform hover:scale-105 duration-300">
            <div class="h-48 bg-blue-50 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800" alt="Comment choisir son artisan" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <span class="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">Conseils</span>
                <span class="text-sm text-gray-500 ml-3">12 juin 2023</span>
              </div>
              <h3 class="font-bold text-xl mb-2 text-gray-900">Comment choisir le bon artisan pour votre projet</h3>
              <p class="text-gray-600 mb-4">Les critères essentiels à prendre en compte pour sélectionner un professionnel qualifié et éviter les mauvaises surprises.</p>
              <a href="#" class="text-blue-600 font-medium hover:text-blue-500 inline-flex items-center">
                Lire l'article
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Article 2 -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-transform hover:transform hover:scale-105 duration-300">
            <div class="h-48 bg-blue-50 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556156653-e5a7676c4f34?w=800" alt="Budget rénovation" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <span class="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">Finance</span>
                <span class="text-sm text-gray-500 ml-3">28 mai 2023</span>
              </div>
              <h3 class="font-bold text-xl mb-2 text-gray-900">Établir un budget réaliste pour votre rénovation</h3>
              <p class="text-gray-600 mb-4">Nos experts vous guident pour calculer précisément le coût de vos travaux et éviter les dépassements de budget imprévus.</p>
              <a href="#" class="text-blue-600 font-medium hover:text-blue-500 inline-flex items-center">
                Lire l'article
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Article 3 -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-transform hover:transform hover:scale-105 duration-300">
            <div class="h-48 bg-blue-50 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800" alt="Tendances déco" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4">
                <span class="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">Tendances</span>
                <span class="text-sm text-gray-500 ml-3">5 mai 2023</span>
              </div>
              <h3 class="font-bold text-xl mb-2 text-gray-900">Les tendances déco et matériaux pour 2023</h3>
              <p class="text-gray-600 mb-4">Découvrez les dernières innovations et tendances en matière de décoration et matériaux pour moderniser votre intérieur.</p>
              <a href="#" class="text-blue-600 font-medium hover:text-blue-500 inline-flex items-center">
                Lire l'article
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <a href="#" class="inline-block py-3 px-8 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-300 ease-in-out">
            Voir tous les articles
          </a>
        </div>
      </div>
    </div>
    
    <!-- Section FAQ -->
    <div class="w-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gray-50">
      <div class="w-full mx-auto">
        <div class="text-center mb-16 animate-fade-in">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Foire aux questions</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Réponses aux questions fréquentes avant de vous inscrire ou d'utiliser nos services
          </p>
        </div>
        
        <div class="max-w-3xl mx-auto space-y-4 animate-fade-in-delay">
          <!-- Question 1 -->
          <div class="border border-gray-200 rounded-xl overflow-hidden">
            <button 
              class="flex justify-between items-center w-full px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
              @click="toggleFaq(1)"
            >
              <span class="font-semibold text-lg text-gray-900">Comment fonctionne la mise en relation avec les artisans ?</span>
              <svg 
                class="w-6 h-6 text-blue-600 transform transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === 1 }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div 
              class="px-6 py-5 bg-white border-t border-gray-100"
              v-show="openFaq === 1"
            >
              <p class="text-gray-700">
                Après avoir décrit votre projet et précisé vos besoins, notre système identifie les artisans les plus qualifiés dans votre région. Vous recevez plusieurs propositions et pouvez consulter les profils, réalisations et avis des artisans avant de faire votre choix. Une fois votre sélection effectuée, vous êtes mis en relation directe avec l'artisan pour finaliser les détails de votre projet.
              </p>
            </div>
          </div>
          
          <!-- Question 2 -->
          <div class="border border-gray-200 rounded-xl overflow-hidden">
            <button 
              class="flex justify-between items-center w-full px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
              @click="toggleFaq(2)"
            >
              <span class="font-semibold text-lg text-gray-900">Comment sont sélectionnés les artisans sur Experta ?</span>
              <svg 
                class="w-6 h-6 text-blue-600 transform transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === 2 }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div 
              class="px-6 py-5 bg-white border-t border-gray-100"
              v-show="openFaq === 2"
            >
              <p class="text-gray-700">
                Tous les artisans référencés sur Experta font l'objet d'une vérification rigoureuse. Nous contrôlons leurs qualifications professionnelles, assurances, certifications et statut juridique. Nous examinons également leurs réalisations antérieures et maintenons un système d'évaluation transparent basé sur les retours des clients. Seuls les artisans répondant à nos critères de qualité sont acceptés sur la plateforme.
              </p>
            </div>
          </div>
          
          <!-- Question 3 -->
          <div class="border border-gray-200 rounded-xl overflow-hidden">
            <button 
              class="flex justify-between items-center w-full px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
              @click="toggleFaq(3)"
            >
              <span class="font-semibold text-lg text-gray-900">Quels types de travaux puis-je faire réaliser via Experta ?</span>
              <svg 
                class="w-6 h-6 text-blue-600 transform transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === 3 }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div 
              class="px-6 py-5 bg-white border-t border-gray-100"
              v-show="openFaq === 3"
            >
              <p class="text-gray-700">
                Experta couvre une large gamme de services dans le domaine de la construction et rénovation : maçonnerie, plomberie, électricité, peinture, menuiserie, carrelage, isolation, couverture, chauffage, climatisation et bien d'autres. Que vous souhaitiez rénover une pièce, construire une extension ou simplement effectuer de petites réparations, vous trouverez des artisans qualifiés pour tous types de projets, petits ou grands.
              </p>
            </div>
          </div>
          
          <!-- Question 4 -->
          <div class="border border-gray-200 rounded-xl overflow-hidden">
            <button 
              class="flex justify-between items-center w-full px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
              @click="toggleFaq(4)"
            >
              <span class="font-semibold text-lg text-gray-900">La plateforme est-elle gratuite pour les particuliers ?</span>
              <svg 
                class="w-6 h-6 text-blue-600 transform transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === 4 }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div 
              class="px-6 py-5 bg-white border-t border-gray-100"
              v-show="openFaq === 4"
            >
              <p class="text-gray-700">
                Oui, l'inscription et l'utilisation de la plateforme sont totalement gratuites pour les particuliers. Vous pouvez publier vos projets, recevoir des devis et consulter les profils des artisans sans aucun frais. Nous ne prenons aucune commission sur les projets réalisés. Notre modèle économique est basé sur les abonnements des artisans professionnels qui souhaitent accéder aux demandes de projets.
              </p>
            </div>
          </div>
          
          <!-- Question 5 -->
          <div class="border border-gray-200 rounded-xl overflow-hidden">
            <button 
              class="flex justify-between items-center w-full px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
              @click="toggleFaq(5)"
            >
              <span class="font-semibold text-lg text-gray-900">Comment sont garantis les travaux réalisés ?</span>
              <svg 
                class="w-6 h-6 text-blue-600 transform transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === 5 }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div 
              class="px-6 py-5 bg-white border-t border-gray-100"
              v-show="openFaq === 5"
            >
              <p class="text-gray-700">
                Tous les travaux réalisés via notre plateforme bénéficient des garanties légales applicables au secteur du bâtiment (garantie décennale, garantie biennale, garantie de parfait achèvement). De plus, notre service de paiement sécurisé par étapes vous permet de ne libérer les fonds qu'après validation des travaux. En cas de problème, notre service client intervient comme médiateur pour trouver une solution satisfaisante.
              </p>
            </div>
          </div>
          
          <!-- Question 6 -->
          <div class="border border-gray-200 rounded-xl overflow-hidden">
            <button 
              class="flex justify-between items-center w-full px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
              @click="toggleFaq(6)"
            >
              <span class="font-semibold text-lg text-gray-900">Que faire en cas de litige avec un artisan ?</span>
              <svg 
                class="w-6 h-6 text-blue-600 transform transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === 6 }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div 
              class="px-6 py-5 bg-white border-t border-gray-100"
              v-show="openFaq === 6"
            >
              <p class="text-gray-700">
                En cas de désaccord ou de litige, contactez immédiatement notre service de médiation via votre espace client. Nos experts interviendront pour faciliter le dialogue et trouver une solution équitable. Si nécessaire, nous pouvons suspendre les paiements en attente de résolution du conflit. Nous disposons également d'un réseau d'experts indépendants qui peuvent intervenir pour évaluer la qualité des travaux en cas de contestation technique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Section CTA -->
    <div class="bg-blue-600 py-16 md:py-20 w-screen">
      <div class="w-full px-4 sm:px-6 lg:px-8 mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div class="mb-8 lg:mb-0 text-center lg:text-left">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Prêt à démarrer votre projet ?</h2>
          <p class="text-xl text-blue-100 max-w-2xl">
            Trouvez dès maintenant l'artisan qualifié qui réalisera vos travaux dans les meilleures conditions.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="#" class="py-3 px-8 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 ease-in-out hover:shadow-lg text-center">
            Trouver un artisan
          </a>
          <a href="#" class="py-3 px-8 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-300 ease-in-out text-center">
            S'inscrire gratuitement
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Variable pour gérer l'accordéon de la FAQ
const openFaq = ref(null)

// Fonction pour ouvrir/fermer les questions de la FAQ
function toggleFaq(id) {
  openFaq.value = openFaq.value === id ? null : id
}

// Logique supplémentaire ici si nécessaire

</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 0.6s ease-out 0.2s both;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 0.6s ease-out 0.4s both;
}

.animate-fade-in-delay-3 {
  animation: fadeIn 0.6s ease-out 0.6s both;
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