import NavBar from "@/components/NavBar";
import React from "react";
import CartItem from "@/components/CartItem";

const page = () => {
  return (
    <div>
      <NavBar bg={"white"} color={"black"} />
      <div className="mt-24 mx-20">
        <h1 className="text-2xl text-black flex justify-center items-center">
          Your Shopping Bag
        </h1>
        <div className="grid grid-cols-3 text-black mt-7 gap-4">
          <div className="col-span-2 flex flex-col gap-4 justify-start">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="col-span-1 flex flex-col">
            <h1 className="text-2xl font-bold">Order Summary</h1>
            <div className="flex flex-col mt-5 gap-1">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>$0.00</p>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <p>$0.00</p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-xl">Total</p>
                <p>$0.00</p>
              </div>
              <div className="border-t border-black"></div>
              <button
                type="button"
                className="mt-5 bg-black text-white w-full py-4 rounded-3xl"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
