/** @type {import('next').NextConfig} */

module.exports = {
  nextConfig: {
    reactStrictMode: true,
    // Since this app is server on a Github pages subpath
    // we need to specify this subpath so the app can access
    // css and assets and for links between pages to work
    assetPrefix: '/full-stack-nextjs-grocery-list/',
    basePath: '/full-stack-nextjs-grocery-list/',
  },
};
