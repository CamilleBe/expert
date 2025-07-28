# Tableau de Bord Client - Experta

## Vue d'ensemble

Le composant `ClientDashboard.vue` est une interface complète de gestion pour les clients de la plateforme Experta. Il permet aux utilisateurs de gérer leurs projets, documents, paiements et interactions avec les artisans.

## Fonctionnalités principales

### 🏠 Vue d'ensemble
- **Statistiques rapides** : Projets actifs, terminés, documents en attente, budget total
- **Projets récents** : Aperçu des derniers projets avec statuts et budgets
- **Interface intuitive** : Design moderne et responsive

### 📋 Gestion des projets
- **Liste complète** : Visualisation de tous les projets (actifs et terminés)
- **Cartes détaillées** : Titre, description, artisan, budget et statut
- **Actions rapides** : Voir détails, noter l'artisan
- **Bouton d'ajout** : Créer un nouveau projet

### 📄 Gestion des documents
- **Zone de dépôt drag & drop** : Interface moderne pour uploader des fichiers
- **Types supportés** : PDF, DOC, JPG, PNG (jusqu'à 10MB)
- **Liste organisée** : Tri par type, taille et date
- **Actions disponibles** : Télécharger, supprimer
- **Audit automatique** : Vérification des pièces justificatives

### 💳 Gestion des paiements
- **Résumé financier** : Factures payées, en attente, total engagé
- **Tableau détaillé** : Historique complet des transactions
- **Statuts visuels** : Codes couleur pour les différents états
- **Actions sécurisées** : Paiement en ligne, téléchargement de factures
- **Suivi transparent** : Libération progressive des fonds

### 🎥 Visioconférences
- **Réunions à venir** : Interface claire avec boutons d'action
- **Planification** : Outil pour programmer de nouvelles visios
- **Historique** : Archive des réunions passées
- **Intégration simple** : Rejoindre directement depuis l'interface

### ⭐ Système d'évaluation
- **Projets à évaluer** : Liste des travaux terminés en attente de notation
- **Interface d'évaluation** : Modal avec notation par étoiles et commentaires
- **Historique des avis** : Consultez vos évaluations passées
- **Transparence** : Encourager la qualité des services

### 🔔 Notifications
- **Centre de notifications** : Dropdown avec compteur de messages non lus
- **Types de notifications** :
  - Documents manquants
  - Nouveaux devis reçus
  - Mises à jour de projets
  - Réponses d'artisans
- **Notifications email** : Système automatique intégré

## Architecture technique

### Composant Vue 3
- **Composition API** : Utilisation de `ref()` pour la réactivité
- **Gestion d'état local** : Variables réactives pour l'interface
- **Modularité** : Structure claire et maintenable

### Design System
- **Tailwind CSS** : Framework CSS utilitaire
- **Cohérence visuelle** : Reprise de la charte graphique d'Experta
- **Responsive** : Adaptation automatique mobile/desktop
- **Animations** : Transitions fluides et modernes

### Navigation
- **Sidebar fixe** : Navigation principale toujours accessible
- **Onglets dynamiques** : Changement de contenu sans rechargement
- **États visuels** : Indicateur d'onglet actif

## Utilisation

### Accès au tableau de bord
```
URL: /dashboard
Route: ClientDashboard
```

### Navigation entre sections
La navigation se fait via la sidebar gauche avec 6 sections principales :
1. Vue d'ensemble
2. Mes projets
3. Documents
4. Paiements
5. Visioconférences
6. Évaluations

### Données de démonstration
Le composant inclut des données factices pour démonstration :
- Projets d'exemple (salle de bain, électricité, peinture)
- Documents types (devis, contrats, factures)
- Historique de paiements
- Réunions planifiées
- Évaluations clients

## Intégration backend

### API endpoints suggérés
```javascript
// Projets
GET /api/user/projects
POST /api/projects
PUT /api/projects/:id

// Documents
POST /api/documents/upload
GET /api/documents
DELETE /api/documents/:id

// Paiements
GET /api/payments
POST /api/payments/:id/pay

// Visios
GET /api/meetings
POST /api/meetings

// Évaluations
POST /api/reviews
GET /api/reviews/mine
```

### Authentification
Le composant nécessite une authentification utilisateur pour :
- Accéder aux données personnelles
- Effectuer des actions (upload, paiement, notation)
- Recevoir des notifications ciblées

## Sécurité

### Upload de fichiers
- Validation côté client (type, taille)
- Vérification serveur requise
- Stockage sécurisé des documents

### Paiements
- Intégration gateway de paiement sécurisé
- Chiffrement des données sensibles
- Conformité PCI DSS

### Données personnelles
- Respect RGPD
- Chiffrement des informations sensibles
- Logs d'audit des accès

## Améliorations futures

### Fonctionnalités avancées
- Chat en temps réel avec les artisans
- Suivi GPS des interventions
- Galerie photo avant/après
- Comparateur de devis automatique
- Planificateur de travaux intelligent

### UX/UI
- Mode sombre
- Personnalisation du dashboard
- Widgets modulaires
- Notifications push

### Mobile
- Application mobile native
- Notifications push mobiles
- Mode hors ligne partiel 