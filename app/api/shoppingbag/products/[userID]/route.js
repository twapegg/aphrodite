import Cart from "@/models/cart";
import { connectToDB } from "@/utils/database";
import Jewelry from "@/models/jewelry";

export const GET = async (request, { params }) => {
  const userID = params.userID;

  try {
    await connectToDB();
    const userCart = await Cart.findOne({ user: userID });

    if (!userCart) {
      return new Response("Cart not found", { status: 404 });
    }

    // get the cart products
    const cartProducts = await Promise.all(
      userCart.jewelries.map(async (jewelry) => {
        const product = await Jewelry.findById(jewelry.jewelry);
        return product;
      })
    );

    return new Response(JSON.stringify(cartProducts), { status: 200 });
  } catch (error) {
    console.error("Error fetching cart:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
