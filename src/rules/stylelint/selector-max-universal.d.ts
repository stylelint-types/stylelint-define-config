import type { SelectorCombinator } from '../../types/index.js'
import type { RuleConfig } from '../rule-config.js'

export type SelectorMaxUniversalOptions = RuleConfig<
  number,
  [selector: string, max: number | string],
  {
    /**
     * Ignore universal selectors that come after one of the specified combinators.
     */
    ignoreAfterCombinators?: SelectorCombinator[]
  }
>
