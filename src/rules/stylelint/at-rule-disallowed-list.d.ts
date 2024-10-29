import type { AtRules } from '../../types'
import type { RuleConfig } from '../rule-config'

export type AtRuleDisallowedListPrimaryOptions = AtRules[] | string[]

export interface AtRuleDisallowedListSecondaryOptions {
  message?: string | ((atRule: string) => string)
}

export type AtRuleDisallowedListOptions = RuleConfig<
  AtRuleDisallowedListPrimaryOptions,
  AtRuleDisallowedListSecondaryOptions
>
