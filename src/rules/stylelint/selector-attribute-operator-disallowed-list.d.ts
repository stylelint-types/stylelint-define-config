import type { SelectorAttributeOperator } from '../../types'
import type { RuleConfig } from '../rule-config'

export type SelectorAttributeOperatorDisallowedListOptions = RuleConfig<
  SelectorAttributeOperator | RegExp | (SelectorAttributeOperator | RegExp)[],
  {
    message?: string | ((operator: string) => string)
  }
>
