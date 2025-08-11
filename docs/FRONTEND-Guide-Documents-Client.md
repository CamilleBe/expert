# 🎨 Guide Frontend - Module Documents Dashboard Client

## 📋 Vue d'ensemble

Ce guide détaille l'implémentation frontend pour le **module Documents du dashboard client**, permettant aux clients d'uploader, gérer et télécharger leurs documents personnels.

---

## 🎯 Fonctionnalités à implémenter

### ✅ Ce que le client peut faire :
- 📤 **Upload** de fichiers (PDF, DOC, DOCX, JPG, PNG)
- 📋 **Visualiser** la liste de ses documents
- 📥 **Télécharger** ses fichiers
- 🗑️ **Supprimer** ses documents
- 📊 **Voir les statistiques** (nombre total, taille, types)

### 🚫 Restrictions de sécurité :
- Seuls les **clients authentifiés** peuvent accéder
- Un client ne voit que **ses propres documents**
- Taille max : **10MB par fichier**
- Types autorisés : **PDF, DOC, DOCX, JPG, PNG**

---

## 🔌 API Endpoints Disponibles

| Méthode | Endpoint | Description | Payload |
|---------|----------|-------------|---------|
| `POST` | `/api/documents/upload` | Upload de fichiers | FormData avec champ `documents` |
| `GET` | `/api/documents` | Liste des documents | Query params optionnels |
| `GET` | `/api/documents/:id/download` | Télécharger un fichier | - |
| `GET` | `/api/documents/:id` | Détails d'un document | - |
| `DELETE` | `/api/documents/:id` | Supprimer un document | - |

### 🔐 Headers requis pour toutes les requêtes :
```javascript
{
  "Authorization": "Bearer " + userToken,
  "Content-Type": "application/json" // Sauf pour upload (FormData)
}
```

---

## 📤 Implémentation Upload de Fichiers

### **Interface suggérée :**
```
┌─────────────────────────────────────────────┐
│  📁 Mes Documents                           │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │     📤 Glisser-déposer vos fichiers │   │
│  │         ou cliquer pour choisir     │   │
│  │                                     │   │
│  │  Types acceptés: PDF, DOC, DOCX,   │   │
│  │  JPG, PNG (max 10MB par fichier)   │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  [📎 Choisir fichiers] [🚀 Uploader]       │
└─────────────────────────────────────────────┘
```

