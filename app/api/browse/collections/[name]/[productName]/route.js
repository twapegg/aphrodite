import Jewelry from "@/models/jewelry";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const productName = decodeURIComponent(params.productName || "");
    const jewelries = await Jewelry.findOne({ name: productName });

    return new Response(JSON.stringify(jewelries), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch jewelry", { status: 500 });
  }
};
