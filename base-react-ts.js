module.exports = {
    env: {
        browser: true,
        node: false,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        '@bl0ggy/eslint-config/base-ts',
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
    ],
    rules: {
        'react/jsx-filename-extension': [2, { 'extensions': ['.jsx', '.tsx'] }],
        'react/jsx-indent': [2, 4],
        'react/react-in-jsx-scope': 0,

        // Next are stupid rules when using react...
        // Tried using eslint-import-resolver-typescript but seemed to have issues
        'import/extensions': 0,
        'react/jsx-indent-props': [2, 4],
    },
};
