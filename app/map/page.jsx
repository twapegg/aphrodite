import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <NavBar bg={"white"} color="black" />

      <div className="bg-gray-300 pt-28 px-20 py-10 ml-3 mr-3">
        <h1 className="text-3xl text-black font-bold pt-20 ">Navigation Bar</h1>
        <div className=" grid lg:grid-cols-4 grid-cols-1 pt-20 text-black ">
          <div className="text-xl col-span-1 flex flex-col sm:pb-5 lg:pl-8">
            <h5 className="font-bold">Menu</h5>
            <Link href="/">
              {" "}
              <span className="underline-animation">Home</span>
            </Link>
            <Link href="/about">
              <span className="underline-animation">About</span>{" "}
            </Link>
            <Link href="/contact">
              <span className="underline-animation">Contact</span>{" "}
            </Link>
            <Link href="/browse">
              <span className="underline-animation">browse</span>{" "}
            </Link>
          </div>
          <div className="text-xl col-span-1 flex flex-col sm:pb-5">
            <h5 className="font-bold">Contact Us</h5>
            <Link href="tel:+639760156425">
              {" "}
              <span className="underline-animation">Call Us</span>{" "}
            </Link>
            <Link href="https://www.facebook.com/messages/e2ee/t/25145337045114032">
              {" "}
              <span className="underline-animation">Chat Us</span>
            </Link>
            <Link href="mailto:alcristapic@su.edu.ph">
              {" "}
              <span className="underline-animation">Email Us</span>
            </Link>
            <Link href="/faq">
              {" "}
              <span className="underline-animation">
                Frequently Ask Questions(FAQ)
              </span>{" "}
            </Link>
          </div>
          <div className="text-xl col-span-1 flex flex-col sm:pb-5 ">
            <h5 className="font-bold">Cart</h5>
            <Link href="/shoppingbag">
              {" "}
              <span className="underline-animation">View Cart</span>
            </Link>
            <Link href="/checkout">
              {" "}
              <span className="underline-animation">Checkout</span>
            </Link>
          </div>
          <div className="text-xl col-span-1 flex flex-col sm:pb-5">
            <h5 className="font-bold">Account</h5>
            <Link href="https://l.facebook.com/l.php?u=https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fv2%2Fauth%2Foauthchooseaccount%3Fclient_id%3D623886535861-10ftab6fltrrr78okptjle4olgpnevah.apps.googleusercontent.com%26scope%3Dopenid%2520email%2520profile%26response_type%3Dcode%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fapi%252Fauth%252Fcallback%252Fgoogle%26state%3DrLiBjDHGC1dYHkJSzpAnM8kC8n08CRCiXicxm9eWa1s%26code_challenge%3DGiPSZgAsOcaHq2-aTXc2vVwLOw7Aqpzof4sDKWeNQKk%26code_challenge_method%3DS256%26service%3Dlso%26o2v%3D2%26ddm%3D0%26flowName%3DGeneralOAuthFlow%26fbclid%3DIwZXh0bgNhZW0CMTAAAR17xO5Nx5P5Zs144h7EDSOk597QIW4OrMdO5SorbYSWS-pe3cOeCkGQIqA_aem_AdcrGK9MtiQ3G6rNLOxH067mH3xVi2WHhszY7H5saxO8MDr83B6i762KN1eVLDDD2U5S8o4RJxWFoT3CXclZPhbe&h=AT1CGKoLMHRnHXSygefogLrtGOshFftgurmhgI5C8QJsCK4jacHTG9L7lQaioKbNkxFl4z3pFtFnTVkGFl7QeoOLSomH6qaOdHB5iJBeJfEBMFgal2KEX5YPT0sLNujR3pKJKw">
              {" "}
              <span className="underline-animation">Sign in</span>
            </Link>
            <Link href="/">
              {" "}
              <span className="underline-animation">Transaction History</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 pt-3 px-20 py-10 mt-4 ml-3 mr-3">
        <h1 className="text-4xl text-black font-bold pt-20 ">Browse</h1>

        <div className="grid lg:grid-cols-3 grid-cols-1 pt-10 text-black">
          <div className="text-xl col-span-1 flex flex-col pt-8 lg:pl-8 sm:pb-5">
            <Link href="/browse/collections">
              <span className="underline-animation">Collection</span>
            </Link>
            <Link href="/browse/category">
              <span className="underline-animation">Category</span>
            </Link>
          </div>
          <div className="text-xl col-span-1 flex flex-col sm:pb-5 ">
            <h5 className="font-bold">Collection</h5>
            <Link href="/browse/collections/blossom">
              <span className="underline-animation">Blossom</span>
            </Link>
            <Link href="/browse/collections/les gastons">
              <span className="underline-animation">Les Gastons</span>
            </Link>
            <Link href="/browse/collections/empreinte">
              <span className="underline-animation">Empreinte</span>
            </Link>
            <Link href="/browse/collections/rose de vents">
              <span className="underline-animation">Rose De Vents</span>
            </Link>
            <Link href="/browse/collections/ever blossoms">
              <span className="underline-animation">Ever Blossom</span>
            </Link>
            <Link href="/browse/collections/dentelle">
              <span className="underline-animation">Dentelle</span>
            </Link>
            <Link href="/browse/collections/vivienne">
              <span className="underline-animation">Vivienne</span>
            </Link>
          </div>
          <div className="text-xl col-span-1 flex flex-col sm:pb-5">
            <h5 className="font-bold">Category</h5>
            <Link href="/browse/category/ring">
              <span className="underline-animation">Ring</span>
            </Link>
            <Link href="/browse/category/pendant">
              <span className="underline-animation">Pendant</span>
            </Link>
            <Link href="/browse/category/necklace">
              <span className="underline-animation">Necklace</span>
            </Link>
            <Link href="/browse/category/earring">
              <span className="underline-animation">Earring</span>
            </Link>
            <Link href="/browse/bracelet">
              <span className="underline-animation">Bracelet</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
