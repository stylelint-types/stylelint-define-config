import type { RuleConfig } from '../rule-config'

export type AtRuleNoVendorPrefixOptions = RuleConfig<
  true,
  {
    message: string | ((atRule: string) => string)
  }
>
