import React from 'react';


const FoodCard = ({key, name, description, image }) => {
  return (
    <div className="bg-white hover:cursor-pointer px-2 py-3 mx-2  shadow-md flex flex-col items-center justify-center sm:w-[240px] sm:h-[240px]   w-[306px] h-[300px]" key={key}>
      <img src={image} alt={name} className="size-24 object-cover rounded-full " />
      <div className="w-9 h-1 my-3 bg-customred"></div>
      <h3 className=" text-lg font-bebus">{name}</h3>
      <p className="font-semibold text-xs font-poppins">{description} </p>
    </div>
  );
};

export default FoodCard;
