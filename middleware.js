import {
    clerkMiddleware,
    createRouteMatcher
  } from '@clerk/nextjs/server';
  
  const isProtectedRoute = createRouteMatcher([
    '/dashboard',
    '/api(.*)',
  ]);
  
  export default clerkMiddleware((auth, req) => {
    if (req.url === '/') {
      console.log('Home route accessed');
    }
    
    if (isProtectedRoute(req)) {
      const user = auth().user;
      if (user) {
        console.log('User is authenticated:', user);
      } else {
        console.log('User is not authenticated');
      }
      auth().protect();
    }
  });
  
  export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
  };
  