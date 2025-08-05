<template>
  <div class="w-screen min-h-screen overflow-x-hidden bg-white text-gray-800">

    <!-- Section principale avec formulaire d'inscription -->
    <div class="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div class="w-full max-w-lg mx-auto">
        <!-- Titre de la page -->
        <div class="text-center mb-10 animate-fade-in">
          <h1 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Créez votre compte gratuit
          </h1>
          <p class="text-xl text-gray-600">
            Et trouvez les meilleurs artisans pour vos projets
          </p>
        </div>

        <!-- Onglets pour choisir le type d'inscription -->
        <div class="flex mb-8 bg-gray-100 rounded-lg p-1 animate-fade-in">
          <button 
            @click="registrationType = 'client'"
            :class="[
              'flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200',
              registrationType === 'client' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            ]"
          >
            👤 Client
          </button>
          <button 
            @click="registrationType = 'amo'"
            :class="[
              'flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200',
              registrationType === 'amo' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            ]"
          >
            🏢 AMO (Professionnel)
          </button>
        </div>

        <!-- Messages de succès/erreur -->
        <div v-if="successMessage" class="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg animate-fade-in">
          <div class="flex">
            <svg class="h-5 w-5 text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            {{ successMessage }}
          </div>
        </div>

        <div v-if="errorMessage" class="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg animate-fade-in">
          <div class="flex">
            <svg class="h-5 w-5 text-red-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
            {{ errorMessage }}
          </div>
        </div>

        <!-- Formulaire d'inscription -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 animate-fade-in">
          <form @submit.prevent="handleRegister">
            
            <!-- Champs communs (Prénom, Nom, Email) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                <input 
                  type="text" 
                  id="firstName" 
                  v-model="registerForm.firstName" 
                  placeholder="Jean" 
                  class="px-4 py-3 w-full bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900" 
                  required
                />
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                <input 
                  type="text" 
                  id="lastName" 
                  v-model="registerForm.lastName" 
                  placeholder="Dupont" 
                  class="px-4 py-3 w-full bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900" 
                  required
                />
              </div>
            </div>

            <div class="mb-6">
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input 
                  type="email" 
                  id="email" 
                  v-model="registerForm.email" 
                  placeholder="votre@email.com" 
                  class="pl-10 pr-4 py-3 w-full bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900" 
                  required
                />
              </div>
            </div>

            <!-- Champs spécifiques AMO -->
            <div v-if="registrationType === 'amo'" class="space-y-6 mb-6">
              <div>
                <label for="telephone" class="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <input 
                    type="tel" 
                    id="telephone" 
                    v-model="registerForm.telephone" 
                    placeholder="01 23 45 67 89" 
                    class="pl-10 pr-4 py-3 w-full bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900" 
                    required
                  />
                </div>
              </div>

              <div>
                <label for="siret" class="block text-sm font-medium text-gray-700 mb-2">SIRET</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h4a1 1 0 011 1v5m-6 0V9a1 1 0 011-1h4a1 1 0 011 1v8.5" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    id="siret" 
                    v-model="registerForm.siret" 
                    placeholder="12345678901234" 
                    maxlength="14"
                    class="pl-10 pr-4 py-3 w-full bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900" 
                    required
                  />
                </div>
                <p class="mt-2 text-xs text-gray-500">14 chiffres exactement</p>
              </div>
            </div>

            <!-- Mot de passe -->
            <div class="mb-6">
              <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Mot de passe</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input 
                  :type="showPassword ? 'text' : 'password'" 
                  id="password" 
                  v-model="registerForm.password" 
                  placeholder="8 caractères minimum" 
                  class="pl-10 pr-10 py-3 w-full bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900" 
                  required
                  minlength="8"
                />
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button 
                    @click.prevent="showPassword = !showPassword" 
                    type="button" 
                    class="text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!showPassword">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-else>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  </button>
                </div>
              </div>
              <p class="mt-2 text-xs text-gray-500">Le mot de passe doit contenir au moins 8 caractères</p>
            </div>

            <!-- Confirmation mot de passe (uniquement pour AMO) -->
            <div v-if="registrationType === 'amo'" class="mb-6">
              <label for="passwordConfirm" class="block text-sm font-medium text-gray-700 mb-2">Confirmer le mot de passe</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input 
                  type="password" 
                  id="passwordConfirm" 
                  v-model="registerForm.passwordConfirm" 
                  placeholder="Confirmer votre mot de passe" 
                  class="pl-10 pr-4 py-3 w-full bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900" 
                  required
                />
              </div>
            </div>

            <!-- Confirmation mot de passe pour Client (gardé comme avant) -->
            <div v-if="registrationType === 'client'" class="mb-6">
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">Confirmer le mot de passe</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  v-model="registerForm.confirmPassword" 
                  placeholder="Confirmer votre mot de passe" 
                  class="pl-10 pr-4 py-3 w-full bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-900" 
                  required
                />
              </div>
            </div>

            <div class="mb-6 flex items-start">
              <div class="flex items-center h-5">
                <input 
                  type="checkbox" 
                  id="terms" 
                  v-model="registerForm.terms" 
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                  required
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="text-gray-700">
                  J'accepte les <a href="#" class="text-blue-600 hover:text-blue-500">Conditions d'utilisation</a> et la <a href="#" class="text-blue-600 hover:text-blue-500">Politique de confidentialité</a>
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              :disabled="loading"
              class="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <span v-if="loading" class="mr-2">
                <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
              </span>
              {{ loading ? 'Création en cours...' : (registrationType === 'amo' ? 'Créer mon compte AMO' : 'Créer mon compte') }}
            </button>

            <div class="text-center mt-8">
              <p class="text-sm text-gray-600">
                Vous avez déjà un compte ?
                <router-link to="/auth" class="text-blue-600 font-medium hover:text-blue-500">
                  Connectez-vous
                </router-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import authService from '../services/authService.js'

