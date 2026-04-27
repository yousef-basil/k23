import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const { t } = useTranslation();

  const currentCase = t('portfolio_case', { returnObjects: true });

  if (!currentCase || !currentCase.tags) return null;

  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2 className="section-title">{t('portfolio_title')}</h2>
          <p className="section-desc">{t('portfolio_sub')}</p>
        </div>

        <div className="main-case">
          <div className="case-visual">
            <img src={currentCase.image} alt={currentCase.title} />
          </div>
          <div className="case-details">
            <h3 className="case-name">{currentCase.title}</h3>
            <div className="case-tags">
              {currentCase.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
            <a href="#" className="btn-orange-large">{t('portfolio_btn')}</a>
          </div>
        </div>

        <div className="portfolio-footer">
          <a href="#" className="btn-green-pill">{t('portfolio_btn_main')}</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
