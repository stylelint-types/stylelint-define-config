import type { RuleConfig } from '../rule-config'

export type AtRuleNoVendorPrefixOptions = RuleConfig<
  true,
  [atRule: string]
>
