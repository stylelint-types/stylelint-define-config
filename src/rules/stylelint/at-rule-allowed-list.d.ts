import type { AtRules } from '../../types/index.js'
import type { RuleConfig } from '../rule-config.js'

export type AtRuleAllowedListOptions = RuleConfig<AtRules[] | string[], [atRule: string]>
