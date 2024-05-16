import React from "react";
import ImageDisplay from "@/components/ImageDisplay";
import { useSession } from "next-auth/react";

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
      alert("Please sign in to add to cart");
      return;
    }

    const res = await fetch("/api/shoppingbag/add", {
      method: "POST",
      body: JSON.stringify({ userID: session.user.id, jewelry: id }),
    });

    if (res.status === 201) {
      alert("Added to cart");
    } else {
      alert("Failed to add to cart");
    }
  };

  return (
    <>
      <div className="h-screen flex-col">
        {/* Left side: Carousel of images */}
        <div className="lg:w-1/2 w-full">
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
        <div className="lg:w-1/2 lg:fixed lg:top-0 lg:right-0 h-screen bg-white flex items-center justify-center">
          <div className="flex flex-col text-black gap-0.5   h-1/2 w-1/2 mt-24">
            <p className="text-sm font-bold">{collection}</p>
            <p className="text-xl">{name}</p>
            <p className="text-s text-gray-700 mt-3">${price}</p>
            <button
              onClick={addToCart}
              className="bg-black text-white py-3 text-m rounded-full w-full mt-8 hover:bg-white hover:text-black border hover border-black transition-all duration-300"
            >
              Add to Shopping Bag
            </button>
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
