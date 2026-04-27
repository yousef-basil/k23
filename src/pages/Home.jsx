import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Promise from '../components/Promise';
import Circuit from '../components/Circuit';
import HostingBanner from '../components/HostingBanner';
import Reasons from '../components/Reasons';
import ServiceCards from '../components/ServiceCards';
import QuoteSection from '../components/QuoteSection';
import Counter from '../components/Counter';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Stats />
      <Promise />
      <Circuit />
      <HostingBanner />
      <Reasons />
      <ServiceCards />
      <QuoteSection />
      <Counter />
      <Portfolio />
      <Blog />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
