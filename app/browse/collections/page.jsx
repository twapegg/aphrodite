"use client";

import Collection from "@/components/Collection";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import { useState, useEffect } from "react";
import Link from "next/link";
import Skeleton from "@mui/material/Skeleton";

const Collections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const res = await fetch("/api/browse/collections");
      const data = await res.json();
      setCollections(data);
      console.log(data);
    };
    fetchCollections();
  }, []);

  console.log(collections.length);

  return (
    <>
      <NavBar bg="white" color="black" />
      <div className="relative h-[80vh] mt-7 xl:mt-32">
        <Image
          src="https://curatedition.com/wp-content/uploads/2021/06/Curatedition-Louis-Vuitton_B-Blossom-New-Additions-Feature.jpg?fbclid=IwAR3A6SUkAZTTXDLZ5ev8G_ax-nIW_gliFOe2cE64BM8y47K5Sq_CYLPugKc"
          alt="Collections Hero Image"
          fill
          quality={100}
          className="object-cover"
          style={{
            objectPosition: "35% 20%",
          }}
        />
        <div className="bg-black bg-opacity-40 absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Jewelry Collections</h1>
        </div>
      </div>
      <div className="px-10 py-10 grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
        {collections.length > 0 ? (
          collections.map((collection, index) => {
            return (
              <Link
                href={`/browse/collections/${collection.name}`}
                key={index}
                className="relative transition-transform duration-300 group-hover:scale-110"
              >
                <Collection name={collection.name} img={collection.img} />
              </Link>
            );
          })
        ) : (
          <>
            <Skeleton variant="rect" width={350} height={350} />
            <Skeleton variant="rect" width={350} height={350} />
            <Skeleton variant="rect" width={350} height={350} />
            <Skeleton variant="rect" width={350} height={350} />
            <Skeleton variant="rect" width={350} height={350} />
            <Skeleton variant="rect" width={350} height={350} />
       
          </>
        )}
      </div>
    </>
  );
};

export default Collections;
