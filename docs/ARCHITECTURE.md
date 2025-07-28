# 🏗️ Architecture du projet Experta

## 📁 Structure actuelle recommandée

```
experta/
├── 📄 Configuration de base
│   ├── package.json                 # Dépendances et scripts
│   ├── vite.config.js               # Configuration Vite
│   ├── tailwind.config.js           # Configuration Tailwind
│   ├── postcss.config.js            # Configuration PostCSS
│   └── index.html                   # Point d'entrée HTML
│
├── 🌍 Variables d'environnement
│   └── .env                         # Variables locales (non committées)
│
├── 🐳 Configuration Docker
│   ├── Dockerfile                   # Image de production
│   ├── Dockerfile.dev               # Image de développement
│   ├── docker-compose.yml           # Orchestration
│   ├── nginx.conf                   # Configuration Nginx
│   └── .dockerignore                # Exclusions Docker
│
├── 📱 Code source (src/)
│   ├── main.js                      # Point d'entrée de l'application
│   ├── App.vue                      # Composant racine
│   ├── style.css                    # Styles globaux
│   │
│   ├── 📦 components/               # Composants réutilisables
│   │   ├── NavBar.vue              # Navigation
│   │   ├── Footer.vue              # Pied de page
│   │   └── ExamplePiniaUsage.vue   # Exemple Pinia
│   │
│   ├── 📄 views/                    # Pages de l'application
│   │   ├── HomeView.vue            # Page d'accueil
│   │   ├── AuthView.vue            # Authentification
│   │   ├── RegisterView.vue        # Inscription
│   │   ├── ClientDashboard.vue     # Tableau de bord client
│   │   ├── ArtisanDashboard.vue    # Tableau de bord artisan
│   │   ├── ArtisanProfile.vue      # Profil artisan
│   │   ├── ArtisanSearch.vue       # Recherche d'artisans
│   │   └── ArtisanSearchView.vue   # Vue de recherche
│   │
│   ├── 🛣️ router/                   # Configuration des routes
│   │   └── index.js                # Définition des routes
│   │
│   ├── 🗂️ stores/                   # Gestion d'état (Pinia)
│   │   ├── index.js                # Configuration Pinia
│   │   ├── user.js                 # Store utilisateur
│   │   ├── projects.js             # Store projets
│   │   └── notifications.js        # Store notifications
│   │
│   └── 🎨 assets/                   # Ressources statiques
│       ├── images/                 # Images
│       ├── icons/                  # Icônes
│       └── fonts/                  # Polices (si nécessaire)
│
├── 🌐 Ressources publiques (public/)
│   ├── vite.svg                    # Logo Vite
│   └── manifest.json               # Manifest PWA
│
├── 📚 Documentation
│   ├── README.md                   # Documentation principale
│   ├── docs/                       # Dossier de documentation
│   └── ARCHITECTURE.md             # Ce fichier
│
└── 🔧 Configuration système
    ├── .git/                       # Git (généré)
    ├── .gitignore                  # Exclusions Git
    ├── .vscode/                    # Configuration VSCode
    └── node_modules/               # Dépendances (généré)
```

## 🧹 Fichiers à supprimer (nettoyage)

### ❌ Fichiers cassés/inutiles :
- `src/components/SimpleExample.vue` (1 byte - cassé)
- `src/components/EnvironmentInfo.vue` (1 byte - cassé)
- `.env.example` (vide)

### 📁 Dossiers vides :
- `src/config/` (vide après suppression de env.js)

### 🚫 Fichiers générés (ne pas committer) :
- `dist/` (fichiers buildés)

## ✅ Bonnes pratiques appliquées

### 📦 Composants
- **NavBar.vue** : Navigation principale
- **Footer.vue** : Pied de page
- **ExamplePiniaUsage.vue** : Exemple d'utilisation des stores

### 📄 Vues (Pages)
- Séparation claire entre composants et pages
- Nomenclature cohérente avec suffixe `View.vue`

### 🗂️ Stores (Pinia)
- **user.js** : Gestion de l'utilisateur connecté
- **projects.js** : Gestion des projets
- **notifications.js** : Gestion des notifications

### 🛣️ Router
- Configuration centralisée des routes
- Lazy loading des composants (recommandé pour plus tard)

## 🚀 Prochaines améliorations

### 🔧 Structure à ajouter quand le projet grandit :

```
src/
├── 🎨 assets/
│   ├── images/          # Images organisées par contexte
│   ├── icons/           # SVG icons
│   └── styles/          # SCSS/CSS modulaires
│
├── 🔧 composables/      # Vue 3 Composition API
│   ├── useAuth.js       # Logique d'authentification
│   ├── useApi.js        # Logique d'API
│   └── useNotifications.js # Logique de notifications
│
├── 🛠️ utils/            # Fonctions utilitaires
│   ├── api.js           # Configuration API
│   ├── helpers.js       # Fonctions d'aide
│   └── constants.js     # Constantes
│
├── 🧪 __tests__/        # Tests unitaires
│   ├── components/      # Tests des composants
│   └── views/           # Tests des vues
│
└── 📄 types/            # Types TypeScript (si migration)
    └── index.ts
```

## 🎯 Commandes de nettoyage

```powershell
# Supprimer les fichiers inutiles
Remove-Item "src/components/SimpleExample.vue", "src/components/EnvironmentInfo.vue", ".env.example"

# Supprimer les dossiers vides
Remove-Item "src/config", "dist" -Recurse -Force

# Reconstruire proprement
npm run build
```

## 📋 Checklist de maintenance

- [ ] Supprimer les fichiers cassés/inutiles
- [ ] Vérifier que .gitignore est à jour
- [ ] Organiser les assets par contexte
- [ ] Documenter les nouveaux composants
- [ ] Maintenir la cohérence de nomenclature
- [ ] Tester que l'application fonctionne après nettoyage 