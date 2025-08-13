import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import RegisterView from '../views/RegisterView.vue'
import ArtisanSearchView from '../views/ArtisanSearchView.vue'
import ArtisanProfile from '../views/ArtisanProfile.vue'
import ClientDashboard from '../views/ClientDashboard.vue'
import ArtisanDashboard from '../views/ArtisanDashboard.vue'
import PartenairedDashboard from '../views/PartenaireDashboard.vue'
import AMODashboard from '../views/AMODashboard.vue'
import NotFoundView from '../views/NotFoundView.vue'
import { createRoleGuard } from '../composables/useRoleGuard.js'

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
    component: ClientDashboard,
    beforeEnter: createRoleGuard('client')
  },
  {
    path: '/artisan-dashboard',
    name: 'ArtisanDashboard',
    component: ArtisanDashboard,
    beforeEnter: createRoleGuard(['artisan', 'partenaire'])
  },
  {
    path: '/partenaire-dashboard',
    name: 'PartenaireDashboard',
    component: PartenairedDashboard,
    beforeEnter: createRoleGuard('partenaire')
  },
  {
    path: '/amo-dashboard',
    name: 'AMODashboard',
    component: AMODashboard,
    beforeEnter: createRoleGuard('amo')
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
  {
    path: '/debug-auth',
    name: 'DebugAuth',
    component: () => import('../views/DebugAuth.vue')
  },
  // Route 404 explicite
  {
    path: '/404',
    name: 'NotFound',
    component: NotFoundView
  },
  // Route 404 - doit être en dernier
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 