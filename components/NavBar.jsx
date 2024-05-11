"use client";
import { BsBag } from "react-icons/bs";
import { FaBars, FaSearch, FaRegUser, FaTimes } from "react-icons/fa";
import Link from "next/link";
import OffCanvas from "@/components/OffCanvas";
import { useEffect, useState, useRef } from "react";

import UserOffCanvas from "./UserOffcanvas";

const NavBar = ({ bg, color }) => {
  // menu offcanvas
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
  };

  const closeOffCanvas = () => {
    setIsOffCanvasOpen(false);
  };

  // user offcanvas
  const [isUserOffCanvasOpen, setIsUserOffCanvasOpen] = useState(false);

  const toggleUserOffCanvas = () => {
    setIsUserOffCanvasOpen(!isUserOffCanvasOpen);
  };

  const closeUserOffCanvas = () => {
    setIsUserOffCanvasOpen(false);
  };

  // navbar fixed
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsFixed(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  // shopping bag dropdown
  const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false);

  const toggleShoppingBag = () => {
    setIsShoppingBagOpen(!isShoppingBagOpen);
  };

  const closeShoppingBag = () => {
    setIsShoppingBagOpen(false);
  };

  // shopping bag dropdown ref
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsShoppingBagOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <UserOffCanvas
        isOpen={isUserOffCanvasOpen}
        onClose={closeUserOffCanvas}
      />
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
                onClick={
                  isShoppingBagOpen ? closeShoppingBag : toggleShoppingBag
                }
                className="invisible lg:visible py-2 text-xl relative group-hover:text-black flex items-center justify-center space-x-4"
              >
                <BsBag className="mb-1" />
              </button>
              <div
                className={`rounded-lg border border-black absolute top-12 right-0 w-80 h-96 bg-white shadow-lg transition-all duration-300 text-black ${
                  isShoppingBagOpen
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                }`}
                ref={dropdownRef}
              >
                <div className="p-4">
                  <h2 className="text-2xl">Shopping Bag</h2>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg">No items in your bag</span>
                    <button
                      onClick={closeShoppingBag}
                      className="p-1 absolute top-3 right-3 text-xl text-black hover:bg-gray-200 hover:text-gray-900 rounded-lg"
                    >
                      <FaTimes />
                    </button>
                  </div>
                </div>
                <div className="flex justify-center items-center h-20">
                  <Link href="/shoppingbag">
                    <button className="text-white bg-black py-2 px-4 rounded-3xl">
                      View Bag
                    </button>
                  </Link>

                  <Link href="/checkout">
                    <button className="text-black bg-white border border-black py-2 px-4 rounded-3xl ml-4">
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <button
              className="py-2 text-xl relative group-hover:text-black flex items-center justify-center space-x-4"
              onClick={toggleUserOffCanvas}
            >
              <FaRegUser className="mb-1" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
