import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col border-t gap-5  text-black">
      <div className="mt-16 text-md lg:text-xl grid grid-cols-3 place-items-center">
        <div className="col-span-1">
          <h1 className="font-bold">HELP</h1>
          <div className="text-gray-600 mt-8 flex flex-col gap-2">
            <Link href="/contact">
              <span className="underline-animation">Contact Us</span>
            </Link>
            <Link href="/faq">
              <span className="underline-animation">FAQ&apos;s</span>
            </Link>
          </div>
        </div>

        <div className="col-span-1">
          <h1 className="font-bold">THE HOUSE OF APHRODITE</h1>
          <div className="text-gray-600 mt-8 flex flex-col gap-2">
            <Link href="/about">
              <span className="underline-animation">About Us</span>
            </Link>
            <a target="_blank" href="https://en.wikipedia.org/wiki/Aphrodite">
              <span className="underline-animation">Goddess of Beauty</span>
            </a>
          </div>
        </div>

        <div className="col-span-1">
          <h1 className="font-bold">CONNECT</h1>
          <div className="text-gray-600 mt-8 flex flex-col gap-2">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100027980442692"
            >
              <span className="underline-animation">Follow Us</span>
            </a>
            <Link href="/newsletter">
              <span className="underline-animation">
                Subscribe to our Newsletter
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t mt-14"></div>
      <div className="mx-20">
        <div className="flex justify-end gap-9 lg:text-xl text-gray-600">
          <Link href="/map">
            <span className="underline-animation">Sitemap</span>
          </Link>
          <Link href="/term">
            <span className="underline-animation">Terms of Service</span>
          </Link>
        </div>
        <div className="mt-0 flex justify-center items-center font-bold text-2xl py-10">
          Aphrodite
        </div>
      </div>
    </footer>
  );
};

export default Footer;
