import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

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
