# Application Blog Vue.js

Une application de blog complète construite avec Vue.js 3, TypeScript et Vue Router.

## 📋 Fonctionnalités

- ✅ Affichage de la liste des articles
- ✅ Visualisation détaillée d'un article
- ✅ Création de nouveaux articles
- ✅ Modification d'articles existants
- ✅ Suppression d'articles
- ✅ Système de tags
- ✅ Filtrage des articles par tag
- ✅ Navigation intuitive

## 🏗️ Architecture

### Composants (`src/components/`)

- **NavBar.vue** : Barre de navigation avec liens vers Home, Ajouter un Post
- **PostList.vue** : Affiche la liste des articles du blog
- **SinglePost.vue** : Composant enfant pour afficher un article individuel avec :
  - Titre
  - Tags
  - Snippet (50 premiers caractères)
  - Lien vers l'article complet
- **TagCloud.vue** : Affiche tous les tags disponibles avec liens de filtrage

### Composables (`src/composables/`)

- **getPosts.ts** : Gestion de tous les articles
  - `getPosts()` : Récupère tous les articles
  - `addPost()` : Ajoute un nouvel article
  - `updatePost()` : Met à jour un article existant
  - `deletePost()` : Supprime un article
- **getPost.ts** : Récupère un article spécifique par son ID

### Views (`src/views/`)

- **HomeView.vue** : Page d'accueil avec PostList et TagCloud
- **CreatePostView.vue** : Formulaire pour créer/modifier un article
  - Titre
  - Contenu
  - Tags (séparés par virgules)
- **PostDetailView.vue** : Page de détail d'un article avec actions (modifier/supprimer)
- **TagPostsView.vue** : Affiche tous les articles associés à un tag spécifique

## 🚀 Installation et Lancement

### Prérequis

- Node.js (v20.19.0 ou supérieur, ou v22.12.0+)
- npm

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

L'application sera disponible sur `http://localhost:5173` (ou un autre port si celui-ci est occupé)

### Build de Production

```bash
npm run build
```

### Preview de Production

```bash
npm run preview
```

## 📝 Routes

| Route | Nom | Description |
|-------|-----|-------------|
| `/` | Home | Page d'accueil avec tous les articles |
| `/posts/create` | CreatePost | Créer un nouvel article |
| `/posts/:id` | PostDetail | Détails d'un article |
| `/posts/:id/edit` | EditPost | Modifier un article |
| `/tags/:tag` | TagPosts | Articles filtrés par tag |

## 🎨 Technologies Utilisées

- **Vue.js 3** - Framework JavaScript progressif
- **TypeScript** - Typage statique pour JavaScript
- **Vue Router** - Gestion du routage
- **Vite** - Build tool et dev server ultra-rapide
- **Pinia** - Gestion d'état (inclus mais pas utilisé dans cette version)

## 📦 Structure des Données

```typescript
interface Post {
  id: string
  title: string
  body: string
  tags: string[]
}
```

## 🔧 Scripts Disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run preview` - Preview de la version de production
- `npm run test:unit` - Lance les tests unitaires
- `npm run test:e2e` - Lance les tests end-to-end
- `npm run lint` - Vérifie et corrige les problèmes de linting
- `npm run format` - Formate le code avec Prettier

## 💾 Base de Données

Pour cette version de démonstration, les données sont stockées en mémoire dans le fichier `getPosts.ts`. 
Pour une application en production, vous devriez remplacer ces fonctions par des appels API réels vers un backend.

### Exemple d'intégration API

```typescript
// Dans getPosts.ts
const load = async () => {
  loading.value = true
  try {
    const response = await fetch('/api/posts')
    posts.value = await response.json()
  } catch (err) {
    error.value = 'Erreur lors du chargement'
  } finally {
    loading.value = false
  }
}
```

## 🎓 Travaux Pratiques DBJS

Ce projet a été créé dans le cadre du TP de développement JavaScript.

**Professeur** : Ahmed Bentajer

## 📄 Licence

Ce projet est à usage éducatif.
