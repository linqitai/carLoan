// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'eol-last': 0,
        'space-before-function-paren': 0,
        // 可以使用";"号
        "semi": [0],
        // 可以使用未定义的元素
        "no-undef": 0,
        // space-before-function-paren 
        'space-before-function-paren': 0,
        'indent': 0,
        'no-unused-vars': 0,
        'no-trailing-spaces': 0,
        'no-tabs':0,
        'keyword-spacing':0,
        'comma-dangle':0,
        'no-mixed-spaces-and-tabs': 0,
        'new-cap': 0,
        'semi-spacing':0,
        'space-infix-ops':0,
        'comma-spacing':0,
        'block-spacing':0,
        'space-before-blocks':0,
        'key-spacing':0,
        'quotes':0,
        'no-sequences':0,
        'eqeqeq':0,
        'one-var':0,
        'yoda':0,
        'wrap-iife':0,
        'no-return-assign':0,
        'no-redeclare':0,
        'spaced-comment':0,
        'no-floating-decimal':0,
        'new-parens':0,
  
    }
}