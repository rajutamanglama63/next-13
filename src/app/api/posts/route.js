import Post from "@/models/Post";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");
  try {
    await connectDB();

    const posts = await Post.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.log("error: ", error);
    return new NextResponse("Database error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connectDB();

    await newPost.save();

    return new NextResponse("Post has been created.", { status: 201 });
  } catch (error) {
    console.log("error while creating post: ", error);
    return new NextResponse("Database error", { status: 500 });
  }
};
