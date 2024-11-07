import React, { useEffect } from 'react'
import Hero from './Hero';
import Story from './Story';
import Values from './Values';
import Testimonials from './Testimonials';
import { useLocation } from 'react-router-dom';

const About = () => {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


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
