const config = require('./config');

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

module.exports = {
  siteMetadata: {
    author: config.siteAuthor,
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl + pathPrefix,
    settings: { ...config },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\/images\/icons\//,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.siteGATrackingID,
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is optional
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.pwaManifest.shortName,
        start_url: config.siteUrl,
        background_color: config.pwaManifest.backgroundColor,
        theme_color: config.pwaManifest.themeColor,
        display: config.pwaManifest.display,
        icons: config.pwaManifest.icons, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      // should be last in the plugins array
      resolve: 'gatsby-plugin-netlify',
      options: {
        // option to add headers for all pages and links
        allPageHeaders: [
          'X-Frame-Options: DENY',
          `X-XSS-Protection: 1; mode=block; report=${config.siteHeaders.xssReportUrl}`,
          'X-DNS-Prefetch-Control: on',
          'X-Content-Type-Options: nosniff',
          'Referrer-Policy: no-referrer',
          `Content-Security-Policy: ${config.siteHeaders.contentSecurityPolicy}`,
          `Expect-CT: ${config.siteHeaders.certificateTransparency}`,
          `Report-To: ${config.siteHeaders.reportTo}`,
          `Feature-Policy: ${config.siteHeaders.featurePolicy}`,
          `NEL: ${config.siteHeaders.networkErrorLogging}`,
          `Public-Key-Pins: ${config.siteHeaders.hPKP}`,
        ],
        // option to add more headers, also transforms `Link` headers
        headers: {},
        // boolean to disable the default security headers
        mergeSecurityHeaders: true,
        // boolean to disable the default gatsby js headers
        mergeLinkHeaders: true,
        // boolean to disable the default caching headers
        mergeCachingHeaders: true,
        // transform for manipulating headers under each path (e.g.sorting)
        // eslint-disable-next-line no-unused-vars
        transformHeaders: (headers, path) => headers,
        // boolean to disable creation of redirect rules for client only paths
        generateMatchPathRewrites: true,
      },
    },
  ],
};
