import type { AtRules, CSSPropertiesMap } from '../../types/index.js'
import type { RuleConfig } from '../rule-config.js'

export type AtRulePropertyRequiredListOptions = RuleConfig<
  Record<AtRules, CSSPropertiesMap | CSSPropertiesMap[]>,
  [atRule: string, property: string]
>
