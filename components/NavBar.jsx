"use client";

import Link from "next/link";
import { BsBag } from "react-icons/bs";
import { FaBars, FaSearch, FaRegUser } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="py-6 xl:py-8 px-10 xl:px-20 border-gray-200 bg-white dark:border-gray-700 absolute top-0 left-0 right-0 z-10">
      <div className="flex flex-wrap items-center justify-between w-full ">
        {/* Left side */}
        <div className="flex items-center w-1/3 gap-10">
          <button className="py-2 xl:text-xl relative text-black flex items-center justify-center space-x-4">
            <FaBars className="mb-[0.5]" />
            <span>Menu</span>
          </button>
          <button className="invisible lg:visible py-2   xl:text-xl relative group-hover:text-black flex items-center justify-center space-x-4">
            <FaSearch className="mb-[0.5]" />
            <span>Search</span>
          </button>
        </div>

        {/* Center */}
        <div className="flex justify-center w-1/3">
          <Link href="/">
            <span className="text-3xl lg:text-5xl whitespace-nowrap dark:text-white group-hover:text-black">
              Aphrodite
            </span>
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center w-1/3 justify-end gap-10">
          <Link href="/contact" className="invisible lg:visible">
            <span className="text-xl whitespace-nowrap dark:text-white group-hover:text-black">
              Contact Us
            </span>
          </Link>
          <button className="invisible lg:visible py-2 text-xl relative group-hover:text-black flex items-center justify-center space-x-4">
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
