import type { CSSFunction } from '../../types/index.js'
import type { Arrayable, LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type FunctionAllowedListOptions = RuleConfig<
  Arrayable<LiteralUnion<CSSFunction> | RegExp>,
  [name: string],
  {
    /**
     * Disallow the matching functions when they are without a property fallback in the same declaration block.
     */
    exceptWithoutPropertyFallback?: Arrayable<LiteralUnion<CSSFunction> | RegExp>
  }
>
