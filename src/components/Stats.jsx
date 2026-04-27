import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2 } from 'lucide-react';
import './Stats.css';

const Stats = () => {
  const { t } = useTranslation();
  const stats = t('stats', { returnObjects: true });

  if (!Array.isArray(stats)) return null;

  return (
    <div className="stats-bar">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <CheckCircle2 size={24} className="stat-icon" />
            <span className="stat-text">{stat}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
