import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Stats from '../components/Stats';
import Circuit from '../components/Circuit';
import Blog from '../components/Blog';
import QuoteSection from '../components/QuoteSection';
import Footer from '../components/Footer';
import './WebsitePage.css';

const WebsitePage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = t('website_process_steps', { returnObjects: true }) || [];

  return (
    <div className="website-page">
      <Navbar />
      
      {/* Unique Hero for Website Page */}
      <section className="website-hero">
        <div className="website-hero-content">
          <h1>{t('hero_title')}</h1>
          <p>{t('hero_desc')}</p>
          <div className="hero-btns">
            <a href="#quote" className="btn-orange">{t('hero_cta')}</a>
            <a href="#process" className="btn-green-large">{t('hero_secondary_cta')}</a>
          </div>
        </div>
      </section>

      <Stats />

      {/* Zigzag Section 1 */}
      <section className="content-zigzag">
        <div className="container zigzag-row">
          <div className="zigzag-text">
            <h2>{t('website_zigzag_1_title')}</h2>
            <p>{t('website_zigzag_1_desc')}</p>
            <p>{t('website_zigzag_1_desc2')}</p>
          </div>
          <div className="zigzag-image">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" alt="Team collaborating" />
          </div>
        </div>
      </section>

      {/* Zigzag Section 2 (Image Left, Text Right) */}
      <section className="content-zigzag bg-light">
        <div className="container zigzag-row reverse">
          <div className="zigzag-image">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015" alt="Analytics and growth" />
          </div>
          <div className="zigzag-text">
            <h2>{t('website_zigzag_2_title')}</h2>
            <p>{t('website_zigzag_2_desc')}</p>
            <p>{t('website_zigzag_2_desc2')}</p>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="website-process" id="process">
        <div className="container">
          <div className="process-header">
            <h2>{t('website_process_title')}</h2>
            <p>{t('website_process_desc')}</p>
          </div>
          
          <div className="process-timeline">
            <div className="track-line">
              <div className="glowing-pulse"></div>
            </div>
            
            {Array.isArray(processSteps) && processSteps.map((step, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content glass-effect">
                  <div className="step-number">0{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
            
            <div className="process-cta text-center" style={{marginTop: '4rem', zIndex: 10, position: 'relative'}}>
              <a href="#quote" className="btn-orange-large">{t('hero_cta')}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Websites */}
      <section className="website-types bg-light">
        <div className="container">
          <h2 className="text-center section-title">{t('website_types_title')}</h2>
          <div className="types-grid">
            {Array.isArray(t('website_types_cards', { returnObjects: true })) && t('website_types_cards', { returnObjects: true }).map((card, idx) => (
              <div key={idx} className="type-card glass-card">
                <div className="card-icon">🚀</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <a href="#quote" className="btn-orange-outline">{card.btn}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="website-pricing">
        <div className="container">
          <h2 className="text-center section-title">{t('website_pricing_title')}</h2>
          <div className="pricing-grid">
            {Array.isArray(t('website_pricing_cards', { returnObjects: true })) && t('website_pricing_cards', { returnObjects: true }).map((card, idx) => (
              <div key={idx} className={`pricing-card ${card.highlight ? 'highlight' : ''}`}>
                {card.highlight && <div className="popular-badge">Most Popular</div>}
                <h3>{card.title}</h3>
                <div className="price">{card.price}</div>
                <ul className="pricing-features">
                  {Array.isArray(card.features) && card.features.map((feat, fidx) => (
                    <li key={fidx}><span className="check">✅</span> {feat}</li>
                  ))}
                </ul>
                <a href="#quote" className={`btn-${card.highlight ? 'green' : 'orange'}-large`}>{card.btn}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="content-zigzag bg-light">
        <div className="container zigzag-row">
          <div className="zigzag-image">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" alt="Why choose us" />
          </div>
          <div className="zigzag-text">
            <h2>{t('website_why_title')}</h2>
            <p>{t('website_why_desc')}</p>
            <ul className="why-list">
              {Array.isArray(t('website_why_list', { returnObjects: true })) && t('website_why_list', { returnObjects: true }).map((item, idx) => (
                <li key={idx}><span className="check">🟢</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Extra Features Zigzags */}
      {Array.isArray(t('website_features', { returnObjects: true })) && t('website_features', { returnObjects: true }).map((feat, idx) => (
        <section key={idx} className={`content-zigzag ${idx % 2 !== 0 ? 'bg-light' : ''}`}>
          <div className={`container zigzag-row ${feat.reverse ? 'reverse' : ''}`}>
            <div className="zigzag-text">
              <h2>{feat.title}</h2>
              <p>{feat.desc}</p>
            </div>
            <div className="zigzag-image">
              <img src={feat.image} alt={feat.title} />
            </div>
          </div>
        </section>
      ))}

      {/* FAQ & Clients Info */}
      <section className="website-info bg-light">
        <div className="container">
          <div className="info-box">
            <h2>{t('website_cost_title')}</h2>
            <p>{t('website_cost_desc')}</p>
          </div>
          <div className="info-box">
            <h2>{t('website_clients_title')}</h2>
            <p>{t('website_clients_desc')}</p>
          </div>
        </div>
      </section>

      <Circuit />
      
      <QuoteSection />

      <Blog />

      <Footer />
    </div>
  );
};

export default WebsitePage;
