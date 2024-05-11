import Cart from "@/models/cart";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const { userID, jewelry } = await request.json();

  try {
    await connectToDB();

    // check if user already has a cart
    const userCart = await Cart.findOne({ user: userID });

    // if not, create a new document and save user in MongoDB
    if (!userCart) {
      await Cart.create({
        user: userID,
        jewelries: [jewelry._id, jewelry.quantity],
        subTotal: jewelry.price * jewelry.quantity,
      });
    }

    // if user already has a cart, update the existing cart
    const updatedCart = await Cart.findOneAndUpdate(
      { user: userID },
      {
        $push: {
          jewelries: [jewelry._id, jewelry.quantity],
        },
        $inc: {
          subTotal: jewelry.price * jewelry.quantity,
        },
      },
      { new: true }
    );

    return new Response("Cart updated successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to add to cart", { status: 500 });
  }
};
