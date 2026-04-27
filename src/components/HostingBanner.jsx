import React from 'react';
import { useTranslation } from 'react-i18next';
import './HostingBanner.css';

const HostingBanner = () => {
  const { t } = useTranslation();

  return (
    <div className="hosting-banner">
      <div className="banner-content">
        <div className="banner-text">
          <h3>{t('banner_title')}</h3>
          <p>{t('banner_desc')}</p>
        </div>
        <a href="#contact" className="btn-green-banner">
          {t('banner_cta')}
        </a>
      </div>
    </div>
  );
};

export default HostingBanner;
