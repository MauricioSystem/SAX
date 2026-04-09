import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../utils/ThemeContext';
import { useLanguage } from '../utils/LanguageContext';
import logoblanco from '../assets/logoblanco.png';
import logooscuro from '../assets/logooscuro.png';
import '../styles/Navbar.scss';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const languages = [
    { code: 'es' as const, label: 'Español' },
    { code: 'en' as const, label: 'English' },
    { code: 'fr' as const, label: 'Français' },
  ];

  const [isLangOpen, setIsLangOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isLangOpen) return;

    const handleMouseDown = (event: MouseEvent) => {
      const el = langDropdownRef.current;
      if (!el) return;
      if (!el.contains(event.target as Node)) setIsLangOpen(false);
    };

    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [isLangOpen]);

  const handleCloseSidebar = () => {
    setIsMobileOpen(false);
  };

  return (
    <>
      <header
        className={`site-header ${theme}`}
        aria-label="SAX header"
      >
        <div className="site-header-inner">
          <Link to="/" className="site-header-link" onClick={handleCloseSidebar}>
            <img
              src={theme === 'dark' ? logooscuro : logoblanco}
              alt="SAX Logo"
              className="site-header-logo"
            />
          </Link>
        </div>
      </header>

      <aside
        className={`sidebar ${theme} ${isMobileOpen ? 'sidebar-open-mobile' : ''}`}
      >
        <div className="sidebar-inner">
          {/* Logo */}
          <div className="sidebar-logo">
            <Link to="/" onClick={handleCloseSidebar}>
              <img
                src={theme === 'dark' ? logooscuro : logoblanco}
                alt="SAX Logo"
                className="logo-img"
              />
            </Link>
          </div>

          {/* Navegación principal */}
          <nav className="sidebar-nav">
            <Link to="/" className="sidebar-link" onClick={handleCloseSidebar}>
              {t.nav.inicio}
            </Link>
            <Link to="/products" className="sidebar-link" onClick={handleCloseSidebar}>
              {t.nav.productos}
            </Link>
            <Link to="/information" className="sidebar-link" onClick={handleCloseSidebar}>
              {t.nav.quienesSomos}
            </Link>
            <Link to="/legal-information" className="sidebar-link" onClick={handleCloseSidebar}>
              {t.nav.contactenos}
            </Link>
          </nav>

          {/* Idioma y tema */}
          <div className="sidebar-controls">
            <div className="lang-dropdown" ref={langDropdownRef}>
              <button
                type="button"
                className="lang-trigger"
                aria-expanded={isLangOpen}
                onClick={() => setIsLangOpen((prev) => !prev)}
              >
                <span>{t.nav.languageLabel}</span>
                <ChevronDown size={16} className={isLangOpen ? 'open' : ''} />
              </button>

              <div
                className={`lang-menu ${isLangOpen ? 'is-open' : ''}`}
                role="menu"
                aria-hidden={!isLangOpen}
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    role="menuitem"
                    tabIndex={isLangOpen ? 0 : -1}
                    className={`lang-item ${language === lang.code ? 'active' : ''}`}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangOpen(false);
                    }}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            <button className="theme-toggle" onClick={toggleTheme} type="button">
              {t.nav.themeLabel}: {theme === 'dark' ? t.nav.themeOscuroLabel : t.nav.themeClaroLabel}
            </button>
          </div>

          {/* Contacto principal */}
          <div className="sidebar-contact">
            <span className="contact-title">{t.nav.contactTitle}</span>
            <span className="contact-item">
              {t.nav.phoneLabel}: +519 78646205
            </span>
            <span className="contact-item">
              {t.nav.emailLabel}: comercial@sax.com.bo
            </span>
          </div>
        </div>
      </aside>

      {/* Overlay para cerrar el nav al tocar fuera */}
      {isMobileOpen && (
        <button
          type="button"
          className="sidebar-overlay"
          aria-label="Cerrar navegación"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Botón de 3 rayas para abrir el nav cuando está cerrado */}
      {!isMobileOpen && (
        <button
          type="button"
          className="sidebar-toggle-mobile"
          onClick={() => setIsMobileOpen(true)}
          aria-label="Abrir navegación"
        >
          <Menu size={22} />
        </button>
      )}
    </>
  );
};

export default Navbar;
