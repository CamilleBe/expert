import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registerSW } from 'virtual:pwa-register'

// Enregistrement du service worker pour la PWA
const updateSW = registerSW({
  onNeedRefresh() {
    // Peut être utilisé pour afficher une notification de mise à jour
    console.log('Une mise à jour est disponible!')
  },
  onOfflineReady() {
    // Peut être utilisé pour afficher une notification de disponibilité hors ligne
    console.log('L\'application est prête à fonctionner hors ligne!')
  }
})

createApp(App).mount('#app')
