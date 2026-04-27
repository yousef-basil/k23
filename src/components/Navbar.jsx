import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X, ChevronDown, Hand } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
    setLangOpen(false);
    setMobileMenuOpen(false);
  };

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' }
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="logo" dir="ltr">
            <span className="logo-icon"><Hand size={18} fill="currentColor" /></span> Swift<span>Digit</span>
          </Link>
        </div>

        <div className="nav-center desktop-only">
          <div className="nav-links">
            <div className="nav-item-dropdown">
              <Link to="/website" className="nav-link-dropdown">{t('nav_website')} <ChevronDown size={14} /></Link>
              <div className="nav-dropdown-menu">
                <Link to="/website">WordPress</Link>
                <Link to="/website">Redesign</Link>
                <Link to="/website">Maatwerk</Link>
              </div>
            </div>
            <a href={isHomePage ? "#services" : "/#services"}>{t('nav_webshop')} <ChevronDown size={14} /></a>
            <a href={isHomePage ? "#services" : "/#services"}>{t('nav_hosting')} <ChevronDown size={14} /></a>
            <a href={isHomePage ? "#cases" : "/#cases"}>{t('nav_cases')}</a>
            <a href={isHomePage ? "#about" : "/#about"}>{t('nav_about')} <ChevronDown size={14} /></a>
            <a href={isHomePage ? "#blog" : "/#blog"}>{t('nav_blog')} <ChevronDown size={14} /></a>
            <a href={isHomePage ? "#contact" : "/#contact"}>{t('nav_contact')}</a>
          </div>
        </div>

        <div className="nav-right desktop-only">
          <div className="custom-lang-switcher">
            <button className="lang-btn" onClick={() => setLangOpen(!langOpen)}>
              <span className="flag">{currentLang.flag}</span>
              <span className="code">{currentLang.code.toUpperCase()}</span>
              <ChevronDown size={14} className={langOpen ? 'rotate' : ''} />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div 
                  className="lang-dropdown"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {languages.map(lang => (
                    <button 
                      key={lang.code} 
                      className={`lang-option ${i18n.language === lang.code ? 'active' : ''}`}
                      onClick={() => changeLanguage(lang.code)}
                    >
                      <span className="flag">{lang.flag}</span>
                      <span className="label">{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#contact" className="btn-green nav-cta">
            {t('hero_cta')}
          </a>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
          >
            <div className="mobile-links">
              <Link to="/website" onClick={() => setMobileMenuOpen(false)}>{t('nav_website')}</Link>
              <a href={isHomePage ? "#services" : "/#services"} onClick={() => setMobileMenuOpen(false)}>{t('nav_webshop')}</a>
              <a href={isHomePage ? "#services" : "/#services"} onClick={() => setMobileMenuOpen(false)}>{t('nav_hosting')}</a>
              <a href={isHomePage ? "#cases" : "/#cases"} onClick={() => setMobileMenuOpen(false)}>{t('nav_cases')}</a>
              <a href={isHomePage ? "#about" : "/#about"} onClick={() => setMobileMenuOpen(false)}>{t('nav_about')}</a>
              <a href={isHomePage ? "#blog" : "/#blog"} onClick={() => setMobileMenuOpen(false)}>{t('nav_blog')}</a>
              <a href={isHomePage ? "#contact" : "/#contact"} onClick={() => setMobileMenuOpen(false)}>{t('nav_contact')}</a>
            </div>
            <div className="mobile-lang-grid">
              {languages.map(lang => (
                <button 
                  key={lang.code}
                  className={`mobile-lang-btn ${i18n.language === lang.code ? 'active' : ''}`}
                  onClick={() => changeLanguage(lang.code)}
                >
                  {lang.flag} {lang.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
