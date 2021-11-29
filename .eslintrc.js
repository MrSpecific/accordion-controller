// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

module.exports = {
  extends: ['airbnb-base', 'prettier', 'prettier/prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
  },
};
