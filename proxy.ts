import { NextResponse } from "next/server"

// Clerk middleware removed. No authentication applied.
export default function middleware() {
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
