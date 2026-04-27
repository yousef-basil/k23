import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Code, 
  BarChart3, 
  Palette, 
  Video, 
  Layout, 
  Smartphone, 
  Search, 
  ShoppingBag 
} from 'lucide-react';
import './Services.css';

const iconMap = {
  it_consultant: Monitor,
  web_dev: Code,
  digital_marketing: BarChart3,
  graphic_design: Palette,
  video_production: Video,
  ui_ux: Layout,
  mobile_app: Smartphone,
  seo: Search,
  ecommerce: ShoppingBag,
};

const Services = () => {
  const { t } = useTranslation();
  const services = t('services', { returnObjects: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Trans i18nKey="services_title" components={{ accent: <span className="text-gradient" /> }} />
          </motion.h2>
          <motion.div 
            className="section-line"
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
          ></motion.div>
        </div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => {
            const Icon = iconMap[service.id];
            return (
              <motion.div 
                key={service.id} 
                className="service-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon-wrapper">
                  {Icon && <Icon className="service-icon" size={32} />}
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
                <div className="service-card-footer">
                  <span className="learn-more">{t('hero_cta')}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
