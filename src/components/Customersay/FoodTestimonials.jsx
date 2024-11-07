import React, { useRef, useState } from 'react';

const FoodTestimonials = ({key}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <div className="flex flex-col lg:flex-row items-stretch bg-white w-full" key={key}>
      {/* Commentary Section */}
      <div className="lg:w-[45%]  bg-commenttext text-black p-16 flex flex-col justify-between">
        <div>
          <div className="text-lg font-semibold flex items-start">
            <img src="/icon/quote.svg" alt="quote" className="w-6 h-6" />
            <p className="pl-4 text-sm lg:text-base">
              You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-8 border-b-2 border-black pb-4">
          <div>
            <p className="font-bold">Khalid Al Dawsry</p>
            <p className="text-sm">Jeddah, Saudi</p>
          </div>
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Khalid Al Dawsry"
              className="w-10 h-10 rounded-full"
            />
            <div className="bg-red-600 w-10 h-1 absolute -bottom-2"></div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="lg:w-[55%] relative flex items-center justify-center bg-gray-100">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster="/products/Video.png"
        >
          <source
            src="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={handlePlay}
              className="bg-yellow-500 text-white rounded-full p-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-4.504 2.252A1 1 0 019 12.585V8.415a1 1 0 011.248-.97l4.504 2.253a1 1 0 010 1.77z"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodTestimonials;
