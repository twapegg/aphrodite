"use client";

import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";

const UserOffCanvas = ({ isOpen, onClose }) => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

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
      <div className="absolute top-0 right-0 h-full w-1/2 lg:w-4/12 bg-white text-black shadow-lg transition-all duration-300 ease-in-out transform translate-x-0">
        <div className="p-4 relative">
          <Tooltip title="Close">
            <button
              onClick={onClose}
              className="p-1 absolute top-3 left-3 text-xl text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg"
            >
              <FaTimes />
            </button>
          </Tooltip>
          <div className="space-y-4 mt-10 px-14 flex justify-center flex-col items-center">
            {session?.user ? (
              <h2 className="font-bold text-xl">
                Welcome, {session.user.name}!
              </h2>
            ) : (
              <>
                <h2 className="font-bold text-2xl">Welcome to Aphrodite!</h2>
              </>
            )}
            {session ? (
              <>

                <Link
                  href="/shoppingbag"
                  className="flex justify-center py-2 px-4 text-white bg-black transition-colors duration-300 hover:bg-white hover:text-black hover:border-black border rounded-3xl w-full"
                >
                  View Bag
                </Link>

                <button
                  onClick={signOut}
                  className="block py-2 px-4 text-white bg-black transition-colors duration-300 hover:bg-white hover:text-black hover:border-black border rounded-3xl w-full"
                >
                  Sign out
                </button>
              </>
            ) : (
              providers &&
              Object.values(providers).map((provider) => (
                <>
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="block py-2 px-4 text-white bg-black transition-colors duration-300 hover:bg-white hover:text-black hover:border-black border rounded-3xl w-full"
                  >
                    Sign in
                  </button>
                  <p className="text-sm items-center flex flex-col text-justify">
                    By clicking Sign In, you agree to our{"  "}
                    <Link href="/term" className="inline">
                      <span className="underline">terms of service.</span>
                    </Link>
                  </p>
                </>
              ))
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h3 className="text-center text-md text-black font-bold">
            &copy; 2024 Aphrodite. All rights reserved.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default UserOffCanvas;
