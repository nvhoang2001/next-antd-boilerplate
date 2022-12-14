/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, './')],
    },
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname);
        return config;
    },
};

module.exports = nextConfig;
