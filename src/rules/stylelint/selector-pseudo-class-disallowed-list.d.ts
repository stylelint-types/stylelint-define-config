import type { SelectorPseudoClass } from '../../types'
import type { Arrayable } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorPseudoClassDisallowedListOptions = RuleConfig<
  Arrayable<SelectorPseudoClass | RegExp>,
  [selector: string]
>
