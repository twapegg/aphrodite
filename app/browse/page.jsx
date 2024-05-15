"use client";

import Collection from "@/components/Collection";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Link from "next/link";

const BrowsePage = () => {
  return (
    <>
      <NavBar bg="white" color="black" />
      <div className="relative h-[80vh] mt-7 xl:mt-20">
        <Image
          src="/cover/jewelry.jpeg"
          alt="Hero Image"
          fill
          quality={100}
          className="object-cover"
          style={{
            objectPosition: "35% 20%",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Browse Jewelry</h1>
        </div>
      </div>
      <div className="px-10 py-10 grid lg:grid-cols-2 gap-5 md:grid-cols-2 grid-cols-1 mx-auto">
        <Link
          href="/browse/collections"
          className="relative transition-transform duration-300 group-hover:scale-110"
        >
          <div className="relative max-w-full bg-gradient-to-t from-zinc-100 to-zinc-300">
            <Image
              src={
                "https://www.louisvuitton.com/images/is/image/lv/W_BC_JWL_MothersDayGifts_Apr24_03_DI3.jpg?wid=1440"
              }
              alt={"Link to Collections"}
              className="object-cover"
              loading="lazy"
              width={1000}
              height={1000}
              unoptimized={true}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm shadow-md border border-white hover:border-2 text-white px-24 py-3 rounded-3xl">
                Browse Collections
              </button>
            </div>
          </div>
        </Link>
        <Link
          href="/browse/category"
          className="relative transition-transform duration-300 group-hover:scale-110"
        >
          <div className="relative max-w-full bg-gradient-to-t from-zinc-100 to-zinc-300">
            <Image
              src={
                "https://www.louisvuitton.com/images/is/image/lv/W_BC_JWL_MothersDayGifts_Apr24_03_DI3.jpg?wid=1440"
              }
              alt={"Link to Collections"}
              className="object-cover"
              loading="lazy"
              width={1000}
              height={1000}
              unoptimized={true}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm shadow-md border border-white hover:border-2 text-white px-24 py-3 rounded-3xl">
                Browse Categories
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BrowsePage;
