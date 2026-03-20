import type { AtRules } from '../../types'
import type { RuleConfig } from '../rule-config'

export type AtRuleNoVendorPrefixOptions = RuleConfig<
  true,
  [atRule: string],
  {
    ignoreAtRules?: (AtRules | RegExp)[]
  }
>
