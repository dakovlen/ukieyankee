const path = require('path');

require('dotenv').config();


module.exports = {
    webpack: config => {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['public'] = path.join(__dirname, 'public')

        return config
    },

    env: {
        API_URL: process.env.API_URL
    },

    publicRuntimeConfig: {
        API_URL: process.env.API_URL,
    },

    eslint: {
        ignoreDuringBuilds: true,
    },

    i18n: {
        locales: ["en", "ru"],
        defaultLocale: "en",
    },

}

