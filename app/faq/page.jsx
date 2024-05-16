import React from "react";
import NavBar from "@/components/NavBar";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

import { FaChevronDown } from "react-icons/fa";
1;
const page = () => {
  return (
    <div>
      <NavBar bg={"white"} color={"black"} />
      <div className="my-36 lg:mx-32 mx-4">
        <h1 className="text-6xl text-black text-center">
          Frequently Asked Questions
        </h1>
        <div className="pt-24">
          <Accordion>
            <AccordionSummary
              expandIcon={<FaChevronDown />}
              className="text-lg font-bold"
            >
              What is the return &amp; exchange policy?
            </AccordionSummary>
            <div className="ml-10">
              <AccordionDetails>
                Merchandise in perfect saleable condition with original receipt
                may be exchanged or returned for a full refund within thirty
                (30) days from the original purchase date except for high
                watches, high jewelry, and personalized or made-to-order items
                (including hot stamped or engraved products), which are final
                sale only.Returns or exchanges of jewelry must include the
                packaging, instructions leaflet (with warranty certificate), and
                product certificates (such as COSC and GIA).{" "}
              </AccordionDetails>
              <AccordionDetails>
                A refund of the original purchase price may only be made in the
                same form of payment, currency and country/region as the
                original purchase.
              </AccordionDetails>
              <AccordionDetails>
                Exchanges will be accepted in any freestanding Aphrodite store
                excluding Brazil, China, Colombia, Dominican Republic, India,
                Jordan, Kazakhstan, South Korea, Lebanon, Mexico, Russia,
                Thailand, Taiwan, Turkey, Ukraine and Vietnam. For merchandise
                purchased at a freestanding Aphrodite store, refunds are not
                available at department store locations and exchanges are not
                available at Nordstrom locations. Online purchases cannot be
                refunded or exchanged at department store locations.
              </AccordionDetails>
              <AccordionDetails>
                PayPal purchases may only be exchanged or returned at our online
                store.
              </AccordionDetails>
              <AccordionDetails>
                Merchandise purchased from a department store may only be
                refunded at the same department store brand or exchanged for
                product of equal or greater value at the same department store
                brand or a freestanding Aphrodite store.
              </AccordionDetails>
            </div>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<FaChevronDown />}
              className="text-lg font-bold"
            >
              How do I return or exchange my online purchase?
            </AccordionSummary>
            <div className="ml-10">
              <AccordionDetails>
                <h1 className="underline">RETURN &amp; EXCHANGE</h1>
                <h5>
                  Online purchases can be returned complimentary online or in
                  stores [except Saks, Neiman Marcus, Bloomingdale&apos;s,
                  Macy&apos;s, & Nordstrom].
                </h5>
              </AccordionDetails>
              <AccordionDetails>
                <h1 className="underline">RETURN</h1>
                <ol className="list-disc ml-10">
                  <li>
                    Register your return online or contact Client Services:
                    Register your return online by connecting to your My LV
                    account or emailing Client Services at
                    us@contact.Aphrodite.com.
                  </li>
                  <li>
                    Prepare your package: Place your item in its original
                    packaging and with the original receipt
                  </li>
                  <li>
                    Put the pre-paid label, included within your order, on your
                    package: Cover old address labels with the new pre-paid
                    label and securely seal your package using the adhesive
                    strip on the inside of the box.
                  </li>
                  <li>
                    {" "}
                    Deliver your package to UPS: Drop your package off at any
                    UPS store or pick-up location.
                  </li>
                </ol>
              </AccordionDetails>
              <AccordionDetails>
                <h1 className="underline">
                  RETURN &#40; SCHEDULED DELIVERIES &#41;
                </h1>
                <h1>
                  Your purchase can be returned by scheduling a complimentary
                  pickup from your home.
                </h1>
                <ol className="list-disc ml-10">
                  <li>
                    Contact Client Services: Email our dedicated Client Services
                    team at concierge_delivery.us@contact.Aphrodite.com to
                    request a return.
                  </li>
                  <li> Please include your order number and phone number.</li>
                  <li>
                    Schedule a pickup time: Our Client Services team will
                    contact you by phone to schedule a 2-hour time slot of your
                    choice.
                  </li>
                  <li>
                    Prepare your return: Include your item in its original
                    packaging along with the original receipt.
                  </li>
                  <li>
                    Hand off your return to our Concierge: The return will be
                    picked up during your scheduled 2-hour time slot.
                  </li>
                </ol>
              </AccordionDetails>
              <AccordionDetails>
                <h1 className="underline">EXCHANGE</h1>
                <ol className="list-disc , ml-10">
                  <li>Call Client Services: &#43;639760156425</li>
                  <li>
                    In store: Online purchases can be exchanged in stores
                    [except Saks, Neiman Marcus, Bloomingdale&apos;s,
                    Macy&apos;s, & Nordstrom].
                  </li>
                </ol>
              </AccordionDetails>
              <AccordionDetails>
                <h1 className="underline">POLICY</h1>
                <ol className="list-disc ml-10">
                  <li>Complimentary exchanges & returns within 30 days.</li>
                  <li>Item in perfect &amp; sellable condition.</li>
                  <li>Original packaging.</li>
                  <li>Original invoice, leaflets and certificates.</li>
                  <li>No exchanges and returns for personalized items.</li>
                  <li>
                    PayPal purchases may only be exchanged or returned for a
                    full refund at our online store.
                  </li>
                </ol>
              </AccordionDetails>
            </div>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<FaChevronDown />}
              className="text-lg font-bold"
            >
              How long do I have to return my Aphrodite products?{" "}
            </AccordionSummary>
            <div className="ml-10">
              <AccordionDetails>
                Online purchases can be returned complimentary online or in
                stores [except Saks, Neiman Marcus, Bloomingdale&apos;s, &
                Nordstrom] within 30 days of purchase.
              </AccordionDetails>
            </div>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<FaChevronDown />}
              className="text-lg font-bold"
            >
              How do I ship my online return?
            </AccordionSummary>
            <div className="ml-10">
              <AccordionDetails>
                Aphrodite offers complimentary returns & exchanges within 30
                days of purchase. Item(s) must be in perfect & sellable
                condition, accompanied by the original packaging and
                documentation.
              </AccordionDetails>
              <AccordionDetails>
                For items purchased via the Aphrodite website or through our
                Customer Services Center, please follow below instructions:
              </AccordionDetails>
              <AccordionDetails>
                Register your return online or contact customer services:
                Register your return online by connecting to your account.
              </AccordionDetails>
              <AccordionDetails>
                Prepare your package: Place your item in its original packaging
                and with the original receipt. Put the pre-paid label, included
                within your order, on your package: Cover old address labels
                with the new pre-paid label and securely seal your package using
                the adhesive strip on the inside of the box. Should you need
                another return label, please contact Customer Services at &#40;
                &#43;639760156425 &#41;. Deliver your package to UPS: Drop your
                package off at any UPS store or pick-up location. Should you
                choose not to use the provided label and ship via a different
                carrier, please ship to the address indicated on the voucher. In
                this case, Aphrodite is not responsible for packages lost in
                transit, and shipping costs will not be reimbursed.
              </AccordionDetails>
              <AccordionDetails>
                You may also visit any Free-Standing Aphrodite Stores to
                initiate your return.
              </AccordionDetails>
            </div>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<FaChevronDown />}
              className="text-lg font-bold"
            >
              What shipping options are available?
            </AccordionSummary>
            <div className="ml-10">
              <AccordionDetails>
                <h1 className="text-lg">SCHEDULED DELIVERY</h1>
                <h2>
                  Available in select New York City and New Jersey zip codes
                  (Monday - Sunday, excluding holidays), signature required.
                  Please enter your zip code at checkout to confirm eligibility.
                  Fee: $30 for orders under $3,000 | Complimentary for all
                  orders $3,000 and above Delivery Timing: Delivery Monday
                  through Sunday (except holidays) from 11am to 9pm. Same-day
                  service available for orders placed by 1pm ET for New York
                  City or New Jersey. Your shopping bag will be hand delivered
                  by our Concierge during a 2-hour time slot of your choice. You
                  will receive SMS notifications regarding your order, and
                  carrier charges may apply.
                </h2>
                <h2>Exceptions:</h2>

                <ol className="list-disc ml-10">
                  <li>
                    If you miss the delivery attempt, we will contact you to
                    reschedule
                  </li>
                  <li>
                    {" "}
                    There will be a signature required on all Scheduled Delivery
                    orders
                  </li>
                </ol>
              </AccordionDetails>
              <AccordionDetails>
                <h1 className="text-lg">SATURDAY DELIVERY</h1>
                <h2>
                  Fee: $30 for orders under $3,000 | Complimentary for all
                  orders $3,000 and above Delivery Timing: Orders placed between
                  12pm ET on Monday and 3pm ET on Friday should arrive the
                  following Saturday. If an order is placed after these times,
                  it will be processed the following business day. Cutoff times
                  may vary slightly depending on sourcing location.
                </h2>
                <h2>Exceptions:</h2>
                <ol className="list-disc ml-10">
                  <li>
                    Orders placed after the cutoff or on holidays will be
                    processed the following business day
                  </li>
                  <li>Some zip codes are not available for this service</li>
                  <li>
                    Additional validation may be required for all orders and can
                    delay delivery
                  </li>
                </ol>
              </AccordionDetails>
              <AccordionDetails>
                <h1 className="text-lg">MEXT BUSINESS DAYS DELIVERIES</h1>
                <h2>
                  Fee: $30 for orders under $3,000 | Complimentary for all
                  orders $3,000 and above Delivery Timing: Orders placed by 3pm
                  ET Monday - Friday or by 11am ET Saturday should arrive the
                  following business day. If an order is placed after these
                  times, it will be processed the following business day. Cutoff
                  times may vary slightly depending on sourcing location.
                </h2>
                <h2>Exceptions:</h2>
                <ol className="list-disc ml-10">
                  <li>
                    Orders placed after the cutoff, on Sundays, or on holidays
                    will be processed the following business day
                  </li>
                  <li> Some zip codes are not available for this service</li>
                  <li>
                    Additional validation may be required for all orders and can
                    delay delivery
                  </li>
                </ol>
              </AccordionDetails>
              <AccordionDetails>
                <h1 className="text-lg">CARBON EFFICIENT DELIVERY</h1>
                <h2>
                  This delivery option has less carbon emissions than Air
                  Delivery (on average for US mainland shipments).
                </h2>
                <h2>Fee: Complimentary for all orders</h2>
                <h2>
                  Delivery Timing: 1-5 business days from the time you receive
                  the shipping confirmation email
                </h2>
                <h2>Exceptions:</h2>
                <ol className="list-disc ml-10">
                  <li>
                    If a Carbon Efficient Delivery order is placed over the
                    weekend, the earliest it will ship is Monday
                  </li>
                  <li>
                    Alaska and Hawaii: Allow 5-7 business days from the time you
                    receive the shipping confirmation email. For expedited
                    delivery, we recommend you select Next Business Day Delivery
                  </li>
                </ol>
              </AccordionDetails>
              <AccordionDetails>
                <h1 className="text-lg">COLLECT IN STORE</h1>
                <h2>
                  Have your order delivered to the store of your choice within 1
                  business day, now available in select Louis Vuitton stores.
                </h2>
                <h2>Fee: Complimentary for all orders</h2>
                <h2>Delivery Timing:</h2>
                <ol className="list-disc ml-10">
                  <li>
                    Collect-in-Store orders placed by 12pm (ET) Monday –
                    Saturday will be delivered to the store of your choice in 1
                    business day for in-stock items​.
                  </li>
                  <li>
                    Collect in Store orders placed on Sunday will be processed
                    the following business day.{" "}
                  </li>
                  <li>
                    {" "}
                    Additional validation may be required for all orders and can
                    delay delivery
                  </li>
                </ol>{" "}
              </AccordionDetails>
              <AccordionDetails>
                <h1 className="text-lg">HOW TO COLLECT IN STORE</h1>
                <h2>
                  Notification: You will receive an email when your order is
                  ready to be collected from the store
                </h2>
              </AccordionDetails>
              <AccordionDetails>
                <h2>Collecting yourself you need:</h2>
                <ol className="list-disc ml-10">
                  <li>Original method of payment or PayPal confirmation</li>
                  <li>Government-issued photo identification</li>
                  <li>Confirmation email</li>
                </ol>
              </AccordionDetails>
              <AccordionDetails>
                <h2>Representative needs:</h2>
                <ol className="list-disc ml-10">
                  <li>Original method of payment or PayPal confirmation</li>
                  <li>Purchaser’s government-issued photo identification</li>
                  <li>
                    Representative’s government issued photo identification
                  </li>
                  <li>Confirmation email</li>
                </ol>
                <h2>
                  Ready-to-Wear Item: If you are picking up a Ready-to-Wear
                  item, please note not all Louis Vuitton locations offer
                  fitting rooms and alterations. Please check our STORE LOCATOR
                  for a list of stores that sell Ready-to-Wear.
                </h2>
                <h2>
                  If you do not collect your order: Your order will be available
                  in-store for 14 days. If not collected, it will be sent back
                  and your original method of payment will be refunded.
                </h2>
              </AccordionDetails>
              <AccordionDetails>
                <h1 className="text-lg">SIGNATURES REQUIRED</h1>
                <h2>Signature is required on all shipments.</h2>
                <h2>
                  The above processing and delivery costs are for merchandise
                  pictured and described on us.louisvuitton.com; Costs are
                  calculated according to the total cost of the merchandise in
                  your order. All prices reflect U.S. currency. Scheduled
                  Delivery orders are delivered via our courier, all other
                  orders are shipped by UPS.
                </h2>
              </AccordionDetails>
            </div>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<FaChevronDown />}
              className="text-lg font-bold"
            >
              {" "}
              When will I receive my tracking information?
            </AccordionSummary>
            <div className="ml-10 ">
              <AccordionDetails>
                <h1>
                  Orders may take 24 to 36 hours to process, once your order has
                  been processed you will receive an email confirming your order
                  has shipped
                </h1>
                <h1>
                  Shipping Fees & Timing begin when you receive the shipping
                  confirmation email
                </h1>
                <h1>
                  Additional validation may be required for some orders and can
                  delay delivery
                </h1>
                <h1>Signature is required on all shipments</h1>
                <h1>
                  To track your order, visit your MyLV account or shipping
                  confirmation email.
                </h1>
              </AccordionDetails>
            </div>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<FaChevronDown />}
              className="text-lg font-bold"
            >
              What are the accepted payment methods?
            </AccordionSummary>
            <div className="ml-10">
              <AccordionDetails>
                Payments are accepted via credit card, debit card, PayPal or
                Apple Pay with a valid United States billing and shipping
                address. Accepted credit cards are Visa, American Express, and
                Mastercard. When placing an order, your billing address must
                correspond to the address of your credit card, or we will not be
                able to process your order.
              </AccordionDetails>
            </div>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<FaChevronDown />}
              className="text-lg font-bold"
            >
              How can I obtain a duplicate invoice for my Aphrodite purchase?
            </AccordionSummary>
            <div className="ml-10">
              <AccordionDetails>
                Please contact Customer Services at &#43;639760156425 from 8am -
                9pm CT Monday through Friday. Saturday from 9am - 9pm CT, and
                Sunday from 10am - 9pm CT.
              </AccordionDetails>
            </div>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default page;
