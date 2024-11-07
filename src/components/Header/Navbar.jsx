import React, { useState } from 'react';
import logo from '../../assets/images/logos/sitelogo.svg';
import Sidebar from './Sidebar';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className="sticky top-0 w-full z-50">
            <div className='bg-hero-bg wrapper absolute top-0 z-40 w-full '>
                <navbar className="bg-transparent text-white wrapper">
                    <div className="container mx-auto flex justify-between items-center ">
                        <div className="center gap-10">
                            <Link to={'/'} className="center gap-2">
                                <img src={logo} alt="Site Logo" />
                                <p className="text-4xl text-white font-poppins">Restaurant</p>
                            </Link>
                            <nav className="hidden lg:flex space-x-6">
                                <Link to={'/'} className={`border-b-2 ${location.pathname === '/' ? " border-yellow-400" : "text-white border-transparent"} hover:text-yellow-400 `}>Home</Link>
                                <Link to={'/about'} className={`border-b-2 ${location.pathname === '/about' ? " border-yellow-400" : "text-white border-transparent"} hover:text-yellow-400 `}>About</Link>
                                <Link to={'/portfolio'} className={`border-b-2 ${location.pathname === '/portfolio' ? " border-yellow-400" : "text-white border-transparent"} hover:text-yellow-400 `}>Portfolio</Link>
                                <Link to={'/client'} className={`border-b-2 ${location.pathname === '/client' ? " border-yellow-400" : "text-white border-transparent"} hover:text-yellow-400 `}>Clients</Link>
                                <Link to={'/blog'} className={`border-b-2 ${location.pathname === '/blog' ? " border-yellow-400" : "text-white border-transparent"} hover:text-yellow-400 `}>Blog</Link>
                                <Link to={'/contact'} className={`border-b-2 ${location.pathname === '/contact' ? " border-yellow-400" : "text-white border-transparent"} hover:text-yellow-400 `}>Contact</Link>
                            </nav>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-2 font-poppins hidden font-semibold lg:block">
                            Book a Table
                        </button>
                        <button onClick={toggleSidebar} className="text-white text-2xl lg:hidden block">
                            <img src="/icon/menu.svg" alt="" />
                        </button>
                    </div>
                </navbar>


                <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
            </div>
        </div>
    );
};

export default Navbar;
