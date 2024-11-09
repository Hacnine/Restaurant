
import React from 'react';
import featured1 from '../../assets/images/featured/featured1.png';
import featured2 from '../../assets/images/featured/featured2.png';

const Hero = () => {
    return (
        <section className=" text-white lg:pt-24 pt-10  bg-hero-bg wrapper relative ">
            <div className="relative container mx-auto flex flex-col md:flex-row items-start justify-between md:py-20">
                {/* Text Section */}
                <div className="md:w-1/2 ">
                    <div className="md:absolute top-18  lg:max-w-[700px] md:max-w-[400px] wo "> <h1 className="text-[55px] md:text-[45px] lg:text-[90px] leading-tight md:leading-[1.1] bg-customred/50">Taste the Authentic Saudi Cuisine</h1>
                        <p className="mb-6 font-poppins font-semibold text-lg max-w-[550px]">
                            Among the best Saudi chefs in the world, serving you something beyond flavor.
                        </p>
                        <button className="bg-yellow-400 text-black py-3 px-6  font-bold">
                            Explore Menu
                        </button>
                     </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 mt-10 md:mt-0">
                    <img src={featured1} className='md:block hidden' alt="Food" />
                    <img src={featured2} className='md:hidden block' alt="Offer" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
