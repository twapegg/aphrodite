import React from "react";
import Collection from "@/components/Collection";

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
    <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
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
  );
};

export default page;
