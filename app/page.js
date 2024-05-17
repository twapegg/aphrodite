"use client";

import Feature from "@/components/Feature";
import NavBar from "@/components/NavBar";

import { useState, useRef } from "react";

import { FaPause, FaPlay } from "react-icons/fa";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
    }
  };

  //
  const toggleAudio = () => {
    setIsMuted((prevState) => !prevState);
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  };
  const Vivienne = {
    title: "Vivienne Collection",
    desc: "The Vivienne Collection is a tribute to the House's mascot, a playful character imagined by Nicolas Ghesquière.",
    images: [
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F09%2Flouis-vuitton-vivienne-family-travelers-jewellery-collection-release-info-002.jpg?cbr=1&q=90&fbclid=IwAR2WzMJXIIzXsi7jIEbiUbJ8uJ8aalzEuxPro2-j0rYK0Dxw5oNgtM-4Jls",

      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-vivienne-dragon-pendant-yellow-gold-white-gold-lacquer-diamonds-colored-gemstones--Q93976_PM2_Front%20view.png?wid=1090&hei=1090",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-vivienne-rabbit-pendant-white-gold-lacquer-diamonds-colored-gemstones--Q93975_PM2_Front%20view.png?wid=2400&hei=2400",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-vivienne-sheep-pendant-yellow-gold-white-gold-grey-mother-of-pearl-diamonds-colored-gemstones--Q93979_PM2_Front%20view.png?wid=1090&hei=1090",
    ],
    alts: [
      "Vivienne Collection Background",
      "Vivienne Dragon Pendant",
      "Vivienne Rabbit Pendant",
      "Vivienne Sheep Pendant",
    ],
    urls: [
      "/browse/collections/Vivienne",
      "http://localhost:3000/browse/collections/Vivienne/Vivienne%20Dragon%20Pendant,%20Yellow%20Gold,%20White%20Gold,%20Lacquer,%20Diamonds%20&%20Colored%20Gemstones",
      "http://localhost:3000/browse/collections/Vivienne/Vivienne%20Rabbit%20Pendant,%20White%20Gold,%20Lacquer,%20Diamonds%20&%20Colored%20Gemstones",
      "http://localhost:3000/browse/collections/Vivienne/Vivienne%20Sheep%20Pendant,%20Yellow%20Gold,%20White%20Gold,%20Grey%20Mother-Of-Pearl,%20Diamonds%20&%20Colored%20Gemstones",
    ],
  };

  // const

  return (
    <div className="w-full">
      <NavBar bg="transparent" />
      <section className="relative max-w-screen h-screen">
        <video
          src="https://res.cloudinary.com/dafend6qz/video/upload/v1715887136/uqpbzewkxecnvvibg94j.mp4"
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
          id="video"
        />
        <button
          className="absolute bottom-4 left-4 text-white px-4 py-2 rounded-full"
          onClick={togglePlayPause}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button
          className="absolute bottom-4 right-4 text-white px-4 py-2 rounded-full"
          onClick={toggleAudio}
        >
          {isMuted ? <HiSpeakerWave /> : <HiSpeakerXMark />}
        </button>
      </section>
      <Feature {...Vivienne} />
    </div>
  );
}
