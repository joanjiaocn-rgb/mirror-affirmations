import { NextRequest, NextResponse } from "next/server";

const apexHost = "mirroraffirmations.online";
const wwwHost = `www.${apexHost}`;

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase().replace(/:\d+$/, "");

  if (host === wwwHost && (request.method === "GET" || request.method === "HEAD")) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = apexHost;
    url.port = "";

    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}
