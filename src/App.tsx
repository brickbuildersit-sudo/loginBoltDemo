import React from 'react';
import './styles/themes.css';
import './styles/components.css';
import './styles/responsive.css';

function App() {
  return (
    <div className="login-page" data-theme="default">
      {/* Header */}
      <header className="header-component">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="logo-section">
                <svg className="logo-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="M21 15.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                  <path d="M15 12.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                  <path d="M13 19.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
                <span className="logo-text">UniversidadApp</span>
              </div>
            </div>
            <div className="col-md-6">
              <nav className="nav-section">
                <div className="nav-menu">
                  <a href="#" className="nav-link">Inicio</a>
                  <a href="#" className="nav-link">Servicios</a>
                  <a href="#" className="nav-link">Ayuda</a>
                </div>
                <div className="theme-selector">
                  <select className="form-select theme-select" id="themeSelector">
                    <option value="default">Tema Default</option>
                    <option value="dark">Tema Dark</option>
                    <option value="clean">Tema Clean</option>
                  </select>
                </div>
                <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-5">
              <div className="login-card">
                <div className="card-header">
                  <h2 className="login-title">Iniciar Sesión</h2>
                  <p className="login-subtitle">Accede a tu cuenta universitaria</p>
                </div>
                
                <form className="login-form" id="loginForm" noValidate>
                  <div className="form-group">
                    <label htmlFor="username" className="form-label">Usuario</label>
                    <div className="input-wrapper">
                      <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        placeholder="Ingresa tu usuario"
                        required
                        autoComplete="username"
                      />
                      <div className="invalid-feedback">
                        Por favor ingresa un usuario válido.
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <div className="input-wrapper">
                      <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <circle cx="12" cy="16" r="1"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                      <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Ingresa tu contraseña"
                        required
                        minLength={6}
                        autoComplete="current-password"
                      />
                      <button type="button" className="password-toggle" id="passwordToggle">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      </button>
                      <div className="invalid-feedback">
                        La contraseña debe tener al menos 6 caracteres.
                      </div>
                    </div>
                  </div>

                  <div className="form-options">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rememberMe">
                      <label className="form-check-label" htmlFor="rememberMe">
                        Recordar sesión
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-login">
                    <span className="btn-text">Iniciar Sesión</span>
                    <svg className="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                      <polyline points="16,17 21,12 16,7"/>
                      <line x1="21" y1="12" x2="9" y2="12"/>
                    </svg>
                  </button>

                  <div className="form-footer">
                    <a href="#" className="forgot-link">¿Olvidaste tu contraseña?</a>
                    <div className="register-section">
                      <span>¿No tienes cuenta?</span>
                      <a href="#" className="register-link">Regístrate aquí</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer-component">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="quick-links-title">Accesos Rápidos</h4>
            </div>
          </div>
          <div className="row quick-links-grid">
            <div className="col-6 col-md-3 mb-3">
              <div className="quick-link-card">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
                    <path d="M12 18V6"/>
                  </svg>
                </div>
                <h5 className="card-title">Mercado Público</h5>
                <p className="card-description">Portal de compras y licitaciones</p>
                <a href="#" className="card-link">Acceder</a>
              </div>
            </div>

            <div className="col-6 col-md-3 mb-3">
              <div className="quick-link-card">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <h5 className="card-title">Correo Institucional</h5>
                <p className="card-description">Acceso al email universitario</p>
                <a href="#" className="card-link">Acceder</a>
              </div>
            </div>

            <div className="col-6 col-md-3 mb-3">
              <div className="quick-link-card">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                  </svg>
                </div>
                <h5 className="card-title">Guía Académica</h5>
                <p className="card-description">Documentos y procedimientos</p>
                <a href="#" className="card-link">Acceder</a>
              </div>
            </div>

            <div className="col-6 col-md-3 mb-3">
              <div className="quick-link-card">
                <div className="card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <h5 className="card-title">U-Campus</h5>
                <p className="card-description">Plataforma educativa virtual</p>
                <a href="#" className="card-link">Acceder</a>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom">
                <p>&copy; 2025 Universidad. Todos los derechos reservados.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
  )
}