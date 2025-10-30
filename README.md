# Cosmike - Site Web Officiel

Site web moderne et performant pour Cosmike, entreprise offrant des services tech et produit (CTO, développement fullstack, product management, conseil stratégique).

## 🚀 Technologies

- **React 18** - Framework UI
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animations fluides
- **React Router** - Navigation SPA

## 📋 Fonctionnalités

- ✅ Design moderne et responsive (mobile & desktop)
- ✅ Animations et micro-interactions
- ✅ Navigation sticky avec menu hamburger mobile
- ✅ Modals de projets détaillés
- ✅ Formulaire de contact
- ✅ CTA flottant
- ✅ Smooth scroll
- ✅ Performance optimisée
- ✅ Compatible GitHub Pages

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Puis éditer .env avec vos propres clés

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build

# Preview du build
npm run preview
```

## 📦 Déploiement sur GitHub Pages

### Option 1 : GitHub Actions (Recommandé)

Le site est configuré pour un déploiement automatique via GitHub Actions.

1. Poussez votre code sur GitHub
2. Allez dans **Settings** > **Pages**
3. Source : sélectionnez **GitHub Actions**
4. Le workflow se lancera automatiquement à chaque push sur `main`.

### Option 2 : Déploiement manuel

```bash
npm run deploy
```

### Configuration importante

Dans `vite.config.js`, modifiez la ligne `base` selon votre repo :

```javascript
base: '/cosmike/', // Remplacez 'cosmike' par le nom de votre repo
```

## 📁 Structure du projet

```
cosmike/
├── src/
│   ├── components/       # Composants réutilisables
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── FloatingCTA.jsx
│   │   └── ProjectModal.jsx
│   ├── pages/           # Pages principales
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Realisations.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── hooks/           # Custom hooks
│   │   └── useInView.js
│   ├── App.jsx          # Composant principal
│   ├── main.jsx         # Point d'entrée
│   └── index.css        # Styles globaux
├── public/              # Assets statiques
├── index.html           # Template HTML
└── package.json         # Dépendances
```

## 🎨 Personnalisation

### Couleurs

Les couleurs sont configurées dans `tailwind.config.js` :

```javascript
colors: {
  primary: { ... },  // Bleu
  accent: { ... },   // Violet
}
```

### Contenu

- **Projets** : Modifiez le tableau `projects` dans `src/pages/Realisations.jsx`
- **Services** : Modifiez le tableau `services` dans `src/pages/Services.jsx`
- **Contact** : Mettez à jour les informations dans `src/pages/Contact.jsx`

### Images

Remplacez les placeholders par vos vraies images :
- Format recommandé : WebP ou JPEG optimisé
- Placez-les dans le dossier `public/`
- Mettez à jour les chemins dans les composants

## 🔧 Scripts disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Preview du build
- `npm run deploy` - Déploiement sur GitHub Pages

## 📱 Responsive

Le site est entièrement responsive avec des breakpoints :
- Mobile : < 768px
- Tablet : 768px - 1024px
- Desktop : > 1024px

## ⚡ Performance

- Lazy loading des images
- Code splitting automatique
- Minification CSS/JS
- Animations optimisées avec Framer Motion
- Score Lighthouse visé : > 90

## 📄 License

Tous droits réservés - Cosmike 2024

## 🤝 Contact

Pour toute question concernant le site :
- Email : contact@cosmike.com
- LinkedIn : [Michael Ramassamy](https://linkedin.com)
- GitHub : [cosmike](https://github.com)
