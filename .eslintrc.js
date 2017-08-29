module.exports = {
  root: true,

  extends: 'eslint:recommended',

  env: {
    browser: true,
    node: true,
  },

  parserOptions: {
    'ecmaVersion': 6
  },

  rules: {
    indent: [ 'error', 2, { SwitchCase: 1 }],
    'linebreak-style': [ 'error', 'unix' ],
    quotes: [ 'error', 'single' ],
    semi: [ 'error', 'never' ],
    'array-bracket-spacing': [2, 'always'],
    'block-scoped-var': 2,
    'brace-style': [2, 'stroustrup'],
    camelcase: 1,
    'computed-property-spacing': [2, 'never'],
    curly: 0, // only a single if/else pair in library with short statements.
    'eol-last': 2,
    eqeqeq: [2, 'smart'],
    'max-depth': [1, 3],
    'max-len': [1, 120],
    'max-statements': [1, 30],
    'new-cap': 1,
    'no-extend-native': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-trailing-spaces': 2,
    'no-unused-vars': 1,
    'no-use-before-define': [2, 'nofunc'],
    'object-curly-spacing': [2, 'always'],
    quotes: [2, 'single', 'avoid-escape'],
    'keyword-spacing': 2,
    'space-unary-ops': 2,
  },
}