### **Code exemple (Vue.js) :**
```vue
<template>
  <div class="upload-zone">
    <!-- Zone drag & drop -->
    <div 
      class="dropzone"
      @dragover.prevent
      @drop="handleDrop"
      @click="$refs.fileInput.click()"
    >
      <input 
        ref="fileInput"
        type="file"
        multiple
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
        @change="handleFileSelect"
        style="display: none"
      />
      
      <div class="upload-content">
        <i class="icon-upload"></i>
        <p>Glisser-déposer vos fichiers ou cliquer pour choisir</p>
        <small>Types acceptés: PDF, DOC, DOCX, JPG, PNG (max 10MB)</small>
      </div>
    </div>
    
    <!-- Fichiers sélectionnés -->
    <div v-if="selectedFiles.length" class="selected-files">
      <h4>Fichiers sélectionnés :</h4>
      <div v-for="(file, index) in selectedFiles" :key="index" class="file-item">
        <span>{{ file.name }} ({{ formatSize(file.size) }})</span>
        <button @click="removeFile(index)">❌</button>
      </div>
      <button @click="uploadFiles" :disabled="uploading" class="upload-btn">
        {{ uploading ? 'Upload en cours...' : '🚀 Uploader' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFiles: [],
      uploading: false
    }
  },
  methods: {
    handleDrop(e) {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files);
      this.addFiles(files);
    },
    
    handleFileSelect(e) {
      const files = Array.from(e.target.files);
      this.addFiles(files);
    },
    
    addFiles(files) {
      // Validation des fichiers
      const validFiles = files.filter(file => {
        if (file.size > 10 * 1024 * 1024) {
          this.$toast.error(`${file.name} est trop volumineux (max 10MB)`);
          return false;
        }
        
        const allowedTypes = [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'image/jpeg',
          'image/png'
        ];
        
        if (!allowedTypes.includes(file.type)) {
          this.$toast.error(`${file.name} n'est pas un type de fichier autorisé`);
          return false;
        }
        
        return true;
      });
      
      this.selectedFiles = [...this.selectedFiles, ...validFiles];
    },
    
    removeFile(index) {
      this.selectedFiles.splice(index, 1);
    },
    
    async uploadFiles() {
      if (!this.selectedFiles.length) return;
      
      this.uploading = true;
      
      try {
        const formData = new FormData();
        this.selectedFiles.forEach(file => {
          formData.append('documents', file);
        });
        
        const response = await this.$api.post('/api/documents/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        
        if (response.data.success) {
          this.$toast.success(`${response.data.data.length} document(s) uploadé(s) avec succès`);
          this.selectedFiles = [];
          this.$emit('upload-success'); // Actualiser la liste
        }
        
      } catch (error) {
        this.$toast.error(error.response?.data?.message || 'Erreur lors de l\'upload');
      } finally {
        this.uploading = false;
      }
    },
    
    formatSize(bytes) {
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      if (bytes === 0) return '0 Bytes';
      const i = Math.floor(Math.log(bytes) / Math.log(1024));
      return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
    }
  }
}
</script>
```

---

## 📋 Affichage de la Liste des Documents

### **Interface suggérée :**
```
┌─────────────────────────────────────────────┐
│  📊 Statistiques                            │
│  📄 5 documents • 📦 24.5 MB • 🎯 3 PDF    │
├─────────────────────────────────────────────┤
│  🔍 Rechercher... [🔽 Type] [🔽 Date]      │
├─────────────────────────────────────────────┤
│  📄 Contrat-renovation.pdf                  │
│  📅 15 janv. 2025 • 📦 2.4 MB • 📥 ⭐ 🗑️  │
│  ─────────────────────────────────────────  │
│  🖼️ Photos-avant-travaux.jpg                │
│  📅 12 janv. 2025 • 📦 5.1 MB • 📥 ⭐ 🗑️  │
│  ─────────────────────────────────────────  │
│  📝 Cahier-charges.docx                     │
│  📅 10 janv. 2025 • 📦 1.2 MB • 📥 ⭐ 🗑️  │
└─────────────────────────────────────────────┘
```

### **Code exemple (Vue.js) :**
```vue
<template>
  <div class="documents-list">
    <!-- Statistiques -->
    <div class="stats-bar">
      <div class="stat">
        <i class="icon-document"></i>
        <span>{{ statistics.total }} documents</span>
      </div>
      <div class="stat">
        <i class="icon-storage"></i>
        <span>{{ formatBytes(statistics.totalSize) }}</span>
      </div>
      <div class="stat">
        <i class="icon-types"></i>
        <span>{{ Object.keys(statistics.byType).length }} types</span>
      </div>
    </div>
    
    <!-- Filtres -->
    <div class="filters">
      <input 
        v-model="searchTerm" 
        placeholder="🔍 Rechercher un document..."
        class="search-input"
      />
      <select v-model="selectedType" class="type-filter">
        <option value="">Tous les types</option>
        <option value="application/pdf">PDF</option>
        <option value="image/jpeg">Images JPG</option>
        <option value="image/png">Images PNG</option>
        <option value="application/msword">Documents Word</option>
      </select>
    </div>
    
    <!-- Liste des documents -->
    <div class="documents-grid">
      <div 
        v-for="doc in filteredDocuments" 
        :key="doc.id"
        class="document-card"
      >
        <div class="doc-icon">
          {{ getDocumentIcon(doc.mimeType) }}
        </div>
        
        <div class="doc-info">
          <h4>{{ doc.originalName }}</h4>
          <p class="doc-meta">
            📅 {{ doc.formattedUploadDate }} • 
            📦 {{ doc.formattedSize }} • 
            🏷️ {{ doc.readableFileType }}
          </p>
        </div>
        
        <div class="doc-actions">
          <button @click="downloadDocument(doc)" class="btn-download">
            📥 Télécharger
          </button>
          <button @click="deleteDocument(doc)" class="btn-delete">
            🗑️ Supprimer
          </button>
        </div>
      </div>
    </div>
    
    <!-- Pagination -->
    <div v-if="totalPages > 1" class="pagination">
      <button 
        v-for="page in totalPages" 
        :key="page"
        @click="loadPage(page)"
        :class="{ active: currentPage === page }"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      documents: [],
      statistics: {
        total: 0,
        totalSize: 0,
        byType: {}
      },
      searchTerm: '',
      selectedType: '',
      currentPage: 1,
      totalPages: 1,
      loading: false
    }
  },
  
  computed: {
    filteredDocuments() {
      let filtered = this.documents;
      
      // Filtrer par terme de recherche
      if (this.searchTerm) {
        filtered = filtered.filter(doc => 
          doc.originalName.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }
      
      // Filtrer par type
      if (this.selectedType) {
        filtered = filtered.filter(doc => doc.mimeType === this.selectedType);
      }
      
      return filtered;
    }
  },
  
  mounted() {
    this.loadDocuments();
  },
  
  methods: {
    async loadDocuments(page = 1) {
      this.loading = true;
      
      try {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: '10'
        });
        
        if (this.selectedType) {
          params.append('mimeType', this.selectedType);
        }
        
        const response = await this.$api.get(`/api/documents?${params}`);
        
        if (response.data.success) {
          this.documents = response.data.data.documents;
          this.statistics = response.data.data.statistics;
          this.currentPage = response.data.pagination.page;
          this.totalPages = response.data.pagination.totalPages;
        }
        
      } catch (error) {
        this.$toast.error('Erreur lors du chargement des documents');
      } finally {
        this.loading = false;
      }
    },
    
    async downloadDocument(doc) {
      try {
        const response = await this.$api.get(`/api/documents/${doc.id}/download`, {
          responseType: 'blob'
        });
        
        // Créer un lien de téléchargement
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.download = doc.originalName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        
        this.$toast.success(`${doc.originalName} téléchargé avec succès`);
        
      } catch (error) {
        this.$toast.error('Erreur lors du téléchargement');
      }
    },
    
    async deleteDocument(doc) {
      if (!confirm(`Êtes-vous sûr de vouloir supprimer "${doc.originalName}" ?`)) {
        return;
      }
      
      try {
        const response = await this.$api.delete(`/api/documents/${doc.id}`);
        
        if (response.data.success) {
          this.$toast.success('Document supprimé avec succès');
          this.loadDocuments(this.currentPage); // Recharger la page actuelle
        }
        
      } catch (error) {
        this.$toast.error('Erreur lors de la suppression');
      }
    },
    
    getDocumentIcon(mimeType) {
      const icons = {
        'application/pdf': '📄',
        'application/msword': '📝',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '📝',
        'image/jpeg': '🖼️',
        'image/png': '🖼️'
      };
      return icons[mimeType] || '📄';
    },
    
    formatBytes(bytes) {
      const sizes = ['Bytes', 'KB', 'MB', 'GB'];
      if (bytes === 0) return '0 Bytes';
      const i = Math.floor(Math.log(bytes) / Math.log(1024));
      return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
    },
    
    loadPage(page) {
      this.loadDocuments(page);
    }
  },
  
  watch: {
    selectedType() {
      this.loadDocuments(1); // Retourner à la page 1 lors du filtrage
    }
  }
}
</script>
```

---

## 🎨 Styles CSS Suggérés

```css
/* Zone d'upload */
.dropzone {
  border: 2px dashed #007bff;
  border-radius: 8px;
  padding: 40px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #f8f9fa;
}

