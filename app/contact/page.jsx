import React from "react";
import NavBar from "@/components/NavBar";

const page = () => {
  return (
    <div className="bg-gray-200 pb-5">
      <NavBar bg={"white"} color="black" />

      <div className="text-black mx-32">
        <h1 className=" text-3xl pt-32  font-bold">Contact Us</h1>
        <h5 className="text-2xl pt-2">
          Choose the method of customer service contact that you prefer to use
          or refer to the Frequently Asked Question(FAQ) down below
        </h5>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 mx-32 my-6 text-black">
        <div className="col-span-1 flex flex-col m-1 pt-5 bg-white ">
          <div className="mx-10">
            <h4 className="text-2xl">CALL US</h4>
            <div className="mt-5">
              <h4 className="leading-6">
                Our customer service are here to help, providing you with the
                necessary information needed for your inquiries
              </h4>
              <h4 className="mt-5">You may contact us by phone:</h4>
              <ol className="list-disc my-5 pl-16">
                <li>Monday to Friday: 9:00am - 8:00pm PHT</li>
                <li>Saturday: 9:00am - 5:00pm PHT</li>
                <li>Sunday: 9:00am - 12:00pm PHT</li>
              </ol>
            </div>
          </div>
          <div className="flex justify-center pb-8">
            <button className="border border-black text-black p-3 w-5/6 rounded-3xl">
              +639760156425
            </button>
          </div>
        </div>
        <div className="col-span-1 flex flex-col m-1 pt-5 bg-white ">
          <div className="mx-10">
            <h4 className="text-2xl">CHAT US</h4>
            <div className="mt-5">
              <h4 className="leading-6">
                Our live chat for our customer services are available to assist:
              </h4>
              <ol className="list-disc my-5 pl-16">
                <li>Monday to Sunday: 9:00am - 5:00pm</li>
              </ol>
            </div>
          </div>
          <div className="flex justify-center pb-8 pt-20 ">
            <button className="border border-black tex-black p-3 w-5/6 rounded-3xl">
              Chat With An Advisor
            </button>
          </div>
        </div>
        <div className="col-span-1 flex flex-col m-1 pt-5 bg-white ">
          <div className="mx-10">
            <h4 className="text-2xl">Email Us</h4>
            <div className="mt-5">
              <h5 className="leading-6">
                We will try to respond to your email within 24 hours
              </h5>
            </div>
          </div>
          <div className="flex justify-center pt-44 pb-8">
            <button className="border border-black text-black p-3 w-5/6 rounded-3xl">
              Send Us An Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
