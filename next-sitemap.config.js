/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://vcjjewellers.com',
    generateRobotsTxt: false, // handled by app/robots.ts
    exclude: ['/server-sitemap.xml'], // if we have dynamic split sitemaps
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://vcjjewellers.com/server-sitemap.xml', // Example
        ],
    },
}
