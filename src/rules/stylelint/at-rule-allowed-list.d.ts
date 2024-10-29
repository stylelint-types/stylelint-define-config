import type { AtRules } from '../../types'
import type { RuleConfig } from '../rule-config'

export type AtRuleAllowedListPrimaryOptions = AtRules[] | string[]
export interface AtRuleAllowedListSecondaryOptions {
  message?: string | ((atRule: string) => string)
}

export type AtRuleAllowedListOptions = RuleConfig<
  AtRuleAllowedListPrimaryOptions,
  AtRuleAllowedListSecondaryOptions
>
