import Jewelry from "@/models/jewelry";
import { connectToDB } from "@/utils/database";
import unpluralize from "@/utils/unpluralize";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    let collectionName = decodeURIComponent(params.categoryName || "");

    collectionName = unpluralize(collectionName);
    console.log(collectionName);

    const jewelries = await Jewelry.find({ category: collectionName });

    return new Response(JSON.stringify(jewelries), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all jewelries", { status: 500 });
  }
};
