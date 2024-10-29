import type { SelectorCombinator } from '../../types'
import type { RuleConfig } from '../rule-config'

export type SelectorMaxUniversalOptions = RuleConfig<
  number,
  {
    /**
     * Ignore universal selectors that come after one of the specified combinators.
     */
    ignoreAfterCombinators?: SelectorCombinator[]
    message?: string | ((selector: string, max: number | string) => string)
  }
>
