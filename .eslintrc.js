module.exports = {
  env: {
    node: true,
    browser: true,
  },
  root: true,
  rules: {'prettier/prettier': ['error', {endOfLine: 'auto'}]},
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-plugin-prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
};
