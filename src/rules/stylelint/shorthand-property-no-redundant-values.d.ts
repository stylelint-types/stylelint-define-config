import type { RuleConfig } from '../rule-config'

export type ShorthandPropertyNoRedundantValuesOptions = RuleConfig<
  true,
  {
    message?: string | ((unexpected: string, expected: string) => string)
    /**
     * Ignore four-value shorthand declarations that could be shortened to three values when applied to edges.
     */
    ignore?: readonly ['four-into-three-edge-values']
  }
>
