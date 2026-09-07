import type { RuleConfig } from '../rule-config.js'

export type AtRuleDescriptorValueNoUnknownOptions = RuleConfig<
  true,
  [descriptor: string, value: string]
>
