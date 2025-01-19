import type { RuleConfig } from '../rule-config'

export type AtRuleDescriptorValueNoUnknownOptions = RuleConfig<true, {
  message?: string | ((descriptor: string, value: string) => string)
}>
