import { NextResponse, type NextRequest } from "next/server";

const localeCookie = "oakflare-locale";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  if (pathname === "/") {
    const preferred = request.cookies.get(localeCookie)?.value;
    url.pathname = preferred === "es" ? "/es" : "/en";
    return NextResponse.redirect(url);
  }

  if (pathname === "/work/moss-project" || pathname === "/work/logistica-sa") {
    url.pathname = `/en${pathname}`;
    return NextResponse.redirect(url, 308);
  }
}

export const config = {
  matcher: ["/", "/work/moss-project", "/work/logistica-sa"],
};
