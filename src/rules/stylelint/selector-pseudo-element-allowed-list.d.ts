import type { SelectorPseudoElement } from '../../types/index.js'
import type { Arrayable } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type SelectorPseudoElementAllowedListOptions = RuleConfig<
  Arrayable<SelectorPseudoElement | RegExp>,
  [selector: string]
>
