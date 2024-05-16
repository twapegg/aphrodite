"use client";

import Collection from "@/components/Collection";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Skeleton } from "@mui/material";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("/api/browse/category");
      const data = await res.json();
      setCategories(data);

      console.log(data);
    };
    fetchCategories();
  }, []);

  return (
    <>
      <NavBar bg="white" color="black" />
      <div className="relative h-[80vh] mt-7 xl:mt-24">
        <Image
          src="https://images.preview.ph/preview/images/2019/05/31/LV-NM.jpg?fbclid=IwAR09nicNOPtYptEvln_zcCNs_IpF0VD5QEjkajV-NLPY0SqnyRZG8y1RRrU"
          alt="Categories Hero Image"
          fill
          quality={100}
          className="object-cover"
        />
        <div className="bg-black bg-opacity-50 absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Jewelry Categories</h1>
        </div>
      </div>
      <div className="px-10 py-10 grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
        {categories.length > 0 ? (
          categories.map((collection, index) => {
            return (
              <Link
                href={`/browse/category/${collection.name}`}
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

export default Category;
