import type { Arrayable, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorAttributeNameDisallowedListOptions = RuleConfig<
  Arrayable<RegExpLike>,
  [name: string]
>
