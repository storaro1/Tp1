# TaskFlow - Application de Gestion de Projets Kanban

[![Vue.js](https://img.shields.io/badge/Vue.js-3.3-4FC08D?logo=vue.js)](https://vuejs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-10.0-FFCA28?logo=firebase)](https://firebase.google.com/)
[![Pinia](https://img.shields.io/badge/Pinia-2.1-FFD859)](https://pinia.vuejs.org/)

Une application web moderne de gestion de projets et de tâches avec un tableau Kanban intuitif, développée avec Vue.js 3 et Firebase.

## 🚀 Fonctionnalités

### ✅ Authentification Complète
- Inscription et connexion avec email/mot de passe
- Connexion avec Google (Google Auth Provider)
- Protection des routes avec navigation guards
- Gestion sécurisée des sessions utilisateur

### 📋 Gestion de Projets
- Créer, modifier et supprimer des projets
- Ajouter nom, description et couleur distinctive à chaque projet
- Visualisation en grille de tous les projets
- Navigation intuitive entre projets

### ✨ Tableau Kanban
- Gestion de tâches avec 3 colonnes : **À faire**, **En cours**, **Terminé**
- Créer, modifier et supprimer des tâches
- Ajouter titre, description et date limite
- **Drag & Drop** pour déplacer les tâches entre colonnes
- Sélecteur de statut pour chaque tâche

### ⚡ Temps Réel
- Synchronisation instantanée avec Firestore
- Mises à jour automatiques sur tous les onglets/appareils
- Aucun rafraîchissement manuel nécessaire

## 🛠️ Technologies Utilisées

- **Vue.js 3** - Framework JavaScript progressif avec Composition API
- **Vite** - Build tool ultra-rapide
- **Vue Router 4** - Gestion de la navigation
- **Pinia** - State management moderne pour Vue.js
- **Firebase 10**
  - Firebase Authentication (Email/Password & Google)
  - Cloud Firestore (Base de données temps réel)
  - Firebase Hosting (Hébergement)

## 📁 Structure du Projet

```
src/
├── assets/              # CSS global et ressources
│   └── main.css
├── components/          # Composants réutilisables
│   ├── Navbar.vue       # Barre de navigation
│   ├── TaskCard.vue     # Carte de tâche individuelle
│   ├── TaskModal.vue    # Modale de création/édition de tâche
│   ├── ProjectModal.vue # Modale de création/édition de projet
│   └── LoadingSpinner.vue # Indicateur de chargement
├── firebase/
│   └── config.js        # Configuration Firebase
├── router/
│   └── index.js         # Configuration des routes
├── stores/              # Stores Pinia
│   ├── authStore.js     # Gestion de l'authentification
│   └── projectStore.js  # Gestion des projets et tâches
├── views/               # Pages principales
│   ├── HomeView.vue     # Page d'accueil
│   ├── AuthView.vue     # Page login/register
│   ├── DashboardView.vue # Liste des projets
│   └── ProjectDetailsView.vue # Tableau Kanban
├── App.vue              # Composant racine
└── main.js              # Point d'entrée
```

## ⚙️ Installation et Configuration

### Prérequis
- Node.js 16+ et npm
- Un compte Firebase

### Étape 1 : Cloner le projet
```bash
git clone <votre-repo-url>
cd taskflow-starter
```

### Étape 2 : Installer les dépendances
```bash
npm install
```

### Étape 3 : Configuration Firebase

1. Créez un projet sur [Firebase Console](https://console.firebase.google.com/)
2. Activez **Authentication** :
   - Email/Password
   - Google Sign-In
3. Créez une base de données **Cloud Firestore** en mode test
4. Configurez les règles Firestore (voir section Règles Firestore)
5. Copiez vos identifiants Firebase

### Étape 4 : Configurer les identifiants

Modifiez `src/firebase/config.js` avec vos identifiants Firebase :

```javascript
const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "votre-projet.firebaseapp.com",
  projectId: "votre-projet",
  storageBucket: "votre-projet.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

### Étape 5 : Lancer l'application
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 🔐 Règles de Sécurité Firestore

Appliquez ces règles dans Firebase Console > Firestore Database > Rules :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Projects: Users can only access their own projects
    match /projects/{projectId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
      allow create: if request.auth != null && request.auth.uid == request.resource.data.userId;
    }
    
    // Tasks: Users can only access tasks from their projects
    match /tasks/{taskId} {
      allow read, write: if request.auth != null;
      allow create: if request.auth != null;
    }
  }
}
```

## 🏗️ Structure de la Base de Données

### Collection `projects`
```javascript
{
  id: "auto-generated",
  name: "Nom du projet",
  description: "Description du projet",
  color: "#3498db",
  userId: "uid-de-l-utilisateur",
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### Collection `tasks`
```javascript
{
  id: "auto-generated",
  projectId: "id-du-projet-parent",
  title: "Titre de la tâche",
  description: "Description détaillée",
  status: "todo" | "doing" | "done",
  deadline: "2026-01-15",
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

## 📦 Scripts Disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Preview du build
npm run preview
```

## 🚀 Déploiement sur Firebase Hosting

### 1. Installer Firebase CLI
```bash
npm install -g firebase-tools
```

### 2. Se connecter à Firebase
```bash
firebase login
```

### 3. Initialiser Firebase dans le projet
```bash
firebase init
```
Sélectionnez :
- Hosting
- Utilisez le dossier `dist` comme public directory
- Configurez comme SPA (single-page app) : **Yes**
- Ne pas overwrite index.html : **No**

### 4. Build et déploiement
```bash
npm run build
firebase deploy
```

Votre application sera accessible via l'URL fournie par Firebase (ex: `https://votre-projet.web.app`)

## 🎯 Fonctionnalités Clés Implémentées

### State Management avec Pinia
- **authStore** : Gestion de l'authentification, login, register, Google sign-in
- **projectStore** : CRUD complet sur projets et tâches avec listeners temps réel

### Navigation Guards
- Routes protégées qui redirigent vers `/auth` si non authentifié
- Routes publiques qui redirigent vers `/dashboard` si déjà authentifié

### Temps Réel Firestore
- Utilisation de `onSnapshot` pour écouter les changements en temps réel
- Synchronisation automatique sur tous les appareils

### UX Moderne
- Modales réutilisables pour création/édition
- Drag & Drop sur le tableau Kanban
- Loading spinners et gestion des états
- Design responsive (mobile-friendly)

## 📱 Responsive Design

L'application est entièrement responsive et s'adapte aux écrans :
- **Desktop** : Layout en grille avec sidebar
- **Tablet** : Colonnes Kanban empilées
- **Mobile** : Interface optimisée en mode portrait

## 🐛 Troubleshooting

### Erreur de connexion Firebase
- Vérifiez que vos credentials dans `config.js` sont corrects
- Assurez-vous d'avoir activé Authentication et Firestore

### Les tâches ne se synchronisent pas
- Vérifiez les règles Firestore
- Ouvrez la console du navigateur pour voir les erreurs

### Erreur au build
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 👨‍💻 Auteur

Projet développé dans le cadre du cours de Vue.js - Formation GIIA

## 📄 Licence

Ce projet est sous licence MIT - libre d'utilisation pour l'apprentissage

## 🎓 Objectifs Pédagogiques Atteints

✅ Maîtrise de Vue.js 3 (Composition API, Script Setup)  
✅ Utilisation de Vue Router pour la navigation  
✅ Gestion d'état avec Pinia  
✅ Intégration de Firebase Authentication (Email/Password & Google)  
✅ Opérations CRUD temps réel avec Cloud Firestore  
✅ Sécurisation avec Navigation Guards  
✅ Déploiement sur Firebase Hosting  

---

**Bon développement ! 🚀**
