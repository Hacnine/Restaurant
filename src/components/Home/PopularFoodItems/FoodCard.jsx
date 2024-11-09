import React from 'react';

const FoodCard = ({ key, name, description, image }) => {
  return (
    <div className="relative bg-white group hover:cursor-pointer px-2 py-3 mx-2 shadow-md flex flex-col items-center justify-center sm:w-[240px] sm:h-[240px] w-[306px] h-[300px]" key={key}>
      <img src={image} alt={name} className="w-24 h-24 object-cover rounded-full" />
      <div className="w-9 h-1 my-3 bg-customred"></div>
      <h3 className="text-lg font-bebus">{name}</h3>
      <p className="font-semibold text-xs font-poppins">{description}</p>

      {/* Order Now overlay sliding from bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-customred flex items-center justify-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out h-[40%]">
        <span className="text-white font-bebus text-sm tracking-wider border-2 px-2 py-1">Order Now</span>
      </div>
    </div>
  );
};

export default FoodCard;
