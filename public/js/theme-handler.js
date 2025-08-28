/* =====================================================
   THEME HANDLER - Gestión dinámica de temas
   ===================================================== */

class ThemeManager {
  constructor() {
    this.currentTheme = 'default';
    this.themeSelector = null;
    this.bodyElement = null;
    
    this.init();
  }
  
  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }
  
  setup() {
    this.bodyElement = document.querySelector('.login-page');
    this.themeSelector = document.getElementById('themeSelector');
    
    if (!this.bodyElement || !this.themeSelector) {
      console.warn('Theme elements not found');
      return;
    }
    
    // Load saved theme from localStorage
    this.loadSavedTheme();
    
    // Set up event listeners
    this.themeSelector.addEventListener('change', (e) => {
      this.changeTheme(e.target.value);
    });
    
    // Listen for system theme changes
    this.setupSystemThemeListener();
  }
  
  changeTheme(themeName) {
    if (!this.isValidTheme(themeName)) {
      console.warn(`Invalid theme: ${themeName}`);
      return;
    }
    
    // Add transition class for smooth theme change
    this.bodyElement.classList.add('theme-transitioning');
    
    // Change theme
    this.bodyElement.setAttribute('data-theme', themeName);
    this.currentTheme = themeName;
    
    // Update selector
    this.themeSelector.value = themeName;
    
    // Save to localStorage
    localStorage.setItem('preferred-theme', themeName);
    
    // Remove transition class after animation
    setTimeout(() => {
      this.bodyElement.classList.remove('theme-transitioning');
    }, 300);
    
    // Dispatch custom event for other scripts
    this.dispatchThemeChangeEvent(themeName);
  }
  
  isValidTheme(themeName) {
    const validThemes = ['default', 'dark', 'clean'];
    return validThemes.includes(themeName);
  }
  
  loadSavedTheme() {
    const savedTheme = localStorage.getItem('preferred-theme');
    
    if (savedTheme && this.isValidTheme(savedTheme)) {
      this.changeTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        this.changeTheme('dark');
      }
    }
  }
  
  setupSystemThemeListener() {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    mediaQuery.addEventListener('change', (e) => {
      // Only auto-switch if no manual preference is saved
      const savedTheme = localStorage.getItem('preferred-theme');
      if (!savedTheme) {
        this.changeTheme(e.matches ? 'dark' : 'default');
      }
    });
  }
  
  dispatchThemeChangeEvent(themeName) {
    const event = new CustomEvent('themeChanged', {
      detail: {
        theme: themeName,
        timestamp: new Date().toISOString()
      }
    });
    
    document.dispatchEvent(event);
  }
  
  getCurrentTheme() {
    return this.currentTheme;
  }
  
  resetToDefault() {
    localStorage.removeItem('preferred-theme');
    this.changeTheme('default');
  }
}

/* =====================================================
   ADICIONAL: SMOOTH THEME TRANSITIONS
   ===================================================== */

.theme-transitioning * {
  transition: background-color 0.3s ease, 
              color 0.3s ease, 
              border-color 0.3s ease,
              box-shadow 0.3s ease !important;
}

/* =====================================================
   INICIALIZACIÓN
   ===================================================== */

// Initialize theme manager
const themeManager = new ThemeManager();

// Expose to global scope for debugging (optional)
window.ThemeManager = themeManager;

// Listen for theme changes (for integration with other scripts)
document.addEventListener('themeChanged', (e) => {
  console.log('Theme changed to:', e.detail.theme);
});