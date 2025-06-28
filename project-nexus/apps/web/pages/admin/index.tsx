import React from 'react';
import AdminLayout from '../../components/AdminLayout';
import UserList from '../../components/admin/UserList';
import ContentModeration from '../../components/admin/ContentModeration';
import AnalyticsDashboard from '../../components/admin/AnalyticsDashboard';
import ProtectedRoute from '../../src/components/ProtectedRoute';

const AdminPage: React.FC = () => {
  return (
    <ProtectedRoute>
      <AdminLayout>
        <h1>Admin Dashboard</h1>
        <AnalyticsDashboard />
        <UserList />
        <ContentModeration />
      </AdminLayout>
    </ProtectedRoute>
  );
};

export default AdminPage;