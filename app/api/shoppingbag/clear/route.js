import Cart from "@/models/cart";
import { connectToDB } from "@/utils/database";

// Update cart, clear all jewelries
export const PATCH = async (request) => {
  const { userID } = await request.json();

  try {
    await connectToDB();

    const userCart = await Cart.findOne({ user: userID });

    if (!userCart) {
      return new Response("Cart not found", { status: 404 });
    }

    userCart.jewelries = [];
    userCart.subTotal = 0;
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
