import type { SelectorPseudoElement } from '../../types'
import type { Arrayable } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorPseudoElementAllowedListOptions = RuleConfig<
  Arrayable<SelectorPseudoElement | RegExp>,
  [selector: string]
>
