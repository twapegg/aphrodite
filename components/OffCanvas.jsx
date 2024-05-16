import Link from "next/link";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { FaTimes, FaChevronRight } from "react-icons/fa";

const OffCanvas = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-all duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-black opacity-70"
        onClick={onClose}
      ></div>
      <div className="absolute left-0 h-full lg:w-1/4 w-1/2 bg-white text-black shadow-lg transition-all duration-300 ease-in-out transform translate-x-0">
        <div className="p-4 relative">
          <Tooltip title="Close">
            <button
              onClick={onClose}
              className="p-1 absolute top-3 right-3 text-xl text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg"
            >
              <FaTimes />
            </button>
          </Tooltip>
          <div className="space-y-4 mt-10">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center hover:bg-gray-200 justify-between py-2 px-4 rounded-md font-bold text-xl group hover:underline-animation"
            >
              Home
            </Link>
            <Link
              href="/browse"
              onClick={onClose}
              className="flex items-center hover:bg-gray-200 justify-between py-2 px-4 rounded-md font-bold text-xl group hover:underline-animation"
            >
              Browse Jewelry
            </Link>
            <Link
              href="/browse/collections"
              onClick={onClose}
              className="flex items-center hover:bg-gray-200 justify-between py-2 px-4 rounded-md font-bold text-xl group hover:underline-animation"
            >
              Collections
            </Link>
            <Link
              href="/browse/category"
              onClick={onClose}
              className="flex items-center hover:bg-gray-200 justify-between py-2 px-4 rounded-md font-bold text-xl group hover:underline-animation"
            >
              Categories
            </Link>
            <Link
              href="/search"
              onClick={onClose}
              className="flex items-center hover:bg-gray-200 lg:hidden justify-between py-2 px-4 rounded-md font-bold text-xl group hover:underline-animation"
            >
              Search
            </Link>
            <Link
              href="/about"
              onClick={onClose}
              className="flex items-center hover:bg-gray-200 justify-between py-2 px-4 rounded-md font-bold text-xl group hover:underline-animation"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center hover:bg-gray-200 justify-between py-2 px-4 rounded-md font-bold text-xl group hover:underline-animation"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;
