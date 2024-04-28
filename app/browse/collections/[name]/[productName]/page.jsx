"use client";

import ProductPage from "@/components/ProductPage";
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";

const Product = ({ params }) => {
  const [product, setProduct] = useState([]);

  let collectionName = decodeURIComponent(params.name || "");

  let productName = decodeURIComponent(params.productName || "");

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(
        `/api/collections/${collectionName}/${productName}`
      );
      const data = await res.json();
      setProduct(data);
    };

    fetchProduct();
  }, [productName, collectionName]);

  console.log(product._id)

  return (
    <>
      <NavBar color={"black"} />
      <ProductPage
        collection={product.collection}
        name={product.name}
        imgs={product.imgs}
        category={product.category}
        price={product.price}
        description={product.description}
        isAvailable={product.isAvailable}
      />
    </>
  );
};

export default Product;
