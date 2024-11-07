import React from 'react';


const FoodCard = ({key, name, description, image }) => {
  return (
    <div className="bg-white hover:cursor-pointer px-2 py-3 mx-2  shadow-md flex flex-col items-center md:w-[240px] md:h-[240px]  sm:w-full w-[350px] h-[350px]" key={key}>
      <img src={image} alt={name} className="size-32 object-cover rounded-full " />
      <div className="w-9 h-1 my-3 bg-customred"></div>
      <h3 className=" text-lg font-bebus">{name}</h3>
      <p className="text-gray-500 text-xs font-poppins">{description}

      </p>
    </div>
  );
};

export default FoodCard;
