import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { isAdmin } from '../lib/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdminStatus = async () => {
      const admin = await isAdmin(null);
      if (!admin) {
        router.push('/admin/login');
      }
      setLoading(false);
    };

    checkAdminStatus();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAdmin) {
    return null; // Redirecting happens in useEffect
  }

  return <>{children}</>;
};

export default ProtectedRoute;