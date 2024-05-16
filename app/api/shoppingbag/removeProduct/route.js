import Cart from "@/models/cart";
import { connectToDB } from "@/utils/database";

// Update cart, clear all jewelries
export const PATCH = async (request) => {
  const { userID, jewelryID } = await request.json();

  try {
    await connectToDB();

    const userCart = await Cart.findOne({ user: userID });

    if (!userCart) {
      return new Response("Cart not found", { status: 404 });
    }

    // Remove the jewelry from the cart
    const jewelry = userCart.jewelries.find(
      (jewelry) => jewelry.jewelry === jewelryID
    );
    if (!jewelry) {
      return new Response("Jewelry not found in cart", { status: 404 });
    }

    userCart.jewelries = userCart.jewelries.filter(
      (jewelry) => jewelry.jewelry !== jewelryID
    );
    
    userCart.subTotal -= jewelry.price;
    await userCart.save();

    return new Response(JSON.stringify(userCart), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to clear cart", { status: 500 });
  }
};
