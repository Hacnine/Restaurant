import React from 'react';
import logo from '../../assets/images/logos/sitelogo.svg';
const Sidebar = ({ isOpen, onClose }) => {
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
                <a href="#" className="hover:text-yellow-400">Home</a>
                <a href="#" className="hover:text-yellow-400">About</a>
                <a href="#" className="hover:text-yellow-400">Portfolio</a>
                <a href="#" className="hover:text-yellow-400">Clients</a>
                <a href="#" className="hover:text-yellow-400">Blog</a>
                <a href="#" className="hover:text-yellow-400">Contact</a>
            </nav>
        </div>
    );
};

export default Sidebar;
