const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    localePath: path.resolve('./public/locales')
  },
  defaultNS: 'common',
  react: { useSuspense: false },
  reloadOnPrerender: process.env.NODE_ENV !== 'production'
};
