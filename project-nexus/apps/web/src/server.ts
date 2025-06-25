// ROO-AUDIT-TAG :: 1.3_local_development_environment.md :: Create HTTP server instance
import express, { Request, Response } from 'express';
import { env } from './env';

export function createServer() {
  const app = express();

  app.get('/health', (_: Request, res: Response) => {
    res.json({ status: 'ok', environment: env.NODE_ENV });
  });

  return app;
}
// ROO-AUDIT-TAG :: 1.3_local_development_environment.md :: END