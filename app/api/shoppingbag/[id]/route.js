import Cart from "@/models/cart";

import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const cart = await Cart.find({ user: params.id })

        return new Response(JSON.stringify(cart), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 