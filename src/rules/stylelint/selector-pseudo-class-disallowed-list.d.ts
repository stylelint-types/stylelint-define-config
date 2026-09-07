import type { SelectorPseudoClass } from '../../types/index.js'
import type { Arrayable } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type SelectorPseudoClassDisallowedListOptions = RuleConfig<
  Arrayable<SelectorPseudoClass | RegExp>,
  [selector: string]
>
