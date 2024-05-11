import NavBar from "@/components/NavBar";
import React from "react";
import { FaTimes } from "react-icons/fa";

const page = () => {
  return (
    <div> 
      <NavBar bg={"white"} color={"black"} />

      <div className="container mx-auto py-20 text-black">
        <h1 className="text-3xl font-bold">Shopping Bag</h1>
        <div className="flex justify-between items-center mt-8">
          <span className="text-lg">No items in your bag</span>
          <button className="text-xl text-black hover:bg-gray-200 hover:text-gray-900 rounded-lg">
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
