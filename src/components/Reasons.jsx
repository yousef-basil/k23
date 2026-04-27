import React from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Timer } from 'lucide-react';
import './Reasons.css';

const Reasons = () => {
  const { t } = useTranslation();
  const cols = t('reasons_cols', { returnObjects: true });

  if (!Array.isArray(cols)) return null;

  return (
    <section className="reasons-section">
      <div className="reasons-container">
        <div className="timer-icon-wrapper mini">
          <Timer size={40} strokeWidth={1} />
        </div>
        <h2 className="reasons-main-title">{t('reasons_title')}</h2>
        
        <div className="reasons-grid">
          {cols.map((col, idx) => (
            <div key={idx} className="reason-col">
              <h3>{col.title}</h3>
              <p>{col.desc}</p>
              <ul className="reason-checks">
                {col.checks.map((check, cidx) => (
                  <li key={cidx}>
                    <Check size={18} className="check-icon" />
                    <span>{check}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
