# ENSA Safi - Application de Vote

Application web de vote pour les événements de l'ENSA Safi développée avec Vue.js et Firebase.

https://tp66-7a51e.web.app/

## Fonctionnalités

- 🔐 Authentification avec Firebase (email/password)
- 📋 Affichage des événements en temps réel
- 🗳️ Système de vote (Yes/No) avec limite d'un vote par utilisateur
- 📱 Interface responsive
- ☁️ Déploiement Firebase Hosting

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Compiler pour la production
npm run build
```

## Configuration Firebase

1. Créez un projet Firebase sur https://console.firebase.google.com/
2. Activez Authentication (Email/Password)
3. Créez une base de données Firestore
4. Copiez vos identifiants Firebase dans `src/firebase/config.js`

## Structure Firestore

### Collection: events
```json
{
  "img": "URL de l'image",
  "title": "Titre de l'événement",
  "description": "Description",
  "date": "2024-07-01T18:00:00Z",
  "isFree": true,
  "price": 100,
  "yesVotes": 0,
  "noVotes": 0,
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Collection: votes
```json
{
  "eventId": "event123",
  "userId": "user456",
  "vote": "yes",
  "createdAt": "timestamp"
}
```

## Déploiement

```bash
# Installer Firebase CLI
npm install -g firebase-tools

# Se connecter à Firebase
firebase login

# Initialiser Firebase
firebase init

# Déployer
firebase deploy
```
