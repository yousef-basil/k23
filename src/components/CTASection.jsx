import React from 'react';
import { useTranslation } from 'react-i18next';
import './CTASection.css';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="cta-team-section">
      <div className="cta-team-container">
        <div className="cta-team-content">
          <h2 className="cta-team-title">{t('cta_team_title')}</h2>
          <a href="#contact" className="btn-green-large">
            {t('cta_team_btn')}
          </a>
        </div>
        <div className="cta-team-image">
          <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1974" alt="Team Member" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
