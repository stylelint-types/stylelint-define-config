import type { RuleConfig } from '../rule-config'

export type AtRuleNoUnknownOptions = RuleConfig<
  true,
  [atRule: string],
  {
    ignoreAtRules?: (string | RegExp)[]
  }
>
