import React from "react";
import NavBar from "@/components/NavBar";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <NavBar bg="white" color="black" />
      <div>
        <div className="flex flex-col items-center justify-center pt-32 pb-20">
          <h1 className="text-7xl text-black py-6">APHRODITE</h1>
          <h2 className="text-xl lg:text-3xl text-gray-500 ">
            HOME OF THE MOST FABULOUS JEWELS IN THE WORLD
          </h2>
          <h3 className="text-xl text-center text-gray-600 lg:mx-40 mx-4 py-7 ">
            Our story unfolds over five decades — driven by the pursuit of
            craft, a fixation with detail and a devotion to beauty. Since a
            group of friends established our company in Philippines in 1970,
            their fascination with the emotional power of gemstones has
            transformed Aphrodite into a global hallmark of innovation,
            creativity and craftsmanship.
          </h3>
        </div>

        <div className="bg-slate-100 lg:grid lg:grid-cols-2 ">
          <div className="flex flex-col justify-center lg:items-end items-center lg:mx-0 mx-4">
            <h2 className="text-gray-500 lg:text-2xl sm:pt-10">
              WELCOME TO A FABULOUS WORLD
            </h2>
            <h1 className="text-6xl text-black mt-4">This is Aphrodite</h1>
            <h3 className="lg:ml-28 text-lg text-gray-600 py-4 sm:text-end">
              Born from a desire to celebrate the eternal allure of feminine
              grace, Aphrodite is a luxury jewelry brand that pays homage to the
              legendary Greek goddess of love and beauty. Each piece is a
              masterful fusion of precious metals, exquisite gemstones, and
              intricate artistry, designed to adorn the modern woman with a
              touch of divine elegance.
            </h3>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/aboutus/APHRODITE (2).png"
              alt="Aphrodite Image"
              className="max-w-lg"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mx-auto mt-10 max-w-6xl">
          <div className="col-span-1 flex justify-center items-center">
            <Image
              src="https://i.pinimg.com/736x/5f/b8/23/5fb823d313b955830d13d09e1faa1618.jpg"
              alt="Aphrodite Model Image 1"
              className="w-full"
              width={500}
              height={550}
            />
          </div>
          <div className="col-span-1">
            <div className="mb-4">
              <Image
                src="https://www.zoemagazine.net/wp-content/uploads/2023/08/LOUIS-VUITTON-BLOSSOM_ADV-CAMPAIGN_ANA-DE-ARMAS_%C2%A9CRAIG-MC-DEAN_CMJN.jpg"
                alt="Aphrodite Image"
                className="w-full"
                width={500}
                height={250}
              />
            </div>
            <div>
              <Image
                src="https://media.femalemag.com.sg/public/2024/03/Graff-Signature-Bangle-1.jpg"
                alt="Aphrodite Image"
                className="w-full"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-6xl text-center text-black mt-32">BEGINNINGS</h1>
          <h2 className="text-3xl text-center mt-1 text-gray-500 pt-2">
            A LIFE IN DIAMONDS
          </h2>

          <h5 className="text-black text-justify lg:text-center text-xl pt-5 lg:mx-56 mx-4">
            With their passion for jewelry and their talent for business,
            Altonaga, Daymiel, and Espina have journeyed from Philippine&apos;s
            End to a place on the world&apos;s stage alongside kings, presidents
            and cultural icons.
          </h5>
        </div>

        <div className="relative h-screen mt-32">
          <Image
            src="/aboutus/group.jpg"
            alt="Aphrodite Image"
            className="w-full"
            layout="fill"
            objectFit="cover"
            quality={100}
            unoptimized={true}
          />
          <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-6xl text-white">OUR JOURNEY</h1>
          </div>
        </div>

        <div className="my-32 flex items-center flex-col">
          <h1 className="text-black text-3xl lg:text-5xl text-center font-bold">
            &quot;The Only Diamond We See Is What Is Inside You&quot;
          </h1>
          <h5 className="text-gray-800 mt-10 text-justify text-2xl lg:mx-72 mx-4">
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
