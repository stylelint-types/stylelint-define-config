import type { CSSFunction } from '../../types'
import type { Arrayable, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type FunctionAllowedListOptions = RuleConfig<
  Arrayable<CSSFunction | RegExpLike>,
  [name: string],
  {
    /**
     * Disallow the matching functions when they are without a property fallback in the same declaration block.
     */
    exceptWithoutPropertyFallback?: Arrayable<CSSFunction | RegExpLike>
  }
>
