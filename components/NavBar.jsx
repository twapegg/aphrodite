"use client";
import { BsBag } from "react-icons/bs";
import { FaBars, FaSearch, FaRegUser, FaTimes } from "react-icons/fa";
import Link from "next/link";
import OffCanvas from "@/components/OffCanvas";
import { useEffect, useState, useRef } from "react";
import Tooltip from "@mui/material/Tooltip";

import UserOffCanvas from "./UserOffcanvas";
import BreadCrumbs from "./BreadCrumbs";

import { useSession } from "next-auth/react";
import Image from "next/image";

const NavBar = ({ bg, color, sub = false }) => {
  // menu offcanvas

  const { data: session } = useSession();

  // Get user's cart
  const [cartProducts, setCartProducts] = useState([]);

  // Fetch cart and populate cartProducts
  useEffect(() => {
    const fetchCartProducts = async () => {
      if (!session) {
        return;
      }

      const res = await fetch(`/api/shoppingbag/products/${session.user.id}`);

      if (res.status === 200) {
        const data = await res.json();
        setCartProducts(data);
      }
    };

    fetchCartProducts();
  }, [session]);

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
        className={`py-6 xl:py-6 border-gray-200 ${
          isFixed ? "bg-white text-black" : `bg-${bg} text-white`
        }  dark:border-gray-700 ${
          isFixed ? "fixed" : "absolute"
        } top-0 left-0 right-0 z-10 transition-colors duration-1000 ease-in-out group hover:bg-white hover:text-black`}
      >
        <div
          className={`pb-4 px-10 xl:px-20 pt-3 flex flex-wrap items-center justify-between w-full text-${color} ${
            sub ? "border-b border-gray-300" : null
          }`}
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
              <span className="text-3xl lg:text-5xl font-semibold whitespace-nowrap group-hover:text-black">
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
              <Tooltip title="Shopping Bag">
                <button
                  onClick={
                    isShoppingBagOpen ? closeShoppingBag : toggleShoppingBag
                  }
                  className="invisible lg:visible py-2 text-xl relative group-hover:text-black flex items-center justify-center space-x-4"
                >
                  <BsBag className="mb-1" />
                </button>
              </Tooltip>
              <div
                className={`rounded-lg border shadow-xl absolute top-12 right-0 w-96 h-[36rem] bg-white transition-all duration-300 text-black ${
                  isShoppingBagOpen
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                }`}
                ref={dropdownRef}
              >
                <div className="p-4">
                  <h2 className="text-2xl font-bold">Shopping Bag</h2>
                  <div className="flex flex-col justify-between items-center mt-4 ">
                    <div className="overflow-y-auto max-h-[30rem] scrollbar-none pb-24">
                      {cartProducts.length > 0 ? (
                        cartProducts.map((jewelry) => (
                          <div
                            key={jewelry._id}
                            className="flex items-center gap-4 border-b border-gray-300 py-2 w-full relative"
                          >
                            <Image
                              src={jewelry.imgs[0]}
                              alt={jewelry.name}
                              className="object-cover"
                              width={80}
                              height={80}
                            />
                            <div>
                              <p className="text-lg">{jewelry.name}</p>
                              <p className="text-lg">${jewelry.price}</p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="flex flex-col justify-center items-center">
                          <span className="text-lg ">No items in your bag</span>
                        </div>
                      )}

                      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                        <Link href="/shoppingbag">
                          <button className="text-white bg-black py-2 px-16 rounded-3xl hover:border hover:border-white hover:">
                            View Bag
                          </button>
                        </Link>
                      </div>
                    </div>
                    <Tooltip title="Close">
                      <button
                        onClick={closeShoppingBag}
                        className="p-1 absolute top-3 right-3 text-xl text-black hover:bg-gray-200 hover:text-gray-900 rounded-lg"
                      >
                        <FaTimes />
                      </button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
            <Tooltip title="User">
              <button
                className="py-2 text-xl relative group-hover:text-black flex items-center justify-center space-x-4"
                onClick={toggleUserOffCanvas}
              >
                <FaRegUser className="mb-1" />
              </button>
            </Tooltip>
          </div>
        </div>
        {sub ? (
          <div
            className={`px-10 xl:px-20 flex justify-between items-center mt-4 bg-white text-black`}
          >
            <div className=" text-black">
              <BreadCrumbs />
            </div>
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default NavBar;
