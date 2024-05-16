import Cart from "@/models/cart";
import Jewelry from "@/models/jewelry";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  const { userID, jewelry } = await request.json();

  try {
    await connectToDB();

    const userCart = await Cart.findOne({ user: userID });

    const jewelryProduct = await Jewelry.findById(jewelry);

    if (!userCart) {
      const newCart = new Cart({
        user: userID,
        jewelries: [{ jewelry: jewelryProduct._id, quantity: 1 }],
        subTotal: jewelryProduct.price,
      });

      await newCart.save();
    } else {
      const jewelryIndex = userCart.jewelries.findIndex(
        (j) => j.jewelry.toString() === jewelry
      );

      if (jewelryIndex === -1) {
        userCart.jewelries.push({ jewelry: jewelryProduct._id, quantity: 1 });
      } else {
        userCart.jewelries[jewelryIndex].quantity++;
      }
      userCart.subTotal += jewelryProduct.price;
      await userCart.save();
    }

    return new Response(JSON.stringify(), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to add to cart", { status: 500 });
  }
};
