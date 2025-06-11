import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const getAdminToken = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('admin-token');
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdminStatus = () => {
      const token = getAdminToken();
      if (token === 'admin-token') {
        setIsAdmin(true);
      } else {
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