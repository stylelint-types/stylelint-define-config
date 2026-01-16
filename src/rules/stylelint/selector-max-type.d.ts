import type { LiteralUnion, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorMaxTypeOptions = RuleConfig<
  number,
  [selector: string, max: number | string],
  {
    /**
     * Discount child type selectors.
     */
    Ignore?: LiteralUnion<'child' | 'compounded' | 'custom-elements' | 'descendant' | 'next-sibling'>[]
    ignoreTypes?: RegExpLike[]
  }
>
