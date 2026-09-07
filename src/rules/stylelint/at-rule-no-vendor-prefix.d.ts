import type { AtRules } from '../../types/index.js'
import type { RuleConfig } from '../rule-config.js'

export type AtRuleNoVendorPrefixOptions = RuleConfig<
  true,
  [atRule: string],
  {
    ignoreAtRules?: (AtRules | RegExp)[]
  }
>
