/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com", // Domínio permitido
        port: "", // Porta (deixe vazio se não houver porta específica)
        pathname: "/**", // Padrão para permitir todas as imagens desse domínio
      },
      {
        protocol: "https",
        hostname: "i.imgur.com", // Domínio permitido
        port: "", // Porta (deixe vazio se não houver porta específica)
        pathname: "/**", // Padrão para permitir todas as imagens desse domínio
      },
    ],
  },
};

export default nextConfig;
