import type { AtRules } from '../../types'
import type { RuleConfig } from '../rule-config'

export type NoInvalidPositionAtImportRuleOptions = RuleConfig<
  true,
  {
    ignoreAtRules: (AtRules | RegExp)[]
  }
>
