"use client";
import React, { useState } from "react";

type SocialIcon = {
  link: string;
  icon: React.ReactElement;
};

const VideoCard = ({
  videoSrc,
  poster,
  socialIcons,
}: {
  videoSrc: string;
  poster?: string;
  socialIcons?: SocialIcon[];
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = (videoElement: HTMLVideoElement) => {
    if (isPlaying) {
      videoElement.pause();
      setIsPlaying(false);
    } else {
      videoElement.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className="border shadow-[5px_5px_0px_0px_rgba(109,40,217)] border-black/[0.2] group/canvas-card flex items-center justify-center
        dark:border-white/[0.2] w-80 mx-auto relative h-[20rem] lg:h-[28rem] rounded-3xl overflow-hidden
        sm:max-w-md md:w-auto lg:max-w-xl"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <video
        src={videoSrc}
        poster={poster}
        className="h-full w-full object-cover rounded-3xl"
        controls={true} // Ensure native controls are hidden
        onClick={(e) => handlePlayPause(e.currentTarget)}
      />
      {/* Optional: Play/Pause button */}
      {/* 
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center">
        <button
          onClick={(e) =>
            handlePlayPause(
              e.currentTarget
                .closest(".group/canvas-card")
                ?.querySelector("video")!
            )
          }
          className="text-white text-3xl bg-black/50 p-4 rounded-full"
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>
      </div>
      */}
    </div>
  );
};

export default VideoCard;
