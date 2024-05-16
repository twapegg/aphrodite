import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <NavBar bg={"white"} color="black" />;
      <div className="text-black font-bold pt-40 text-4xl text-center">
        Terms and Conditions
      </div>
      <div className="pt-20 mx-72 text-black">
        <div className="">
          <div className="font-bold">WARRANTY</div>
          <ul className="list-disc pl-8 pr-20 mt-4 mb-8 text-justify">
            <li>
              All Aphrodite products have a standard warranty of 1 Year from
              date of purchase. Products with proven manufacturing defects may
              be exchanged within the warranty period.
            </li>
            <li>
              Products beyond the warranty period or damaged due to wear and
              tear, misuse, or mishandling are not covered by warranty but may
              be repaired for a fee in Aphrodite Care.
            </li>
          </ul>
          <div className="font-bold">ORDER CANCELLATION</div>
          <div className="pb-3 pt-5">
            A request to cancel an order must be placed within 24 hours from
            purchase. Otherwise, will not be accommodated.
          </div>
          <div className="pb-3">
            All order cancellation requests are subject to management approval.
          </div>
          <div className="pb-3">
            Cancellation of order due to change of mind will not be
            accommodated.
          </div>
          <div className="font-bold pt-5">RETURNS AND EXCHANGES</div>
          <div className="pb-3 pt-5">
            Products bought in Aphrodite Philippines official e-store may be
            exchanged within 14 days from receipt of the order, provided the
            following are presented:
          </div>
          <ul className="list-disc pl-8 pr-20 mt-4 mb-8 text-justify">
            <li>Sales Invoice</li>
            <li>Warranty Certificate</li>
            <li>
              Product in good saleable condition and with its original packaging
            </li>
          </ul>
          <div className="pb-3">
            Product exchange covers change of size and replacement of products
            with proven manufacturing defect. Otherwise, are subject for
            management approval.
          </div>
          <div className="pb-3 pt-5">
            Product exchange will only be accommodated once.
          </div>
          <div className="pb-3 pt-10">
            For returns or exchanges, please email:{" "}
            <span className="underline">ask.aphrodite.com</span> to assist you
            with this transaction.
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
