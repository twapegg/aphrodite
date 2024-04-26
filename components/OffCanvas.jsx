import Link from "next/link";
import React from "react";

import { FaTimes } from "react-icons/fa";

const OffCanvas = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-all duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-black opacity-70"
        onClick={onClose}
      ></div>
      <div className="absolute left-0 h-full w-1/4 bg-white text-black shadow-lg transition-all duration-300 ease-in-out transform translate-x-0">
        <div className="p-4 relative">
          <button
            onClick={onClose}
            className="p-1 absolute top-3 right-3 text-xl text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg"
          >
            <FaTimes />
          </button>
          <div className="space-y-4 mt-10">
            <Link
              href="/"
              onClick={onClose}
              className="block py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={onClose}
              className="block py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={onClose}
              className="block py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md"
            >
              Services
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="block py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffCanvas;
