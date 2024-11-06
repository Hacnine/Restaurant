import React from 'react';
import circle from '../../../assets/images/logos/circle.svg'
const MarketExperienceCard = () => {
  return (
    <div className=" absolute md:left-36 top-6 left-10 flex items-center justify-center bg-white rounded-lg shadow-md p-6 w-52 h-28">
  
      <div className="relative flex items-center justify-center w-20 h-20">
     
        <img src={circle} className='absolute' alt="" />
     
        <span className="text-xl font-bold">50+</span>
      </div>


      <div className="ml-4 text-sm">
        <p className="font-semibold text-black">Market</p>
        <p className="text-black font-semibold">Experiences</p>
      </div>
    </div>
  );
};

export default MarketExperienceCard;
