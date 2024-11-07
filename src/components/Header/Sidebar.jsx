import React from 'react';
import logo from '../../assets/images/logos/sitelogo.svg';
import { Link, useLocation } from 'react-router-dom';
const Sidebar = ({ isOpen, onClose }) => {
    const location = useLocation();

    return (
        <div className={`fixed top-0 z-50 left-0 shadow-lg shadow-gray-300 h-full w-64 bg-hero-bg text-white transform transition-transform duration-300 md:hidden block ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="between py-6 px-4">
                <div className="center gap-2">
                    <img src={logo} alt="Site Logo" />
                    <p className="text-xl font-poppins">Restaurant</p>
                </div>
                <button onClick={onClose} className="text-white text-2xl">
                    &times; {/* Close icon */}
                </button>
            </div>
            <nav className="flex flex-col items-start p-4 space-y-4 bg-white h-full text-gray-800">
          <Link to={'/'} className={`border-b-2 ${location.pathname === '/' ? " border-yellow-400" : " border-transparent"} font-semibold  hover:text-yellow-400 `}>Home</Link>
          <Link to={'/about'} className={`border-b-2 ${location.pathname === '/about' ? " border-yellow-400" : "   border-transparent"} hover:text-yellow-400 font-semibold`}>About</Link>
          <Link to={'/portfolio'} className={`border-b-2 ${location.pathname === '/portfolio' ? " border-yellow-400" : " X border-transparent"} hover:text-yellow-400 font-semibold`}>Portfolio</Link>
          <Link to={'/client'} className={`border-b-2 ${location.pathname === '/client' ? " border-yellow-400" : "  border-transparent"} hover:text-yellow-400 font-semibold`}>Clients</Link>
          <Link to={'/blog'} className={`border-b-2 ${location.pathname === '/blog' ? " border-yellow-400" : "  border-transparent"} hover:text-yellow-400 font-semibold`}>Blog</Link>
          <Link to={'/contact'} className={`border-b-2 ${location.pathname === '/contact' ? " border-yellow-400" : " border-transparent"} hover:text-yellow-400 font-semibold`}>Contact</Link>
        </nav>
        </div>
    );
};

export default Sidebar;
