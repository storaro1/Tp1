# Guide Complet de Configuration Firebase et Déploiement

## 📋 Table des matières
1. [Configuration Firebase](#1-configuration-firebase)
2. [Configuration du Projet](#2-configuration-du-projet)
3. [Structure de la Base de Données](#3-structure-de-la-base-de-données)
4. [Déploiement](#4-déploiement)
5. [Post-Déploiement](#5-post-déploiement)

---

## 1. Configuration Firebase

### 1.1 Créer un Projet Firebase

1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Cliquez sur **"Ajouter un projet"**
3. Entrez un nom pour votre projet (ex: "forum-communautaire")
4. Acceptez les conditions et cliquez sur **"Continuer"**
5. Désactivez Google Analytics (optionnel) ou configurez-le
6. Cliquez sur **"Créer le projet"**

### 1.2 Activer Firebase Authentication

1. Dans la console Firebase, allez dans **"Authentication"**
2. Cliquez sur **"Commencer"**
3. Dans l'onglet **"Sign-in method"**, activez :
   - **Email/Password** : Cliquez dessus → Activez → Enregistrer
4. (Optionnel) Configurez les templates d'emails dans l'onglet **"Templates"**

### 1.3 Créer une Base de Données Firestore

1. Dans la console Firebase, allez dans **"Firestore Database"**
2. Cliquez sur **"Créer une base de données"**
3. Choisissez **"Commencer en mode test"** (nous appliquerons les règles de sécurité plus tard)
4. Sélectionnez une région proche de vos utilisateurs (ex: `europe-west1` pour l'Europe)
5. Cliquez sur **"Activer"**

### 1.4 Activer Firebase Storage

1. Dans la console Firebase, allez dans **"Storage"**
2. Cliquez sur **"Commencer"**
3. Acceptez les règles de sécurité par défaut
4. Sélectionnez la même région que Firestore
5. Cliquez sur **"Terminé"**

### 1.5 Obtenir les Clés de Configuration

1. Dans la console Firebase, cliquez sur l'icône **engrenage ⚙️** → **"Paramètres du projet"**
2. Faites défiler jusqu'à **"Vos applications"**
3. Cliquez sur l'icône **Web** `</>`
4. Donnez un surnom à votre application (ex: "Forum Web")
5. Cochez **"Configurer également Firebase Hosting"**
6. Cliquez sur **"Enregistrer l'application"**
7. Copiez la configuration Firebase qui ressemble à :

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "votre-projet.firebaseapp.com",
  projectId: "votre-projet",
  storageBucket: "votre-projet.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

---

## 2. Configuration du Projet

### 2.1 Mettre à Jour la Configuration Firebase

1. Ouvrez le fichier `src/firebase/config.js`
2. Remplacez les valeurs par celles de votre projet :

```javascript
const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "VOTRE_AUTH_DOMAIN",
  projectId: "VOTRE_PROJECT_ID",
  storageBucket: "VOTRE_STORAGE_BUCKET",
  messagingSenderId: "VOTRE_MESSAGING_SENDER_ID",
  appId: "VOTRE_APP_ID"
}
```

### 2.2 Installer les Dépendances

```bash
# Installer les dépendances du projet
npm install

# Installer Firebase CLI globalement
npm install -g firebase-tools
```

### 2.3 Se Connecter à Firebase CLI

```bash
# Se connecter à votre compte Firebase
firebase login

# Initialiser Firebase dans votre projet
firebase init
```

Lors de l'initialisation, sélectionnez :
- ✅ **Firestore**: Configure security rules and indexes files
- ✅ **Hosting**: Configure files for Firebase Hosting
- ✅ **Storage**: Configure security rules file

Configuration recommandée :
- Firestore rules file: `firestore.rules` (déjà créé)
- Firestore indexes file: `firestore.indexes.json` (déjà créé)
- Public directory: `dist`
- Configure as single-page app: **Yes**
- Set up automatic builds with GitHub: **No** (ou Yes si vous voulez CI/CD)
- Storage rules file: `storage.rules` (déjà créé)

---

## 3. Structure de la Base de Données

### 3.1 Collections Firestore

Votre application utilisera ces collections :

#### **users** (Collection)
```javascript
{
  uid: "user-id",              // ID de l'utilisateur (Auth UID)
  displayName: "John Doe",     // Nom d'affichage
  email: "john@example.com",   // Email
  bio: "...",                  // Biographie (optionnel)
  isModerator: false,          // Rôle de modérateur
  createdAt: Timestamp,        // Date de création
  photoURL: "url"              // Photo de profil (optionnel)
}
```

#### **discussions** (Collection)
```javascript
{
  id: "discussion-id",         // ID auto-généré
  title: "Titre discussion",   // Titre
  content: "Contenu...",       // Contenu
  category: "tech",            // Catégorie (general, tech, support, etc.)
  authorId: "user-id",         // ID de l'auteur
  authorName: "John Doe",      // Nom de l'auteur
  replies: 5,                  // Nombre de réponses
  views: 120,                  // Nombre de vues
  reported: false,             // Signalé ou non
  reportCount: 0,              // Nombre de signalements
  createdAt: Timestamp,        // Date de création
  updatedAt: Timestamp,        // Date de modification
  lastReplyAt: Timestamp       // Date de dernière réponse
}
```

#### **replies** (Collection)
```javascript
{
  id: "reply-id",              // ID auto-généré
  content: "Contenu...",       // Contenu de la réponse
  discussionId: "discussion-id", // ID de la discussion
  authorId: "user-id",         // ID de l'auteur
  authorName: "John Doe",      // Nom de l'auteur
  reported: false,             // Signalé ou non
  reportCount: 0,              // Nombre de signalements
  createdAt: Timestamp,        // Date de création
  updatedAt: Timestamp         // Date de modification
}
```

### 3.2 Appliquer les Règles de Sécurité

Les règles de sécurité sont dans `firestore.rules`. Pour les déployer :

```bash
firebase deploy --only firestore:rules
```

### 3.3 Créer les Index Firestore

Les index sont dans `firestore.indexes.json`. Pour les déployer :

```bash
firebase deploy --only firestore:indexes
```

### 3.4 Créer des Utilisateurs Modérateurs

Pour définir un utilisateur comme modérateur :

1. Créez d'abord un compte utilisateur via l'application
2. Dans la console Firebase, allez dans **Firestore Database**
3. Créez une collection `users` si elle n'existe pas
4. Ajoutez un document avec l'UID de l'utilisateur et le champ :
   ```javascript
   {
     isModerator: true,
     displayName: "Nom du modérateur",
     email: "moderator@example.com"
   }
   ```

---

## 4. Déploiement

### 4.1 Build de Production

Créez une version optimisée de votre application :

```bash
npm run build
```

Cela créera un dossier `dist/` avec les fichiers de production.

### 4.2 Tester Localement

Avant de déployer, testez localement :

```bash
# Servir les fichiers de build localement
firebase serve

# Ou avec émulateurs Firebase
firebase emulators:start
```

Ouvrez http://localhost:5000 dans votre navigateur.

### 4.3 Déployer sur Firebase Hosting

```bash
# Déployer l'application
firebase deploy

# Ou déployer seulement le hosting
firebase deploy --only hosting

# Déployer tout (hosting, rules, indexes)
firebase deploy --only hosting,firestore:rules,firestore:indexes,storage
```

### 4.4 Obtenir l'URL de Déploiement

Après le déploiement, Firebase CLI affichera :
```
✔ Deploy complete!

Project Console: https://console.firebase.google.com/project/votre-projet/overview
Hosting URL: https://votre-projet.web.app
```

---

## 5. Post-Déploiement

### 5.1 Configuration du Domaine Personnalisé (Optionnel)

1. Dans Firebase Console, allez dans **Hosting**
2. Cliquez sur **"Ajouter un domaine personnalisé"**
3. Suivez les instructions pour configurer votre DNS

### 5.2 Monitoring et Analytics

#### Activer Firebase Performance Monitoring

1. Dans Firebase Console, allez dans **Performance**
2. Cliquez sur **"Commencer"**
3. Suivez les instructions d'installation

#### Activer Google Analytics (si pas déjà fait)

1. Dans Firebase Console, allez dans **Analytics**
2. Cliquez sur **"Activer Analytics"**
3. Configurez selon vos besoins

### 5.3 Surveillance des Coûts

1. Dans Firebase Console, allez dans **Usage and billing**
2. Configurez des alertes budgétaires
3. Passez au plan Blaze (pay-as-you-go) si nécessaire pour la production

### 5.4 Configuration des Quotas et Limites

**Limites importantes du plan gratuit (Spark) :**
- Firestore: 50K lectures/jour, 20K écritures/jour
- Authentication: Illimité
- Hosting: 10 GB/mois de transfert

**Plan Blaze (recommandé pour production) :**
- Tarification à l'usage
- Pas de limites strictes
- Facturé selon l'utilisation

### 5.5 Sauvegardes et Maintenance

#### Exporter les données Firestore

```bash
# Exporter via Firebase CLI
gcloud firestore export gs://[BUCKET_NAME]

# Ou configurez des exports automatiques dans la console
```

#### Surveiller les erreurs

1. Dans Firebase Console, allez dans **Crashlytics** (si configuré)
2. Vérifiez régulièrement les logs dans **Functions** (si utilisé)

---

## 6. Commandes Utiles

```bash
# Développement
npm run serve              # Lancer le serveur de développement
npm run build             # Build de production
npm run lint              # Vérifier le code

# Firebase
firebase login            # Se connecter
firebase logout           # Se déconnecter
firebase projects:list    # Lister vos projets
firebase use <project-id> # Sélectionner un projet
firebase deploy           # Déployer tout
firebase deploy --only hosting  # Déployer seulement le hosting

# Firestore
firebase firestore:delete --all-collections  # Supprimer toutes les données (DANGER!)

# Émulateurs locaux
firebase emulators:start  # Démarrer les émulateurs Firebase
```

---

## 7. Dépannage

### Problème : "Firebase Config Invalid"
**Solution :** Vérifiez que vous avez bien copié toutes les clés de configuration depuis Firebase Console.

### Problème : "Permission Denied" dans Firestore
**Solution :** 
1. Vérifiez vos règles de sécurité Firestore
2. Assurez-vous que l'utilisateur est bien connecté
3. Déployez les règles : `firebase deploy --only firestore:rules`

### Problème : "Module not found: Can't resolve 'bootstrap-vue-3'"
**Solution :** Réinstallez les dépendances : `npm install`

### Problème : Build échoue
**Solution :** 
1. Supprimez `node_modules` et `package-lock.json`
2. Réinstallez : `npm install`
3. Retry le build : `npm run build`

### Problème : L'application ne se charge pas après déploiement
**Solution :**
1. Vérifiez que le dossier public est bien `dist` dans `firebase.json`
2. Vérifiez les rewrites dans `firebase.json`
3. Videz le cache du navigateur (Ctrl+Shift+R)

---

## 8. Sécurité et Meilleures Pratiques

### ✅ À Faire

1. **Ne jamais** commiter le fichier de configuration Firebase avec les vraies clés
2. Utiliser des variables d'environnement pour les clés sensibles
3. Configurer correctement les règles de sécurité Firestore
4. Activer l'authentification multi-facteurs pour les comptes critiques
5. Surveiller régulièrement les logs et l'utilisation
6. Mettre en place des sauvegardes régulières
7. Limiter les permissions des utilisateurs selon leur rôle

### ❌ À Éviter

1. Laisser Firestore en mode test en production
2. Donner des permissions `write` à tous sur toutes les collections
3. Ne pas valider les données côté serveur
4. Stocker des informations sensibles en clair
5. Ignorer les alertes de sécurité Firebase

---

## 9. Support et Ressources

- 📚 [Documentation Firebase](https://firebase.google.com/docs)
- 📚 [Documentation Vue.js 3](https://vuejs.org/)
- 📚 [Documentation Bootstrap-Vue 3](https://bootstrap-vue.org/)
- 💬 [Firebase Discord](https://discord.gg/firebase)
- 💬 [Vue.js Discord](https://discord.com/invite/vue)
- 🐛 [Issues GitHub](https://github.com/votre-repo/issues)

---

## 10. Checklist de Déploiement

Avant de déployer en production, vérifiez :

- [ ] Configuration Firebase mise à jour
- [ ] Dépendances installées (`npm install`)
- [ ] Build réussit sans erreurs (`npm run build`)
- [ ] Règles de sécurité Firestore configurées
- [ ] Règles Storage configurées
- [ ] Index Firestore créés
- [ ] Tests effectués localement
- [ ] Variables d'environnement configurées
- [ ] Plan Firebase approprié sélectionné
- [ ] Alertes budgétaires configurées
- [ ] Domaine personnalisé configuré (si nécessaire)
- [ ] Analytics/Monitoring activés
- [ ] Sauvegarde des données configurée

---

**Félicitations!** 🎉 Votre application de forum communautaire est maintenant configurée et déployée sur Firebase!
