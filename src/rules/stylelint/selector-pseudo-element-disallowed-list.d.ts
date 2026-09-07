import type { SelectorPseudoElement } from '../../types/index.js'
import type { Arrayable, LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

type SelectorPseudoElementDisallowed = LiteralUnion<SelectorPseudoElement> | RegExp

export type SelectorPseudoElementDisallowedListOptions = RuleConfig<
  Arrayable<SelectorPseudoElementDisallowed>,
  [selector: string]
>
