/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(ttf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: `/_next/static/fonts/`,
            outputPath: `${isServer ? "../" : ""}static/fonts/`,
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
