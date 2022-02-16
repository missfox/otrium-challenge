module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  ignorePatterns: ['src/response.js', 'src/reportWebVitals.ts'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [1,
      {
        extensions: [
          '.tsx',
        ],
      },
    ],
    'import/extensions': [1, { ts: 'never', tsx: 'never' }],
    'react/prop-types': 0,
    'no-unused-vars': 0,
  },
};
