import type { RuleConfig } from '../rule-config'

export type NestingSelectorNoMissingScopingRootOptions = RuleConfig<true, {
  /**
   * Ignore nesting selectors within specified at-rules.
   */
  ignoreAtRules?: (string | RegExp)[]
}>
