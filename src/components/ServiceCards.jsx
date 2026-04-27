import React from 'react';
import { useTranslation } from 'react-i18next';
import './ServiceCards.css';

const ServiceCards = () => {
  const { t } = useTranslation();
  const cards = t('cards', { returnObjects: true });

  if (!Array.isArray(cards)) return null;

  return (
    <section className="service-cards-section">
      <div className="cards-grid">
        {cards.map((card, idx) => (
          <div key={idx} className="simple-card">
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
