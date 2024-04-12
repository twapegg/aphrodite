"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="border-gray-200 bg-transparent dark:border-gray-700 sticky transition-colors duration-500 ease-in-out hover:bg-white hover:text-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="text-2xl whitespace-nowrap dark:text-white transition-colors duration-500 ease-in-out hover:text-black">
            APHRODITE
          </span>
        </Link>
      </div>
    </nav>
  );
}
