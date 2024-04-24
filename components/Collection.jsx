import Image from "next/image";
import Link from "next/link";
import React from "react";

const Collection = ({ img, category }) => {
  return (
    <div className="bg-slate-900 ">
      <div className="flex flex-col items-center justify-center p-5 ">
        <Image src={img} alt={category} width={250} height={250} />
        <h1>{category}</h1>
        <Link href="/collection/silver-jewelry">View Collection</Link>
      </div>
    </div>
  );
};

export default Collection;
