module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  // Specifies the ESLint parser
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: [
    'simple-import-sort',
    'react-hooks',
    'typescript-sort-keys',
    'prettier',
    '10x',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',
    // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {},
    },
  },
  ignorePatterns: [
    '*.d.ts',
    'tailwind.config.js',
    'scripts/*',
    '.eslintrc.js',
    'next.config.mjs',
  ],
  rules: {
    // https://eslint.org/docs/4.0.0/rules/
    // Some base rule also needs to be changed to reflect rules below, as it can reporting incorrect errors
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'no-param-reassign': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['../'],
            message: 'Relative imports are not allowed.',
          },
        ],
      },
    ],
    'no-return-assign': 'error',
    'no-shadow': 'off',
    'no-undef': 'error',
    'no-underscore-dangle': ['off', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'always', prev: '*', next: 'export' },
    ],
    'no-case-declarations': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    'prefer-const': 'error',
    quotes: ['error', 'single', 'avoid-escape'],
    'react/prefer-es6-class': ['off'],
    'space-in-parens': ['error', 'never'],
    'template-curly-spacing': ['error', 'never'],
    'arrow-body-style': ['error', 'always'],
    // Plugin
    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/default': 'off',
    'import/imports-first': ['error', 'absolute-first'],
    'import/newline-after-import': 'error',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'off',
    // Plugin
    // https://github.com/lydell/eslint-plugin-simple-import-sort
    'simple-import-sort/imports': 'error',
    // Plugin
    // https://github.com/infctr/eslint-plugin-typescript-sort-keys
    'typescript-sort-keys/interface': 'error',
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        fixStyle: 'inline-type-imports',
        prefer: 'type-imports',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/func-call-spacing': 'error',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z]',
          match: true,
        },
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: false,
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/type-annotation-spacing': 'error',
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/display-name': 'off',
    'react/function-component-definition': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': [
      'error',
      {
        selfClosing: 'line-aligned',
        nonEmpty: 'line-aligned',
      },
    ],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
      },
    ],
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'never',
        allowMultiline: true,
      },
    ],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'react/jsx-fragments': 'error',
    'react/jsx-handler-names': 'off',
    'react/jsx-key': 'error',
    'react/jsx-no-target-blank': ['off'],
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-uses-react': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
      },
    ],
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': ['error'],
    'react/no-find-dom-node': 'error',
    'react/no-string-refs': [
      'error',
      {
        noTemplateLiterals: true,
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // https://github.com/JonnyBurger/eslint-plugin-10x
    '10x/auto-import': [
      'error',
      {
        imports: {
          // React
          ChangeEvent: "import { ChangeEvent } from 'react'",
          ComponentType: "import { ComponentType } from 'react'",
          CSSProperties: "import { CSSProperties } from 'react'",
          FC: "import { FC } from 'react'",
          memo: "import { memo } from 'react'",
          PropsWithChildren: "import { PropsWithChildren } from 'react'",
          ReactElement: "import { ReactElement } from 'react'",
          ReactNode: "import { ReactNode } from 'react'",
          useCallback: "import { useCallback } from 'react'",
          useEffect: "import { useEffect } from 'react'",
          useRef: "import { useRef } from 'react'",
          useState: "import { useState } from 'react'",
          // Libraries
          useRouter: "import { useRouter } from 'next/router'",
          NavLink: "import NavLink from 'next/link'",
          clsx: "import clsx from 'clsx'",
          useStore: "import { useStore } from 'exome/react'",
          z: "import { z } from 'zod'",
          test: "import { test } from 'bun:test'",
          expect: "import { expect } from 'bun:test'",
          twMerge: "import { twMerge } from 'tailwind-merge'",
          // UI
          Button: "import { Button } from '~/components/atoms/Button'",
          Icon: "import { Icon } from '~/components/atoms/Icon'",
          Text: "import { Text } from '~/components/atoms/Text'",
          TextLink: "import { TextLink } from '~/components/atoms/TextLink'",
          PageLayout:
            "import { PageLayout } from '~/components/layout/PageLayout'",
          PageContent:
            "import { PageContent } from '~/components/layout/PageContent'",
        },
      },
    ],
  },
}
