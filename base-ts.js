module.exports = {
    env: {
        es2022: true,
        node: true,
        browser: true,
    },
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        'indent': [2, 4, { 'MemberExpression': 0 }],
        'keyword-spacing': ['error', {
            'overrides': {
                'as': { 'after': true },
                'for': { 'after': false },
                'if': { 'after': false },
                'static': { 'after': true },
                'switch': { 'after': false },
                'while': { 'after': false },
            },
        }],
        'max-len': [0],
        'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 1 }],
        'no-dupe-class-members': 0,
        'no-restricted-syntax': 0,
        'quote-props': 0,
        '@typescript-eslint/type-annotation-spacing': [
            2,
            {
                'after': true,
                'before': false,
                'overrides': {
                    'arrow': {
                        'before': true,
                    },
                    'returnType': {
                        'before': true,
                    },
                },
            },
        ],

        // no-unused-vars must be replaced to avoid the error when declaring a function with argument as a type
        // e.g. type a = { func: (arg: number) => void}
        'no-unused-vars': 'off',
        // '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-unused-vars': ['error', { 'args': 'none' }],

        // Replace the base rule as it can report incorrect errors
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': ['error', 'always', { 'exceptAfterOverload': true }],
    },
};
