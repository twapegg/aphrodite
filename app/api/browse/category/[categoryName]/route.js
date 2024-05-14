import Category from "@/models/category";
import { connectToDB } from "@/utils/database";
import unpluralize from "@/utils/unpluralize";

export const GET = async (request, { params }) => {
  let categoryName = decodeURIComponent(params.categoryName || "");
  try {

    categoryName = unpluralize(categoryName);
    await connectToDB();

    const categories = await Category.find({ name: categoryName });

    return new Response(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    return new Response(`Failed to fetch category ${categoryName}`, {
      status: 500,
    });
  }
};
