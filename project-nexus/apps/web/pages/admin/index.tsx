import React from 'react';
import AdminLayout from '../../components/AdminLayout';
import UserList from '../../components/admin/UserList';
import ContentModeration from '../../components/admin/ContentModeration';
import ProtectedRoute from '../../src/components/ProtectedRoute';

const AdminPage: React.FC = () => {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <h1>Admin Dashboard</h1>
        <UserList />
        <ContentModeration />
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default AdminPage;