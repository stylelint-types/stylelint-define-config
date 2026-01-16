import type { AtRules } from '../../types'
import type { RuleConfig } from '../rule-config'

export type AtRulePreludeNoInvalidOptions = RuleConfig<
  true,
  [atRule: string, prelude: string],
  {
    ignoreAtRules?: (RegExp | AtRules)[]
  }
>
