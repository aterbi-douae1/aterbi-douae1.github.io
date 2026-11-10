/** Site 100 % statique pour GitHub Pages (dépôt utilisateur : pas de basePath). */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
