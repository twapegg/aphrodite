import Image from "next/image";
import Reveal from "./Reveal";
import RevealDown from "./RevealDown";
import Link from "next/link";

const Feature = ({ title, desc, images, alts, urls }) => {
  return (
    <section>
      <div className="relative max-w-full h-[100vh]">
        <Image
          src={images[0]}
          alt={alts[0]}
          loading="lazy"
          fill
          sizes="100vw"
          className="object-cover z-1"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-between">
          <div className="flex-1 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-white text-center">
              {title}
            </h1>
            <p className="text-white text-lg text-center">{desc}</p>
          </div>
          <div className="flex justify-center pb-16">
            <button className="bg-black lg:mt-10 bg-opacity-50 backdrop-filter backdrop-blur-sm shadow-md border border-white hover:border-2 text-white px-24 py-3 rounded-3xl">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 h-screen gap-4 lg:mx-32 mt-32">
        <Reveal>
          <Link href={urls[0]}>
            <Image
              src={images[1]}
              alt={alts[1]}
              className="w-full h-full object-cover bg-gradient-to-t from-zinc-100 to-zinc-300 shadow-lg"
              width={1000}
              height={1000}
              loading="lazy"
              unoptimized={true}
            />
          </Link>
        </Reveal>

        <RevealDown>
          <Link href={urls[1]}>
            <Image
              src={images[2]}
              alt={alts[2]}
              className="w-full h-full object-cover bg-gradient-to-t from-zinc-100 to-zinc-300 shadow-lg"
              width={1000}
              height={1000}
              loading="lazy"
              unoptimized={true}
            />
          </Link>
        </RevealDown>

        <Reveal>
          <Link href={urls[2]}>
            <Image
              src={images[3]}
              alt={alts[3]}
              className="w-full h-full object-cover bg-gradient-to-t from-zinc-100 to-zinc-300 shadow-lg"
              width={1000}
              height={1000}
              loading="lazy"
              unoptimized={true}
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Feature;
