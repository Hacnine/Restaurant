import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FoodCard from "./FoodCard";
import { foodItems } from "../../../constants";
import SectionHeader from "../../Common/SectionHeader";
import NextPrevButton from "../CustomerSay/NextPrevButton";

const FoodItemSlider = () => {
  const sliderRef = useRef(null); // Add a ref
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1225,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 972,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full mx-auto mt-8 bg-fooditem wrapper pt-10 pb-20">
      <div className="between w-full">
        <SectionHeader inspirationWord={"Crispy, Every Bite Test"} title={"Popular Food Items"} />
        <div className="lg:flex items-end justify-end gap-4 hidden">
          <NextPrevButton sliderRef={sliderRef} />
        
        </div>
      </div>
      <div className="pl-3 min-sm:ml-10
       max-lg:pl-2  min-md:pl-3  pt-10">
        <Slider ref={sliderRef} {...settings}>
          {foodItems.map((item, index) => (
            <FoodCard key={index} name={item.name} description={item.description} image={item.image} />
          ))}
        </Slider>
      </div>
      <div className="flex items-center justify-center lg:hidden mt-6 gap-4">
        <NextPrevButton sliderRef={sliderRef} />
      </div>
    </div>
  );
};

export default FoodItemSlider;
