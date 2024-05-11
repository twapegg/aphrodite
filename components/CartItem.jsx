import React from "react";
import Image from "next/image";

const CartItem = ({ collection, name, price, img, category }) => {
  return (
    <div className="grid grid-cols-8 p-8 bg-gray-200">
      <div className="col-span-1">
        <Image
          src={"https://placehold.jp/150x150.png"}
          width={100}
          height={100}
          alt={name + category}
        />
      </div>
      <div className="ml-7 col-span-5 flex flex-col gap-1">
        <h1 className="text-xl">Product Name</h1>
        <h1 className="text-sm text-gray-600">Collection: {collection}</h1>
        <h2 className="text-sm text-gray-600">Category: {category}</h2>
      </div>
      <div className="col-span-2 ml-7 flex flex-col justify-between">
        <h1 className="text-xl flex justify-end">${price}123</h1>
        <button
          type="button"
          className="bg-black text-white text-sm py-2 rounded-full w-full"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
