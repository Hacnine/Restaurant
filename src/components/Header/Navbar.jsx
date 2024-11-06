import React, { useState } from 'react';
import logo from '../../assets/images/logos/sitelogo.svg';
import { IoMenu } from "react-icons/io5";
import Sidebar from './Sidebar'; // Import the Sidebar component
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar state
    };

    return (
        <div className="sticky top-0 w-full z-50">
            <div className='bg-hero-bg wrapper absolute top-0 z-40 w-full '>
                <navbar className="bg-transparent text-white wrapper">
                    <div className="container mx-auto flex justify-between items-center ">
                        <div className="center gap-10">
                            <div className="center gap-2">
                                <img src={logo} alt="Site Logo" />
                                <p className="text-4xl font-poppins">Restaurant</p>
                            </div>
                            <nav className="hidden lg:flex space-x-6">
                                <Link to={'/'}  className="hover:text-yellow-400">Home</Link>
                                <Link to={'/about'} className="hover:text-yellow-400">About</Link>
                                <Link to={'/portfolio'} className="hover:text-yellow-400">Portfolio</Link>
                                <Link to={'/client'} className="hover:text-yellow-400">Clients</Link>
                                <Link to={'/blog'} className="hover:text-yellow-400">Blog</Link>
                                <Link to={'/contact'} className="hover:text-yellow-400">Contact</Link>
                            </nav>
                        </div>
                        <button className="bg-yellow-400 text-black px-4 py-2 font-poppins hidden font-semibold lg:block">
                            Book a Table
                        </button>
                        <button onClick={toggleSidebar} className="text-white text-2xl lg:hidden block">
                            <IoMenu />
                        </button>
                    </div>
                </navbar>


                <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
            </div>
        </div>
    );
};

export default Navbar;
