import React from 'react';
import Hero from '../Clients/Hero';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import Map from './Map';
import ContactUs from './ContactUs';

const Contact = () => {
  return (
    <div className="px-4 py-8 wrapper">
      <Hero />
      <ContactDetails />
      <ContactForm />
      <Map />
      <ContactUs />
    </div>
  );
};

export default Contact;
