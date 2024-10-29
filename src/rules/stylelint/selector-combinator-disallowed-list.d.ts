import type { SelectorCombinator } from '../../types'
import type { RuleConfig } from '../rule-config'

export type SelectorCombinatorDisallowedListOptions = RuleConfig<
  SelectorCombinator | SelectorCombinator[],
  {
    message?: string | ((combinator: string) => string)
  }
>
