import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'public/**', 'tailwind.config.js'],
  },
  ...compat.extends(
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ),
  {
    rules: {
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
          singleQuote: true,
          semi: true,
          tabWidth: 2,
          printWidth: 100,
          trailingComma: 'es5',
        },
      ],
      'react/no-unescaped-entities': 'off',
      'no-empty': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error', 'info'],
        },
      ],
    },
  },
];
