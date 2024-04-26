import Collections from "@/models/collection";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const collections = await Collections.find({});

    return new Response(JSON.stringify(collections), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all collections", { status: 500 });
  }
};
