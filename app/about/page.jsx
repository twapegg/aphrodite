import React from "react";
import NavBar from "@/components/NavBar";

const page = () => {
  return (
    <div>
      <NavBar bg={"white"} color="black" />
      <div>
        <div className="flex flex-col items-center justify-center pt-24 pb-20">
          <h1 className="text-6xl text-black py-6">APHRODITE</h1>
          <h2 className="text-xl text-black">
            HOME OF THE MOST FABULOUS JEWELS IN THE WORLD
          </h2>
          <h3 className="text-l text-center text-gray-600 mx-40 py-7 px-14">
            Our story unfolds over five decades — driven by the pursuit of
            craft, a fixation with detail and a devotion to beauty. Since a
            group of friends established our company in Philippines in 1970,
            their fascination with the emotional power of gemstones has
            transformed Aphrodite into a global hallmark of innovation,
            creativity and craftsmanship.
          </h3>
        </div>

        <div className="bg-gray-200 grid lg:grid-cols-2 grid-cols-1">
          <div className=" flex flex-col justify-center mx-32">
            <h2 className="text-gray-600 text-lg sm:pt-10">
              WELCOME TO A FABULOUS WORLD
            </h2>
            <h1 className="text-5xl text-black mt-4">This is Aphrodite</h1>
            <h3 className="text-l text-gray-600 py-4 max-w-2xl sm:text-justify">
              Born from a desire to celebrate the eternal allure of feminine
              grace, Aphrodite is a luxury jewelry brand that pays homage to the
              legendary Greek goddess of love and beauty. Each piece is a
              masterful fusion of precious metals, exquisite gemstones, and
              intricate artistry, designed to adorn the modern woman with a
              touch of divine elegance.
            </h3>
          </div>
          <div className=" flex flex-col items-center">
            <img
              src="/aboutus/APHRODITE (2).png"
              alt="Aphrodite Image"
              className="max-w-lg"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className=" bg-gray-200 flex flex-cols col-span-1 m-5">
            <h1 className="justify-center items-center m-32">left box image</h1>
          </div>
          <div className="bg-gray-200 flex flex-cols col-span-1 m-5">
            <h1 className="justify-center  items-center m-32">
              Right box image
            </h1>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-center text-black pt-16">BEGINNINGS</h1>
          <h2 className="text-xl text-center mt-1 text-gray-600 pt-2">
            A LIFE IN DIAMONDS
          </h2>
          <div className="justify-center">
            <h5 className="text-black text-center text-lg pt-5 mx-52 ">
              With their passion for jewelry and their talent for business,
              Altonaga, Daymiel, and Espina have journeyed from
              Philippine&apos;s End to a place on the world&apos;s stage
              alongside kings, presidents and cultural icons.
            </h5>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-32 ">
          <div className="cols-span-1">
            <div className=" flex  mx-32 justify-start text-black mt-10 sm: pb-5 ">
              <h1 className=" text-6xl font-bold">O</h1>
              <h5 className="text-black mt-7 text-2xl sm:text-justify">
                n 1970 the group decided to pursue the creative art of craft and
                beauty. In a small rental unit in Dumaguete City, they started
                their journey to success. Struggling in the first few years, the
                group persevere until they caught a breakthrough when they were
                promoted in the local newspaper. As everyone caught wind of the
                brand the quick incline to success began.{" "}
              </h5>
            </div>
          </div>

          <div className="cols-span-1 flex justify-center items-center bg-gray-300 mx-32">
            <div className="">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.sWCvltMZF_s3mjA5sL-RdgHaE8&pid=Api&P=0&h=180"
                alt=""
                className="max-w-5xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-52 flex items-center flex-col">
          <h1 className="text-black text-5xl text-center font-bold">
            &quot;The Only Diamond We See Is What Is Inside You&quot;
          </h1>
          <h5 className="text-gray-800 mt-10 text-justify text-2xl lg:mx-72 mx-20">
            Even with the ever growing influence of the brand in the fashion
            industy we still instill out values fron the very beginning that it
            is the customers beauty that we want to encapsulate and not the
            jewelry. And with that our company still tries to create products
            that are accessible to the masses. Because we believe that the first
            step in happiness and peace is beauty.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default page;
