# 🍽️ Sakamanga - Restaurant Website Project

## Project Information
- **Restaurant**: Sakamanga (Cuisine Malgache Authentique)
- **Location**: Antananarivo, Madagascar
- **Course**: TP S4 Design P5 - March 2026
- **Team**: 2 students (Binôme)
- **Deadline**: 18h (Due date specified in Google Forms)

---

## 📁 Project Structure

```
sakamanga/
├── index.html          # HTML5 sémantique (main page)
├── styles.css          # CSS with Grid Layout & Responsive
├── scripts.js          # JavaScript (à créer)
├── README.md           # This file
└── assets/             # (à créer) Images, icons, etc.
    ├── images/
    ├── icons/
    └── fonts/
```

---

## ✨ Design Features Implemented

### ✅ Completed
- [x] HTML5 Sémantique Structure
  - Header with Navigation
  - Hero Section
  - About Section (3 items)
  - Menu Section (8 items with prices)
  - Contact Section (Grid + Form)
  - Footer

- [x] CSS Design System
  - Color Variables (Warm Malgache palette)
  - Typography System
  - Spacing System (xs, sm, md, lg, xl)
  - Box Shadows & Transitions
  - Dark Mode Support

- [x] CSS Grid Layout
  - Responsive Auto-fit Grid
  - Grid for Menu Items (2x4)
  - Grid for Contact Items
  - Grid for About Items

- [x] Responsive Design
  - Mobile First Approach
  - Tablet Breakpoint (768px)
  - Mobile Breakpoint (480px)
  - Flexible Navigation
  - Responsive Forms

### 🔄 Next Steps (Your TO DO List)

---

## 📋 CHRONOMETRIC TO DO LIST

### Phase 1: SASS Conversion (1-2h)
- [ ] **1.1** Convert styles.css to SCSS format
  - Create main.scss
  - Organize into partials:
    - `_variables.scss` (colors, spacing, transitions)
    - `_mixins.scss` (responsive, effects)
    - `_base.scss` (reset, typography)
    - `_header.scss` (nav styles)
    - `_sections.scss` (hero, about, menu, contact)
    - `_responsive.scss` (media queries)
  - Estimated Time: 45 min

- [ ] **1.2** Set up SASS compiler
  - Option A: VS Code Live Sass Compiler extension
  - Option B: Command line: `sass styles.scss styles.css --watch`
  - Estimated Time: 15 min

### Phase 2: JavaScript Interactivity (2-3h)
- [ ] **2.1** Create scripts.js file
  - Smooth scroll behavior for navigation links
  - Form validation and submission
  - Mobile menu toggle
  - Estimated Time: 1h

- [ ] **2.2** Add JavaScript features
  - Active navigation highlight on scroll
  - Form error messages
  - Success message after submission
  - Estimated Time: 45 min

- [ ] **2.3** Mobile Menu Implementation
  - Hamburger menu for mobile
  - Toggle animation
  - Close on link click
  - Estimated Time: 30 min

### Phase 3: Content & Images (1-2h)
- [ ] **3.1** Add Hero Image
  - Find or create restaurant/food image
  - Optimize for web
  - Add to hero section
  - Estimated Time: 30 min

- [ ] **3.2** Add Menu Item Images
  - 8 food dish images for menu
  - Create card layouts with images
  - Optimize images
  - Estimated Time: 1h

- [ ] **3.3** Add Restaurant Info
  - Replace placeholder phone number
  - Replace placeholder address
  - Add actual email
  - Add business hours
  - Estimated Time: 15 min

### Phase 4: Animations & Polish (1-2h)
- [ ] **4.1** Add CSS Animations
  - Scroll animations for sections
  - Card hover effects (already done!)
  - Loading animations
  - Estimated Time: 45 min

- [ ] **4.2** Micro-interactions
  - Button feedback
  - Form input focus states
  - Navigation hover effects
  - Estimated Time: 30 min

- [ ] **4.3** Performance Optimization
  - Minify CSS & JS
  - Optimize images
  - Remove unused styles
  - Estimated Time: 30 min

### Phase 5: Testing & Fixes (1-2h)
- [ ] **5.1** Cross-browser Testing
  - Chrome ✓
  - Firefox
  - Safari
  - Edge
  - Estimated Time: 30 min

