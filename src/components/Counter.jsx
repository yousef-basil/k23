import React from 'react';
import { useTranslation } from 'react-i18next';
import './Counter.css';

const Counter = () => {
  const { t } = useTranslation();
  const counters = t('counter', { returnObjects: true });

  if (!Array.isArray(counters)) return null;

  return (
    <section className="counter-section">
      <div className="counter-container">
        <h2 className="counter-main-title">{t('counter_title')}</h2>
        <div className="counter-grid">
          {counters.map((item, idx) => (
            <div key={idx} className="counter-card">
              <h2 className="counter-number">{item.num}</h2>
              <p className="counter-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