// Router pour redirection
const router = useRouter()

// Type d'inscription sélectionné
const registrationType = ref('client')

// Formulaire d'inscription
const registerForm = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '', // Pour client
  passwordConfirm: '', // Pour AMO
  telephone: '', // Pour AMO
  siret: '', // Pour AMO
  terms: false
})

// États de l'interface
const showPassword = ref(false)
const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

// Réinitialiser les champs spécifiques quand on change de type
watch(registrationType, (newType) => {
  // Nettoyer les champs non utilisés
  if (newType === 'client') {
    registerForm.telephone = ''
    registerForm.siret = ''
    registerForm.passwordConfirm = ''
  } else {
    registerForm.confirmPassword = ''
  }
})

// Validation du formulaire
const validateForm = () => {
  // Réinitialiser les erreurs
  errorMessage.value = ''
  
  // Validations communes
  if (!registerForm.firstName.trim()) {
    errorMessage.value = 'Le prénom est obligatoire'
    return false
  }
  
  if (!registerForm.lastName.trim()) {
    errorMessage.value = 'Le nom est obligatoire'
    return false
  }
  
  if (!registerForm.email.trim()) {
    errorMessage.value = 'L\'email est obligatoire'
    return false
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(registerForm.email)) {
    errorMessage.value = 'Format d\'email invalide'
    return false
  }
  
  if (!registerForm.password) {
    errorMessage.value = 'Le mot de passe est obligatoire'
    return false
  }
  
  if (registerForm.password.length < 8) {
    errorMessage.value = 'Le mot de passe doit contenir au moins 8 caractères'
    return false
  }
  
  // Validations spécifiques selon le type
  if (registrationType.value === 'client') {
    if (registerForm.password !== registerForm.confirmPassword) {
      errorMessage.value = 'Les mots de passe ne correspondent pas'
      return false
    }
  } else if (registrationType.value === 'amo') {
    if (registerForm.password !== registerForm.passwordConfirm) {
      errorMessage.value = 'Les mots de passe ne correspondent pas'
      return false
    }
    
    if (!registerForm.telephone.trim()) {
      errorMessage.value = 'Le téléphone est obligatoire'
      return false
    }
    
    // Validation format téléphone
    const phoneRegex = /^[\d\s\+\-\(\)\.]{8,20}$/
    if (!phoneRegex.test(registerForm.telephone)) {
      errorMessage.value = 'Format de téléphone invalide'
      return false
    }
    
    if (!registerForm.siret.trim()) {
      errorMessage.value = 'Le SIRET est obligatoire'
      return false
    }
    
    // Validation SIRET (exactement 14 chiffres)
    const siretRegex = /^\d{14}$/
    if (!siretRegex.test(registerForm.siret)) {
      errorMessage.value = 'Le SIRET doit contenir exactement 14 chiffres'
      return false
    }
  }
  
  if (!registerForm.terms) {
    errorMessage.value = 'Vous devez accepter les conditions d\'utilisation'
    return false
  }
  
  return true
}

// Méthode d'inscription
const handleRegister = async () => {
  if (!validateForm()) {
    return
  }

  loading.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    // Préparer les données selon le type
    let userData = {
      firstName: registerForm.firstName.trim(),
      lastName: registerForm.lastName.trim(),
      email: registerForm.email.trim(),
      password: registerForm.password
    }
    
    // Ajouter les champs spécifiques AMO
    if (registrationType.value === 'amo') {
      userData.passwordConfirm = registerForm.passwordConfirm
      userData.telephone = registerForm.telephone.trim()
      userData.siret = registerForm.siret.trim()
    }

    // Appel à l'API d'inscription via authService
    const result = await authService.register(userData, registrationType.value)

    // Succès de l'inscription
    const userType = registrationType.value === 'amo' ? 'AMO' : 'client'
    successMessage.value = `Bienvenue ${result.user?.firstName} ! Votre compte ${userType} a été créé avec succès.`
    
    console.log('✅ Inscription réussie:', result)
    
    // Redirection vers le tableau de bord après 2 secondes
    setTimeout(() => {
      router.push('/dashboard')
    }, 2000)
    
  } catch (error) {
    // Gestion des erreurs
    let message = 'Erreur lors de l\'inscription'
    
    if (error.message) {
      message = error.message
    } else if (error.response?.data?.message) {
      message = error.response.data.message
    } else if (error.response?.status === 409) {
      message = 'Cet email est déjà utilisé'
    } else if (error.response?.status === 400) {
      message = 'Données invalides'
    }
    
    errorMessage.value = message
    console.error('❌ Erreur d\'inscription:', error)
    
  } finally {
    loading.value = false
  }
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