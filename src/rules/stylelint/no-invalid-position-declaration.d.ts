import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type NoInvalidPositionDeclarationOptions = RuleConfig<
  true,
  [],
  {
    /**
     * Ignore nesting at-rules within specified at-rules.
     */
    ignoreAtRules?: RegExpLike[]
  }
>
