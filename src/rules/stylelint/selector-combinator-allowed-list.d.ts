import type { RuleConfig } from '../rule-config'
import type { SelectorCombinator } from '../../types'

export type SelectorCombinatorAllowedListOptions = RuleConfig<
  SelectorCombinator | SelectorCombinator[],
  {
    message?: string | ((combinator: string) => string)
  }
>
