import type { AtRules, CSSPropertiesMap } from '../../types'
import type { RuleConfig } from '../rule-config'

export type AtRulePropertyRequiredListOptions = RuleConfig<
  Record<AtRules, CSSPropertiesMap | CSSPropertiesMap[]>,
  {
    message?: string | ((atRule: string, property: string) => string)
  }
>
