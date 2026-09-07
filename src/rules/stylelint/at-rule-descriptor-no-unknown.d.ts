import type { RuleConfig } from '../rule-config.js'

export type AtRuleDescriptorNoUnknownOptions = RuleConfig<
  true,
  [atRule: string, descriptor: string]
>
