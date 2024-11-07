import React, { useRef, useState } from 'react';
import CustomerCommentary from './CustomerCommentary';

const FoodTestimonials = ({key}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <div className="flex flex-col lg:flex-row items-stretch bg-white w-full px-1" key={key}>
      {/* Commentary Section */}
      <div className="lg:w-[45%]  bg-commenttext text-black p-16 hidden lg:flex flex-col justify-between">
        <CustomerCommentary/>
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

      <div className="lg:w-[45%]  bg-commenttext text-black p-8 lg:hidden flex flex-col justify-between">
        <CustomerCommentary/>
      </div>
    </div>
  );
};

export default FoodTestimonials;
