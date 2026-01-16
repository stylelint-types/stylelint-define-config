import type { Plugin, Rule } from 'stylelint'
import type { Arrayable, LiteralUnion } from '../utils'

/**
 * This is a special exported interface for other packages to declare
 * additional plugins that should bail out for stylelint plugins. For example
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
  | 'stylelint-order' | 'stylelint-scss' | '@stylistic/stylelint-plugin' | 'stylelint-stylus'
  | 'stylelint-suitcss' | 'stylelint-react-native'
  | keyof CustomPlugins
>

export type Plugins = Arrayable<KnownPlugins | Plugin>

export interface PluginFunctions {
  [pluginName: string]: Rule
}
