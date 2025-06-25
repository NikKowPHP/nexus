// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: Implement role-based access control (RBAC)
import { User } from '@supabase/supabase-js';

type Role = 'admin' | 'editor' | 'member';
type Permission = 
  | 'create:content'
  | 'read:content'
  | 'update:content'
  | 'delete:content'
  | 'manage:users';

const rolePermissions: Record<Role, Permission[]> = {
  admin: [
    'create:content',
    'read:content',
    'update:content',
    'delete:content',
    'manage:users'
  ],
  editor: [
    'create:content',
    'read:content',
    'update:content',
    'delete:content'
  ],
  member: [
    'read:content'
  ]
};

export const getUserRoles = (user: User | null): Role[] => {
  if (!user) return [];
  return user.user_metadata?.roles || [];
};

export const hasPermission = (
  user: User | null,
  permission: Permission
): boolean => {
  const roles = getUserRoles(user);
  return roles.some(role => 
    rolePermissions[role]?.includes(permission)
  );
};

export const hasAnyPermission = (
  user: User | null,
  permissions: Permission[]
): boolean => {
  return permissions.some(p => hasPermission(user, p));
};

export const hasAllPermissions = (
  user: User | null,
  permissions: Permission[]
): boolean => {
  return permissions.every(p => hasPermission(user, p));
};
// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: END