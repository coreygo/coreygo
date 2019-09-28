/* eslint-disable max-len */

module.exports = {
  siteAuthor: 'Corey Gouker', // Site author
  siteTitle: 'Corey Gouker — The Machine Inside the Mind', // Site title
  siteShortTitle: 'Corey Gouker', // Short site title
  siteDescription:
    'One █ human being. #Transhumanism, examined life, #philomath, #hacking, #bits and other magic. I enjoy exploring our shared reality and everything digital. Theorize, test, confirm. Self != org. #Equality (#UBI) #MentalHealth (#UHC)', // Site description
  siteShortDescription: 'One █ human being. The Machine Inside the Mind.', // Short site description
  siteKeywords: 'Corey, Corey Gouker, hacking, javascript, react, gatsby', // SEO keywords
  siteUrl: 'https://www.coreygo.com', // Protocol and canonical domain without pathPrefix
  pathPrefix: '/',
  siteLanguage: 'en', // Language code for htmlAttributes
  siteLogo: '/images/cgo.png', // Path to the site logo
  siteRSS: '/rss.xml', // Path to the RSS file
  siteGSV: 'Fz1KVbVmlJpQv4fnvBOTHXNbDSL9pG2rY0UML2Ar9U0', // ID for Google Site Verification
  siteGATrackingID: 'UA-6759290-1', // Tracking ID for Google Analytics
  siteGTMTrackingID: 'GTM-5D4CGX', // Tracking ID for Google Tag Manager
  siteGTMAuthID: '', // Optional: Google Tag Manager environment auth ID
  siteGTMAuthString: '', // Optional: Google Tag Manager preview name string
  siteGoogleMapUrl: '', // Optional: Google Map URL (for static Google Map image)
  siteFBAppID: '390017927688533', // Facebook Application ID for FB app insights
  siteFBAdminID: '', // Facebook Page admin ID
  siteFBPageUser: 'coreyio', // Facebook page or username
  siteTwitterUser: 'coreygouker', // Twitter site username
  siteTwitterCard: 'summary', // Twitter card type
  disqusShortname: 'coreygo', // Optional: Disqus shortname
  user: {
    name: 'coreygo', // Username (alias)
    fullName: 'Corey Gouker',
    location: '∞', // User location
    address: {
      street: '', // eslint-disable-line
      city: '', // eslint-disable-line
      state: '', // eslint-disable-line
      zip: '', // eslint-disable-line
    }, // User address
    googleMapUrl: '', // Optional: User Google Map URL (for static Google Map image)
    phone: '+1 (206) 588-5254', // User phone
    email: 'corey@coreygo.com', // User email
    avatarUrl: '', // User avatar URL
    bio: 'One █ human being.', // User bio
    social: {
      facebook: 'coreygo', // User Facebook username
      instagram: 'coreygo', // User Instagram username
      twitter: 'coreygouker', // User Twitter username
    },
  },
  pwaManifest: {
    shortName: 'Coreygo', // Short name for PWA manifest
    themeColor: '#424242', // Primary color for PWA manifest
    backgroundColor: '#424242', // Background color for PWA manifest
    display: 'fullscreen', // Display type for PWA manifest
    icons: [
      {
        src: '/favicons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  get copyright() {
    return `Copyright \u00A9 ${new Date().getFullYear()} ${this.siteAuthor}`;
  }, // Returns copyright string with year of last build
  siteHeaders: [
    {
      contentSecurityPolicy: `default-src 'self' *.coreygo.com coreygo.netlify.com coreygo-gatsby-p5js.netlify.com *.coreygouker.com *.cgo.io; script-src 'self' *.coreygo.com coreygo.netlify.com coreygo-gatsby-p5js.netlify.com *.coreygouker.com *.cgo.io; upgrade-insecure-requests; report-uri https://coreygo.report-uri.com/r/d/csp/enforce; report-to default`,
    },
    {
      certificateTransparency: `enforce; max-age=30; report-uri="https://coreygo.report-uri.com/r/d/ct/enforce"`,
    },
    {
      // eslint-disable-next-line max-len
      featurePolicy: `accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; payment 'none'; usb 'none'`,
    },
    {
      // eslint-disable-next-line max-len
      reportTo: `{"group":"default","max_age":31536000,"endpoints":[{"url":"https://coreygo.report-uri.com/a/d/g"}],"include_subdomains":true}`,
    },
    {
      xssReportUrl: 'https://coreygo.report-uri.com/r/d/xss/enforce',
    },
    {
      // eslint-disable-next-line max-len
      networkErrorLogging: `{"report_to":"default","max_age":31536000,"include_subdomains":true}`,
    },
    {
      // eslint-disable-next-line max-len
      hPKP: 'report-uri="https://coreygo.report-uri.com/r/d/hpkp/enforce"',
    },
  ],
};
