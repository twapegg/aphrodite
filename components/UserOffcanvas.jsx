"use client";

import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

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
      <div className="absolute top-0 right-0 h-full w-2/6 bg-white text-black shadow-lg transition-all duration-300 ease-in-out transform translate-x-0">
        <div className="p-4 relative">
          <button
            onClick={onClose}
            className="p-1 absolute top-3 left-3 text-xl text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg"
          >
            <FaTimes />
          </button>
          <div className="space-y-4 mt-10 px-14 flex justify-center flex-col items-center">
            {session?.user ? (
              <h2>Welcome, {session.user.name}!</h2>
            ) : (
              <>
                <h2>Welcome to Aphrodite!</h2>
              </>
            )}
            {session ? (
              <button
                onClick={signOut}
                className="block py-2 px-4 text-white bg-black transition-colors duration-300 hover:bg-white hover:text-black hover:border-black border rounded-3xl w-full"
              >
                Sign out
              </button>
            ) : (
              providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="block py-2 px-4 text-white bg-black transition-colors duration-300 hover:bg-white hover:text-black hover:border-black border rounded-3xl w-full"
                >
                  Sign in
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserOffCanvas;
