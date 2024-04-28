import Image from "next/image";
import React from "react";
import ImageDisplay from "@/components/ImageDisplay";
import { FaRegHeart } from "react-icons/fa";
import NavBarTrans from "@/components/NavBar";

const ProductPage = ({
  collection,
  name,
  price,
  imgs,
  description,
  isAvailable,
  category,
}) => {
  return (
    <>
      <div className="h-screen flex">
        {/* Left side: Carousel of images */}
        <div className="w-1/2">
          {imgs
            ? imgs.map((imgUrl, index) => (
                <ImageDisplay
                  key={index}
                  source={imgUrl}
                  alt={`${name}-${index + 1}`}
                />
              ))
            : null}
        </div>

        {/* Right side: Product details */}
        <div className="w-1/2 font-sans fixed top-0 right-0 h-screen bg-white flex items-center justify-center">
          <div className="flex flex-col text-black gap-0.5   h-1/2 w-1/2 mt-24">
            <p className="text-sm ">{collection}</p>
            <div className="flex flex-row justify-between">
              <p className="text-xl">{name}</p>
              <span>
                <FaRegHeart className="mt-2" />
              </span>
            </div>
            <p className="text-s text-gray-700 ">${price}</p>
            <button className="bg-black text-white py-2.5 text-m rounded-full w-full mt-8 ">
              Add to Shopping Bag
            </button>
            <p className="text-lg flex mt-5">
              {isAvailable ? "Available" : "Not Available"}
            </p>
            <p className="text-sm mt-7 text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
