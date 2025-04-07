// src/middleware.js
import { NextResponse } from "next/server";
import { auth } from "./auth";

export const middleware = async (request) => {
  const session = await auth();
  console.log(session);

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
};

export const config = {
  // Apply middleware to all paths except '/'
  matcher: [
    "/create-quiz/:path*",
    "/home/:path*",
    "/my-quiz/:path*",
    "/quizzes/:path*",
    "/protected/:path*",
  ],
};
