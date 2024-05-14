import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <section>
      <div className="relative max-w-full h-[100vh]">
        <Image
          src="https://www.louisvuitton.com/images/is/image/lv/W_BC_JWL_MothersDayGifts_Apr24_03_DI3.jpg?wid=1440"
          alt="Link to Collections"
          loading="lazy"
          fill
          sizes="100vw"
          className="object-cover z-1"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col gap-5 items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Mothers Day Gifts</h1>
          <p className="text-white text-lg">
            Surprise her with something special
          </p>
          <button className="bg-black lg:mt-10 bg-opacity-50 backdrop-filter backdrop-blur-sm shadow-md border border-white hover:border-2 text-white px-24 py-3 rounded-3xl">
            Shop Now
          </button>
        </div>
      </div>
      {" Parallax Effect goes here"}
    </section>
  );
};

export default Feature;
