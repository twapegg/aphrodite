import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <NavBar bg={"white"} color="black" />

      <div className="bg-gray-300 pt-28 px-20 py-10 ml-3 mr-3">
        <h1 className="text-4xl text-black font-bold pt-20 ">Navigation Bar</h1>
        <div className=" grid lg:grid-cols-5 grid-cols-1 pt-20 text-black ">
          <div className="text-2xl col-span-1 flex flex-col lg:pl-8 pt-8 sm:pb-5 ">
            <Link href="/">Menu</Link>
            <Link href="/">Contact Us</Link>
            <Link href="/">Cart</Link>
            <Link href="/">Account</Link>
          </div>
          <div className="text-2xl col-span-1 flex flex-col sm:pb-5">
            <h5 className="font-bold">Menu</h5>
            <Link href="/"> Home</Link>
            <Link href="/"> About</Link>
            <Link href="/"> Services</Link>
            <Link href="/"> Contact</Link>
            <Link href="/"> Collection</Link>
          </div>
          <div className="text-2xl col-span-1 flex flex-col sm:pb-5">
            <h5 className="font-bold">Contact Us</h5>
            <Link href="/"> Call Us </Link>
            <Link href="/"> Email Us</Link>
            <Link href="/"> Frequently Ask Questions(FAQ)</Link>
          </div>
          <div className="text-2xl col-span-1 flex flex-col sm:pb-5 ">
            <h5 className="font-bold">Cart</h5>
            <Link href="/"> View Cart</Link>
            <Link href="/"> Checkout</Link>
          </div>
          <div className="text-2xl col-span-1 flex flex-col sm:pb-5">
            <h5 className="font-bold">Account</h5>
            <Link href="/"> Sign in</Link>
            <Link href="/">Transaction History</Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 pt-3 px-20 py-10 mt-4 ml-3 mr-3">
        <h1 className="text-4xl text-black font-bold pt-20 ">Browse</h1>

        <div className="grid lg:grid-cols-3 grid-cols-1 pt-10 text-black">
          <div className="text-2xl col-span-1 flex flex-col pt-8 lg:pl-8 sm:pb-5">
            <Link href="/">Collection</Link>
            <Link href="/">Category</Link>
          </div>
          <div className="text-2xl col-span-1 flex flex-col sm:pb-5 ">
            <h5 className="font-bold">Collection</h5>
            <Link href="/">Blossom</Link>
            <Link href="/">Les Gastons</Link>
            <Link href="/">Empreinte</Link>
            <Link href="/">Rose De Vents</Link>
            <Link href="/">Ever Blossom</Link>
            <Link href="/">Dentelle</Link>
            <Link href="/">Vivienne</Link>
          </div>
          <div className="text-2xl col-span-1 flex flex-col sm:pb-5">
            <h5 className="font-bold">Category</h5>
            <Link href="/">Ring</Link>
            <Link href="/">Pendant</Link>
            <Link href="/">Necklace</Link>
            <Link href="/">Earring</Link>
            <Link href="/">Bracelet</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
