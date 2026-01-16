import type { LiteralUnion } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type NoDescendingSpecificityOptions = RuleConfig<
  true,
  [selectorA: string, selectorB: string, line: number],
  {
    ignore?: LiteralUnion<'selectors-within-list'>[]
  }
>
