import type { AtRules } from '../../types'
import type { RuleConfig } from '../rule-config'

export type AtRuleAllowedListOptions = RuleConfig<
  AtRules[] | string[],
  {
    message?: string | ((atRule: string) => string)
  }
>
