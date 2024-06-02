export default {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  plugins: ['jest'],
  extends: ['eslint:recommended', 'plugin:jest/recommended', 'airbnb-base'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-plusplus': 'on',
    'no-use-before-define': 'error',
  },
};
