"use client";
import { BsBag } from "react-icons/bs";
import { FaBars, FaSearch, FaRegUser } from "react-icons/fa";
import Link from "next/link";
import OffCanvas from "@/components/OffCanvas";
import { useEffect, useRef, useState } from "react";

const NavBar = ({ bg, color }) => {
  const [showShoppingBag, setShowShoppingBag] = useState(false);
  const shoppingBagRef = useRef(null);

  const toggleShoppingBag = () => {
    setShowShoppingBag(!showShoppingBag);
  };

  const closeShoppingBag = (event) => {
    if (
      shoppingBagRef.current &&
      !shoppingBagRef.current.contains(event.target)
    ) {
      setShowShoppingBag(false);
    }
  };

  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
  };

  const closeOffCanvas = () => {
    setIsOffCanvasOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsFixed(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", closeShoppingBag);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", closeShoppingBag);
    };
  }, []);

  return (
    <>
      <OffCanvas isOpen={isOffCanvasOpen} onClose={closeOffCanvas} />
      <nav
        className={`py-6 xl:py-6 px-10 xl:px-20 border-gray-200 bg-${bg} dark:border-gray-700 ${
          isFixed ? "fixed" : "absolute"
        } top-0 left-0 right-0 z-10 transition-colors duration-500 ease-in-out group hover:bg-white hover:text-black`}
      >
        <div
          className={`flex flex-wrap items-center justify-between w-full text-${color}`}
        >
          {/* Left side */}
          <div className="flex items-center w-1/3 gap-10">
            <button
              className="py-2 xl:text-xl relative group-hover:text-black flex items-center justify-center space-x-4"
              onClick={toggleOffCanvas}
            >
              <FaBars className="mb-[0.5]" />
              <span>Menu</span>
            </button>
            <button className="invisible lg:visible py-2 xl:text-xl relative group-hover:text-black flex items-center justify-center space-x-4">
              <FaSearch className="mb-[0.5]" />
              <span>Search</span>
            </button>
          </div>
          {/* Center */}
          <div className="flex justify-center w-1/3">
            <Link href="/">
              <span className="text-3xl lg:text-4xl whitespace-nowrap group-hover:text-black">
                Aphrodite
              </span>
            </Link>
          </div>
          {/* Right side */}
          <div className="flex items-center w-1/3 justify-end gap-10">
            <Link href="/contact" className="invisible lg:visible">
              <span className="text-xl whitespace-nowrap group-hover:text-black">
                Contact Us
              </span>
            </Link>
            <div className="relative">
              <button
                className="invisible lg:visible py-2 text-xl relative group-hover:text-black flex items-center justify-center space-x-4"
                onClick={toggleShoppingBag}
              >
                <BsBag className="mb-1" />
              </button>
              {showShoppingBag && (
                <div
                  ref={shoppingBagRef}
                  className="absolute right-0 mt-2 bg-white shadow-lg rounded-md max-w-xl" // Added max-w-xl class
                >
                  {/* Render the list of items from the database here */}
                  <p className="p-4"> Shopping Bag Items</p>
                </div>
              )}
            </div>
            <button className="py-2 text-xl relative group-hover:text-black flex items-center justify-center space-x-4">
              <FaRegUser className="mb-1" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
