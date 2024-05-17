import NavBar from "@/components/NavBar";
import Link from "next/link";

const page = () => {
  return (
    <>
      <NavBar bg={"white"} color="black" />
      <div className="bg-slate-100 pt-28 px-20 py-10">
        <h1 className="text-4xl text-black font-bold pt-20 ">Navigation Bar</h1>
        <div className=" grid lg:grid-cols-3 grid-cols-1 pt-20 text-black place-items-start">
          <div className="text-xl col-span-1 flex flex-col sm:pb-5 lg:pl-8">
            <h5 className="font-bold">Menu</h5>
            <Link href="/">
              <span className="underline-animation">Home</span>
            </Link>
            <Link href="/search">
              <span className="underline-animation">Search</span>
            </Link>
            <Link href="/browse">
              <span className="underline-animation">Browse Jewelry</span>
            </Link>
            <Link href="/browse/collections">
              <span className="underline-animation">Collections</span>
            </Link>
            <Link href="/category">
              <span className="underline-animation">Categories</span>
            </Link>
            <Link href="/about">
              <span className="underline-animation">About Us</span>
            </Link>
            <Link href="/contact">
              <span className="underline-animation">Contact Us</span>
            </Link>
          </div>

          <div className="text-xl col-span-1 flex flex-col sm:pb-5 ">
            <h5 className="font-bold">Shopping Bag</h5>
            <Link href="/shoppingbag">
              <span className="underline-animation">View Bag</span>
            </Link>
          </div>
          <div className="text-xl col-span-1 flex flex-col sm:pb-5">
            <h5 className="font-bold">User</h5>
            <p>
              <span className="underline-animation">Sign in</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 pt-28 px-20 py-10 my-10">
        <h1 className="text-4xl text-black font-bold pt-20 ">Footer</h1>
        <div className=" grid lg:grid-cols-3 grid-cols-1 pt-20 text-black place-items-start">
          <div className="text-xl col-span-1 flex flex-col sm:pb-5 lg:pl-8">
            <Link href="/contact">
              <span className="underline-animation">Contact Us</span>
            </Link>
            <Link href="/faq">
              <span className="underline-animation">FAQ&apos;s</span>
            </Link>
          </div>

          <div className="text-xl col-span-1 flex flex-col sm:pb-5 ">
            <Link href="/about">
              <span className="underline-animation">About Us</span>
            </Link>
            <Link
              href="https://en.wikipedia.org/wiki/Aphrodite"
              target="_blank"
            >
              <span className="underline-animation">Goddess of Beauty</span>
            </Link>
          </div>
          <div className="text-xl col-span-1 flex flex-col sm:pb-5">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100027980442692"
            >
              <span className="underline-animation">Follow Us</span>
            </a>
            <Link href="/newsletter">
              <span className="underline-animation">
                Subscribe to our newsletter
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
