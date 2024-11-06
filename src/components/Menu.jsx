import React from 'react';
import logo from '../assets/images/logos/sitelogo.svg'

const Menu = () => {
  return (
    <navbar className="bg-transparent text-white p-6 wrapper">
      <div className="container mx-auto flex justify-between items-center">
        <div className="center gap-2">
        <img src={logo} alt="" />
            <p  className="text-4xl  font-poppins">Restaurant</p>
            
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#" className="hover:text-yellow-400">About</a>
          <a href="#" className="hover:text-yellow-400">Portfolio</a>
          <a href="#" className="hover:text-yellow-400">Clients</a>
          <a href="#" className="hover:text-yellow-400">Blog</a>
          <a href="#" className="hover:text-yellow-400">Contact</a>
        </nav>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-full">
          Book a Table
        </button>
      </div>
    </navbar>
  );
};

export default Menu;
