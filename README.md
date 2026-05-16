# Site Thibaut Gervy — Marketing Digital

Site web professionnel multi-pages pour Thibaut Gervy, spécialiste Meta Ads & conversion pour praticiens bien-être.

## Stack

- **Next.js 14** — App Router
- **Tailwind CSS** — Styles utilitaires
- **Framer Motion** — Animations au scroll
- **Lucide React** — Icônes
- **TypeScript** — Typage

## Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en développement
npm run dev
```

Le site sera disponible sur [http://localhost:3000](http://localhost:3000)

## Structure des fichiers

```
├── app/
│   ├── layout.tsx              # Layout racine + métadonnées
│   ├── globals.css             # Styles globaux + variables CSS
│   ├── page.tsx                # Page d'accueil (/)
│   ├── services/page.tsx       # Page services (/services)
│   ├── realisations/page.tsx   # Page réalisations (/realisations)
│   ├── a-propos/page.tsx       # Page à propos (/a-propos)
│   ├── contact/page.tsx        # Page contact (/contact)
│   ├── mentions-legales/       # Mentions légales
│   └── politique-confidentialite/  # Politique RGPD
├── components/
│   ├── Navbar.tsx              # Navigation fixe + menu mobile
│   ├── Footer.tsx              # Footer avec liens et CTA
│   └── AnimatedSection.tsx     # Wrapper animations Framer Motion
└── public/                     # Ressources statiques
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Accueil | `/` | Hero, problème/solution, services, témoignage |
| Services | `/services` | Détail des 2 offres + FAQ |
| Réalisations | `/realisations` | Cas clients avant/après + livrables |
| À propos | `/a-propos` | Présentation, compétences, valeurs |
| Contact | `/contact` | Formulaire mailto |

## Personnalisation

### Changer la photo de profil (/a-propos)

Dans `app/a-propos/page.tsx`, remplacez l'URL Unsplash par votre propre photo :

```tsx
<Image
  src="/votre-photo.jpg"  // Placez la photo dans /public
  alt="Thibaut Gervy"
  fill
  ...
/>
```

### Ajouter vos liens réseaux sociaux

Dans `components/Footer.tsx`, mettez à jour les URLs :

```tsx
const footerLinks = {
  social: [
    { href: "https://linkedin.com/in/VOTRE-PROFIL", ... },
    { href: "https://instagram.com/VOTRE-COMPTE", ... },
  ]
}
```

### Mentions légales

Dans `app/mentions-legales/page.tsx`, complétez vos informations (SIRET, adresse, statut juridique).

### Couleurs et typographie

Les variables CSS sont dans `app/globals.css`. Les couleurs personnalisées Tailwind sont dans `tailwind.config.ts`.

## Déploiement sur Vercel

```bash
# Méthode 1 : Via CLI Vercel
npm i -g vercel
vercel

# Méthode 2 : Via GitHub
# Poussez le code sur GitHub, puis connectez le repo dans le dashboard Vercel
```

Le fichier `next.config.js` est déjà configuré pour autoriser les images Unsplash. Pour utiliser vos propres images hébergées, ajoutez votre domaine :

```js
images: {
  remotePatterns: [
    { hostname: "images.unsplash.com" },
    { hostname: "votre-domaine.com" },
  ],
},
```

## Formulaire de contact

Le formulaire utilise `mailto:` pour ouvrir le client mail de l'utilisateur. Pour un vrai formulaire avec envoi côté serveur, vous pouvez intégrer :
- [Resend](https://resend.com) — API email simple
- [Formspree](https://formspree.io) — Sans backend
- [EmailJS](https://emailjs.com) — Client-side

## À faire avant la mise en ligne

- [ ] Remplacer la photo placeholder dans `/a-propos`
- [ ] Compléter les mentions légales (SIRET, statut)
- [ ] Ajouter vos vraies URLs LinkedIn/Instagram
- [ ] Ajouter votre domaine custom dans Vercel
- [ ] Vérifier les métadonnées SEO (metadataBase dans layout.tsx)
- [ ] Optionnel : configurer Google Analytics ou Plausible

---

Développé avec ❤️ pour Thibaut Gervy
