// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: Implement protected route component for UI
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  adminOnly?: boolean;
  redirectPath?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  adminOnly = false,
  redirectPath = '/login'
}) => {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (!authLoading) {
      if (!user) {
        // Not logged in - redirect to login
        router.push(redirectPath);
      } else if (adminOnly && !user.user_metadata?.roles?.includes('admin')) {
        // Admin required but not admin - redirect to home
        router.push('/');
      } else {
        // Authorized
        setIsAuthorized(true);
      }
    }
  }, [user, authLoading, adminOnly, redirectPath, router]);

  if (authLoading || !isAuthorized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4">Checking authentication...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: END

export default ProtectedRoute;