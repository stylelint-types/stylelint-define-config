import type { LiteralUnion } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorMaxTypeOptions = RuleConfig<
  number,
  {
    /**
     * Discount child type selectors.
     */
    Ignore?: LiteralUnion<'child' | 'compounded' | 'custom-elements' | 'descendant' | 'next-sibling'>[]
    ignoreTypes?: (string | RegExp)[]
    message?: string | ((selector: string, max: number | string) => string)
  }
>
