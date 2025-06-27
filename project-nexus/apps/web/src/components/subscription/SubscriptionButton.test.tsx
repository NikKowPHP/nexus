import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SubscriptionButton } from './SubscriptionButton';

describe('SubscriptionButton', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ sessionId: 'test-session' }),
      })
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders subscribe button when not subscribed', () => {
    render(<SubscriptionButton isSubscribed={false} />);
    expect(screen.getByText('Subscribe Now')).toBeInTheDocument();
  });

  it('renders manage button when subscribed', () => {
    render(<SubscriptionButton isSubscribed={true} />);
    expect(screen.getByText('Manage Subscription')).toBeInTheDocument();
  });

  it('triggers subscription when clicked and not subscribed', async () => {
    window.location.href = '';
    
    render(<SubscriptionButton isSubscribed={false} />);
    fireEvent.click(screen.getByText('Subscribe Now'));
    
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/api/stripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      expect(window.location.href).toBe('test-session');
    });
  });

  it('shows loading state during API call', async () => {
    let resolveFetch: (value: Response | PromiseLike<Response>) => void;
    const fetchPromise = new Promise<Response>(resolve => {
      resolveFetch = resolve;
    });
    
    jest.spyOn(global, 'fetch').mockImplementationOnce(
      () => fetchPromise as Promise<Response>
    );
    
    render(<SubscriptionButton isSubscribed={false} />);
    fireEvent.click(screen.getByText('Subscribe Now'));
    
    expect(await screen.findByText('Processing...')).toBeInTheDocument();
    resolveFetch!({
      json: () => Promise.resolve({}),
    } as Response);
  });
});