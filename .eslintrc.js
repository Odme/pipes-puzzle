module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-unused-vars': 'warn',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies:
        [
          '**/*.spec.js',
          '**/*.test.js',
          'vite.config.js',
        ],
    }],
    'linebreak-style': [0, 'error', 'windows'],
    'react/react-in-jsx-scope': 'off',
  },
};
