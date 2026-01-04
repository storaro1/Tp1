# Forum Communautaire - Vue.js 3 + Firebase

Application de forum communautaire développée avec Vue.js 3, Firebase et Bootstrap-Vue.

https://forum-947e2.web.app/

## Fonctionnalités

- ✅ Authentification (inscription, connexion, réinitialisation mot de passe)
- ✅ Gestion des discussions (créer, modifier, supprimer)
- ✅ Système de réponses
- ✅ Catégories et filtrage
- ✅ Recherche de discussions
- ✅ Profil utilisateur
- ✅ Modération (signalement, gestion du contenu)
- ✅ Interface responsive avec Bootstrap-Vue

## Technologies

- **Frontend**: Vue.js 3, Bootstrap-Vue, Bootstrap Icons
- **Backend**: Firebase (Firestore, Authentication, Storage)
- **Déploiement**: Firebase Hosting

## Installation

1. Cloner le projet
```bash
git clone <votre-repo>
cd tp7
```

2. Installer les dépendances
```bash
npm install
```

3. Configurer Firebase (voir section Configuration Firebase)

4. Lancer en développement
```bash
npm run serve
```

5. Build pour production
```bash
npm run build
```

## Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Navbar.vue
│   ├── LoginForm.vue
│   ├── SignupForm.vue
│   ├── DiscussionCard.vue
│   └── ReplyCard.vue
├── views/              # Pages principales
│   ├── Welcome.vue
│   ├── Home.vue
│   ├── CreateDiscussion.vue
│   ├── DiscussionView.vue
│   ├── Profile.vue
│   ├── CategoryView.vue
│   └── Moderation.vue
├── composables/        # Logique réutilisable
│   ├── getUser.js
│   ├── useLogin.js
│   ├── useSignup.js
│   ├── useLogout.js
│   ├── useDiscussions.js
│   ├── useReplies.js
│   ├── useModeration.js
│   ├── getCollection.js
│   └── getDocument.js
├── firebase/
│   └── config.js       # Configuration Firebase
├── router/
│   └── index.js        # Routes de l'application
└── assets/
    └── main.css        # Styles globaux
```

## Configuration et Déploiement

Voir le fichier DEPLOYMENT_GUIDE.md pour les instructions complètes.
