import Image from "next/image";
import React from "react";

const ImageDisplay = ({ source, alt }) => {
  return (
    <div className="relative h-screen max-w-full bg-gradient-to-t from-zinc-100 to-zinc-300">
      <Image src={source} alt={alt} fill className="object-cover" />
    </div>
  );
};

export default ImageDisplay;
