# 🚀 Guide de Démarrage Rapide

## Installation et Lancement (5 minutes)

### 1. Installer les dépendances
```bash
npm install
```

### 2. Configurer Firebase

1. Créez un projet sur [Firebase Console](https://console.firebase.google.com/)
2. Activez Authentication (Email/Password)
3. Créez une base de données Firestore
4. Copiez votre configuration Firebase
5. Ouvrez `src/firebase/config.js` et remplacez les valeurs :

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

### 3. Lancer l'application
```bash
npm run serve
```

Ouvrez http://localhost:8080 dans votre navigateur.

---

## 📱 Utilisation de l'Application

### Première Connexion

1. **Inscription** : Créez un compte avec email/mot de passe
2. **Connexion** : Connectez-vous avec vos identifiants
3. Vous êtes redirigé vers la page d'accueil

### Créer une Discussion

1. Cliquez sur **"Nouvelle Discussion"** dans la navbar
2. Remplissez le formulaire :
   - Titre
   - Catégorie
   - Contenu
3. Cliquez sur **"Publier"**

### Répondre à une Discussion

1. Cliquez sur une discussion dans la liste
2. Faites défiler jusqu'au formulaire de réponse
3. Écrivez votre réponse
4. Cliquez sur **"Répondre"**

### Gérer votre Profil

1. Cliquez sur votre nom dans la navbar
2. Sélectionnez **"Profil"**
3. Consultez/modifiez vos informations

### Modération (Modérateurs uniquement)

1. Accédez à **"Modération"** dans le menu
2. Consultez les contenus signalés
3. Approuvez ou supprimez selon besoin

---

## 🎨 Catégories Disponibles

- **Général** : Discussions générales
- **Technologie** : Programmation, gadgets, etc.
- **Support** : Questions et aide
- **Feedback** : Suggestions et retours
- **Annonces** : Annonces importantes
- **Autres** : Autres sujets

---

## 🔑 Fonctionnalités Clés

✅ **Authentification sécurisée**
✅ **Gestion complète des discussions**
✅ **Système de réponses**
✅ **Recherche et filtrage**
✅ **Catégorisation**
✅ **Signalement de contenu**
✅ **Panneau de modération**
✅ **Profil utilisateur personnalisé**
✅ **Interface responsive**
✅ **Design moderne avec Bootstrap**

---

## 📚 Documentation Complète

Pour une configuration détaillée et le déploiement, consultez [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

## 🆘 Problèmes Courants

### L'application ne démarre pas
```bash
rm -rf node_modules package-lock.json
npm install
npm run serve
```

### Erreur Firebase
Vérifiez que :
- Les clés de configuration sont correctes dans `src/firebase/config.js`
- Authentication est activé dans Firebase Console
- Firestore Database est créé

### Erreur de connexion
- Vérifiez que le compte est bien créé dans Firebase Authentication
- Le mot de passe doit avoir au moins 6 caractères

---

## 📞 Support

Pour plus d'aide, consultez :
- [README.md](./README.md)
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- [Documentation Firebase](https://firebase.google.com/docs)

Bon développement! 🎉
