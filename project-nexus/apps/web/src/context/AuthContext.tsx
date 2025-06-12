import { createContext, useContext, ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { User } from 'next-auth';

interface AuthContextProps {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextProps>({ user: null, loading: true });

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { data: session, status } = useSession();
  
  return (
    <AuthContext.Provider value={{
      user: session?.user || null,
      loading: status === 'loading'
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};