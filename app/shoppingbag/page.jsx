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

  const [cartProducts, setCartProducts] = useState([]);
  const [cart, setCart] = useState([]);

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

        setCart(data);
        console.log(data);
        setCartProducts(products);
      }
    };

    fetchCart();
  }, [session]);

  const clearCart = async () => {
    if (!session) {
      toast.error("You must be signed in!", {
        position: "top-right",
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

    if (cartProducts.length === 0) {
      toast.error("Cart is empty!", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      return;
    }

    const res = await fetch("/api/shoppingbag/clear", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userID: session.user.id }),
    });

    if (res.status === 200) {
      setCartProducts([]);
      toast.success("Transaction success!", {
        position: "top-right",
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
  };

  return (
    <>
      <NavBar bg={"white"} color={"black"} />
      <div className="relative h-[60vh] mt-32 xl:mt-20">
        <Image
          src="https://media.gucci.com/content/HeroShortStandard_3200x654/1684494946/HeroShortStandard_Gucci-Prefall-May2023-03_001_Default.jpg"
          alt="Shopping Bag Image"
          fill
          quality={100}
          className="object-cover w-full"
          unoptimized={true}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
          <h1 className="text-5xl font-bold text-white text-center">
            Shopping Bag
          </h1>
        </div>
      </div>
      <div className="lg:container mx-auto mb-40">
        <div className="grid grid-cols-3 py-14">
          <div className="mt-8 col-span-2 border ">
            {cartProducts
              ? cartProducts.map((product) => (
                  <div key={product.id} className="grid grid-cols-6">
                    <div className="col-span-1 w-full h-full">
                      <Image
                        src={product.imgs[0]}
                        alt={product.name}
                        className="object-cover"
                        width={300}
                        height={300}
                        unoptimized={true}
                      />
                    </div>

                    <div className="col-span-5 flex justify-between items-center gap-2 px-4 py-2 text-black">
                      <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-bold">{product.name}</h2>
                        <p className="text-gray-500">{product.price}</p>
                      </div>
                      <button className=" bg-white border border-black hover:text-white hover:bg-black transition-colors duration-300 p-2 rounded-3xl text-center">
                        <FaTimes />
                      </button>
                    </div>
                  </div>
                ))
              : null}
          </div>

          <div className="ml-3 mt-8 col-span-1 px-6 py-4 text-black border border-gray-200 shadow-md flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-center">ORDER SUMMARY</h2>
            <div className="flex justify-between mt-4 text-xl">
              <p>Subtotal</p>
              <p>${cart.subTotal}.00</p>
            </div>
            <div className="flex justify-between mt-4 text-xl">
              <p>Shipping</p>
              <p>$50.00</p>
            </div>

            <div className="flex justify-between mt-4 text-2xl">
              <p>Estimated Total</p>
              <p>${cart.subTotal + 50.0}.00</p>
            </div>
            <button className="bg-black text-white py-2 px-4 rounded-3xl mt-4 border border-black hover:bg-white hover:text-black transition-colors duration-300">
              Checkout
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingBag;
