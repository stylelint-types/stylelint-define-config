import type { AtRules } from '../../types'
import type { RuleConfig } from '../rule-config'

export type AtRuleNoDeprecatedOptions = RuleConfig<
  true,
  [atRule: string],
  {
    ignoreAtRules?: (RegExp | AtRules)[]
  }
>
