"use client";

import Feature from "@/components/Feature";
import NavBar from "@/components/NavBar";

import { useState, useRef } from "react";

import { FaPause, FaPlay } from "react-icons/fa";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
    }
  };

  return (
    <div className="w-full">
      <NavBar bg="transparent" />
      <section className="relative max-w-screen h-screen">
        <video
          src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/RXUtM83zw0_HD.mp4"
          frameBorder="0"
          allowFullScreen
          muted
          loop
          autoPlay
          width={"100%"}
          height={"100%"}
          className="absolute inset-0 w-full h-full object-cover z-1"
          ref={videoRef}
          playing={isPlaying}
        />
        <button
          className="absolute bottom-4 left-4 text-white px-4 py-2 rounded-full"
          onClick={togglePlayPause}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </section>
      <Feature />
    </div>
  );
}
