import type { LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type FontWeightNotationOptions = RuleConfig<
  'numeric' | 'named-where-possible',
  [type: string],
  {
    ignore?: LiteralUnion<'relative'>[]
  }
>
