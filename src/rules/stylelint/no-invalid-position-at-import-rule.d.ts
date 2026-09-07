import type { AtRules } from '../../types/index.js'
import type { RuleConfig } from '../rule-config.js'

export type NoInvalidPositionAtImportRuleOptions = RuleConfig<
  true,
  [],
  {
    ignoreAtRules?: (AtRules | RegExp)[]
  }
>
