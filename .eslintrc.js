module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    camelcase: 'off',
    'no-useless-constructor': 'off'
  },
  ignorePatterns: [
    'test/**',
    'node_modules/**',
    'weights/**',
    'dist/**',
    'dist-old/**',
    'examples/**'
  ]
}
