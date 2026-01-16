import type { LiteralUnion } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type StringNoNewlineOptions = RuleConfig<
  true,
  [],
  {
    ignore?: LiteralUnion<'at-rule-preludes' | 'declaration-values'>[]
  }
>
