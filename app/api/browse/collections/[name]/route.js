import Collections from "@/models/collection";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const collectionName = decodeURIComponent(params.name || "");
    const collections = await Collections.find({ name: collectionName });

    return new Response(JSON.stringify(collections), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all collections", { status: 500 });
  }
};
