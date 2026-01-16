import type { SelectorAttributeOperator } from '../../types'
import type { Arrayable } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorAttributeOperatorDisallowedListOptions = RuleConfig<
  Arrayable<SelectorAttributeOperator | RegExp>,
  [operator: string]
>
