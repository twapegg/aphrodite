import Cart from "@/models/cart";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  const userID = params.userID;

  try {
    await connectToDB();
    const userCart = await Cart.findOne({ user: userID });

    if (!userCart) {
      return new Response("Cart not found", { status: 404 });
    }

    return new Response(JSON.stringify(userCart), { status: 200 });
  } catch (error) {
    console.error("Error fetching cart:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
