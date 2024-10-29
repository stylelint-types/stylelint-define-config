import type { SelectorCombinator } from '../../types'
import type { RuleConfig } from '../rule-config'

export type SelectorCombinatorAllowedListOptions = RuleConfig<
  SelectorCombinator | SelectorCombinator[],
  {
    message?: string | ((combinator: string) => string)
  }
>
