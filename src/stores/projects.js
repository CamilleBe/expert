import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProjectsStore = defineStore('projects', () => {
  // État réactif
  const projects = ref([])
  const activeProject = ref(null)
  const loading = ref(false)
  const error = ref(null)

  // Getters (computed)
  const activeProjects = computed(() => 
    projects.value.filter(project => project.status === 'en_cours')
  )
  
  const completedProjects = computed(() => 
    projects.value.filter(project => project.status === 'termine')
  )
  
  const pendingProjects = computed(() => 
    projects.value.filter(project => project.status === 'en_attente')
  )

  const totalBudget = computed(() => 
    projects.value.reduce((total, project) => total + (project.budget || 0), 0)
  )

  const projectsCount = computed(() => projects.value.length)

  // Actions
  const fetchUserProjects = async (userId) => {
    loading.value = true
    error.value = null
    
    try {
      // Simulation d'un appel API - À remplacer par votre vraie API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Données simulées de projets
      const mockProjects = [
        {
          id: 1,
          title: 'Rénovation salle de bain',
          description: 'Rénovation complète de la salle de bain principale avec pose de carrelage et nouvelle plomberie.',
          category: 'Plomberie',
          status: 'en_cours',
          budget: 8500,
          artisan: {
            id: 1,
            name: 'Jean Dupont',
            profession: 'Plombier',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            rating: 4.8
          },
          createdAt: '2024-01-15',
          updatedAt: '2024-01-20',
          progress: 65
        },
        {
          id: 2,
          title: 'Installation électrique',
          description: 'Mise aux normes de l\'installation électrique de la maison.',
          category: 'Électricité',
          status: 'termine',
          budget: 4200,
          artisan: {
            id: 2,
            name: 'Sophie Martin',
            profession: 'Électricienne',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            rating: 4.9
          },
          createdAt: '2023-12-01',
          updatedAt: '2024-01-10',
          progress: 100
        },
        {
          id: 3,
          title: 'Peinture salon',
          description: 'Peinture du salon et de la salle à manger.',
          category: 'Peinture',
          status: 'en_attente',
          budget: 1800,
          artisan: null,
          createdAt: '2024-01-25',
          updatedAt: '2024-01-25',
          progress: 0
        }
      ]
      
      projects.value = mockProjects
      return { success: true, projects: mockProjects }
      
    } catch (err) {
      error.value = err.message || 'Erreur de récupération des projets'
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  const createProject = async (projectData) => {
    loading.value = true
    error.value = null
    
    try {
      // Simulation d'un appel API
      await new Promise(resolve => setTimeout(resolve, 800))
      
      const newProject = {
        id: Date.now(), // ID temporaire
        ...projectData,
        status: 'en_attente',
        progress: 0,
        artisan: null,
        createdAt: new Date().toISOString().split('T')[0],
        updatedAt: new Date().toISOString().split('T')[0]
      }
      
      projects.value.unshift(newProject)
      return { success: true, project: newProject }
      
    } catch (err) {
      error.value = err.message || 'Erreur de création du projet'
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  const updateProject = async (projectId, updateData) => {
    loading.value = true
    error.value = null
    
    try {
      // Simulation d'un appel API
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const projectIndex = projects.value.findIndex(p => p.id === projectId)
      if (projectIndex !== -1) {
        projects.value[projectIndex] = {
          ...projects.value[projectIndex],
          ...updateData,
          updatedAt: new Date().toISOString().split('T')[0]
        }
        
        return { success: true, project: projects.value[projectIndex] }
      }
      
      throw new Error('Projet non trouvé')
      
    } catch (err) {
      error.value = err.message || 'Erreur de mise à jour du projet'
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  const deleteProject = async (projectId) => {
    loading.value = true
    error.value = null
    
    try {
      // Simulation d'un appel API
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const projectIndex = projects.value.findIndex(p => p.id === projectId)
      if (projectIndex !== -1) {
        projects.value.splice(projectIndex, 1)
        return { success: true }
      }
      
      throw new Error('Projet non trouvé')
      
    } catch (err) {
      error.value = err.message || 'Erreur de suppression du projet'
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  const setActiveProject = (project) => {
    activeProject.value = project
  }

  const assignArtisan = async (projectId, artisanData) => {
    loading.value = true
    error.value = null
    
    try {
      // Simulation d'un appel API
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const projectIndex = projects.value.findIndex(p => p.id === projectId)
      if (projectIndex !== -1) {
        projects.value[projectIndex].artisan = artisanData
        projects.value[projectIndex].status = 'en_cours'
        projects.value[projectIndex].updatedAt = new Date().toISOString().split('T')[0]
        
        return { success: true, project: projects.value[projectIndex] }
      }
      
      throw new Error('Projet non trouvé')
      
    } catch (err) {
      error.value = err.message || 'Erreur d\'assignation de l\'artisan'
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  return {
    // État
    projects,
    activeProject,
    loading,
    error,
    
    // Getters
    activeProjects,
    completedProjects,
    pendingProjects,
    totalBudget,
    projectsCount,
    
    // Actions
    fetchUserProjects,
    createProject,
    updateProject,
    deleteProject,
    setActiveProject,
    assignArtisan
  }
}) 