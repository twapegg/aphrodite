import React from "react";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const page = () => {
  return (
    <>
      <NavBar bg={"white"} color="black" />
      <div className="bg-slate-50 pb-5">
        <div className="text-black mx-32 mt-10">
          <h1 className="text-4xl pt-32 font-bold">Contact Us</h1>
          <h5 className="text-xl mt-4">
            Choose your preferred method of contact to connect with our customer
            service team or find out more information with our{" "}
            <span className="underline">
              <Link href="/faq">FAQ</Link>
            </span>
            .
          </h5>

          <div className="grid lg:grid-cols-2 grid-cols-1 my-6 text-black">
            <div className="col-span-1 flex flex-col m-1 pt-5 bg-white shadow-md border">
              <div className="mx-10">
                <h4 className="text-2xl font-bold">Call Us</h4>
                <div className="mt-5 text-lg">
                  <h4 className="leading-6 ">
                    Our customer service are here to help, providing you with
                    the necessary information needed for your inquiries
                  </h4>
                  <h4 className="mt-5 font-bold">Philippines Schedule (PHT) </h4>
                  <ol className="list-disc my-5 pl-16">
                    <li>Monday to Friday: 9:00am - 8:00pm PHT</li>
                    <li>Saturday: 9:00am - 5:00pm PHT</li>
                    <li>Sunday: 9:00am - 12:00pm PHT</li>
                  </ol>
                </div>
              </div>
              <div className="flex justify-center pb-8">
                <a href='tel:639760156425'className="border text-xl border-black text-black p-3 w-5/6 rounded-3xl flex items-center justify-center">
                  <FaPhone />
                  <span className="ml-3 font-bold">+63 9760 156 425</span>
                </a>
              </div>
            </div>

            <div className="col-span-1 flex flex-col justify-between m-1 pt-5 bg-white border shadow-md">
              <div className="mx-10 text-lg flex flex-col gap-4">
                <h4 className="text-2xl font-bold">Email Us</h4>
                <h4 className="leading-6">
                  Send us an email and our customer service team will get back
                  to you as soon as possible.
                </h4>
              </div>
              <div className="flex justify-center pt-44 pb-8">
                <button className="border border-black text-xl text-black p-3 w-5/6 rounded-3xl flex items-center justify-center">
                  <CiMail />
                  <span className="ml-3 font-bold">Send an email</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
