import type { NextConfig } from 'next';
 
const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental'
  }
};
 export const dynamic = 'force-dynamic';

export default nextConfig;