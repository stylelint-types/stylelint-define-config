import type { RuleConfig } from '../rule-config.js'

export type SelectorNoInvalidOptions = RuleConfig<true, [selector: string, season: string]>
