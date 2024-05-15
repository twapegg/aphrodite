"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import unpluralize from "@/utils/unpluralize";

const CategoryPage = ({ params }) => {
  const [products, setProducts] = useState([]);
  let categoryName = decodeURIComponent(params.categoryName || "");

  categoryName = unpluralize(categoryName);

  console.log(categoryName);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`/api/products/category/${categoryName}`);
      const data = await res.json();
      setProducts(data);
      console.log(data);
    };
    fetchProducts();
  }, [categoryName]);

  // Flatten the models array using flatMap

  return (
    <div>
      <NavBar bg="white" color="black" sub={true} />
      <div className="mt-24 px-6">
        <span className="text-2xl text-black">All {categoryName}</span>

        <div className="grid grid-cols-4 gap-4 mt-10">
          {products.map((product, index) => (
            <Link
              href={`/browse/collections/${params.categoryName}/${product.name}`}
              key={index}
            >
              <Image
                src={product.imgs[0]}
                alt={product.name}
                width={500}
                height={500}
                loading="lazy"
                className="bg-gradient-to-t from-zinc-100 to-zinc-300"
                unoptimized={true}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
