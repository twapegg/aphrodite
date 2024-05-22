"use client";

import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CollectionPage = ({ params }) => {
  const [images, setImages] = useState([]);
  const [products, setProducts] = useState([]);
  const collectionName = decodeURIComponent(params.name || "");

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(`/api/browse/collections/${collectionName}`);
      const data = await res.json();
      setImages(data);
    };
    fetchImages();

    const fetchProducts = async () => {
      const res = await fetch(`/api/products/${collectionName}`);
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, [collectionName]);

  // Flatten the models array using flatMap
  const modelImages = images.flatMap((image) => image.models);

  return (
    <div>
      <NavBar bg="white" color="black" sub={true} />
      <div className="mt-24 px-6">
        <span className="text-2xl text-black">
          {collectionName} Collections
        </span>
        {/* display on large, turn into a carousel on mobile */}
        <div className="hidden lg:grid grid-cols-3 gap-2 mt-10 ">
          {modelImages.map((imgUrl, index) => (
            <Image
              key={index}
              src={imgUrl}
              alt={`${collectionName}-${index + 1}`}
              width={450}
              height={450}
              unoptimized={true}
              loading="lazy"
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {products.map((product, index) => (
            <Link
              href={`/browse/collections/${collectionName}/${product.name}`}
              key={index}
              className="relative h-[500px]"
            >
              <Image
                src={product.imgs[0]}
                alt={product.name}
                fill
                loading="lazy"
                className="bg-gradient-to-t from-zinc-100 to-zinc-300 w-full object-cover"
                unoptimized={true}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
