# 📦 SCSS Structure Guide - Sakamanga

## Vue d'ensemble de la structure SCSS

```
scss/
├── main.scss                 # Point d'entrée principal
├── _variables.scss           # Variables (couleurs, spacing, etc.)
├── _mixins.scss             # Mixins réutilisables
├── _base.scss               # Styles de base et reset
├── _header.scss             # Header et navigation
├── _sections.scss           # Tous les contenus (Hero, Menu, Services, etc.)
└── _responsive.scss         # Media queries et responsive design
```

## 📄 Description des fichiers

### 1. **main.scss** - Point d'entrée
Le fichier principal qui importe tous les partials dans l'ordre correct.

```scss
// 1. Variables
@import 'variables';
// 2. Mixins
@import 'mixins';
// 3. Base
@import 'base';
// 4. Header
@import 'header';
// 5. Sections
@import 'sections';
// 6. Responsive
@import 'responsive';
```

### 2. **_variables.scss** - Variables et Configuration

Contient toutes les variables SCSS :

#### Couleurs
```scss
$primary-color: #C8713E;        // Couleur principale (terracotta)
$primary-dark: #A0562F;         // Variante sombre
$primary-light: #E8A876;        // Variante claire
$accent-color: #2D5016;         // Couleur d'accent (vert)
```

#### Spacing
```scss
$spacing-xs: 0.5rem;    // 8px
$spacing-sm: 1rem;      // 16px
$spacing-md: 1.5rem;    // 24px
$spacing-lg: 2rem;      // 32px
$spacing-xl: 3rem;      // 48px
```

#### Breakpoints
```scss
$breakpoint-tablet: 768px;
$breakpoint-mobile: 480px;
```

**Avantage** : Modifier une couleur en un seul endroit !

### 3. **_mixins.scss** - Mixins Réutilisables

Contient des fonctions SCSS pour éviter la répétition.

#### Mixins Responsive
```scss
@include tablet {
    // Styles pour tablette (max-width: 768px)
}

@include mobile {
    // Styles pour mobile (max-width: 480px)
}
```

#### Mixins Flex
```scss
@include flex-center;           // Flex centré
@include flex-between;          // Space-between
@include flex-setup($direction, $justify, $align, $gap);
```

#### Mixins Card
```scss
@include card;                  // Styling de card
@include card-hover;            // Hover effect
@include border-left-accent;    // Border-left
```

#### Mixins Animation
```scss
@include slideInDown();         // Slide down animation
@include slideInUp();           // Slide up animation
@include fadeIn();              // Fade in animation
@include scaleHover(1.05);      // Scale on hover
```

**Exemple d'utilisation** :
```scss
.my-card {
    @include card;
    @include border-left-accent;
    
    @include tablet {
        padding: var(--spacing-md);
    }
    
    &:hover {
        @include card-hover;
    }
}
```

### 4. **_base.scss** - Styles de Base

Contient le reset CSS et les styles de base.

- Reset global (`* { margin: 0; ... }`)
- Typography (h1-h6, p, a, etc.)
- Utility classes (`.mt-1`, `.p-2`, `.text-center`, etc.)
- Animations (@keyframes)

### 5. **_header.scss** - Header et Navigation

Styles pour :
- `.header` - Sticky header
- `.navbar` - Navigation bar
- `.nav-links` - Navigation links avec underline animation
- `.dropdown` / `.dropdown-menu` - Dropdown menus
- `.btn-contact` - Contact button
- Responsive mobile menu

### 6. **_sections.scss** - Toutes les Sections

Styles pour tous les conteneurs principaux :
- Hero section
- About section
- Menu section
- Contact section & form
- Services section (Hotel, Tea Room, Massages, Meeting Room)
- Guide section (Antananarivo)
- Lexicon section
- Footer

### 7. **_responsive.scss** - Responsive Design

Media queries organisées par breakpoint :
- **Tablet (768px)** - Ajustements pour tablettes
- **Mobile (480px)** - Ajustements pour mobiles
- **Large screens (1200px+)** - Enhancements
- **Print media** - Styles d'impression
- **Dark mode** - Ajustements spécifiques

## 🔄 Comment compiler SCSS en CSS

