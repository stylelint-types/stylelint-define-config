import type { RuleConfig } from '../rule-config'

export type AtRuleNoUnknownOptions = RuleConfig<
  true,
  {
    ignoreAtRules?: (string | RegExp)[]
    message?: string | ((atRule: string) => string)
  }
>
