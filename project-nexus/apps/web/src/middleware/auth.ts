// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: Create authentication middleware for API routes
import { NextApiRequest, NextApiResponse } from 'next';
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs';

export interface AuthenticatedRequest extends NextApiRequest {
  user: {
    id: string;
    email?: string;
    user_metadata?: {
      name?: string;
      avatar_url?: string;
      roles?: string[];
    };
  };
}

export const withAuth = (handler: (req: AuthenticatedRequest, res: NextApiResponse) => Promise<void>) => {
  return async (req: AuthenticatedRequest, res: NextApiResponse) => {
    // Create Supabase client
    const supabaseServerClient = createPagesServerClient({ req, res });
    
    // Get session
    const { data: { session } } = await supabaseServerClient.auth.getSession();

    if (!session?.user) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'You must be signed in to access this resource'
      });
    }

    // Attach user to request object
    req.user = session.user;

    return handler(req, res);
  };
};
// ROO-AUDIT-TAG :: 1.5_core_authentication.md :: END