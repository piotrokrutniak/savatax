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
    },
    // env:{
    //     SMTP_HOST: process.env.SMTP_HOST,
    //     SMTP_PORT: process.env.SMTP_PORT,
    //     SMTP_USER: process.env.SMTP_USER,
    //     SMTP_PASSWORD: process.env.SMTP_PASSWORD,
    //     SMTP_CONTACT: process.env.SMTP_CONTACT,
    //     SMTP_FORM_INBOX: process.env.SMTP_FORM_INBOX
    // }
}

module.exports = nextConfig