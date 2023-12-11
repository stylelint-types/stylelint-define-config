import type { Plugin } from 'stylelint'
import type { LiteralUnion } from '../utils'

/**
 * This is a special exported interface for other packages to declare
 * additional plugins that should bail out for eslint plugins. For example
 * `'stylelint-scss'` can declare it like so in its `d.ts`:
 *
 * ```ts
 * declare module 'stylelint-define-config' {
 *   export interface CustomPlugins {
 *     'stylelint-scss': void;
 *   }
 * }
 * ```
 */
export interface CustomPlugins {}

type KnownPlugins = LiteralUnion<
  | 'stylelint-order' | 'stylelint-scss' | 'stylelint-stylistic' | 'stylelint-stylus'
  | 'stylelint-suitcss' | 'stylelint-react-native' | 'stylelint-selector-bem-pattern'
  | keyof CustomPlugins
>

export type Plugins = KnownPlugins | Plugin | (KnownPlugins | Plugin)[]
