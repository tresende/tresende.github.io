// eslint.config.js
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-plugin-prettier'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores([
    'build/**/*',
    '!build/test.js',
    '.next/**',
    'public/**',
    'postcss.config.js',
    'tailwind.config.ts',
    'next-env.d.ts',
  ]),
  js.configs.recommended,

  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: reactPlugin,
      'react-hooks': reactHooks,
      prettier,
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'react/no-unescaped-entities': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'react/display-name': 'off',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^\\u0000', '^react', '^@?\\w'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\.(?!/?$)', '^\\./?$'],
            ['^\\.(/style(s|d)?$)']
          ]
        }
      ],
      'prettier/prettier': 'warn'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
])
