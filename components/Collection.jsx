import Image from "next/image";
import React from "react";

const Collection = ({ name, img }) => {
  return (
    <div className="group bg-gradient-to-t from-zinc-100 to-zinc-300">
      <div className="flex flex-col items-center justify-center p-5 text-black">
        <div className="transition-transform duration-300 group-hover:scale-110">
          <Image
            src={img}
            alt={`${name}-image`}
            width={250}
            height={250}
            unoptimized={true}
          />
        </div>
        <span className="text-3xl">{name}</span>
        <span className="text-gray-700 underline">View Collection</span>
      </div>
    </div>
  );
};

export default Collection;
