import type { CSSFunction } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type LengthZeroNoUnitOptions = RuleConfig<
  true,
  {
    /**
     * Ignore units for zero length in custom properties.
     */
    ignore?: ('custom-properties')[]

    ignoreFunctions?: (CSSFunction | RegExpLike)[]
    /**
     * Ignore units for zero lengths within the preludes of the specified at-rules.
     */
    ignorePreludeOfAtRules?: RegExpLike[]
    message?: string | (() => string)
  }
>
