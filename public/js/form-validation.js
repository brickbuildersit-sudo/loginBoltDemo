/* =====================================================
   FORM VALIDATION - Validación avanzada del formulario
   ===================================================== */

class LoginFormValidator {
  constructor() {
    this.form = null;
    this.fields = {};
    this.isSubmitting = false;
    
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
    this.form = document.getElementById('loginForm');
    
    if (!this.form) {
      console.warn('Login form not found');
      return;
    }
    
    // Cache form fields
    this.fields = {
      username: document.getElementById('username'),
      password: document.getElementById('password'),
      rememberMe: document.getElementById('rememberMe'),
      submitBtn: this.form.querySelector('.btn-login'),
      passwordToggle: document.getElementById('passwordToggle')
    };
    
    // Set up event listeners
    this.setupValidationListeners();
    this.setupPasswordToggle();
    this.setupFormSubmission();
  }
  
  setupValidationListeners() {
    // Real-time validation
    this.fields.username.addEventListener('blur', () => this.validateField('username'));
    this.fields.username.addEventListener('input', () => this.clearFieldError('username'));
    
    this.fields.password.addEventListener('blur', () => this.validateField('password'));
    this.fields.password.addEventListener('input', () => this.clearFieldError('password'));
    
    // Enter key submission
    [this.fields.username, this.fields.password].forEach(field => {
      field.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.handleSubmit(e);
        }
      });
    });
  }
  
  setupPasswordToggle() {
    if (!this.fields.passwordToggle) return;
    
    this.fields.passwordToggle.addEventListener('click', () => {
      const passwordField = this.fields.password;
      const isPassword = passwordField.type === 'password';
      
      passwordField.type = isPassword ? 'text' : 'password';
      
      // Update icon
      const icon = this.fields.passwordToggle.querySelector('svg');
      if (isPassword) {
        // Show "hide" icon
        icon.innerHTML = `
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
          <line x1="1" y1="1" x2="23" y2="23"/>
        `;
      } else {
        // Show "view" icon
        icon.innerHTML = `
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        `;
      }
    });
  }
  
  setupFormSubmission() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }
  
  validateField(fieldName) {
    const field = this.fields[fieldName];
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    switch (fieldName) {
      case 'username':
        if (!value) {
          isValid = false;
          errorMessage = 'El usuario es requerido.';
        } else if (value.length < 3) {
          isValid = false;
          errorMessage = 'El usuario debe tener al menos 3 caracteres.';
        } else if (!/^[a-zA-Z0-9._-]+$/.test(value)) {
          isValid = false;
          errorMessage = 'El usuario solo puede contener letras, números, puntos, guiones y guiones bajos.';
        }
        break;
        
      case 'password':
        if (!value) {
          isValid = false;
          errorMessage = 'La contraseña es requerida.';
        } else if (value.length < 6) {
          isValid = false;
          errorMessage = 'La contraseña debe tener al menos 6 caracteres.';
        }
        break;
    }
    
    this.setFieldValidation(field, isValid, errorMessage);
    return isValid;
  }
  
  setFieldValidation(field, isValid, errorMessage = '') {
    const feedbackElement = field.parentNode.querySelector('.invalid-feedback');
    
    // Remove existing validation classes
    field.classList.remove('is-valid', 'is-invalid');
    
    if (isValid) {
      field.classList.add('is-valid');
    } else {
      field.classList.add('is-invalid');
      if (feedbackElement && errorMessage) {
        feedbackElement.textContent = errorMessage;
      }
    }
  }
  
  clearFieldError(fieldName) {
    const field = this.fields[fieldName];
    field.classList.remove('is-invalid');
  }
  
  validateAllFields() {
    const usernameValid = this.validateField('username');
    const passwordValid = this.validateField('password');
    
    return usernameValid && passwordValid;
  }
  
  handleSubmit(e) {
    e.preventDefault();
    
    if (this.isSubmitting) return;
    
    // Validate all fields
    const isFormValid = this.validateAllFields();
    
    if (!isFormValid) {
      this.focusFirstInvalidField();
      return;
    }
    
    // Simulate login process
    this.setLoadingState(true);
    
    // Simulate API call
    setTimeout(() => {
      this.setLoadingState(false);
      this.showSuccessMessage();
    }, 2000);
  }
  
  setLoadingState(loading) {
    this.isSubmitting = loading;
    
    if (loading) {
      this.fields.submitBtn.classList.add('loading');
      this.fields.submitBtn.disabled = true;
    } else {
      this.fields.submitBtn.classList.remove('loading');
      this.fields.submitBtn.disabled = false;
    }
  }
  
  focusFirstInvalidField() {
    const invalidField = this.form.querySelector('.is-invalid');
    if (invalidField) {
      invalidField.focus();
    }
  }
  
  showSuccessMessage() {
    // Create success alert
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show';
    alertDiv.innerHTML = `
      <strong>¡Éxito!</strong> Credenciales válidas. Redirigiendo...
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Insert before form
    this.form.parentNode.insertBefore(alertDiv, this.form);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
      if (alertDiv.parentNode) {
        alertDiv.remove();
      }
    }, 3000);
  }
  
  resetForm() {
    this.form.reset();
    
    // Clear all validation states
    Object.values(this.fields).forEach(field => {
      if (field && field.classList) {
        field.classList.remove('is-valid', 'is-invalid');
      }
    });
    
    this.setLoadingState(false);
  }
}

/* =====================================================
   UTILITY FUNCTIONS
   ===================================================== */

// Smooth scroll to element
function smoothScrollTo(element) {
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }
}

// Form field focus enhancement
function enhanceFormFields() {
  const formControls = document.querySelectorAll('.form-control');
  
  formControls.forEach(control => {
    const wrapper = control.closest('.input-wrapper');
    if (!wrapper) return;
    
    control.addEventListener('focus', () => {
      wrapper.classList.add('focused');
    });
    
    control.addEventListener('blur', () => {
      wrapper.classList.remove('focused');
      if (control.value.trim() !== '') {
        wrapper.classList.add('has-value');
      } else {
        wrapper.classList.remove('has-value');
      }
    });
  });
}

/* =====================================================
   INICIALIZACIÓN
   ===================================================== */

// Initialize form validator
const formValidator = new LoginFormValidator();

// Initialize form enhancements
document.addEventListener('DOMContentLoaded', () => {
  enhanceFormFields();
});

// Expose to global scope for debugging
window.LoginFormValidator = formValidator;

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Alt + T to toggle theme
  if (e.altKey && e.key === 't') {
    e.preventDefault();
    const themeSelector = document.getElementById('themeSelector');
    if (themeSelector) {
      themeSelector.focus();
    }
  }
  
  // Escape to clear form
  if (e.key === 'Escape') {
    formValidator.resetForm();
  }
});