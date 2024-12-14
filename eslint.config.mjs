import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin';
import parserTypeScript from '@typescript-eslint/parser';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import pluginTailwindCSS from 'eslint-plugin-tailwindcss';

// Get the current filename and directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat for compatibility with older ESLint configurations
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend configurations for Prettier and Next.js
  ...compat.extends('prettier', 'next', 'next/core-web-vitals'),
  {
    // Specify file patterns to target with this configuration
    files: ['**/*.{js,jsx,ts,tsx}'],

    // Define language options for the parser and environment
    languageOptions: {
      parser: parserTypeScript, // Use TypeScript parser
      ecmaVersion: 2020, // Set ECMAScript version
      sourceType: 'module', // Use ES module syntax
      globals: {
        React: true, // Define React as a global variable
        JSX: true, // Define JSX as a global variable
      },
    },

    // Configure ESLint plugins for additional functionalities
    plugins: {
      '@typescript-eslint': eslintPluginTypeScript, // TypeScript-specific linting rules
      'simple-import-sort': simpleImportSort, // Sorting of imports
      'unused-imports': unusedImports, // Handling of unused imports
      prettier: eslintPluginPrettier, // Prettier integration
      tailwindcss: pluginTailwindCSS, // Tailwind CSS linting
    },

    // Define linting rules for code quality and formatting
    rules: {
      'prettier/prettier': 'warn', // Warn on Prettier formatting issues
      'react/react-in-jsx-scope': 'off', // Disable React import requirement in JSX files
      'no-unused-vars': 'off', // Disable the default unused variables rule
      'no-console': 'warn', // Warn on console statements
      'react/display-name': 'off', // Disable display name warnings for React components
      'react/jsx-curly-brace-presence': [
        'warn', // Warn if unnecessary curly braces are used in JSX
        { props: 'never', children: 'never' },
      ],
      '@typescript-eslint/no-unused-vars': 'off', // Disable unused variables check for TypeScript
      'unused-imports/no-unused-imports': 'warn', // Warn on unused imports
      'unused-imports/no-unused-vars': [
        'warn', // Warn on unused variables, ignoring those prefixed with "_"
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'simple-import-sort/exports': 'warn', // Warn if exports are not sorted
      'simple-import-sort/imports': [
        'warn', // Sort imports into defined groups
        {
          groups: [
            ['^@?\\w', '^\\u0000'], // External packages and side effect imports
            ['^.+\\.s?css$'], // CSS or SCSS imports
            ['^@/lib', '^@/hooks'], // Library and hook imports
            ['^@/data'], // Data-related imports
            ['^@/components', '^@/container'], // Component and container imports
            ['^@/store'], // Store imports
            ['^@/'], // Other imports from the source directory
            [
              // Relative imports at various levels
              '^\\./?$',
              '^\\.(?!/?$)',
              '^\\.\\./?$',
              '^\\.\\.(?!/?$)',
              '^\\.\\./\\.\\./?$',
              '^\\.\\./\\.\\.(?!/?$)',
              '^\\.\\./\\.\\./\\.\\./?$',
              '^\\.\\./\\.\\./\\.\\.(?!/?$)',
            ],
            ['^@/types'], // Type definitions
            ['^'], // Any remaining imports
          ],
        },
      ],
    },

    // Specify patterns of files and directories to ignore
    ignores: [
      'node_modules/**', // Ignore dependencies
      'dist/**', // Ignore build output
      'build/**', // Ignore build output
      '.next/**', // Ignore Next.js build output
      'coverage/**', // Ignore test coverage reports
    ],

    // Additional plugin-specific settings
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
      tailwindcss: {
        callees: ['cn', 'classnames'], // Functions to validate Tailwind classes
        config: 'tailwind.config.js', // Path to the Tailwind configuration file
        cssFiles: ['**/*.css'], // CSS files to check for Tailwind classes
      },
    },
  },
];

export default eslintConfig;
