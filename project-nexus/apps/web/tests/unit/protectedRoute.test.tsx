import React from 'react';
import ReactDOM from 'react-dom/client';
import ProtectedRoute from '@/components/ProtectedRoute';

test('ProtectedRoute renders without crashing', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(
    <ProtectedRoute>
      <div>Test Child</div>
    </ProtectedRoute>
  );
});