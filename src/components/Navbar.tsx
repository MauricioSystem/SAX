import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../utils/ThemeContext';
import { useLanguage } from '../utils/LanguageContext';
import { DropdownMenu, DropdownMenuItem } from './ui/dropdown-menu';
import logoblanco from '../assets/logoblanco.png';
import logooscuro from '../assets/logooscuro.png';
import '../styles/Navbar.scss';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const languages = [
    { code: 'es' as const, label: 'Español' },
    { code: 'en' as const, label: 'English' },
    { code: 'fr' as const, label: 'Français' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0];

  return (
    <>
      <nav className={`navbar ${theme} ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-left">
            <Link to="/" className="navbar-logo">
              <img 
                src={theme === 'dark' ? logooscuro : logoblanco} 
                alt="SAX Logo" 
                className="logo-img" 
              />
            </Link>
          </div>

          <div className="navbar-center">
            <Link to="/" className="nav-link">
              {t.nav.inicio}
            </Link>
            <Link to="/quienes-somos" className="nav-link">
              {t.nav.quienesSomos}
            </Link>
            <Link to="/productos" className="nav-link">
              {t.nav.productos}
            </Link>
            <Link to="/contactenos" className="nav-link">
              {t.nav.contactenos}
            </Link>
          </div>

          <div className="navbar-right">
            <div className="navbar-controls">
              <DropdownMenu trigger={<span>{currentLanguage.label}</span>}>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    active={language === lang.code}
                    onClick={() => setLanguage(lang.code)}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenu>

              <button className="theme-toggle" onClick={toggleTheme}>
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <button
        className="navbar-toggle-mobile"
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label={isCollapsed ? 'Mostrar menú' : 'Ocultar menú'}
      >
        {isCollapsed ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
      </button>
    </>
  );
};

export default Navbar;
