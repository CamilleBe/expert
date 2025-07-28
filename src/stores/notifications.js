import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useNotificationsStore = defineStore('notifications', () => {
  // État réactif
  const notifications = ref([])
  const loading = ref(false)

  // Getters (computed)
  const unreadCount = computed(() => 
    notifications.value.filter(n => !n.read).length
  )

  const unreadNotifications = computed(() => 
    notifications.value.filter(n => !n.read)
  )

  const recentNotifications = computed(() => 
    notifications.value.slice(0, 5)
  )

  // Actions
  const addNotification = (notification) => {
    const newNotification = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      read: false,
      ...notification
    }
    
    notifications.value.unshift(newNotification)
    
    // Optionnel : Auto-supprimer après un délai pour certains types
    if (notification.autoRemove) {
      setTimeout(() => {
        removeNotification(newNotification.id)
      }, notification.duration || 5000)
    }
    
    return newNotification
  }

  const markAsRead = (notificationId) => {
    const notification = notifications.value.find(n => n.id === notificationId)
    if (notification) {
      notification.read = true
    }
  }

  const markAllAsRead = () => {
    notifications.value.forEach(notification => {
      notification.read = true
    })
  }

  const removeNotification = (notificationId) => {
    const index = notifications.value.findIndex(n => n.id === notificationId)
    if (index !== -1) {
      notifications.value.splice(index, 1)
    }
  }

  const clearAll = () => {
    notifications.value = []
  }

  // Types de notifications prédéfinis
  const showSuccess = (message, options = {}) => {
    return addNotification({
      type: 'success',
      title: 'Succès',
      message,
      icon: '✅',
      autoRemove: true,
      duration: 3000,
      ...options
    })
  }

  const showError = (message, options = {}) => {
    return addNotification({
      type: 'error',
      title: 'Erreur',
      message,
      icon: '❌',
      autoRemove: false, // Les erreurs restent visibles
      ...options
    })
  }

  const showWarning = (message, options = {}) => {
    return addNotification({
      type: 'warning',
      title: 'Attention',
      message,
      icon: '⚠️',
      autoRemove: true,
      duration: 4000,
      ...options
    })
  }

  const showInfo = (message, options = {}) => {
    return addNotification({
      type: 'info',
      title: 'Information',
      message,
      icon: 'ℹ️',
      autoRemove: true,
      duration: 4000,
      ...options
    })
  }

  // Notifications spécifiques à l'application Experta
  const showProjectUpdate = (projectTitle, message) => {
    return addNotification({
      type: 'project',
      title: `Projet: ${projectTitle}`,
      message,
      icon: '🔨',
      autoRemove: false
    })
  }

  const showArtisanMessage = (artisanName, message) => {
    return addNotification({
      type: 'message',
      title: `Message de ${artisanName}`,
      message,
      icon: '💬',
      autoRemove: false
    })
  }

  const showPaymentNotification = (amount, status) => {
    return addNotification({
      type: 'payment',
      title: 'Paiement',
      message: `${status === 'success' ? 'Paiement de' : 'Erreur de paiement pour'} ${amount}€`,
      icon: status === 'success' ? '💳' : '❌',
      autoRemove: status === 'success'
    })
  }

  // Initialiser avec quelques notifications simulées
  const initializeMockNotifications = () => {
    const mockNotifications = [
      {
        id: 1,
        type: 'project',
        title: 'Projet: Rénovation salle de bain',
        message: 'L\'artisan a commencé les travaux de plomberie',
        icon: '🔨',
        read: false,
        timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString() // 30 min ago
      },
      {
        id: 2,
        type: 'message',
        title: 'Message de Jean Dupont',
        message: 'Je passerai demain matin pour finaliser l\'installation',
        icon: '💬',
        read: false,
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString() // 2h ago
      },
      {
        id: 3,
        type: 'payment',
        title: 'Paiement',
        message: 'Paiement de 2100€ effectué avec succès',
        icon: '💳',
        read: true,
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() // 1 day ago
      }
    ]
    
    notifications.value = mockNotifications
  }

  return {
    // État
    notifications,
    loading,
    
    // Getters
    unreadCount,
    unreadNotifications,
    recentNotifications,
    
    // Actions générales
    addNotification,
    markAsRead,
    markAllAsRead,
    removeNotification,
    clearAll,
    
    // Actions spécialisées
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showProjectUpdate,
    showArtisanMessage,
    showPaymentNotification,
    
    // Initialisation
    initializeMockNotifications
  }
}) 