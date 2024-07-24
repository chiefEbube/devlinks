// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname.startsWith('/profile')) {
//     return NextResponse.rewrite(new URL('/login', request.url))
//   }
 
//   if (request.nextUrl.pathname.startsWith('/preview')) {
//     return NextResponse.rewrite(new URL('/login', request.url))
//   }
// }