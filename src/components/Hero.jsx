import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      
      <div className="hero-bg" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070')` }}></div>

      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: i18n.language === 'ar' ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            {t('hero_title')}
          </h1>
          
          <p className="hero-subtext">
            {t('hero_desc')}
          </p>
          
          <div className="hero-btns">
            <a href="#process" className="btn-orange">
              {t('hero_secondary_cta')}
            </a>
            <a href="#contact" className="btn-green-large">
              {t('hero_cta')}
            </a>
          </div>
        </motion.div>
      </div>

      {/* WhatsApp Widget */}
      <a href="https://wa.me/yournumber" className="whatsapp-widget" target="_blank" rel="noopener noreferrer">
        <MessageCircle size={32} />
      </a>
    </section>
  );
};

export default Hero;
