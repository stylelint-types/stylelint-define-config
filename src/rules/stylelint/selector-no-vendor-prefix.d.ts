import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type SelectorNoVendorPrefixOptions = RuleConfig<
  true,
  [selector: string],
  {
    ignoreSelectors?: RegExpLike[]
  }
>
