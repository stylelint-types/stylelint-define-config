import type { SelectorAttributeOperator } from '../../types'
import type { RuleConfig } from '../rule-config'

export type SelectorAttributeOperatorAllowedListOptions = RuleConfig<
  SelectorAttributeOperator | RegExp | (SelectorAttributeOperator | RegExp)[],
  {
    message?: string | ((operator: string) => string)
  }
>
