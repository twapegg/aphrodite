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
      "http://aphrodite-orpin.vercel.app/browse/collections/Vivienne/Vivienne%20Dragon%20Pendant,%20Yellow%20Gold,%20White%20Gold,%20Lacquer,%20Diamonds%20&%20Colored%20Gemstones",
      "http://aphrodite-orpin.vercel.app/browse/collections/Vivienne/Vivienne%20Rabbit%20Pendant,%20White%20Gold,%20Lacquer,%20Diamonds%20&%20Colored%20Gemstones",
      "http://aphrodite-orpin.vercel.app/browse/collections/Vivienne/Vivienne%20Sheep%20Pendant,%20Yellow%20Gold,%20White%20Gold,%20Grey%20Mother-Of-Pearl,%20Diamonds%20&%20Colored%20Gemstones",
    ],
  };

  const Idylle = {
    title: "Idylle Blossom Collection",
    desc: "Imbued with contemporary femininity, the delicate creations in the Idylle Blossom Collection are balanced around three luminous shades of gold, outlining a refined allure.",
    images: [
      "https://eu.louisvuitton.com/content/dam/lv/online/high-end/women/jewelry/W_Jwl_Blossom_V4.html/jcr:content/assets/idylle/JEWELRY_BLOSSOM_020_ME_LVCOM_1600x2000_DII.jpg?imwidth=1090",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-idylle-blossom-two-row-ring-pink-gold-and-diamonds-categories--Q9N42A_PM2_Front%20view.png?wid=1090&hei=1090",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-idylle-blossom-paved-ring-3-golds-and-diamonds-categories--Q9R75A_PM2_Front%20view.png?wid=1090&hei=1090",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-idylle-blossom-ear-stud-pink-gold-and-diamonds-per-unit-categories--Q06169_PM2_Front%20view.png?wid=1090&hei=1090",
    ],
    alts: [
      "Idylle Blossom Collection Background",
      "Idylle Blossom two-row Ring",
      "Idylle Blossom paved Ring",
      "Idylle Blossom two-row Ring",
    ],
    urls: [
      "/browse/collections/Idylle Blossom",
      "http://aphrodite-orpin.vercel.app/browse/collections/Idylle/Idylle%20Blossom%20Two-Row%20Ring,%20Pink%20Gold%20And%20Diamonds",
      "http://aphrodite-orpin.vercel.app/browse/collections/Idylle/Idylle%20Blossom%20Paved%20Ring,%203%20Golds%20And%20Diamonds",
      "http://aphrodite-orpin.vercel.app/browse/collections/Idylle/Idylle%20Blossom%20Ear%20Stud,%20Pink%20Gold%20And%20Diamonds%20-%20Per%20Unit",
    ],
  };

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
      <Feature {...Idylle} />
    </div>
  );
}
