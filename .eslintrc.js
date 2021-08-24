module.exports = {
  root: true,
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.ts', '.js', '.tsx', '.json'],
      },
    },
  },
  rules: {
    'no-useless-catch': 0,
    'import/no-cycle': 0,
    'no-plusplus': 0,
    'import/prefer-default-export': 0,
    'no-continue': 0,
    'no-prototype-builtins': 0,
    'no-restricted-syntax': 0,
    'consistent-return': 0,
    'no-unused-expressions': 0,
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': ['error', {}],
    'react/jsx-filename-extension': ['warn', {
      extensions: ['.jsx', '.tsx'],
    }],
    'import/extensions': 0,
    'react/jsx-props-no-spreading': 'off',
    'import/no-unresolved': 2,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'max-classes-per-file': 'warn',
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'import'],

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
}
