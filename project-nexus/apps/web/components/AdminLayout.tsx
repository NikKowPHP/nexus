import React, { useEffect, useState } from 'react';
import styles from './AdminLayout.module.css';
import { isAdmin } from '@/lib/auth';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdminStatus = async () => {
      const admin = await isAdmin(null);
      setIsUserAdmin(admin);
      setLoading(false);
    };
    checkAdminStatus();
  }, []);

  if (loading) {
    return <div className={styles.adminLayout}>Loading...</div>;
  }

  return (
    <div className={styles.adminLayout}>
      <aside className={styles.sidebar}>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>User Management</li>
            <li>Content Moderation</li>
            {isUserAdmin && (
              <>
                <li>Roadmaps</li>
                <li>Nodes</li>
              </>
            )}
            <li>Settings</li>
          </ul>
        </nav>
      </aside>
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;