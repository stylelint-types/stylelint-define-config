import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type AtRuleNoUnknownOptions = RuleConfig<
  true,
  [atRule: string],
  {
    ignoreAtRules?: RegExpLike[]
  }
>
