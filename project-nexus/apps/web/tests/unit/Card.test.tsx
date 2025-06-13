import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../../src/components/Card';

describe('Card Component', () => {
  it('renders with the correct text', () => {
    render(<Card body="This is a card" />);
    const cardElement = screen.getByText('This is a card');
    expect(cardElement).toBeInTheDocument();
  });

  it('applies the correct CSS module class', () => {
    render(<Card body="This is a card" />);
    const cardElement = screen.getByTestId('card');
    expect(cardElement.className).toMatch(/card/);
  });

  it('renders header content when provided', () => {
    render(<Card header={<h2>Test Header</h2>} body="This is a card" />);
    const headerElement = screen.getByRole('heading', { level: 2 });
    expect(headerElement).toBeInTheDocument();
  });

  it('renders with custom class when provided', () => {
    render(<Card body="This is a card" className="custom-class" />);
    const cardElement = screen.getByTestId('card');
    expect(cardElement.className).toMatch(/custom-class/);
  });
});