import { describe, it, vi } from 'vitest';
import { act, render } from '@testing-library/react';
import ProtectedRoute from '@/components/ProtectedRoute';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useRouter } from 'next/router';

vi.mock('next/router', () => ({
  useRouter: vi.fn().mockImplementation(() => ({
    push: vi.fn(),
    pathname: '/',
  })),
}));

describe('ProtectedRoute', () => {
  it('renders without crashing', async () => {
    await act(async () => {
      render(
        <ProtectedRoute>
          <div>Test Child</div>
        </ProtectedRoute>
      );
    });
  });
});