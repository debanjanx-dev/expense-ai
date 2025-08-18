import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Create a matcher for routes that should be protected
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  // Add other protected routes as needed
]);

// Export `middleware` instead of default
export const middleware = clerkMiddleware({
  beforeAuth: (req) => {
    // Run code before authentication
    return NextResponse.next();
  },
  afterAuth: (auth, req) => {
    const { userId } = auth;

    // If the route is protected and the user isn't authenticated
    if (isProtectedRoute(req.nextUrl.pathname) && !userId) {
      const homeUrl = new URL('/', req.url);
      return NextResponse.redirect(homeUrl);
    }

    return NextResponse.next();
  },
});

// Configure middleware to run on specific paths
export const config = {
  matcher: ['/((?!_next/image|_next/static|favicon.ico|.*\\.svg).*)'],
};
