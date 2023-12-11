import type { RuleConfig } from '../rule-config'
import type { LiteralUnion } from '../../utils'

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
