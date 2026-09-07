import type { LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type ShorthandPropertyNoRedundantValuesOptions = RuleConfig<
  true,
  [unexpected: string, expected: string],
  {
    /**
     * Ignore four-value shorthand declarations that could be shortened to three values when applied to edges.
     */
    ignore?: LiteralUnion<'four-into-three-edge-values'>[]
  }
>
