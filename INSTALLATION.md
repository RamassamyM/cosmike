# Guide d'installation - Cosmike Website

## ⚠️ Prérequis

- Node.js 18+ installé
- npm ou yarn
- Espace disque suffisant (environ 500MB pour node_modules)

## 📦 Installation

### 1. Libérer de l'espace disque (si nécessaire)

Si vous rencontrez l'erreur `ENOSPC: no space left on device` :

```bash
# Nettoyer le cache npm
npm cache clean --force

# Supprimer les node_modules inutilisés dans d'autres projets
# Vérifier l'espace disque
df -h
```

### 2. Installer les dépendances

```bash
cd /Users/mikram/code/cosmike
npm install
```

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## 🚀 Démarrage rapide

```bash
# Installation
npm install

# Développement
npm run dev

# Build production
npm run build

# Preview du build
npm run preview
```

## 🔧 Configuration GitHub Pages

### Étape 1 : Créer le repository GitHub

```bash
git init
git add .
git commit -m "Initial commit: Cosmike website"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/cosmike.git
git push -u origin main
```

### Étape 2 : Configurer GitHub Pages

1. Allez sur votre repository GitHub
2. **Settings** > **Pages**
3. Source : Sélectionnez **GitHub Actions**
4. Le workflow `.github/workflows/deploy.yml` se lancera automatiquement.

### Étape 3 : Vérifier le déploiement

- Le site sera disponible sur : `https://VOTRE-USERNAME.github.io/cosmike/`
- Vérifiez l'onglet **Actions** pour suivre le déploiement

## 📝 Personnalisation avant déploiement

### 1. Modifier la base URL

Dans `vite.config.js`, ligne 6 :

```javascript
base: '/cosmike/', // Remplacez par le nom de votre repo
```

### 2. Mettre à jour les informations de contact

Dans `src/pages/Contact.jsx` :
- Email
- LinkedIn
- GitHub
- Calendly

### 3. Remplacer les images placeholder

Les images actuelles sont des placeholders. Remplacez-les par vos vraies images :

```javascript
// Dans src/pages/Realisations.jsx
image: 'https://via.placeholder.com/...' 
// Remplacez par :
image: '/images/projet-mercidocteur.jpg'
```

Placez vos images dans le dossier `public/images/`

### 4. Personnaliser les couleurs

Dans `tailwind.config.js` :

```javascript
colors: {
  primary: { ... },  // Personnalisez les couleurs
  accent: { ... },
}
```

## 🎯 Checklist avant déploiement

- [ ] Installer les dépendances (`npm install`)
- [ ] Tester en local (`npm run dev`)
- [ ] Remplacer les images placeholder
- [ ] Mettre à jour les informations de contact
- [ ] Vérifier la base URL dans `vite.config.js`
- [ ] Tester le build (`npm run build`)
- [ ] Créer le repository GitHub
- [ ] Pousser le code
- [ ] Configurer GitHub Pages
- [ ] Vérifier le déploiement

## 🐛 Résolution de problèmes

### Erreur ENOSPC

```bash
npm cache clean --force
# Libérer de l'espace disque
```

### Le site ne s'affiche pas correctement sur GitHub Pages

Vérifiez que la `base` dans `vite.config.js` correspond au nom de votre repository.

### Les routes ne fonctionnent pas

GitHub Pages nécessite une configuration spéciale pour les SPAs. Le fichier `404.html` peut être nécessaire :

```bash
cp dist/index.html dist/404.html
```

### Les animations ne fonctionnent pas

Vérifiez que `framer-motion` est bien installé :

```bash
npm list framer-motion
```

## 📞 Support

Pour toute question, consultez :
- README.md pour la documentation complète
- Issues GitHub du projet
- Documentation Vite : https://vitejs.dev
- Documentation React Router : https://reactrouter.com

## ✅ Prochaines étapes

Une fois le site déployé :

1. **SEO** : Ajoutez des meta tags dans `index.html`
2. **Analytics** : Intégrez Google Analytics
3. **Formulaire** : Connectez le formulaire à un service (Formspree, EmailJS)
4. **Images** : Optimisez toutes les images (WebP, compression)
5. **Performance** : Testez avec Lighthouse
6. **Accessibilité** : Vérifiez les contrastes et l'accessibilité

Bon déploiement ! 🚀
