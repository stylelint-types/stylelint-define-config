import type { RuleConfig } from '../rule-config'
import type { AtRules } from '../../types'

export type AtRuleAllowedListPrimaryOptions = AtRules[] | string[]
export interface AtRuleAllowedListSecondaryOptions {
  message?: string | ((atRule: string) => string)
}

export type AtRuleAllowedListOptions = RuleConfig<
  AtRuleAllowedListPrimaryOptions,
  AtRuleAllowedListSecondaryOptions
>
