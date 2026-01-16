import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

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
