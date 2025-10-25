import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import prettier from 'eslint-plugin-prettier'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['build/**/*', '!build/test.js', '.next/**', 'public/**', 'postcss.config.js', 'next-env.d.ts']),
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
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
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
