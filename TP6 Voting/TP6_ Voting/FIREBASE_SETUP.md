# Guide de Configuration Firebase

## 1. Configuration de Firebase Console

### Créer un projet Firebase
1. Allez sur https://console.firebase.google.com/
2. Cliquez sur "Ajouter un projet"
3. Donnez un nom à votre projet (ex: "ensa-voting-app")
4. Suivez les étapes de création

### Activer Authentication
1. Dans votre projet, allez dans "Authentication"
2. Cliquez sur "Commencer"
3. Dans l'onglet "Sign-in method", activez "Email/Password"

### Créer la base Firestore
1. Allez dans "Firestore Database"
2. Cliquez sur "Créer une base de données"
3. Choisissez le mode "Production" ou "Test"
4. Sélectionnez une région (ex: europe-west)

### Configurer les règles Firestore
Dans l'onglet "Règles", ajoutez ces règles de sécurité:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Les événements sont lisibles par tous les utilisateurs authentifiés
    match /events/{eventId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null; // Pour les mises à jour de votes
    }
    
    // Les votes ne peuvent être créés qu'une fois par utilisateur/événement
    match /votes/{voteId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null && 
                       request.resource.data.userId == request.auth.uid;
      allow update, delete: if false;
    }
  }
}
```

### Obtenir les identifiants Firebase
1. Dans les paramètres du projet (⚙️ > Paramètres du projet)
2. Dans "Vos applications", cliquez sur l'icône Web (</>)
3. Enregistrez une application web
4. Copiez les valeurs de `firebaseConfig`

## 2. Configuration du projet local

### Modifier src/firebase/config.js
Remplacez les valeurs dans `src/firebase/config.js`:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...", // Votre API Key
  authDomain: "votre-projet.firebaseapp.com",
  projectId: "votre-projet-id",
  storageBucket: "votre-projet.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
}
```

### Modifier .firebaserc
Remplacez `YOUR_PROJECT_ID` par votre ID de projet Firebase.

## 3. Ajouter des événements de test

Allez dans Firestore Database et créez la collection "events" avec des documents:

### Exemple d'événement:
```json
{
  "img": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  "title": "Concert de fin d'année",
  "description": "Un concert pour célébrer la fin de l'année universitaire.",
  "date": "2024-07-01T18:00:00Z",
  "isFree": true,
  "price": 0,
  "yesVotes": 0,
  "noVotes": 0,
  "createdAt": "2024-06-20T12:00:00Z",
  "updatedAt": "2024-06-20T12:00:00Z"
}
```

### Autre exemple (événement payant):
```json
{
  "img": "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
  "title": "Gala annuel",
  "description": "Soirée de gala avec dîner et spectacle.",
  "date": "2024-06-15T19:00:00Z",
  "isFree": false,
  "price": 150,
  "yesVotes": 0,
  "noVotes": 0,
  "createdAt": "2024-06-10T10:00:00Z",
  "updatedAt": "2024-06-10T10:00:00Z"
}
```

## 4. Installation et lancement

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# L'application sera accessible sur http://localhost:3000
```

## 5. Déploiement sur Firebase Hosting

### Installer Firebase CLI
```bash
npm install -g firebase-tools
```

### Se connecter à Firebase
```bash
firebase login
```

### Initialiser Firebase dans le projet
```bash
firebase init
```

Sélectionnez:
- Hosting
- Utilisez le projet existant
- Public directory: `dist`
- Single-page app: `Yes`
- GitHub workflows: `No`

### Compiler et déployer
```bash
# Compiler le projet
npm run build

# Déployer sur Firebase
firebase deploy
```

Votre application sera disponible sur: `https://votre-projet-id.web.app`

## Notes importantes

- Assurez-vous que l'authentification par email/mot de passe est activée
- Les règles Firestore doivent être correctement configurées
- Testez d'abord en local avant de déployer
- Gardez vos identifiants Firebase secrets (ne les commitez pas dans un repo public)
