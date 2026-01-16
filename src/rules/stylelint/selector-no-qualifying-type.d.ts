import type { LiteralUnion } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorNoQualifyingTypeOptions = RuleConfig<
  true,
  [selector: string],
  {
    ignore?: LiteralUnion<'attribute' | 'class' | 'id'>[]
  }
>
