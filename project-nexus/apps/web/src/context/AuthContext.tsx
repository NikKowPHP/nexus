// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: Update AuthContext for Supabase
import { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Session } from '@supabase/supabase-js';

interface AuthContextProps {
  user: Session['user'] | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextProps>({ user: null, loading: true });

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Session['user'] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event: string, session: Session | null) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription?.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: END