import type { RuleConfig } from '../rule-config'
import type { SelectorPseudoElement } from '../../types'

type PseudoElement = SelectorPseudoElement | RegExp | `/${string}/`

export type SelectorPseudoElementAllowedListOptions = RuleConfig<
  PseudoElement | PseudoElement[],
  {
    message?: string | ((selector: string) => string)
  }
>
