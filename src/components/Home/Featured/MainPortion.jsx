import React, { useState } from 'react'
import featured3 from '../../../assets/images/featured/featured3.png';
import foodbg from '../../../assets/images/background/firstfeaturebg.svg';
import Service from './Service';
import MarketExperienceCard from './MarketExperienceCard';

export default function MainPortion() {

    const [activeTab, setActiveTab] = useState('about');

    const tabs = [
        { name: 'about', label: 'About' },
        { name: 'experience', label: 'Experience' },
        { name: 'contact', label: 'Contact' },
    ];

    const tabContent = {
        about: (
            <div>
                <h1>EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD</h1>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>


                <div className="start gap-4">
                    <button className="bg-yellow-500 text-black px-4 py-2 font-poppins font-semibold text-sm">ABOUT MORE</button>

                    <button className="flex items-center gap-2 mt-2">
                        <img src="/icon/call.svg" alt="" />
                        <p className="text-black font-poppins font-semibold text-sm">+88 3426 739 485</p>
                    </button>
                </div>
            </div>
        ),
        experience: (
            <div className=''>
                <h1>Experience</h1>
                <p className="text-gray-700 mb-4">Experience content goes here. Vel hac convallis ipsum, facilisi odio pellentesque bibendum.</p>
            </div>
        ),
        contact: (
            <div className=''>
                <h1 >Contact</h1>
                <p className="text-gray-700 mb-4">Contact details can be found here.</p>
            </div>
        ),
    };


    return (
        <div className="bg-white wrapper relative mt-20">
            <MarketExperienceCard/>
            <img src={foodbg} className=' absolute right-0 bottom-5 z-10 w-32' alt="" />
            <div className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/2 ">
                    <img src={featured3} alt="Burger" className="w-full h-auto" />
                </div>
                <div className="lg:w-1/2 md:mt-0 mt-7">
                    <nav className="flex space-x-4 mb-4  border-b border-customred">
                        {tabs.map((tab) => (
                            <div
                                key={tab.name}
                              
                                onClick={() => setActiveTab(tab.name)}
                                className={`text-sm font-medium ${activeTab === tab.name ? 'bg-customred  text-white' : 'text-black hover:text-gray-500 cursor-pointer'} p-2`}
                            >
                                {tab.label}
                            </div>
                        ))}
                    </nav>



                    <div className=" shadow rounded-b-lg p-4 mt-4">
                        {tabContent[activeTab]}
                    </div>
                </div>

            </div>

            <Service/>
        </div>
    )
}
