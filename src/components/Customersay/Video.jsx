import React, { useRef, useState } from 'react'
const Video = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlay = () => {
        setIsPlaying(true);
        videoRef.current.play();
    };
    return (
        <div className="lg:w-[55%] relative ">
            <video
                ref={videoRef}
                width="100%"
                height="900"
                className=""
                poster='/products/Video.png' // Optional poster image before play
            >
                <source
                    src="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" // Replace with actual video URL
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <button
                        onClick={handlePlay}
                        className="bg-yellow-500 text-white rounded-full p-3"
                    >
                        {/* <img width={820} height={300} src={placeholder} alt="" /> */}
                     
                    </button>
                </div>
            )}
        </div>
    )
}

export default Video