### Option 1 : VS Code Live Sass Compiler
1. Installer l'extension "Live Sass Compiler"
2. Clic droit sur `main.scss` → "Watch Sass"
3. Les fichiers CSS sont générés automatiquement

### Option 2 : Command Line (Node.js)
```bash
# Installer SASS globalement
npm install -g sass

# Compiler en fichier unique
sass scss/main.scss styles.css

# Watch mode (compilation automatique)
sass --watch scss:. 

# Minifier pour production
sass --style=compressed scss/main.scss styles.min.css
```

### Option 3 : Package.json Scripts
```json
{
  "scripts": {
    "sass": "sass scss/main.scss styles.css",
    "sass:watch": "sass --watch scss:.",
    "sass:prod": "sass --style=compressed scss/main.scss styles.min.css"
  }
}
```

Puis `npm run sass:watch`

## 📚 Exemples d'Utilisation

### Exemple 1 : Créer une nouvelle section
```scss
// _sections.scss
.my-section {
    padding: var(--spacing-xl) var(--spacing-md);
    @include gradient(135deg, var(--bg-light), var(--bg-secondary));
    
    h2 {
        @include section-heading;
    }
}

.my-grid {
    @include grid-auto-fit(280px);
}

.my-card {
    @include card;
    @include border-left-accent(var(--primary-color), 4px);
    
    &:hover {
        @include card-hover;
    }
    
    @include tablet {
        grid-column: 1;
    }
    
    @include mobile {
        padding: var(--spacing-md);
    }
}
```

### Exemple 2 : Ajouter une nouvelle couleur
```scss
// _variables.scss
$secondary-color: #FF6B6B;

// _sections.scss
.special-card {
    background-color: $secondary-color;
    
    &:hover {
        background-color: darken($secondary-color, 10%);
    }
}
```

### Exemple 3 : Créer une animation réutilisable
```scss
// _mixins.scss
@mixin bounce-in($duration: 0.6s, $delay: 0s) {
    animation: bounceIn $duration ease-out $delay;
}

// _base.scss
@keyframes bounceIn {
    0% { transform: scale(0.3); opacity: 0; }
    50% { opacity: 1; }
    70% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

// Usage
.my-element {
    @include bounce-in(0.8s, 0.2s);
}
```

## ✅ Avantages SCSS vs CSS

| Aspect | CSS | SCSS |
|--------|-----|------|
| **Variables** | CSS custom props | SCSS variables (plus de power) |
| **Nesting** | Non | Oui ✓ |
| **Opérations** | Non | Oui (calc, math) ✓ |
| **Mixins** | Non | Oui ✓ |
| **Conditions** | Non | Oui (@if, @else) ✓ |
| **Boucles** | Non | Oui (@for, @each) ✓ |
| **Fonctions** | Non | Oui (darken, lighten, etc.) ✓ |
| **DRY** | Répétition | Pas de répétition ✓ |

## 🎯 Best Practices

1. **Utilisez les variables** pour tous les styles communs
2. **Créez des mixins** pour les patterns répétés
3. **Organisez les imports** dans l'ordre correct
4. **Nesting limité** (max 3 niveaux)
5. **Utilisez les breakpoints définis** ($breakpoint-tablet, etc.)
6. **Commentez le code** pour la maintenance

## 📝 Checklist SCSS

- [x] Structure modulaire (7 fichiers)
- [x] Variables centralisées
- [x] Mixins réutilisables
- [x] Responsive design
- [x] Dark mode support
- [x] Animations
- [x] Flexbox & Grid utilities
- [x] Accessible & semantic

## 🚀 Prochaines Étapes

1. ✅ Compiler SCSS en CSS (utiliser l'une des 3 options)
2. [ ] Tester le site (doit être identique au CSS original)
3. [ ] Ajouter plus de variables si besoin
4. [ ] Créer des mixins supplémentaires
5. [ ] Minifier pour production (`sass --style=compressed`)

## 📞 Support

Pour toute question sur SCSS :
- [Sass Documentation](https://sass-lang.com/documentation)
- [SCSS Basics](https://sass-lang.com/guide)
- [SCSS Functions](https://sass-lang.com/documentation/modules)

---

**Le SCSS est prêt ! Compilez-le et testez ! 🎉**
