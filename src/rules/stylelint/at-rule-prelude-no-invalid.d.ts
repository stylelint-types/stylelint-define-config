import type { AtRules } from '../../types'
import type { RuleConfig } from '../rule-config'

export type AtRulePreludeNoInvalidOptions = RuleConfig<true, {
  ignoreAtRules?: (RegExp | AtRules)[]
  message?: string | ((atRule: string, prelude: string) => string)
}>
