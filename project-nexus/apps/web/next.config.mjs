import { withSentryConfig } from '@sentry/nextjs';
import securityHeaders from './headers.js';

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      }
    ];
  },
  // ROO-AUDIT-TAG :: 1.3_local_development_environment.md :: Implement hot-reload configuration
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.cache = true;
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
  experimental: {
    turbo: true,
    webpackBuildWorker: true,
  },
  // ROO-AUDIT-TAG :: 1.3_local_development_environment.md :: END
};

export default withSentryConfig(nextConfig, {
  silent: true,
  org: 'your-org-name',
  project: 'your-project-name',
});