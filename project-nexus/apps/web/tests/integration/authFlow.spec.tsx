import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from '../../pages/admin/login';
import { useRouter } from 'next/router';
import { vi, Mock } from 'vitest';

vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}));

describe('Authentication Flow', () => {
  it('should allow a user to log in', async () => {
    const mockPush = vi.fn();
    (useRouter as Mock).mockReturnValue({ push: mockPush });

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    ) as Mock;

    // Mock localStorage
    Storage.prototype.setItem = vi.fn();

    render(<LoginPage />);

    fireEvent.change(screen.getByPlaceholderText(/enter admin password/i), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: 'password123' }),
        credentials: 'include',
      });
      expect(mockPush).toHaveBeenCalledWith('/admin');
      expect(localStorage.setItem).toHaveBeenCalledWith('admin-token', 'admin-token');
    });
  });
});