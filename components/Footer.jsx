import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-32 flex flex-col border-t gap-5  text-black">
      <div className="mx-32 mt-16 text-sm  grid grid-cols-3">
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
            <Link href="/contact">
              <span className="underline-animation">About Us</span>
            </Link>
            <Link href="/faq">
              <span className="underline-animation">Goddess of Beauty</span>
            </Link>
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
          </div>
        </div>
      </div>
      <div className="border-t mt-14"></div>
      <div className="mx-20">
        <div className="flex justify-end gap-9">
          <Link href="/map">
            <span className="underline-animation">Sitemap</span>
          </Link>
          <Link href="/terms">
            <span className="underline-animation">Terms and Conditions</span>
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
