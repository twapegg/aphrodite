"use client";

import Collection from "@/components/Collection";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import { useState, useEffect } from "react";

const Collections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const res = await fetch("api/collections");
      const data = await res.json();
      setCollections(data);
      console.log(data);
    };
    fetchCollections();
  }, []);

  return (
    <>
      <NavBar />
      <div className="relative h-screen mt-24">
        <Image
          src="/cover/jewelry.jpeg"
          alt="Hero Image"
          fill
          quality={100}
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Jewelry Collections</h1>
        </div>
      </div>
      <div className="px-10 py-10 grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
        {collections.map((collection, index) => {
          return (
            <Collection
              key={index}
              name={collection.name}
              img={collection.img}
            />
          );
        })}
      </div>
    </>
  );
};

export default Collections;
