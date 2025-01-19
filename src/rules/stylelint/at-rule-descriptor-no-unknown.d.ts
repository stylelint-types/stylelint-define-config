import type { RuleConfig } from '../rule-config'

export type AtRuleDescriptorNoUnknownOptions = RuleConfig<true, {
  message?: string | ((atRule: string, descriptor: string) => string)
}>
