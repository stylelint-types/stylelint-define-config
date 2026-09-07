import type { LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type StringNoNewlineOptions = RuleConfig<
  true,
  [],
  {
    ignore?: LiteralUnion<'at-rule-preludes' | 'declaration-values'>[]
  }
>
