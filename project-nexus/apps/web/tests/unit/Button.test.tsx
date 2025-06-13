import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '../../src/components/Button';

vi.mock('../../src/components/Button.module.css', () => ({
  default: {
    button: 'button',
    primary: 'primary',
    secondary: 'secondary',
    disabled: 'disabled'
  }
}));

describe('Button Component', () => {
  it('renders the button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('renders the button with a label', () => {
    render(<Button label="Submit" />);
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('renders the button with the primary variant', () => {
    render(<Button variant="primary" />);
    expect(screen.getByRole('button')).toHaveClass('primary');
  });

  it('renders the button with the secondary variant', () => {
    render(<Button variant="secondary" />);
    expect(screen.getByRole('button')).toHaveClass('secondary');
  });

  it('renders the button with the disabled state', () => {
    render(<Button disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('calls the onClick handler when the button is clicked', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick} />);
    screen.getByRole('button').click();
    expect(onClick).toHaveBeenCalled();
  });
});