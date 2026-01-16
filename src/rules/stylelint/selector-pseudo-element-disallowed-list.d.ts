import type { SelectorPseudoElement } from '../../types'
import type { Arrayable, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

type SelectorPseudoElementDisallowed = SelectorPseudoElement | RegExpLike

export type SelectorPseudoElementDisallowedListOptions = RuleConfig<
  Arrayable<SelectorPseudoElementDisallowed>,
  [selector: string]
>
