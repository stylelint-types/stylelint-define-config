import type { SelectorCombinator } from '../../types'
import type { Arrayable } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorCombinatorAllowedListOptions = RuleConfig<
  Arrayable<SelectorCombinator>,
  [combinator: string]
>
