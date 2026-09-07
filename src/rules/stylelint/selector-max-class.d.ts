import type { RuleConfig } from '../rule-config.js'

export type SelectorMaxClassOptions = RuleConfig<number, [selector: string, max: number | string]>
