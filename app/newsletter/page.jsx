"use client";

import Image from "next/image";
import NavBar from "@/components/NavBar";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const NewsletterPage = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    // check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      // show error toast

      toast.error("Invalid email address!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    // post request to /api/newsletter
    fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    setEmail("");

    // show success toast

    toast.success("Successfully subscribed!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div>
      <NavBar bg="transparent" color="black" />
      <div className="grid lg:grid-cols-2 grid-cols-1 my-40 lg:my-0">
        <div className="relative h-screen col-span-1 hidden lg:block">
          <Image
            src="https://kpopping.com/documents/39/0/1366/231119-New-Jeans-Haerin-2023-LoL-World-Championship-Finals-LoL-Cup-documents-1.jpeg?v=73859"
            alt="Vivienne Collection Background"
            layout="fill"
            unoptimized
            loading="lazy"
            className="object-cover"
          />
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <div className="text-black">
            <h1 className="text-4xl font-bold text-center">
              Subscribe to our newsletter
            </h1>
            <p className="text-center mt-4 text-lg">
              Get the latest news and updates from our store
            </p>
            <div className="flex flex-col gap-4 justify-center mt-8">
              <input
                type="text"
                className="border-2 border-gray-300 p-2 text-lg pl-5 w-full rounded-3xl"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                onClick={handleSubmit}
                type="submit"
                className="text-lg bg-black text-white p-2 w-full rounded-3xl hover:border-black hover:bg-white hover:text-black transition duration-300 ease-in-out border border-black"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-left"
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
    </div>
  );
};

export default NewsletterPage;
