import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type SelectorNoDeprecatedOptions = RuleConfig<
  true,
  [unfixed: string, fixed: string],
  {
    ignoreSelectors?: RegExpLike[]
  }
>
