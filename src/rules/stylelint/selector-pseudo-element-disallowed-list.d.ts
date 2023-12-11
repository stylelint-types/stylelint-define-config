import type { RuleConfig } from '../rule-config'
import type { SelectorPseudoElement } from '../../types'
import type { RegExpLike } from '../../utils'

type SelectorPseudoElementDisallowed = SelectorPseudoElement | RegExpLike

export type SelectorPseudoElementDisallowedListOptions = RuleConfig<
  SelectorPseudoElementDisallowed | SelectorPseudoElementDisallowed[],
  {
    message?: string | ((selector: string) => string)
  }
>
