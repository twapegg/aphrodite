import Cart from "@/models/cart";
import { connectToDB } from "@/utils/database";
import Jewelry from "@/models/jewelry";

// Update cart, clear all jewelries
export const PATCH = async (request) => {
  const { userID, jewelryID } = await request.json();

  // try {
  await connectToDB();

  const userCart = await Cart.findOne({ user: userID });

  if (!userCart) {
    return new Response("Cart not found", { status: 404 });
  }

  // console.log("cart", userCart);
  // Remove the jewelry from the cart

  //
  const jewelryProduct = await Jewelry.findById(jewelryID);
  console.log(jewelryProduct);

  const jewelryToRemove = userCart.jewelries.find(
    (jewelry) => jewelry.jewelry.toString() === jewelryID
  );

  if (!jewelryToRemove) {
    return new Response("Jewelry not found in cart", { status: 404 });
  }

  userCart.jewelries = userCart.jewelries.filter(
    (jewelry) => jewelry.jewelry.toString() !== jewelryID
  );

  console.log(userCart);
  // userCart.subTotal -= jewelryToRemove.jewelry.price;
  // await userCart.save();

  return new Response(JSON.stringify(userCart), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
  // } catch (error) {
  //   console.error("Error removing jewelry from cart:", error);
  //   return new Response("Failed to remove jewelry from cart", { status: 500 });
  // }
};
