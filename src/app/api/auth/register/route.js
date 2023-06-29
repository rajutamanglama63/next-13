import User from "@/models/User";
import connectDB from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connectDB();

  const hassedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hassedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (error) {
    console.log("registration error: ", error);
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
