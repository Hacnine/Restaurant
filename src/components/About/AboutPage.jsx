import React from 'react';
import Hero from './Hero';
import Story from './Story';
import Values from './Values';
import Testimonials from './Testimonials';


const About = () => {
  return (
    <div className=" py-8">

      <div className="wrapper">
        <Hero />
      </div>

      <div className="wrapper">
        <Story />
      </div>
      <div className="wrapper">

        <Values />
      </div>
      <div className=" bg-ligherpink py-5">
        <Testimonials />
      </div>
    </div>
  );
};

export default About;
