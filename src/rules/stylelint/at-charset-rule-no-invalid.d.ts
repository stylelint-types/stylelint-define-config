import type { RuleConfig } from '../rule-config.js'

/** Charset validation, with the failure reason available to custom messages. */
export type AtCharsetRuleNoInvalidOptions = RuleConfig<true, [reason: string]>
