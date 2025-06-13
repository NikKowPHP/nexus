import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from '../../src/components/Button';

describe('Button Component', () => {
  it('renders the button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders the button with a label', () => {
    render(<Button label="Submit" />);
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('renders the button with the primary variant', () => {
    render(<Button variant="primary">Primary</Button>);
    expect(screen.getByText('Primary')).toHaveClass('primary');
  });

  it('renders the button with the secondary variant', () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByText('Secondary')).toHaveClass('secondary');
  });

  it('renders the button with the disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText('Disabled')).toBeDisabled();
  });

  it('calls the onClick handler when the button is clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});