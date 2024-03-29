
module.exports = ({env}) => [
      'strapi::errors',
      /* Replace 'strapi::security', with this snippet */
      /* Beginning of snippet */
      {
        name: 'strapi::security',
        config: {
          contentSecurityPolicy: {
            useDefaults: true,
            directives: {
              'connect-src': ["'self'", 'https:'],
              'img-src': [
                "'self'",
                'data:',
                'blob:',
                'market-assets.strapi.io',
                `https://${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`,
              ],
              'media-src': [
                "'self'",
                'data:',
                'blob:',
                'market-assets.strapi.io',
                `https://${env('AWS_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`,
              ],
              upgradeInsecureRequests: null,
            },
      },
    },
  },
  
  /* End of snippet */
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];