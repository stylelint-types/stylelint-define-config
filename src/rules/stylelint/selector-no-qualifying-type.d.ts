import type { LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type SelectorNoQualifyingTypeOptions = RuleConfig<
  true,
  [selector: string],
  {
    ignore?: LiteralUnion<'attribute' | 'class' | 'id'>[]
  }
>
