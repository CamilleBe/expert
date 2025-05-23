import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AuthPage from '../components/AuthPage.vue'
import RegisterPage from '../components/RegisterPage.vue'
import ArtisanSearch from '../components/ArtisanSearch.vue'
import ArtisanProfile from '../components/ArtisanProfile.vue'
import ClientDashboard from '../components/ClientDashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/search',
    name: 'Search',
    component: ArtisanSearch
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
    path: '/services',
    name: 'Services',
    component: () => import('../components/HomePage.vue') // Redirection temporaire vers HomePage
  },
  {
    path: '/how-it-works',
    name: 'HowItWorks',
    component: () => import('../components/HomePage.vue') // Redirection temporaire vers HomePage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../components/HomePage.vue') // Redirection temporaire vers HomePage
  },
  // Route 404 - doit être en dernier
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../components/HomePage.vue') // Redirection vers HomePage pour les pages non trouvées
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 