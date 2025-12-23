import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Benefits from './Benefits';
import Solutions from './Solutions';
import CaseStudies from './CaseStudies';
import Testimonials from './Testimonials';
import CtaBanner from './CtaBanner';
import BrandGrid from './BrandGrid';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Benefits />
      <Solutions />
      <CaseStudies />
      <Testimonials />
      <CtaBanner />
      <BrandGrid />
    </>
  );
};

export default HomePage;