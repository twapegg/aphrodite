import React from "react";
import ImageDisplay from "@/components/ImageDisplay";
import { useSession } from "next-auth/react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  return (
    <>
      <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left side: Carousel of images */}
        <div className="overflow-y-visible">
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
        <div className="lg:w-1/2 lg:fixed lg:right-0 lg:top-0 lg:h-screen lg:overflow-y-auto bg-white flex items-center justify-center">
          <div className="flex flex-col text-black gap-0.5 w-1/2 mt-24">
            <p className="text-sm font-bold">{collection}</p>
            <p className="text-xl">{name}</p>
            <p className="text-s text-gray-700 mt-3">${price}</p>
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
            <p className="text-sm mt-7 text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
