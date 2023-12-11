import type { RuleConfig } from '../rule-config'
import type { SelectorPseudoClass } from '../../types'
import type { RegExpLike } from '../../utils'

export type SelectorPseudoClassAllowedListOptions = RuleConfig<
  SelectorPseudoClass | RegExpLike | (SelectorPseudoClass | RegExpLike)[],
  {
    message?: string | ((selector: string) => string)
  }
>
