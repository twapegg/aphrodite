import Image from "next/image";

const ProductCard = ({ productTitle, productPrice, productImage }) => {
  return (
    <div className="flex gap-5 bg-white rounded-lg shadow-lg p-4">
      <Image src={productImage} alt={productTitle} width={150} height={150} />
      <div className="flex flex-col">
        <p className="text-2xl text-bold text-black">{productTitle}</p>
        <p className="text-xl text-black">${productPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;
