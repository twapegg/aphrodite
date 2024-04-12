import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="relative max-w-1/2 max-h-screen">
        <Image
          src="https://via.placeholder.com/150"
          alt="Silver Jewelry"
          width={1000}
          height={1000}
        />
      </div>
      <div className="w-1/2 h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col text-black gap-3">
          <p className="text-2xl">Collection Name</p>
          <p className="text-2xl">Product Name</p>
          <p className="text-2xl">Availability</p>
          <p className="text-2xl">Product Description</p>
          <button className="bg-black text-white p-5  text-2xl rounded-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
