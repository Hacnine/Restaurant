import React from 'react';
import Hero from './Hero';
import Story from './Story';
import Values from './Values';
import Testimonials from './Testimonials';


const About = () => {
  return (
    <div className=" py-8 wrapper">
      <Hero />
      <Story />
      <Values />
      <Testimonials />
    </div>
  );
};

export default About;
