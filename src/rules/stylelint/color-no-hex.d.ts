import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

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
