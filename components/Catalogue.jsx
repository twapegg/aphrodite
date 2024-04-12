import React from "react";
import ProductCard from "./ProductCard";

const Catalogue = () => {
  const mockData = [
    {
      productTitle: "Product 1",
      productPrice: 100,
      productImage: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div className="grid grid-cols-3">
      {mockData.map((product, index) => {
        return (
          <ProductCard
            key={index}
            productTitle={product.productTitle}
            productPrice={product.productPrice}
            productImage={product.productImage}
          />
        );
      })}
    </div>
  );
};

export default Catalogue;