.dropzone:hover {
  border-color: #0056b3;
  background: #e7f3ff;
}

.dropzone.dragover {
  border-color: #28a745;
  background: #d4edda;
}

/* Statistiques */
.stats-bar {
  display: flex;
  gap: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 20px;
}

.stat {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

/* Cartes de documents */
.documents-grid {
  display: grid;
  gap: 15px;
}

.document-card {
  display: flex;
  align-items: center;
  padding: 15px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background: white;
  transition: all 0.3s ease;
}

.document-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.doc-icon {
  font-size: 2rem;
  margin-right: 15px;
}

.doc-info {
  flex: 1;
}

.doc-info h4 {
  margin: 0 0 5px 0;
  font-size: 1.1rem;
  color: #333;
}

.doc-meta {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

.doc-actions {
  display: flex;
  gap: 10px;
}

.btn-download, .btn-delete {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.btn-download {
  background: #007bff;
  color: white;
}

.btn-download:hover {
  background: #0056b3;
}

.btn-delete {
  background: #dc3545;
  color: white;
}

.btn-delete:hover {
  background: #c82333;
}

/* Responsive */
@media (max-width: 768px) {
  .document-card {
    flex-direction: column;
    text-align: center;
  }
  
  .stats-bar {
    flex-direction: column;
    gap: 10px;
  }
  
  .doc-actions {
    width: 100%;
    justify-content: space-around;
    margin-top: 15px;
  }
}
```

---

## 🔧 Configuration API Client

### **Axios interceptor pour l'authentification :**
```javascript
// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 30000 // 30s pour les uploads
});

// Intercepteur pour ajouter le token automatiquement
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Intercepteur pour gérer les erreurs d'auth
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expiré, rediriger vers login
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
```

---

## 📱 Interface Mobile-First

### **Considérations UX mobile :**

1. **Upload tactile :**
   - Zone de drop plus grande
   - Bouton "Choisir fichiers" bien visible
   - Feedback visuel immédiat

2. **Liste optimisée :**
   - Cartes empilées verticalement
   - Actions en bas de chaque carte
   - Swipe pour supprimer (optionnel)

3. **Performance :**
   - Pagination pour éviter de charger trop de documents
   - Lazy loading des images/previews
   - Compression côté client si nécessaire

---

## 🚨 Gestion d'Erreurs

### **Messages d'erreur à prévoir :**

```javascript
const errorMessages = {
  // Upload
  'LIMIT_FILE_SIZE': 'Fichier trop volumineux (max 10MB)',
  'LIMIT_FILE_COUNT': 'Trop de fichiers (max 5 à la fois)',
  'INVALID_FILE_TYPE': 'Type de fichier non autorisé',
  
  // Authentification
  'TOKEN_EXPIRED': 'Session expirée, veuillez vous reconnecter',
  'ACCESS_DENIED': 'Accès refusé',
  
  // Réseau
  'NETWORK_ERROR': 'Erreur de connexion, vérifiez votre internet',
  'SERVER_ERROR': 'Erreur serveur, veuillez réessayer plus tard',
  
  // Documents
  'DOCUMENT_NOT_FOUND': 'Document non trouvé',
  'DOWNLOAD_FAILED': 'Échec du téléchargement'
};
```

---

## ✅ Checklist d'Implémentation

### **Phase 1 - Base :**
- [ ] Composant d'upload avec drag & drop
- [ ] Liste des documents avec pagination
- [ ] Téléchargement de fichiers
- [ ] Suppression de documents
- [ ] Gestion d'erreurs complète

### **Phase 2 - UX :**
- [ ] Statistiques en temps réel
- [ ] Filtres et recherche
- [ ] Indicateurs de progression upload
- [ ] Notifications toast
- [ ] Interface responsive

### **Phase 3 - Avancé :**
- [ ] Prévisualisation des images
- [ ] Upload par chunks (gros fichiers)
- [ ] Glisser-déposer depuis l'extérieur
- [ ] Historique des actions
- [ ] Compression automatique

---

## 🎯 Intégration dans le Dashboard

### **Structure suggérée :**
```
Dashboard Client
├── 🏠 Accueil
├── 📋 Mes Projets
├── 📄 Mes Documents ← Nouvelle section
│   ├── 📤 Upload
│   ├── 📋 Liste
│   └── 📊 Statistiques
├── 💬 Messages
└── ⚙️ Paramètres
```

### **Navigation :**
- Ajouter "Mes Documents" dans le menu principal
- Badge avec nombre de documents sur l'icône
- Lien rapide "Ajouter document" depuis autres sections

---

## 🚀 Points d'Attention

### **Performance :**
- Utilisez la pagination côté serveur
- Implémentez un système de cache pour les métadonnées
- Optimisez les images avant upload côté client

### **Sécurité :**
- Validez TOUJOURS les types de fichiers côté client ET serveur
- Limitez la taille des uploads
- Vérifiez l'authentification à chaque requête

### **Accessibilité :**
- Labels explicites pour les lecteurs d'écran
- Navigation au clavier
- Contrastes suffisants
- Messages d'erreur clairs

---

Le backend est prêt ! Il ne reste plus qu'à implémenter cette interface pour offrir une expérience complète à tes clients. 🎉
