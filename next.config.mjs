/** @type {import('next').NextConfig} */
const nextConfig = {
  // Serve modern formats (AVIF/WebP) so design thumbnails stay light on mobile data.
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Baseline security headers applied to every route of the deployed site.
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

export default nextConfig
