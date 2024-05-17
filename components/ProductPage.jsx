import React, { useEffect, useState } from "react";
import ImageDisplay from "@/components/ImageDisplay";
import { useSession } from "next-auth/react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BreadCrumbs from "./BreadCrumbs";
import { Skeleton } from "@mui/material";

const ProductPage = ({
  id,
  collection,
  name,
  price,
  imgs,
  description,
  isAvailable,
}) => {
  const { data: session } = useSession();

  const addToCart = async () => {
    if (!session) {
      toast.error("You must be signed in!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      return;
    }

    const res = await fetch("/api/shoppingbag/add", {
      method: "POST",
      body: JSON.stringify({ userID: session.user.id, jewelry: id }),
    });

    if (res.status === 201) {
      toast.success("Successfully added to cart!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Failed to add to cart!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const parent = document.getElementById("parent-container");
      const fixedElement = document.getElementById("fixed-element");

      const parentRect = parent.getBoundingClientRect();
      const fixedRect = fixedElement.getBoundingClientRect();

      const threshold = parentRect.height - 300 - fixedRect.height;

      if (window.scrollY >= threshold) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="h-full grid grid-cols-1 lg:grid-cols-2 relative"
        id="parent-container"
      >
        {/* Left side: Carousel of images */}
        <div className="overflow-y-visible">
          {imgs ? (
            imgs.map((imgUrl, index) => (
              <ImageDisplay
                key={index}
                source={imgUrl}
                alt={`${name}-${index + 1}`}
              />
            ))
          ) : (
            <Skeleton variant="rect" width={1500} height={1500} />
          )}
        </div>

        {/* Right side: Product details */}
        <div
          id="fixed-element"
          className={`lg:w-1/2 ${
            isFixed
              ? "lg:fixed lg:right-0 lg:top-0 lg:h-screen visible"
              : "lg:opacity-0  lg:absolute lg:bottom-auto lg:right-0"
          } lg:overflow-y-auto bg-white flex items-center justify-center transition-all duration-75`}
        >
          <div className="flex flex-col text-black gap-0.5 w-1/2 mt-24">
            {collection ? (
              <p className="text-xl font-bold">{collection}</p>
            ) : (
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            )}
            {name ? (
              <p className="text-2xl">{name}</p>
            ) : (
              <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
            )}
            {price ? (
              <p className="text-xl text-gray-700 mt-3">${price}</p>
            ) : (
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            )}
            <button
              onClick={addToCart}
              className="bg-black text-white py-3 text-m rounded-full w-full mt-8 hover:bg-white hover:text-black border hover border-black transition-all duration-300"
            >
              Add to Shopping Bag
            </button>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <p className="text-lg flex mt-5">
              {isAvailable ? "Available" : "Not Available"}
            </p>
            {description ? (
              <p className="text-sm mt-7 text-gray-500">{description}</p>
            ) : (
              <Skeleton variant="text" sx={{ fontSize: "6rem" }} />
            )}
          </div>
        </div>
      </div>
      <div className="mt-5 py-24 border-t flex text-black text-3xl justify-center items-center">
        <BreadCrumbs />
      </div>
    </>
  );
};

export default ProductPage;
