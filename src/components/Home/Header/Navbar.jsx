import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="sticky top-0 z-50 w-full   ">
            <div className="max-w-[1368px] bg-hero-bg mx-auto w-full relative z-40">
                <div className="bg-transparent text-white">
                    <div className="container mx-auto flex justify-between items-center px-4 py-4">
                        <div className="flex items-center gap-10">
                            <Link to={'/'} className="flex items-center gap-2">
                                <img src={"/sitelogo.svg"} alt="Site Logo" />
                                <p className="text-4xl font-poppins">Restaurant</p>
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
                        <button className="bg-yellow-400 text-black px-4 py-2 xl:text-base text-sm font-poppins font-semibold hidden lg:block">
                            Book a Table
                        </button>
                        <button onClick={toggleSidebar} className="text-white text-2xl lg:hidden block">
                            <img src="/icon/menu.svg" alt="Menu Icon" />
                        </button>
                    </div>
                </div>

                <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
            </div>
        </div>
    );
};

export default Navbar;
