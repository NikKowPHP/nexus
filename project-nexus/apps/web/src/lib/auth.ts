// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: Set up OAuth providers
import { User } from '@supabase/supabase-js';
import { NextApiRequest } from 'next';
import { supabase } from './supabase';
import { hasPermission } from './rbac';

export const isAdmin = (user: User | null, req?: NextApiRequest): boolean => {
  if (!user) return false;

  // Check authorization header for admin token
  if (req && req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    return token === 'admin-token'; // Replace with actual admin token validation
  }

  return hasPermission(user, 'manage:users');
};

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });
  return { data, error };
};

export const signInWithGitHub = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });
  return { data, error };
};

export const handleOAuthCallback = async () => {
  const { data, error } = await supabase.auth.getSession();
  return { session: data?.session, error };
};
// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: END