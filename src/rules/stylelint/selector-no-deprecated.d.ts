import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorNoDeprecatedOptions = RuleConfig<
  true,
  [unfixed: string, fixed: string],
  {
    ignoreSelectors?: RegExpLike[]
  }
>
