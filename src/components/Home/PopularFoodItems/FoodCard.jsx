import React from 'react';


const FoodCard = ({key, name, description, image }) => {
  return (
    <div className="bg-white px-2 py-3 mx-2 rounded-lg shadow-md flex flex-col items-center md:size-[240px] size-[350px]" key={key}>
      <img src={image} alt={name} className="size-32 object-cover rounded-full " />
      <div className="w-9 h-1 my-4 bg-customred"></div>
      <h3 className=" text-lg font-bebus">{name}</h3>
      <p className="text-gray-500 text-xs font-poppins">{description}

      </p>
    </div>
  );
};

export default FoodCard;
