import type { AtRules } from '../../types'
import type { RuleConfig } from '../rule-config'

export type AtRuleNoDeprecatedOptions = RuleConfig<true, {
  ignoreAtRules?: (RegExp | AtRules)[]
  message?: string | ((atRule: string) => string)
}>
