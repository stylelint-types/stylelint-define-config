import type { SelectorAttributeOperator } from '../../types'
import type { Arrayable } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorAttributeOperatorAllowedListOptions = RuleConfig<
  Arrayable<SelectorAttributeOperator | RegExp>,
  [operator: string]
>
