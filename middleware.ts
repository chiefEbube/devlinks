import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/", "/profile", "/preview"];
export default function middleware(req: NextRequest) {

    const isUserAuthenticated = false;

  if (
    !isUserAuthenticated &&
    protectedRoutes.includes(req?.nextUrl?.pathname)
  ) {
    const absoluteUrl = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }
  return NextResponse.next();
}