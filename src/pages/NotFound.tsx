import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SEOHead } from '@/components/SEOHead';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SEOHead
        title="Page Not Found — Shankares Art"
        description="The page you're looking for doesn't exist. Browse original abstract paintings by Shankares."
      />
      <div className="text-center">
        <h1 className="mb-4 font-display text-4xl">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">This page doesn't exist</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Gallery
        </a>
      </div>
    </div>
  );
};

export default NotFound;