- [ ] **5.2** Responsiveness Testing
  - Mobile (480px)
  - Tablet (768px)
  - Desktop (1200px+)
  - Use DevTools device emulation
  - Estimated Time: 30 min

- [ ] **5.3** Accessibility Check
  - ARIA labels where needed
  - Keyboard navigation
  - Color contrast
  - Alt text for images
  - Estimated Time: 30 min

### Phase 6: Deployment & Delivery (30 min)
- [ ] **6.1** Create Project Archive
  - All files organized
  - No node_modules or temp files
  - README updated
  - Estimated Time: 15 min

- [ ] **6.2** Submit to Google Forms
  - Zip file creation
  - Upload to specified Google Forms
  - Verify submission
  - Estimated Time: 15 min

---

## 🎨 Design System Reference

### Colors
```css
--primary-color: #C8713E      /* Warm terracotta */
--primary-dark: #A0562F       /* Deep brown */
--primary-light: #E8A876      /* Light tan */
--accent-color: #2D5016       /* Forest green */
```

### Spacing
```
--spacing-xs: 0.5rem (8px)
--spacing-sm: 1rem (16px)
--spacing-md: 1.5rem (24px)
--spacing-lg: 2rem (32px)
--spacing-xl: 3rem (48px)
```

### Breakpoints
- **Mobile**: max-width: 480px
- **Tablet**: max-width: 768px
- **Desktop**: 1200px (container max-width)

---

## 🚀 Quick Start

1. **Open in Browser**
   ```bash
   # Simply open index.html in your browser
   # Or use Live Server extension in VS Code
   ```

2. **Edit Files**
   - `index.html` - HTML content
   - `styles.css` - CSS styling (convert to SCSS!)
   - `scripts.js` - JavaScript (create this)

3. **Test Responsiveness**
   - Press F12 to open DevTools
   - Toggle device toolbar (Ctrl+Shift+M)
   - Test at different screen sizes

---

## 📝 Important Notes

### Requirements Checklist
- [x] HTML5 Semantic Structure
- [x] Responsive Design (Mobile First)
- [x] CSS Grid Layout
- [ ] **SASS instead of CSS** (TO DO - Phase 1)
- [ ] JavaScript Interactivity (TO DO - Phase 2)
- [x] Professional Styling
- [ ] Images & Media (TO DO - Phase 3)
- [ ] Dark Mode (Supported via CSS variables!)

### File to Submit
- ✅ Create a `.zip` file containing:
  - `index.html`
  - `styles.css` (AFTER converting to SCSS and compiling)
  - `scripts.js`
  - `assets/` folder (images, icons)
  - `README.md`

---

## 🎯 Focus Areas

1. **SASS Organization** - Use mixins for @media queries and animations
2. **Grid Layout** - Menu uses CSS Grid (2 columns on desktop, 1 on mobile)
3. **Responsive** - Mobile-first approach with breakpoints at 768px and 480px
4. **Accessibility** - Semantic HTML, form labels, alt text
5. **Performance** - Optimize images, minify CSS/JS

---

## 💡 Tips & Tricks

### SASS Mixin Example for Responsive
```scss
@mixin respond-to($breakpoint) {
  @if $breakpoint == 'tablet' {
    @media (max-width: 768px) { @content; }
  }
  @if $breakpoint == 'mobile' {
    @media (max-width: 480px) { @content; }
  }
}

// Usage:
.menu-grid {
  grid-template-columns: repeat(4, 1fr);
  
  @include respond-to('tablet') {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @include respond-to('mobile') {
    grid-template-columns: 1fr;
  }
}
```

### Form Validation JS Example
```javascript
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  if (!name) {
    alert('Le nom est requis');
    return;
  }
  // Submit form or send to server
});
```

---

## 📚 Resources

- **W3C HTML5 Guide**: https://www.w3schools.com/html/
- **CSS Grid Tutorial**: https://css-tricks.com/snippets/css/complete-guide-grid/
- **SASS Documentation**: https://sass-lang.com/documentation
- **Responsive Design**: https://web.dev/responsive-web-design-basics/
- **Accessibility**: https://www.w3.org/WAI/WCAG21/quickref/

---

## ✉️ Support

If you need help with:
- CSS Grid questions → Check the menu-grid implementation
- SASS organization → Use the mixin example above
- JavaScript validation → See the form validation tip
- Responsive issues → Check breakpoints at 480px and 768px

---

**Good luck with your project! 🚀 Remember to save frequently and test often!**
