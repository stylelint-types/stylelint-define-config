import type { RuleConfig } from '../rule-config.js'

/** Value syntax and math validation, with the invalid value and reason available to custom messages. */
export type ValueNoInvalidOptions = RuleConfig<true, [value: string, reason: string]>
