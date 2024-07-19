/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  webpack(config, option) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "microfrontend-host",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          "microapp-1": `microapp-1@${
            process.env.NODE_ENV === "production"
              ? "http://localhost:3001/"
              : "https://microapp1-jesus9464s-projects.vercel.app/"
          }_next/static/chunks/remoteEntry.js`,
          "microapp-2": `microapp-2@${
            process.env.NODE_ENV === "production"
              ? "http://localhost:3001"
              : "https://microapp2-jesus9464s-projects.vercel.app/"
          }_next/static/chunks/remoteEntry.js`,
          "microapp-3": `microapp-3@${
            process.env.NODE_ENV === "production"
              ? "http://localhost:3002/"
              : "https://microapp3-jesus9464s-projects.vercel.app/"
          }_next/static/chunks/remoteEntry.js`,
        },
        exposes: {},
      })
    );

    return config;
  },
};

module.exports = nextConfig;
