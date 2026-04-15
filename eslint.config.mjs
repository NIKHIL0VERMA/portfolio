import js from '@eslint/js';
// Import Next.js flat configs
import nextConfig from 'eslint-config-next';
import nextVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tailwind from 'eslint-plugin-tailwindcss';
import { builtinModules } from 'node:module';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      '.next/*',
      'dist/*',
      '.cache',
      'public',
      'node_modules',
      '*.esm.js',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  // Next.js configs are exported as arrays in recent versions
  ...(Array.isArray(nextConfig) ? nextConfig : [nextConfig]),
  ...(Array.isArray(nextVitals) ? nextVitals : [nextVitals]),
  ...tailwind.configs['flat/recommended'],
  prettier,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
      'sort-imports': 'off',
      'tailwindcss/no-custom-classname': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^.+\\.s?css$'],
            [`^(${builtinModules.join('|')})(/|$)`, '^react', '^@?\\w'],
            ['^components(/.*|$)'],
            ['^lib(/.*|$)', '^hooks(/.*|$)'],
            ['^\\.'],
          ],
        },
      ],
    },
  },
  {
    settings: {
      tailwindcss: {
        callees: ['cn'],
        config: 'tailwind.config.ts',
      },
    },
  }
);
