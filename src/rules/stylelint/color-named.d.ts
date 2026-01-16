import type { LiteralUnion, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type ColorNamedOptions = RuleConfig<
  'always-where-possible' | 'never',
  [named: string],
  {
    ignoreProperties?: RegExpLike[]
    ignore?: LiteralUnion<'inside-function'>[]
  }
>
