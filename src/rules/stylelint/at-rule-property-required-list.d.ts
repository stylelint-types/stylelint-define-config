import type { RuleConfig } from '../rule-config'
import type { AtRules, CSSPropertiesMap } from '../../types'

export type AtRulePropertyRequiredListPrimaryOptions =
  | Record<AtRules, CSSPropertiesMap | CSSPropertiesMap[]>

export interface AtRulePropertyRequiredListSecondaryOptions {
  message?: string | ((atRule: string, property: string) => string)
}

export type AtRulePropertyRequiredListOptions = RuleConfig<
  AtRulePropertyRequiredListPrimaryOptions,
  AtRulePropertyRequiredListSecondaryOptions
>
