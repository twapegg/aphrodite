import Jewelry from "@/models/jewelry";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  const { jewelryID } = params;
  try {
    await connectToDB();

    const jewelry = await Jewelry.findById(jewelryID);

    return new Response(JSON.stringify(jewelry), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch jewelry", { status: 500 });
  }
};
