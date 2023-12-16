import type { LiteralUnion } from '../utils'

/**
 * This is a special exported interface for other packages to declare
 * additional types that should bail out for stylelint postcss custom syntax. For example
 * `stylelint-scss` can declare it like so in its `d.ts`:
 *
 * ```ts
 * declare module 'stylelint-define-config' {
 *   export interface CustomSyntax {
 *     'postcss-scss': void;
 *
 *     // ... more syntax
 *   }
 * }
 * ```
 */
export interface CustomSyntax {}

export type KnownCustomSyntax = LiteralUnion<
  | 'postcss-angular'
  | 'postcss-html'
  | 'postcss-less'
  | 'postcss-linaria'
  | 'postcss-lit'
  | 'postcss-markdown'
  | 'postcss-sass'
  | 'postcss-scss'
  | 'postcss-styled-components'
  | 'postcss-styled-syntax'
  | keyof CustomSyntax
>
