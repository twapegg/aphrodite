"use client";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";

const SearchPage = () => {
  const [searchProducts, setSearchProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`/api/jewelry/search?name=${searchQuery}`)
      .then((res) => res.json())
      .then((data) => setSearchProducts(data));
  }, [searchQuery]);

  return (
    <>
      <NavBar bg="transparent" color="black" />
      <div className="lg:container mx-auto mt-48 text-black flex flex-col items-center justify-center mb-10">
        <span className="text-5xl font-bold">Find the perfect jewelry.</span>
        <input
          type="text"
          className="pl-5 mt-5 text-2xl border-black border p-2 w-1/2 shadow-lg focus:outline-none rounded-3xl"
          placeholder="What are you looking for?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="mt-10 grid grid-cols-1 gap-4">
          {searchProducts.length > 0 ? (
            searchProducts.map((product, index) => (
              <Link
                href={`/browse/collections/${product.collection}/${product.name}`}
                key={index}
              >
                <div className="grid grid-cols-3 lg:mx-24 shadow-lg py-5 rounded-lg">
                  <Image
                    src={product.imgs[0]}
                    alt={product.name}
                    width={300}
                    height={300}
                    loading="lazy"
                    className="col-span-1 bg-gradient-to-t from-zinc-100 to-zinc-300"
                    unoptimized={true}
                  />
                  <div className="ml-0 col-span-2 flex flex-col gap-3 ">
                    <span className="text-4xl font-bold">
                      {product.collection}
                    </span>
                    <span className="text-3xl">{product.name}</span>
                    <span className="text-md">{product.description}</span>
                    <span className="text-3xl font-bold mt-2">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="grid grid-cols-3 lg:mx-24 shadow-lg py-5 rounded-lg">
              <Skeleton variant="rectangular" width={300} height={300} />

              <div className="ml-3 col-span-2 flex flex-col gap-1 ">
                <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
