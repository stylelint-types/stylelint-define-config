import type { SelectorPseudoClass } from '../../types'
import type { Arrayable } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorPseudoClassAllowedListOptions = RuleConfig<
  Arrayable<SelectorPseudoClass | RegExp>,
  [selector: string]
>
