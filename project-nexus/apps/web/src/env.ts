// ROO-AUDIT-TAG :: 1.3_local_development_environment.md :: Implement environment variable validation
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().default(3000),
});

export const env = envSchema.parse(process.env);
// ROO-AUDIT-TAG :: 1.3_local_development_environment.md :: END