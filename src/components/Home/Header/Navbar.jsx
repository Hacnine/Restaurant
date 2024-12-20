import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Link, useLocation } from 'react-router-dom';
import TotalOrder from '../../Common/TotalOrder';
import { useOrder } from '../../../context/OrderContext';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [navbarColor, setNavbarColor] = useState("bg-transparent");
    const [titleColor, setTitleColor] = useState("text-customred");


    const { orders } = useOrder();
    const location = useLocation(); // React Router hook to access the current location


    // Set the initial color based on the current pathname
    useEffect(() => {
        if (location.pathname === '/') {
            setNavbarColor('bg-transparent');
            setTitleColor('text-customred')
        } else {
            setNavbarColor('bg-customred');
            setTitleColor('text-[#fc9a30]')
        }
    }, [location.pathname]); // Re-run when pathname changes

    // Change color based on scroll position
    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 20) {
                setNavbarColor("backdrop-blur-sm  shadow-md bg-customred/90");
                setTitleColor('text-[#fc9a30]')
            } else if (location.pathname === '/') {
                setNavbarColor("bg-transparent text-white-green");
                setTitleColor("text-customred");
            } else {
                setNavbarColor("bg-customred");
                setTitleColor('text-[#fc9a30]');
            }
        };

        window.addEventListener("scroll", changeColor);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, [location.pathname]); // Re-run when pathname changes to ensure correct behavior

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className={`sticky top-0 z-50 w-full ${navbarColor}`}>
            <div className=" container  mx-auto wrapper  w-full relative z-40">
                <div className="bg-transparent text-white">
                    <div className="flex justify-between items-center  py-4">
                        <div className="flex items-center gap-10">
                            <Link to={'/'} className="flex items-center gap-2 ">
                                <img src={"/sitelogo.svg"} className='w-12' alt="Site Logo" />
                                <p className=" text-2xl font-poppins"><span className={`${titleColor} text-4xl`}>A</span>rab <span className={`text-[#fc9a30] text-4xl`}>C</span>uisine</p>
                            </Link>
                            <nav className="hidden text-lg lg:flex space-x-6">
                                <Link to={'/'} className={`border-b-2 ${location.pathname === '/' ? " border-yellow-400" : "text-white border-transparent"} hover:text-yellow-400 `}>Home</Link>
                                <Link to={'/about'} className={`border-b-2 ${location.pathname === '/about' ? " border-yellow-400" : "text-white border-transparent"} hover:text-yellow-400 `}>About</Link>
                                <Link to={'/portfolio'} className={`border-b-2 ${location.pathname === '/portfolio' ? " border-yellow-400" : "text-white border-transparent"} hover:text-yellow-400 `}>Portfolio</Link>
                                <Link to={'/client'} className={`border-b-2 ${location.pathname === '/client' ? " border-yellow-400" : "text-white border-transparent"} hover:text-yellow-400 `}>Clients</Link>
                                <Link to={'/blog'} className={`border-b-2 ${location.pathname === '/blog' ? " border-yellow-400" : "text-white border-transparent"} hover:text-yellow-400 `}>Blog</Link>
                                <Link to={'/contact'} className={`border-b-2 ${location.pathname === '/contact' ? " border-yellow-400" : "text-white border-transparent"} hover:text-yellow-400 `}>Contact</Link>
                            </nav>
                        </div>
                        <div className="lg:flex hidden items-center justify-end gap-2 border-">
                            <TotalOrder />
                            <button className="bg-yellow-400 text-black px-4 py-2 xl:text-base text-sm font-poppins font-semibold hidden lg:block">
                                Book a Table
                            </button>
                        </div>

                        <div className="lg:hidden flex items-center gap-3">
                            <TotalOrder />
                            <button onClick={toggleSidebar} className="text-white text-2xl ">
                                <img src="/icon/menu.svg" alt="Menu Icon" />
                            </button>
                        </div>
                    </div>
                </div>

                <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
            </div>
        </div>
    );
};

export default Navbar;
