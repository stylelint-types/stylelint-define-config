import type { CSSFunction } from '../../types'
import type { LiteralUnion, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type LengthZeroNoUnitOptions = RuleConfig<
  true,
  [],
  {
    /**
     * Ignore units for zero length in custom properties.
     */
    ignore?: LiteralUnion<'custom-properties'>[]

    ignoreFunctions?: (CSSFunction | RegExpLike)[]
    /**
     * Ignore units for zero lengths within the preludes of the specified at-rules.
     */
    ignorePreludeOfAtRules?: RegExpLike[]
  }
>
