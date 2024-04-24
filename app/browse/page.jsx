import React from "react";
import Collection from "@/components/Collection";
import Image from "next/image";

const mockData = [
  {
    img: "https://via.placeholder.com/150",
    category: "Silver Jewelry",
  },
  {
    img: "https://via.placeholder.com/150",
    category: "Gold Jewelry",
  },
  {
    img: "https://via.placeholder.com/150",
    category: "Diamond Jewelry",
  },
  {
    img: "https://via.placeholder.com/150",
    category: "Platinum Jewelry",
  },
  {
    img: "https://via.placeholder.com/150",
    category: "Gemstone Jewelry",
  },
  {
    img: "https://via.placeholder.com/150",
    category: "Pearl Jewelry",
  },
  {
    img: "https://via.placeholder.com/150",
    category: "Bridal Jewelry",
  },
];

const page = () => {
  return (
    <>
      <div className="relative h-screen">
        <Image
          src="/cover/jewelry.jpeg"
          alt="Hero Image"
          fill
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Jewelry Collections</h1>
        </div>
      </div>
      <div className="py-10 grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
        {mockData.map((collection, index) => {
          return (
            <Collection
              key={index}
              img={collection.img}
              category={collection.category}
            />
          );
        })}
      </div>
    </>
  );
};

export default page;
