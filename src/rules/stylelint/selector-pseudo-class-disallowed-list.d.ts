import type { SelectorPseudoClass } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorPseudoClassDisallowedListOptions = RuleConfig<
  SelectorPseudoClass | RegExpLike | (SelectorPseudoClass | RegExpLike)[],
  {
    message?: string | ((selector: string) => string)
  }
>
