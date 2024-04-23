"use client";

import Link from "next/link";
import { BsBag } from "react-icons/bs";
import { FaBars, FaSearch, FaRegHeart, FaRegUser } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="py-9 px-20 border-gray-200 bg-transparent dark:border-gray-700 absolute top-0 left-0 right-0 z-10 transition-colors duration-500 ease-in-out group hover:bg-white hover:text-black">
      <div className="flex flex-wrap items-center justify-between w-full ">
        {/* Left side */}
        <div className="flex items-center w-1/3 gap-10">
          <button className="py-2 text-xl relative group-hover:text-black flex items-center justify-center space-x-4">
            <FaBars className="mb-1" />
            <span>Menu</span>
          </button>
          <button className="py-2 text-xl relative group-hover:text-black flex items-center justify-center space-x-4">
            <FaSearch className="mb-1" />
            <span>Search</span>
          </button>
        </div>

        {/* Center */}
        <div className="flex justify-center w-1/3">
          <Link href="/">
            <span className="text-5xl whitespace-nowrap dark:text-white group-hover:text-black">
              Aphrodite
            </span>
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center w-1/3 justify-end gap-10">
          <Link href="/contact">
            <span className="text-xl whitespace-nowrap dark:text-white group-hover:text-black">
              Contact Us
            </span>
          </Link>
          <button className="py-2 text-xl relative group-hover:text-black flex items-center justify-center space-x-4">
            <BsBag className="mb-1" />
          </button>

          <button className="py-2 text-xl relative group-hover:text-black flex items-center justify-center space-x-4">
            <FaRegUser className="mb-1" />
          </button>
        </div>
      </div>
    </nav>
  );
}
