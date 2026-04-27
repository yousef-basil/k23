import React from 'react';
import { useTranslation } from 'react-i18next';
import './Circuit.css';

const Circuit = () => {
  const { t } = useTranslation();

  return (
    <section className="circuit-section">
      <div className="circuit-container">
        <div className="circuit-content">
          <div className="circuit-text-group">
            <h2 className="circuit-heading">{t('circuit_websites_title')}</h2>
            <p>{t('circuit_websites_desc')}</p>
          </div>
          
          <div className="circuit-text-group">
            <h2 className="circuit-heading orange">{t('circuit_webshops_title')}</h2>
            <p>{t('circuit_webshops_desc')}</p>
          </div>

          <div className="circuit-text-group">
            <h2 className="circuit-heading gray">{t('circuit_hosting_title')}</h2>
          </div>
        </div>

        <div className="circuit-visual desktop-only">
          {/* Simple SVG representation of the circuit */}
          <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M100 300 Q 200 100 400 150 T 700 200" stroke="#ddd" strokeWidth="40" strokeLinecap="round" />
             <path d="M100 300 Q 200 100 400 150 T 700 200" stroke="#333" strokeWidth="15" strokeDasharray="20 10" />
             <circle cx="100" cy="300" r="20" fill="#ff7e00" />
             <circle cx="400" cy="150" r="20" fill="#ff7e00" />
             <circle cx="700" cy="200" r="20" fill="#ff7e00" />
             <text x="90" y="260" fill="#333" fontWeight="bold">Dag 1 Intake</text>
             <text x="380" y="110" fill="#333" fontWeight="bold">Dag 5 Live</text>
             <text x="680" y="160" fill="#333" fontWeight="bold">Feedback</text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Circuit;
