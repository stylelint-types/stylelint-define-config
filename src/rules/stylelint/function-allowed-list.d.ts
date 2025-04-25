import type { CSSFunction } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type FunctionAllowedListOptions = RuleConfig<
  CSSFunction | RegExpLike | (CSSFunction | RegExpLike)[],
  {
    message?: string | ((name: string) => string)
    /**
     * Disallow the matching functions when they are without a property fallback in the same declaration block.
     */
    exceptWithoutPropertyFallback?: CSSFunction | RegExpLike | (CSSFunction | RegExpLike)[]
  }
>
