import type { RuleConfig } from '../rule-config'

export type AtRuleDescriptorValueNoUnknownOptions = RuleConfig<
  true,
  [descriptor: string, value: string]
>
