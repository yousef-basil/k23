import React from 'react';
import { useTranslation } from 'react-i18next';
import { Timer } from 'lucide-react';
import './Promise.css';

const Promise = () => {
  const { t } = useTranslation();

  return (
    <section className="promise-section">
      <div className="promise-container">
        <div className="timer-icon-wrapper">
          <Timer size={60} strokeWidth={1} />
        </div>
        <h2 className="promise-title">
          {t('promise_title')}
        </h2>
      </div>
    </section>
  );
};

export default Promise;
