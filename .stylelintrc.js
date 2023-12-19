module.exports = {
  extends: ['stylelint-config-standard-scss',"stylelint-prettier/recommended"],
  plugins: ['stylelint-prettier'],
  rules: {
    'selector-class-pattern': [
      '^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$',
      {
        resolveNestedSelectors: true,
        message: function expected(selectorValue) {
          return `"Expected" class selector "${selectorValue}" to match BEM CSS pattern https://en.bem.info/methodology/css.`
        },
      },
    ],
    'string-quotes': 'single',
    'prettier/prettier': true,
  },
}
