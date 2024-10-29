import type { LiteralUnion } from '../../utils'
import type { RuleConfig } from '../rule-config'

type SelectorMaxTypeIgnore = LiteralUnion<'child' | 'compounded' | 'custom-elements' | 'descendant' | 'next-sibling'>

export type SelectorMaxTypeOptions = RuleConfig<
  number,
  {
    /**
     * Discount child type selectors.
     */
    Ignore?: SelectorMaxTypeIgnore[]
    ignoreTypes?: (string | RegExp)[]
    message?: string | ((selector: string, max: number | string) => string)
  }
>
