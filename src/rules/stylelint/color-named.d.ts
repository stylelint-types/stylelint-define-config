import type { LiteralUnion, RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type ColorNamedOptions = RuleConfig<
  'always-where-possible' | 'never',
  [named: string],
  {
    ignoreProperties?: RegExpLike[]
    ignore?: LiteralUnion<'inside-function'>[]
    /**
     * Ignore named colors within the specified functions.
     */
    ignoreFunctions?: RegExpLike[]
  }
>
