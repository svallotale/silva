module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    rules: {
        // Place any custom rules here
    },
};