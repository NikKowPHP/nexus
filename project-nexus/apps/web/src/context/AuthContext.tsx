// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: Implement Supabase authentication provider
import { createContext, useContext, ReactNode, useEffect, useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { Session, User, AuthError } from '@supabase/supabase-js';

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  signInWithEmail: (email: string, password: string) => Promise<{ user: User | null; error: AuthError | null }>;
  signUpWithEmail: (email: string, password: string) => Promise<{ user: User | null; error: AuthError | null }>;
  signInWithGoogle: () => Promise<{ data: { url: string } | null; error: AuthError | null }>;
  signInWithGitHub: () => Promise<{ data: { url: string } | null; error: AuthError | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ data: object | null; error: AuthError | null }>;
  getSession: () => Promise<Session | null>;
  handleOAuthCallback: () => Promise<{ session: Session | null; error: AuthError | null }>;
  refreshSession: () => Promise<{ session: Session | null; error: AuthError | null }>;
}

// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: Set up session expiration handling
const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
  signInWithEmail: async () => ({ user: null, error: null }),
  signUpWithEmail: async () => ({ user: null, error: null }),
  signInWithGoogle: async () => ({ data: null, error: null }),
  signInWithGitHub: async () => ({ data: null, error: null }),
  signOut: async () => {},
  resetPassword: async () => ({ data: null, error: null }),
  getSession: async () => null,
  handleOAuthCallback: async () => ({ session: null, error: null }),
  refreshSession: async () => ({ session: null, error: null })
});
// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: END

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [expiresAt, setExpiresAt] = useState<number | null>(null);

  const getSession = useCallback(async () => {
    const { data: { session } } = await supabase.auth.getSession();
    return session;
  }, []);

  const signInWithEmail = useCallback(async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    return { user: data?.user ?? null, error };
  }, []);

  const signUpWithEmail = useCallback(async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    return { user: data?.user ?? null, error };
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setUser(null);
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    return await supabase.auth.resetPasswordForEmail(email);
  }, []);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setExpiresAt(session?.expires_at ? session.expires_at * 1000 : null);
        setLoading(false);
      }
    );

    // Initialize auth state
    getSession().then(session => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription?.unsubscribe();
  }, [getSession]);

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signInWithEmail,
      signUpWithEmail,
      signInWithGoogle,
      signInWithGitHub,
      signOut,
      resetPassword,
      getSession,
      handleOAuthCallback,
      refreshSession
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: END