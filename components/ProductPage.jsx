import Image from "next/image";
import React from "react";
import ImageDisplay from "@/components/ImageDisplay";
import { FaRegHeart } from "react-icons/fa";
import NavBarTrans from "@/components/NavBarTrans";

const ProductPage = () => {
  return (
    <>
    <NavBarTrans/>
      <div className="h-screen flex">
        {/* Left side: Carousel of images */}
        <div className="w-1/2 ">
          <ImageDisplay
            source="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-volt-one-pendant-categories--Q93923_PM1_Side%20view.png?wid=1090&hei=1090"
            alt="image one"
          />
          <ImageDisplay
            source="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-volt-one-pendant-categories--Q93923_PM1_Cropped%20view.png?wid=1090&hei=1090"
            alt="image two"
          />
          <ImageDisplay
            source="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-volt-one-pendant-categories--Q93923_PM2_Front%20view.png?wid=1090&hei=1090"
            alt="image three"
          />
          <ImageDisplay
            source="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-volt-one-pendant-categories--Q93923_PM1_Cropped%20worn%20view.png?wid=1090&hei=1090"
            alt="image three"
          />
          {/* Add more ImageDisplay components for additional images */}
        </div>

        {/* Right side: Product details */}
        <div className="w-1/2 font-sans fixed top-0 right-0 h-screen bg-white flex items-center justify-center">
          <div className="flex flex-col text-black gap-0.5   h-1/2 w-1/2 mt-24">
            <p className="text-sm ">Collection Name</p>
            <div className="flex flex-row justify-between">
              <p className="text-xl">Product Name</p>
              <span>
                <FaRegHeart className="mt-2" />
              </span>
            </div>
            <p className="text-s ">$2,500</p>
            <button className="bg-black text-white py-2.5 text-m rounded-full w-full mt-8 ">
              Add to Shopping Bag
            </button>
            <p className="text-lg mt-7">Product Description</p>
            <p className="text-lg">Available</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
