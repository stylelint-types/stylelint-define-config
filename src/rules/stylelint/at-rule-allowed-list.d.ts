import type { AtRules } from '../../types'
import type { RuleConfig } from '../rule-config'

export type AtRuleAllowedListOptions = RuleConfig<
  AtRules[] | string[],
  [atRule: string]
>
