import React from 'react';

import Hero from './Hero';
import ClientLogos from './ClientLogos';
import Testimonials from './Testimonials';
import ClientExperience from './ClientExperience';
import Contact from './Contact';


const Clients = () => {
  return (
    <div className="px-4 py-8 wrapper">
      <Hero />
      <ClientLogos />
      <Testimonials />
      <ClientExperience />
      <Contact />
    </div>
  );
};

export default Clients;
