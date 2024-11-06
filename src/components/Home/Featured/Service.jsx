import React from 'react';

const items = [
  { img:"/icon/package.svg", title: 'Fast Delivery', description: 'Within 30 minutes' },
  { img:"/icon/medal.svg", title: 'Absolute Dinning', description: 'Best buffer restaurats' },
  { img:"/icon/bag.svg", title: 'Pickup Delivery', description: 'Grab your food order' },
  // Add more items as needed
];

const Service = () => {
  return (
    <div className="container mx-auto mt-14 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white  py-4 rounded-lg flex items-center justify-start gap-4">
            <div className='shadow-md p size-12 shadow-gray-300 rounded-full p-2'><img src={item.img}  alt="" /></div>
            
            <div>
            <h3 className="text-xl font-bebus mb-2">{item.title}</h3>
            <p className="text-gray-700 font-poppins text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
