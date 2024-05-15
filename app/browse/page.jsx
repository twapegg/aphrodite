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
          src="https://imageio.forbes.com/specials-images/imageserve/62cb4acc89f3f5479a4f8adb/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds&fbclid=IwAR0seA9yAXPWos9cXp_Z3l4dCxIiiMt8eSDCxgb94YCAfBug2zv1iQYMZfw"
          alt="Hero Image"
          fill
          quality={100}
          className="object-cover"
          style={{
            objectPosition: "35% 20%",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Browse Jewelry</h1>
        </div>
      </div>
      <div className="px-10 py-10 grid lg:grid-cols-2 h-[36rem] gap-5 md:grid-cols-2 grid-cols-1 mx-auto container">
        <Link
          href="/browse/collections"
          className="relative transition-transform duration-300 group-hover:scale-110 row-span-3"
        >
          <div className="relative w-full h-full">
            <Image
              src="https://curatedition.com/wp-content/uploads/2021/06/Curatedition-Louis-Vuitton_B-Blossom-New-Additions-Feature.jpg?fbclid=IwAR3A6SUkAZTTXDLZ5ev8G_ax-nIW_gliFOe2cE64BM8y47K5Sq_CYLPugKc"
              alt="Link to Collections"
              fill
              className="object-cover"
              unoptimized={true}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group">
              <button className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm shadow-md border border-white hover:border-2 text-white px-24 py-3 rounded-3xl">
                Browse Collections
              </button>
            </div>
          </div>
        </Link>

        <Link
          href="/browse/category"
          className="relative transition-transform duration-300 group-hover:scale-110 row-span-3"
        >
          <div className="relative w-full h-full">
            <Image
              src="https://images.preview.ph/preview/images/2019/05/31/LV-NM.jpg?fbclid=IwAR09nicNOPtYptEvln_zcCNs_IpF0VD5QEjkajV-NLPY0SqnyRZG8y1RRrU"
              alt="Link to Categories"
              fill
              className="object-cover"
              unoptimized={true}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group">
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
