import type { LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type NoDescendingSpecificityOptions = RuleConfig<
  true,
  [selectorA: string, selectorB: string, line: number],
  {
    ignore?: LiteralUnion<'selectors-within-list'>[]
  }
>
