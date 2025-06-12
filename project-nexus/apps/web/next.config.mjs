import { withSentryConfig } from '@sentry/nextjs';
import securityHeaders from './headers';

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
};

export default withSentryConfig(nextConfig, {
  silent: true,
  org: 'your-org-name',
  project: 'your-project-name',
});