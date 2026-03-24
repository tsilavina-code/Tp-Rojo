/* ============================================
   SAKAMANGA - JavaScript Interactivity
   ============================================ */

// ============================================
// 1. SMOOTH SCROLL & ACTIVE NAV
// ============================================

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    
    // Check if it's an internal anchor link
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update active nav link
        updateActiveNav();
      }
    }
  });
});

// Update active navigation link based on scroll position
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

// Update active nav on scroll
window.addEventListener('scroll', updateActiveNav);

// ============================================
// 2. FORM VALIDATION & SUBMISSION
// ============================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validation
    const errors = [];
    
    if (!name) {
      errors.push('Le nom est requis');
    }
    
    if (!email) {
      errors.push('L\'email est requis');
    } else if (!isValidEmail(email)) {
      errors.push('L\'email n\'est pas valide');
    }
    
    if (!subject) {
      errors.push('Le sujet est requis');
    }
    
    if (!message) {
      errors.push('Le message est requis');
    } else if (message.length < 10) {
      errors.push('Le message doit contenir au moins 10 caractères');
    }
    
    // Show errors or success
    if (errors.length > 0) {
      showFormError(errors);
    } else {
      showFormSuccess();
      contactForm.reset();
      
      // In a real application, you would send the data to a server here
      console.log('Form Data:', { name, email, subject, message });
    }
  });
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show form errors
function showFormError(errors) {
  // Remove existing error message
  const existingError = contactForm.querySelector('.form-error');
  if (existingError) {
    existingError.remove();
  }
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'form-error';
  errorDiv.style.cssText = `
    background-color: #fce4e4;
    border-left: 4px solid #e24b4a;
    color: #a32d2d;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    animation: slideInDown 0.3s ease-out;
  `;
  
  const errorList = document.createElement('ul');
  errorList.style.cssText = 'margin: 0; padding-left: 20px;';
  
  errors.forEach(error => {
    const li = document.createElement('li');
    li.textContent = error;
    li.style.marginBottom = '0.5rem';
    errorList.appendChild(li);
  });
  
  errorDiv.appendChild(errorList);
  contactForm.insertBefore(errorDiv, contactForm.firstChild);
  
  // Remove error after 5 seconds
  setTimeout(() => {
    errorDiv.remove();
  }, 5000);
}

// Show form success
function showFormSuccess() {
  const existingMessage = contactForm.querySelector('.form-success');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  const successDiv = document.createElement('div');
  successDiv.className = 'form-success';
  successDiv.style.cssText = `
    background-color: #eaf3de;
    border-left: 4px solid #639922;
    color: #3b6d11;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    animation: slideInDown 0.3s ease-out;
  `;
  successDiv.textContent = '✅ Merci! Votre message a été envoyé avec succès. Nous vous répondrons bientôt.';
  
  contactForm.insertBefore(successDiv, contactForm.firstChild);
  
  // Remove success message after 5 seconds
  setTimeout(() => {
    successDiv.remove();
  }, 5000);
}

// ============================================
// 3. MOBILE MENU TOGGLE
// ============================================

function createMobileMenu() {
  const header = document.querySelector('.header');
  const navbar = document.querySelector('.navbar');
  
  // Only create mobile menu if it doesn't exist
  if (document.querySelector('.mobile-menu-btn')) return;
  
  // Check if we're on mobile
  if (window.innerWidth <= 768) {
    // Create hamburger button
    const menuBtn = document.createElement('button');
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.innerHTML = `<span></span><span></span><span></span>`;
    menuBtn.style.cssText = `
      display: none;
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      width: 30px;
      height: 30px;
      border: none;
      background: none;
      cursor: pointer;
      z-index: 1001;
    `;
    
    // Add mobile menu styles if not exists
    if (!document.querySelector('#mobile-menu-styles')) {
      const style = document.createElement('style');
      style.id = 'mobile-menu-styles';
      style.textContent = `
        @media (max-width: 768px) {
          .navbar .container {
            position: relative;
          }
          
          .mobile-menu-btn {
            display: flex !important;
            flex-direction: column;
            gap: 6px;
          }
          
          .mobile-menu-btn span {
            width: 25px;
            height: 2.5px;
            background-color: var(--text-dark);
            border-radius: 2px;
            transition: 0.3s ease;
          }
          
          .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(8px, 8px);
          }
          
          .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
          }
          
          .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
          }
          
          .nav-links {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background-color: var(--bg-light);
            border-bottom: 1px solid var(--border-color);
            flex-direction: column;
            padding: 1rem;
            gap: 0;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          
          .nav-links.active {
            max-height: 300px;
            padding: 1rem;
            gap: 0;
          }
          
          .nav-links li {
            padding: 0.75rem 0;
            border-bottom: 1px solid var(--border-color);
          }
          
          .nav-links li:last-child {
            border-bottom: none;
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    // Insert menu button
    navbar.querySelector('.container').appendChild(menuBtn);
    
    // Toggle menu on button click
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      document.querySelector('.nav-links').classList.toggle('active');
    });
    
    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        document.querySelector('.nav-links').classList.remove('active');
      });
    });
  }
}

// Initialize mobile menu
window.addEventListener('DOMContentLoaded', createMobileMenu);
window.addEventListener('resize', createMobileMenu);

// ============================================
// 4. SCROLL ANIMATIONS
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all menu items and about items
document.querySelectorAll('.menu-item, .about-item, .contact-item').forEach(item => {
  observer.observe(item);
});

// ============================================
// 5. UTILITY FUNCTIONS
// ============================================

// Smooth scroll to top button (if needed)
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Get viewport dimensions
function getViewport() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

// Log when page is fully loaded
window.addEventListener('load', () => {
  console.log('🍽️ Sakamanga Restaurant Website Loaded Successfully!');
  console.log('Viewport:', getViewport());
});

// Handle page unload
window.addEventListener('beforeunload', () => {
  console.log('Thank you for visiting Sakamanga!');
});

// ============================================
// 6. CONSOLE WELCOME MESSAGE
// ============================================

console.log('%c🍽️ Bienvenue chez Sakamanga! 🍽️', `
  font-size: 24px;
  font-weight: bold;
  color: #C8713E;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  margin: 20px 0;
`);

console.log('%cCuisine Malgache Authentique à Antananarivo', `
  font-size: 14px;
  color: #2D5016;
  margin-bottom: 10px;
`);

console.log('For any issues, please contact: contact@sakamanga.mg');
