import Jewelry from "@/models/jewelry";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const collectionName = decodeURIComponent(params.name || "");
    const jewelries = await Jewelry.find({ collection: collectionName });

    return new Response(JSON.stringify(jewelries), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all jewelries", { status: 500 });
  }
};
