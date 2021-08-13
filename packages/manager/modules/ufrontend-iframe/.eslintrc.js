module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'import/extensions': 'off',
    "no-shadow": "off",
    "lines-between-class-members": "off",
    "max-classes-per-file": "off",
    "@typescript-eslint/no-shadow": ["error"]
  },
};
