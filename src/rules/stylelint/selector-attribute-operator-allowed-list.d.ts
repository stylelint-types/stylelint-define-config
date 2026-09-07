import type { SelectorAttributeOperator } from '../../types/index.js'
import type { Arrayable } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type SelectorAttributeOperatorAllowedListOptions = RuleConfig<
  Arrayable<SelectorAttributeOperator | RegExp>,
  [operator: string]
>
