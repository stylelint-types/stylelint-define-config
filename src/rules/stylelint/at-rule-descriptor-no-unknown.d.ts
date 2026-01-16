import type { RuleConfig } from '../rule-config'

export type AtRuleDescriptorNoUnknownOptions = RuleConfig<
  true,
  [atRule: string, descriptor: string]
>
