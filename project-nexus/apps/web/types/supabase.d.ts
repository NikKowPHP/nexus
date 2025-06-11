declare module '@supabase/auth-helpers-nextjs' {
  import { NextApiRequest } from 'next';

  export interface Session {
    user: {
      email: string;
    };
  }

  export function getSession(options: { req: NextApiRequest }): Promise<Session | null>;
}