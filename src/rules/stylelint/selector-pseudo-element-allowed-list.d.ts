import type { SelectorPseudoElement } from '../../types'
import type { RuleConfig } from '../rule-config'

type PseudoElement = SelectorPseudoElement | RegExp | `/${string}/`

export type SelectorPseudoElementAllowedListOptions = RuleConfig<
  PseudoElement | PseudoElement[],
  {
    message?: string | ((selector: string) => string)
  }
>
