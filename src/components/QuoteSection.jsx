import React from 'react';
import { useTranslation } from 'react-i18next';
import { Timer } from 'lucide-react';
import './QuoteSection.css';

const QuoteSection = () => {
  const { t } = useTranslation();

  return (
    <section className="quote-section">
      <div className="quote-container">
        <div className="quote-icon">
          <Timer size={80} strokeWidth={1} />
        </div>
        <h2 className="quote-title">{t('quote_title')}</h2>
        <p className="quote-subtext">{t('quote_sub')}</p>
        
        <div className="quote-btns">
          <a href="#process" className="btn-outline-white">
            {t('quote_btn_1')}
          </a>
          <a href="#contact" className="btn-white-solid">
            {t('quote_btn_2')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
