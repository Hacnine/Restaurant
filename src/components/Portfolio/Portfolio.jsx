import React from 'react';
import Hero from './Hero';
import FeaturedDishes from './FeaturedDishes.jsx';
import ChefSpecialities from './ChefSpecialities.jsx';
import EventCatering from './EventCatering.jsx';
import Testimonials from './Testimonials.jsx';


const Portfolio = () => {
  return (
    <div className="px-4 py-8 wrapper">
      <Hero />
      <FeaturedDishes />
      <ChefSpecialities />
      <EventCatering />
      <Testimonials />
    </div>
  );
};

export default Portfolio;
