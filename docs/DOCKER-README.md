# 🐳 Guide Docker pour Experta

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- [Docker Desktop](https://www.docker.com/products/docker-desktop) (inclut Docker et Docker Compose)
- Git (pour cloner le projet)

## 🚀 Démarrage rapide

### Développement (avec hot-reload)
```powershell
# Méthode 1 : Avec le script PowerShell
.\docker-start.ps1 dev

# Méthode 2 : Commande directe
docker-compose up --build experta-dev
```

### Production
```powershell
# Méthode 1 : Avec le script PowerShell
.\docker-start.ps1 prod

# Méthode 2 : Commande directe
docker-compose --profile production up --build experta-prod
```

## 📁 Structure des fichiers Docker

```
experta/
├── Dockerfile              # Image multi-stage pour production
├── Dockerfile.dev          # Image pour développement
├── docker-compose.yml      # Orchestration des conteneurs
├── nginx.conf              # Configuration Nginx pour la production
├── .dockerignore            # Fichiers à exclure du build
├── docker-start.ps1         # Script PowerShell pour faciliter l'usage
└── DOCKER-README.md         # Cette documentation
```

## 🔧 Commandes utiles

### Gestion des conteneurs
```powershell
# Démarrer en mode développement
docker-compose up experta-dev

# Démarrer en arrière-plan
docker-compose up -d experta-dev

# Voir les logs
docker-compose logs -f experta-dev

# Arrêter les conteneurs
docker-compose down

# Reconstruire l'image
docker-compose build experta-dev
```

### Nettoyage
```powershell
# Arrêter et supprimer les conteneurs
docker-compose down

# Nettoyage complet (avec le script)
.\docker-start.ps1 clean

# Nettoyage manuel
docker-compose down --rmi all --volumes
docker system prune -f
```

## 🔍 Détails techniques

### Dockerfile (Production)
- **Multi-stage build** : Sépare la construction de l'exécution
- **Stage 1** : Construction avec Node.js (build des assets)
- **Stage 2** : Serveur Nginx léger pour servir les fichiers statiques
- **Optimisations** : Cache des layers Docker, image finale très légère

### Dockerfile.dev (Développement)
- Image Node.js complète avec tous les outils de dev
- Hot-reload activé via volumes montés
- Port 5173 exposé (port par défaut de Vite)

### nginx.conf
- Configuration optimisée pour SPA (Single Page Application)
- Gestion du routing côté client avec `try_files`
- Compression gzip activée
- Headers de sécurité
- Cache optimisé pour les assets statiques

### docker-compose.yml
- **experta-dev** : Service de développement avec hot-reload
- **experta-prod** : Service de production avec Nginx
- **Réseaux** : Réseau isolé pour les conteneurs
- **Volumes** : Montage du code source pour le développement

## 🌐 Accès à l'application

- **Développement** : http://localhost:5173
- **Production** : http://localhost:80

## 🔧 Personnalisation

### Variables d'environnement
Vous pouvez créer un fichier `.env` à la racine du projet :
```env
NODE_ENV=development
VITE_API_URL=http://localhost:3000
```

### Ports personnalisés
Modifiez le `docker-compose.yml` :
```yaml
ports:
  - "8080:5173"  # Port personnalisé
```

## 📊 Optimisations

### Taille des images
- **Image de production** : ~25MB (Nginx + assets)
- **Image de développement** : ~200MB (Node.js + dépendances)

### Performance
- Cache des layers Docker grâce à l'ordre optimisé des COPY
- Compression gzip activée
- Assets statiques cachés côté navigateur
- Hot-reload instantané en développement

## 🚨 Dépannage

### Port déjà utilisé
```powershell
# Voir les processus utilisant le port 5173
netstat -ano | findstr :5173

# Tuer le processus (remplacer PID par l'ID du processus)
taskkill /PID <PID> /F
```

### Problèmes de cache
```powershell
# Reconstruire sans cache
docker-compose build --no-cache experta-dev

# Nettoyer tout le cache Docker
docker system prune -a
```

### Permissions (si problème)
```powershell
# Assurer que Docker Desktop est lancé en administrateur
# Redémarrer Docker Desktop
```

## 📈 Prochaines étapes

Pour aller plus loin, vous pourriez :
1. **CI/CD** : Intégrer dans GitHub Actions
2. **Base de données** : Ajouter PostgreSQL/MongoDB au docker-compose
3. **Reverse proxy** : Utiliser Traefik pour plusieurs apps
4. **Monitoring** : Ajouter des logs et métriques
5. **Sécurité** : Scan de vulnérabilités avec Trivy 