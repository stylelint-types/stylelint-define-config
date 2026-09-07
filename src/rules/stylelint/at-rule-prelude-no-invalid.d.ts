import type { AtRules } from '../../types/index.js'
import type { RuleConfig } from '../rule-config.js'

export type AtRulePreludeNoInvalidOptions = RuleConfig<
  true,
  [atRule: string, prelude: string],
  {
    ignoreAtRules?: (RegExp | AtRules)[]
  }
>
