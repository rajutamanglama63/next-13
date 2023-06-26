import Post from "@/models/Post";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    await connectDB();

    const posts = await Post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.log("error: ", error);
    return new NextResponse("Database error", { status: 500 });
  }
};
