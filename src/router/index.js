import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import RegisterView from '../views/RegisterView.vue'
import ArtisanSearchView from '../views/ArtisanSearchView.vue'
import ArtisanProfile from '../views/ArtisanProfile.vue'
import ClientDashboard from '../views/ClientDashboard.vue'
import ArtisanDashboard from '../views/ArtisanDashboard.vue'
import AMODashboard from '../views/AMODashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/connexion',
    name: 'Auth',
    component: AuthView
  },
  

  {
    path: '/inscription',
    name: 'Inscription',
    component: RegisterView
  },

  {
    path: '/artisan/:id',
    name: 'ArtisanProfile',
    component: ArtisanProfile,
    props: true
  },
  {
    path: '/dashboard',
    name: 'ClientDashboard',
    component: ClientDashboard
  },
  {
    path: '/artisan-dashboard',
    name: 'ArtisanDashboard',
    component: ArtisanDashboard
  },
  {
    path: '/amo-dashboard',
    name: 'AMODashboard',
    component: AMODashboard
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/HomeView.vue') // Redirection temporaire vers HomeView
  },
  {
    path: '/how-it-works',
    name: 'HowItWorks',
    component: () => import('../views/HomeView.vue') // Redirection temporaire vers HomeView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/HomeView.vue') // Redirection temporaire vers HomeView
  },
  // Route 404 - doit être en dernier
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/HomeView.vue') // Redirection vers HomeView pour les pages non trouvées
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 