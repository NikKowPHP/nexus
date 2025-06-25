// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: Set up user role management in Supabase
import { supabase } from './supabase';

type Role = 'admin' | 'editor' | 'member';

export const assignRole = async (userId: string, role: Role): Promise<boolean> => {
  const { error } = await supabase.auth.admin.updateUserById(userId, {
    user_metadata: {
      roles: [role]
    }
  });

  if (error) {
    console.error('Error assigning role:', error);
    return false;
  }
  return true;
};

export const addRole = async (userId: string, role: Role): Promise<boolean> => {
  const { data: { user } } = await supabase.auth.admin.getUserById(userId);
  if (!user) return false;

  const currentRoles: Role[] = user.user_metadata?.roles || [];
  if (currentRoles.includes(role)) return true;

  const { error } = await supabase.auth.admin.updateUserById(userId, {
    user_metadata: {
      roles: [...currentRoles, role]
    }
  });

  if (error) {
    console.error('Error adding role:', error);
    return false;
  }
  return true;
};

export const removeRole = async (userId: string, role: Role): Promise<boolean> => {
  const { data: { user } } = await supabase.auth.admin.getUserById(userId);
  if (!user) return false;

  const currentRoles: Role[] = user.user_metadata?.roles || [];
  if (!currentRoles.includes(role)) return true;

  const { error } = await supabase.auth.admin.updateUserById(userId, {
    user_metadata: {
      roles: currentRoles.filter((r: Role) => r !== role)
    }
  });

  if (error) {
    console.error('Error removing role:', error);
    return false;
  }
  return true;
};

export const getUserRoles = async (userId: string): Promise<Role[]> => {
  const { data: { user }, error } = await supabase.auth.admin.getUserById(userId);
  if (error || !user) return [];
  return user.user_metadata?.roles || [];
};
// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: END