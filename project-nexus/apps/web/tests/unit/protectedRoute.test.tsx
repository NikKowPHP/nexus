import React from 'react';
import { render } from '@testing-library/react';
import ProtectedRoute from '@/components/ProtectedRoute';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    push: jest.fn(),
    pathname: '/',
  })),
}));

test('ProtectedRoute renders without crashing', () => {
  render(
    <ProtectedRoute>
      <div>Test Child</div>
    </ProtectedRoute>
  );
});