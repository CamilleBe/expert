# Utilisation d'une image multi-stage pour optimiser la taille finale
# Étape 1: Construction (Build stage)
FROM node:20-alpine AS builder

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de gestion des dépendances
# On copie d'abord package*.json pour optimiser le cache Docker
COPY package*.json ./

# Installer les dépendances
# npm ci est plus rapide et plus fiable pour la production que npm install
# On installe toutes les dépendances (y compris dev) car on a besoin de Vite pour builder
RUN npm ci

# Copier tout le code source
COPY . .

# Construire l'application pour la production
RUN npm run build

# Étape 2: Production (Runtime stage)
FROM nginx:alpine AS production

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/nginx.conf

# Copier les fichiers construits depuis l'étape builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"] 