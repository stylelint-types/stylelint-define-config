import type { LiteralUnion } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type FontWeightNotationOptions = RuleConfig<
  'numeric' | 'named-where-possible',
  [type: string],
  {
    ignore?: LiteralUnion<'relative'>[]
  }
>
