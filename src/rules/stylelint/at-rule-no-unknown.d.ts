import type { RuleConfig } from '../rule-config'

export interface AtRuleNoUnknownSecondaryOptions {
  ignoreAtRules?: (string | RegExp)[]
  message?: string | ((atRule: string) => string)
}

export type AtRuleNoUnknownOptions = RuleConfig<
  true,
  AtRuleNoUnknownSecondaryOptions
>
