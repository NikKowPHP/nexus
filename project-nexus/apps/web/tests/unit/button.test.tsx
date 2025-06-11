import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '@/components/Button';

test('renders button with text', () => {
  render(<Button>Test Button</Button>);
  const buttonElement = screen.getByText(/Test Button/i);
  expect(buttonElement).toBeInTheDocument();
});