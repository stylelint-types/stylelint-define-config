import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorNoVendorPrefixOptions = RuleConfig<
  true,
  [selector: string],
  {
    ignoreSelectors?: RegExpLike[]
  }
>
