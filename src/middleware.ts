import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

  const isAuthPage = nextUrl.pathname === "/auth";
  const isPublicRoute = nextUrl.pathname === "/"; // لو عايز الصفحة الرئيسية تكون عامة

  // لو المستخدم مسجل دخول وبيحاول يفتح صفحة الـ login، ابعته للداشبورد
  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  // لو المستخدم مش مسجل دخول وبيحاول يفتح صفحة محمية (مش auth ومش صفحة عامة)
  if (!isLoggedIn && !isAuthPage) {
    return NextResponse.redirect(new URL("/auth", nextUrl));
  }

  return NextResponse.next();
});

// الـ Matcher ده هو سر حل مشكلة الـ Spam
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};