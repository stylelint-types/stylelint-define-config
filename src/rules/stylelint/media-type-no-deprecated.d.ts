import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type MediaTypeNoDeprecatedOptions = RuleConfig<
  true,
  [],
  {
  /**
   * Ignore the specified media types.
   */
    ignoreMediaTypes?: RegExpLike[]
  }
>
