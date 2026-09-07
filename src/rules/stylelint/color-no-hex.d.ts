import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type ColorNoHexOptions = RuleConfig<
  true,
  [hex: string, expected: string],
  {
    /**
     * Ignore hex colors within the specified functions.
     */
    ignoreFunctions?: RegExpLike[]
  }
>
