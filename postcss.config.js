module.exports = {
  plugins: {
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    'postcss-import': {},
    'postcss-mixins': {},
    stylelint: {},
    'postcss-preset-env': { stage: 1 }
  }
};
