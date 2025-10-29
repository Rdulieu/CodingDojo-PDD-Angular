import angular from '@angular-eslint/eslint-plugin';
import angularTemplate from '@angular-eslint/eslint-plugin-template';
import angularParser from '@angular-eslint/template-parser';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import js from '@eslint/js';

export default [
  // Global settings
  {
    ignores: ['projects/**/*']
  },
  // TypeScript files (excluding tests)
  {
    files: ['**/*.ts'],
    ignores: ['**/*.spec.ts', '**/*.test.ts', '**/cypress/**'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        console: true,
        fetch: true
      }
    },
    plugins: {
      '@typescript-eslint': ts,
      '@angular-eslint': angular,
      'prettier': prettier
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      ...angular.configs.recommended.rules,
      'prettier/prettier': 'error',
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase'
        }
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case'
        }
      ]
    }
  },
  // Test files
  {
    files: ['**/*.spec.ts', '**/*.test.ts', '**/cypress/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      globals: {
        jest: true,
        describe: true,
        it: true,
        expect: true,
        beforeEach: true,
        afterEach: true,
        beforeAll: true,
        afterAll: true,
        console: true,
        cypress: true,
        Cypress: true,
        cy: true
      }
    },
    plugins: {
      '@typescript-eslint': ts,
      'prettier': prettier
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      'prettier/prettier': 'error'
    }
  },
  // HTML template files
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: angularParser
    },
    plugins: {
      '@angular-eslint/template': angularTemplate,
      'prettier': prettier
    },
    rules: {
      ...angularTemplate.configs.recommended.rules,
      ...angularTemplate.configs.accessibility.rules,
      'prettier/prettier': 'error'
    }
  }
];
