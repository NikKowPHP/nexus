// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: Update Login Page for Supabase
import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '@/lib/supabase';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else if (data?.user?.email_confirmed_at === null) {
        setError('Please confirm your email before logging in');
      } else {
        // Handle redirect to original requested page or home
        const redirectTo = router.query.redirectTo || '/';
        router.push(typeof redirectTo === 'string' ? redirectTo : '/');
      }
    } catch {
      setError('An unexpected error occurred');
    }
    // ROO-AUDIT-TAG :: 1.5_core_authentication.md :: Handle authentication redirects
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;