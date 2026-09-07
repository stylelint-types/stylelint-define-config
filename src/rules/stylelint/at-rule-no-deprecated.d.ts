import type { AtRules } from '../../types/index.js'
import type { RuleConfig } from '../rule-config.js'

export type AtRuleNoDeprecatedOptions = RuleConfig<
  true,
  [atRule: string],
  {
    ignoreAtRules?: (RegExp | AtRules)[]
  }
>
