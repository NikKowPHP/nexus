import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from '../../pages/admin/login';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Authentication Flow', () => {
  it('should allow a user to log in', async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    ) as jest.Mock;

    // Mock localStorage
    Storage.prototype.setItem = jest.fn();

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