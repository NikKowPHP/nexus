import { User } from '@supabase/supabase-js';
import { NextApiRequest } from 'next';

export const isAdmin = (user: User | null, req?: NextApiRequest): boolean => {
  if (!user) return false;

  // Check authorization header for admin token
  if (req && req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    return token === 'admin-token'; // Replace with actual admin token validation
  }

  // Fallback to user metadata
  const roles = user.user_metadata?.roles || [];
  return roles.includes('admin');
};