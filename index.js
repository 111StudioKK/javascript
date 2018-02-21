module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true
        },
        'sourceType': 'module'
    },
    'parser': 'babel-eslint',
    'plugins': [
        'react',
        'flowtype',
        'compat'
    ],
    'rules': {
        'indent': [
            'warn',
            2,
            {'SwitchCase': 1}
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'max-len': ['warn', 100],
        'camelcase': 1,
        'compat/compat': 1,
        'no-console': 1,
        'no-var': 1,
        'prefer-template': 1,
        //REACT Linting
        'react/no-deprecated': 1,
        'react/no-did-mount-set-state': 1,
        'react/no-did-update-set-state': 1,
        'react/no-direct-mutation-state': 1,
        'react/prefer-es6-class': 1,
        'react/prefer-stateless-function': 1,
        'react/no-unknown-property': 1,
        'react/prop-types': 1,
        'react/react-in-jsx-scope': 1,
        'react/require-render-return': 1,
        'react/self-closing-comp': 1,
        'react/sort-comp': [1, {
            'order': [
                'static-methods',
                'description',
                'props',
                'contextTypes',
                'childContextTypes',
                'constructor',
                'everything-else',
                'lifecycle',
                '/render[A-Za-z]{1,}/',
                'render'
            ],
            'groups': {
                'lifecycle': [
                    'displayName',
                    'mixins',
                    'statics',
                    'defaultProps',
                    'getDefaultProps',
                    'getInitialState',
                    'state',
                    'getChildContext',
                    'componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'componentDidUpdate',
                    'componentWillUnmount'
                ]
            }
            }],
        'react/jsx-wrap-multilines': 1,
        'react/jsx-boolean-value': [1, 'always'],
        'react/jsx-closing-bracket-location': 1,
        'react/jsx-equals-spacing': [1, 'never'],
        'react/jsx-first-prop-new-line': [1, 'multiline'],
        'react/jsx-handler-names': 1,
        'react/jsx-indent': [1,2],
        'react/jsx-indent-props': [1,2],
        'react/jsx-key': 1,
        'react/jsx-max-props-per-line': [1, {'maximum': 3}],
        'react/jsx-no-bind': 1,
        'react/jsx-no-duplicate-props': 1,
        'react/jsx-no-literals': 1,
        'react/jsx-no-target-blank': 1,
        'react/jsx-no-undef': 1,
        'react/jsx-pascal-case': 1,
        'react/jsx-sort-props': 1,
        'react/jsx-space-before-closing': [1, 'always'],
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 1
    },
    'globals': {
        '__DEV__': true,
        'describe': true,
        'it': true
    },
    settings: {
        targets: ['chrome', 'firefox', 'edge', 'safari', 'ie'],
        coverage: true,
        compiler: 'babel'
    }
}
