"use client";

import Catalogue from "@/components/Catalogue";
import Collection from "@/components/Collection";
import ProductPage from "@/components/ProductPage";
import { useState, useEffect } from "react";

const Bracelets = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/bracelets");
      const data = await res.json();
      setProducts(data);
      console.log(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      {products.map((collection, index) => {
        return (
          <ProductPage
            key={index}
            collection={collection.collection}
            name={collection.name}
            imgs={collection.imgs}
            category={collection.category}
            price={collection.price}
            description={collection.description}
            isAvailable={collection.isAvailable}
          />
        );
      })}
    </>
  );
};

export default Bracelets;
