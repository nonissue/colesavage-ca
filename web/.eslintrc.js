module.exports = {
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'object-curly-spacing': ['error', 'never'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'never'
      }
    ]
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4'
    }
  },
  parser: 'babel-eslint'
}
