/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: [
            "via.placeholder.com"
        ]
    },
    i18n:{
        locales: ['en', 'pl'],
        defaultLocale: 'en',
    }
}

module.exports = nextConfig