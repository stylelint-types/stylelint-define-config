import type { RuleConfig } from '../rule-config'

export interface AtRuleNoVendorPrefixSecondaryOptions {
  message: string | ((atRule: string) => string)
}

export type AtRuleNoVendorPrefixOptions = RuleConfig<
  true,
  AtRuleNoVendorPrefixSecondaryOptions
>
