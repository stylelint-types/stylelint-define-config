import type { SelectorCombinator } from '../../types/index.js'
import type { Arrayable } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type SelectorCombinatorDisallowedListOptions = RuleConfig<
  Arrayable<SelectorCombinator>,
  [combinator: string]
>
