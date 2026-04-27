import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';
import './Process.css';

const Process = () => {
  const { t } = useTranslation();
  const steps = t('process_steps', { returnObjects: true });

  return (
    <section className="process-section" id="about">
      <div className="process-container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Trans i18nKey="process_title" components={{ accent: <span className="text-gradient" /> }} />
          </motion.h2>
          <p className="section-desc">{t('process_desc')}</p>
        </div>

        <div className="process-steps-grid">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="process-step-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="step-number">{index + 1}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
