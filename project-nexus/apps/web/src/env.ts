// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: Configure email/password authentication
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().default(3000),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  SITE_URL: z.string().url().default('http://localhost:3000'),
  EMAIL_CONFIRMATION_REDIRECT: z.string().url().default('http://localhost:3000/login'),
  PASSWORD_RESET_REDIRECT: z.string().url().default('http://localhost:3000/reset-password'),
  NEXT_PUBLIC_GOOGLE_CLIENT_ID: z.string().optional(),
  NEXT_PUBLIC_GITHUB_CLIENT_ID: z.string().optional(),
  OAUTH_REDIRECT_URL: z.string().url().default('http://localhost:3000/auth/callback'),
});

export const env = envSchema.parse(process.env);
// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: END