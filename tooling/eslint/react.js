/** @type {import('eslint').Linter.Config} */
const config = {
  extends: ['plugin:@shopify/react', 'plugin:jsx-a11y/recommended'],
  rules: {
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: ['FormLabel'],
        labelAttributes: ['children'],
        depth: 3,
      },
    ],

    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': ['off'],
  },
  globals: {
    React: 'writable',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
  },
}

module.exports = config
