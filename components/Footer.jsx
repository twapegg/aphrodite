import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-5 flex flex-col border-t gap-5  text-black">
      <div className=" mx-32 mt-5 text-sm  grid grid-cols-3">
        <div className="col-span-1">
          <h1>
            HELP
            <div className="text-gray-600 mt-8 flex flex-col gap-2">
              <Link href="/contact">Contact Us</Link>
              <Link href="/faq">FAQ's</Link>
            </div>
          </h1>
        </div>

        <div className="col-span-1">
          <h1>
            ABOUT APHRODITE
            <div className="text-gray-600 mt-8 flex flex-col gap-2">
              <Link href="/contact">Contact Us</Link>
              <Link href="/faq">FAQ's</Link>
            </div>
          </h1>
        </div>
        <div className="col-span-1">
          <h1>
            CONNECT
            <div className="text-gray-600 mt-8 flex flex-col gap-2">
              <Link href="/contact">Sign In</Link>
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100027980442692"
              >
                Follow Us
              </a>
            </div>
          </h1>
        </div>
      </div>
      <div className="border-t mt-14"></div>
      <div className="mx-20">
        <div className="flex justify-end gap-9">
          <p>Sitemap</p>
          <p>Terms and Conditions</p>
        </div>
        <div className="mt-0 flex justify-center items-center font-bold text-2xl py-10">
          Aphrodite
        </div>
      </div>
    </footer>
  );
};

export default Footer;
