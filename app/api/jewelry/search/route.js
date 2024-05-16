import Jewelry from "@/models/jewelry";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  const { searchParams } = new URL(request.url);
  const jewelryName = searchParams.get("name");

  console.log(jewelryName);
  try {
    await connectToDB();


    // if searchparams is empty, don't return anything
    

    const jewelry = await Jewelry.find({
      name: { $regex: new RegExp(jewelryName, "i") },
    });

    if (!jewelry || jewelry.length === 0) {
      return new Response("No jewelry found with this name", { status: 404 });
    }

    return new Response(JSON.stringify(jewelry), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch jewelry", { status: 500 });
  }
};
