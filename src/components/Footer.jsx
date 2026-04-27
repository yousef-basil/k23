import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Globe, MessageSquare, Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo">
              Swift<span>Digit</span>
            </a>
            <p className="footer-desc">{t('footer_about')}</p>
            <div className="social-links">
              <a href="#"><Globe size={20} /></a>
              <a href="#"><MessageSquare size={20} /></a>
              <a href="#"><Send size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">{t('footer_links_title')}</h4>
            <ul>
              <li><a href="#hero">{t('nav_website')}</a></li>
              <li><a href="#about">{t('nav_about')}</a></li>
              <li><a href="#cases">{t('nav_cases')}</a></li>
              <li><a href="#contact">{t('nav_contact')}</a></li>
            </ul>
          </div>

          <div className="footer-services">
            <h4 className="footer-title">{t('footer_services_title')}</h4>
            <ul>
              <li><a href="#services">{t('nav_website')}</a></li>
              <li><a href="#services">{t('nav_webshop')}</a></li>
              <li><a href="#services">{t('nav_hosting')}</a></li>
              <li><a href="#services">{t('nav_blog')}</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">{t('footer_contact_title')}</h4>
            <ul className="contact-list">
              <li><MapPin size={18} /> <span>Hanzeweg 1c, 7418 AW Deventer</span></li>
              <li><Phone size={18} /> <span>0575 512 125</span></li>
              <li><Mail size={18} /> <span>info@swiftdigit.nl</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SwiftDigit. {t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
