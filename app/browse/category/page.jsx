"use client";

import Collection from "@/components/Collection";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import { useState, useEffect } from "react";
import Link from "next/link";

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
          <h1 className="text-4xl font-bold text-white">Jewelry Categories</h1>
        </div>
      </div>
      <div className="px-10 py-10 grid lg:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
        {categories.map((category, index) => {
          return (
            <Link
              href={`/browse/category/${category.name}`}
              key={index}
              className="relative transition-transform duration-300 group-hover:scale-110"
            >
              <Collection name={category.name} img={category.img} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Category;
