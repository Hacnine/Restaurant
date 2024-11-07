import React from 'react';
import chefImage from '../../assets/images/featured/chefImage.png'; 
import restaurantImage from '../../assets/images/featured/restaurantImage.jpg';
import restaurantImage4 from '../../assets/images/featured/restaurantImage4.jpg';

const About = () => {
  return (
    <div className="px-4 py-8 md:px-16 lg:px-32">

      <section className="text-center pt-36 pb-8">
        <h1 className="text-3xl md:text-5xl  mb-4 ">About Us</h1>
        <p className="text-lg md:text-3xl font-bebus">
          Discover our story, our passion for great food, and our dedication to serving you.
        </p>
      </section>

      <section className="flex flex-col lg:flex-row items-center gap-8 mb-12">
        <img src={chefImage} alt="Our Chef" className="w-full lg:w-1/2 rounded-md shadow-md" />
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold  mb-4">Our Story</h2>
          <p className=" mb-6">
            Founded in 2021, our restaurant was built on the love for authentic, delicious food and a warm, welcoming environment. We pride ourselves on using only the freshest ingredients to craft meals that are both satisfying and memorable.
          </p>
          <p className="">
            From our humble beginnings to where we are today, our journey has been filled with passion, dedication, and a commitment to excellence. Join us and be a part of our story as we continue to bring joy to the table.
          </p>
        </div>
      </section>


      <section className="bg-gray-100 p-8 rounded-md shadow-md mb-12">
        <h2 className="text-2xl  text-center  mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-xl  ">Quality Ingredients</h3>
            <p className="">We source the finest ingredients to ensure that each dish is of the highest quality.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl  ">Sustainability</h3>
            <p className="">Our commitment to sustainability means we prioritize local, eco-friendly practices.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl  ">Community</h3>
            <p className="">We strive to be a positive force in our community by supporting local suppliers and causes.</p>
          </div>
        </div>
      </section>

 
      <section className="mb-12">
        <h2 className="text-2xl  text-center  mb-6">What Our Customers Say</h2>
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-md">
            <p className="">"The best dining experience! The food was amazing and the staff were very friendly."</p>
            <span className="block mt-4 font-semibold ">- Sarah L.</span>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-md">
            <p className="">"A cozy spot with delicious dishes and a lovely ambiance. Highly recommend!"</p>
            <span className="block mt-4 font-semibold ">- Michael T.</span>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-md">
            <p className="">"Absolutely loved it! The flavors were unique and everything was fresh."</p>
            <span className="block mt-4 font-semibold ">- Emily R.</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl text-center  mb-6">Our Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src={restaurantImage} alt="Restaurant Interior" className="w-full h-40 object-cover rounded-md shadow-md" />
          <img src={restaurantImage4} alt="Chef at Work" className="w-full h-40 object-cover rounded-md shadow-md" />

          <div className="w-full h-40 bg-gray-200 rounded-md shadow-md flex items-center justify-center text-gray-500 font-semibold">
            + More
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
