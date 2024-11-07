import React from 'react';
import portfolioImage1 from '../../assets/images/portfolio/portfolioImage1.jpg'; 
import portfolioImage2 from '../../assets/images/portfolio/portfolioImage2.jpg';
import portfolioImage3 from '../../assets/images/portfolio/portfolioImage3.jpg';

const Portfolio = () => {
  return (
    <div className="px-4 py-8 md:px-16 lg:px-32">

      <section className="text-center pt-36 pb-8">
      <h1 className="text-3xl md:text-5xl  mb-4 ">Our Portfolio</h1>
      <p className="text-lg md:text-3xl font-bebus">
          Explore our finest creations, crafted with passion and dedication to culinary excellence.
        </p>
      </section>

      {/* Featured Dishes Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-  mb-6">Featured Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative">
            <img src={portfolioImage1} alt="Dish 1" className="w-full h-60 object-cover rounded-md shadow-md" />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-md flex items-center justify-center text-white text-lg font- opacity-0 hover:opacity-100 transition-opacity">
              Spicy Grilled Chicken
            </div>
          </div>
          <div className="relative">
            <img src={portfolioImage2} alt="Dish 2" className="w-full h-60 object-cover rounded-md shadow-md" />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-md flex items-center justify-center text-white text-lg font- opacity-0 hover:opacity-100 transition-opacity">
              Seafood Paella
            </div>
          </div>
          <div className="relative">
            <img src={portfolioImage3} alt="Dish 3" className="w-full h-60 object-cover rounded-md shadow-md" />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-md flex items-center justify-center text-white text-lg font- opacity-0 hover:opacity-100 transition-opacity">
              Gourmet Pasta
            </div>
          </div>
        </div>
      </section>

      {/* Chef's Specialities Section */}
      <section className="bg-gray-100 p-8 rounded-md shadow-md mb-12">
        <h2 className="text-2xl font-semi text-center  mb-6">Chef's Specialities</h2>
        <p className="text-center  mb-6">
          Our chef’s hand-picked selections showcase the very best of our culinary skills and creativity.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Speciality Cards */}
          <div className="bg-white p-6 shadow-md rounded-md w-full md:w-1/3">
            <h3 className="text-lg font-semi ">Signature Ribeye Steak</h3>
            <p className=" mt-2">
              Perfectly seared, melt-in-your-mouth ribeye steak seasoned with our secret blend of spices.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md w-full md:w-1/3">
            <h3 className="text-lg font-semi ">Truffle Risotto</h3>
            <p className=" mt-2">
              Creamy risotto infused with truffle oil, topped with fresh herbs and parmesan.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md w-full md:w-1/3">
            <h3 className="text-lg font-semi ">Chocolate Lava Cake</h3>
            <p className=" mt-2">
              Decadent molten chocolate cake served with a scoop of vanilla bean ice cream.
            </p>
          </div>
        </div>
      </section>

      {/* Event Catering Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semi  mb-6 text-center">Event Catering</h2>
        <p className="text-center  mb-10">
          Make your special occasions unforgettable with our tailored catering services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-cover bg-center h-60 rounded-md shadow-md" style={{ backgroundImage: `url(${portfolioImage2})` }}>
            <div className="bg-black bg-opacity-30 rounded-md w-full h-full flex items-center justify-center text-white text-lg font-semi opacity-0 hover:opacity-100 transition-opacity">
              Wedding Catering
            </div>
          </div>
          <div className="bg-cover bg-center h-60 rounded-md shadow-md" style={{ backgroundImage: `url(${portfolioImage3})` }}>
            <div className="bg-black bg-opacity-30 rounded-md w-full h-full flex items-center justify-center text-white text-lg font-semi opacity-0 hover:opacity-100 transition-opacity">
              Corporate Events
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-2xl font-semi text-center  mb-6">What Our Clients Say</h2>
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-md">
            <p className="">"Exceptional service and exquisite dishes – truly unforgettable!"</p>
            <span className="block mt-4 font-semi ">- Alice M.</span>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-md">
            <p className="">"The catering for our wedding was flawless. Highly recommend!"</p>
            <span className="block mt-4 font-semi ">- David W.</span>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-md">
            <p className="">"Every dish was beautifully presented and tasted amazing."</p>
            <span className="block mt-4 font- ">- Sarah P.</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
