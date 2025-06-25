// ROO-AUDIT-TAG :: 1.3_local_development_environment.md :: Implement dotenv handling in application code
import 'dotenv/config';
import { env } from './env';
import { createServer } from './server';

async function main() {
  try {
    const server = createServer();
    const port = env.PORT;

    server.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

main();
// ROO-AUDIT-TAG :: 1.3_local_development_environment.md :: END