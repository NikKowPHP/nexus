import React from 'react';
import styles from './AdminLayout.module.css';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className={styles.adminLayout}>
      <aside className={styles.sidebar}>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>User Management</li>
            <li>Content Moderation</li>
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