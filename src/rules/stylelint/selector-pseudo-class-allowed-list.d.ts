import type { SelectorPseudoClass } from '../../types/index.js'
import type { Arrayable } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type SelectorPseudoClassAllowedListOptions = RuleConfig<
  Arrayable<SelectorPseudoClass | RegExp>,
  [selector: string]
>
