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

  const Vivienne = {
    title: "Vivienne Collection",
    desc: "The Vivienne Collection is a tribute to the House's mascot, a playful character imagined by Nicolas Ghesquière.",
    images: [
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F09%2Flouis-vuitton-vivienne-family-travelers-jewellery-collection-release-info-002.jpg?cbr=1&q=90&fbclid=IwAR2WzMJXIIzXsi7jIEbiUbJ8uJ8aalzEuxPro2-j0rYK0Dxw5oNgtM-4Jls",

      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-vivienne-dragon-pendant-yellow-gold-white-gold-lacquer-diamonds-colored-gemstones--Q93976_PM2_Front%20view.png?wid=1090&hei=1090",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-vivienne-tiger-pendant-yellow-gold-white-gold-lacquer-diamonds-colored-gemstones-categories--Q93974_PM2_Front%20view.png?wid=1090&hei=1090&fbclid=IwAR1RW-dJaHdnoi9FmyVfprsu7J9-RoC6fSLEA3Npfvm3MM6BXPRuN1YXCEI",
      "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-vivienne-rooster-pendant-3-golds-lacquer-diamonds-colored-gemstones--Q93981_PM2_Front%20view.png?wid=1090&hei=1090&fbclid=IwAR3zExymTD7AvlSZy4rMWD1NfmMqaeLWPpkTs8jZhDxIoyBnGekofzbkyL4",
    ],
    alts: [
      "Vivienne Collection Background",
      "Vivienne Dragon Pendant",
      "Vivienne Tiger Pendant",
      "Vivienne Rooster Pendant",
    ],
    urls: [
      "/browse/collections/",
      "/shop/vivienne",
      "/shop/vivienne",
      "/shop/vivienne",
    ],
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
      <Feature {...Vivienne} />
    </div>
  );
}
