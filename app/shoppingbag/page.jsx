"use client";

import NavBar from "@/components/NavBar";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShoppingBag = () => {
  const { data: session } = useSession();

  const notify = () => toast("Successfully purchased!");

  const [cartProducts, setCartProducts] = useState([]);

  // Fetch cart and populate cartProducts
  useEffect(() => {
    const fetchCart = async () => {
      if (!session) {
        return;
      }

      const res = await fetch(`/api/shoppingbag/${session.user.id}`);

      if (res.status === 200) {
        const data = await res.json();

        // Fetch the jewelry details for each jewelry in the cart
        const products = await Promise.all(
          data.jewelries.map(async (jewelry) => {
            const res = await fetch(`/api/jewelry/${jewelry.jewelry}`);
            return res.json();
          })
        );

        setCartProducts(products);
      }
    };

    fetchCart();
  }, [session]);

  const clearCart = async () => {
    const res = await fetch("/api/shoppingbag/clear", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userID: session.user.id }),
    });

    if (res.status === 200) {
      setCartProducts([]);
    }
  };

  return (
    <div>
      <NavBar bg={"white"} color={"black"} />
      <div className="container mx-auto py-14">
        <h1 className="text-2xl font-bold">Shopping Bag</h1>
        <div className="mt-8">
          {cartProducts
            ? cartProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex text-black items-center justify-between"
                >
                  <div className="flex items-center">
                    <Image
                      src={product.imgs[0]}
                      alt={product.name}
                      className="w-16 h-16 object-cover"
                      width={64}
                      height={64}
                    />
                    <div className="ml-4">
                      <h2 className="text-lg font-bold">{product.name}</h2>
                      <p className="text-gray-500">{product.price}</p>
                    </div>
                  </div>
                  <div>
                    <FaTimes className="text-red-500" />
                  </div>
                </div>
              ))
            : null}
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-bold">Total</h2>
          <p className="text-gray-500">Total price</p>
          <button
            onClick={notify}
            className="bg-black text-white py-2 px-4 rounded-lg mt-4"
          >
            Checkout
          </button>
          <ToastContainer />

          <button className="bg-gray-200 text-black py-2 px-4 rounded-lg mt-4 ml-4">
            Clear Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBag;
