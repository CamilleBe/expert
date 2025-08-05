# 🐳 Scripts Docker pour Experta

## Démarrage des services

### Développement
```bash
# Démarrer en mode développement
docker-compose up experta-dev

# Démarrer en arrière-plan
docker-compose up -d experta-dev

# Voir les logs
docker-compose logs -f experta-dev
```

### Production
```bash
# Démarrer en mode production
docker-compose --profile production up experta-prod

# Démarrer en arrière-plan
docker-compose --profile production up -d experta-prod
```

## Gestion des conteneurs

```bash
# Arrêter les services
docker-compose down

# Reconstruire les images
docker-compose build experta-dev

# Redémarrer après modifications
docker-compose restart experta-dev

# Voir les conteneurs actifs
docker-compose ps
```

## URLs d'accès

### Développement
- Application : http://localhost:5173
- Routes disponibles :
  - / (Accueil)
  - /inscription (Inscription)
  - /auth (Connexion)
  - /search (Recherche artisans)
  - /dashboard (Tableau de bord client)
  - /artisan/:id (Profil artisan)

### Production
- Application : http://localhost (port 80)
- Mêmes routes disponibles

## Variables d'environnement

### Développement
- VITE_API_URL=http://localhost:3000/api
- VITE_APP_URL=http://localhost:5173

### Production  
- VITE_API_URL=https://api.experta.com/api
- VITE_APP_URL=https://experta.com

## Hot-reload

En mode développement, le code est synchronisé avec le conteneur :
- Modifiez vos fichiers localement
- Les changements sont automatiquement reflétés dans le conteneur
- Pas besoin de redémarrer le conteneur