import type { RuleConfig } from '../rule-config'
import type { SelectorAttributeOperator } from '../../types'

export type SelectorAttributeOperatorDisallowedListOptions = RuleConfig<
  SelectorAttributeOperator | RegExp | (SelectorAttributeOperator | RegExp)[],
  {
    message?: string | ((operator: string) => string)
  }
>
