import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type NestingSelectorNoMissingScopingRootOptions = RuleConfig<
  true,
  [],
  {
    /**
     * Ignore nesting selectors within specified at-rules.
     */
    ignoreAtRules?: RegExpLike[]
  }
>
