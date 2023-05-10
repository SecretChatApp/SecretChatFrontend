import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
const authRoutes = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const flaggingAccessToken: boolean = request.cookies.has('access_token');
  const isLoginPage = authRoutes.includes(request.nextUrl.pathname);

  if (request.nextUrl.pathname == "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
