import { useState } from 'react';
import { supabase } from '@/lib/supabase';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Password validation
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/login?redirectTo=${encodeURIComponent(router.query.redirectTo || '/')}`,
        },
      });

      if (error) throw error;
      
      if (data.user?.identities?.length === 0) {
        setError('User already registered');
      } else {
        setSuccess('Check your email to confirm your account. You will be redirected after confirmation.');
      }
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message);
    }
  };
  // ROO-AUDIT-TAG :: 1.5_core_authentication.md :: END

  return (
    <div>
      <h1>Signup</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;