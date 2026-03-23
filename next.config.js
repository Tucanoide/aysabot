/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración recomendada para Hostinger y ESM
  reactStrictMode: true,
  // Si necesitas exportación estática (rompe Prisma), descomenta la siguiente línea:
  // output: 'export',
};

export default nextConfig;
