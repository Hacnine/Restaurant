import React, { useState } from "react";

const ReviewSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-6 bg-white">
      {/* Commentary Section */}
      

      {/* Video Section */}
     
    </div>
  );
};

export default ReviewSection;
