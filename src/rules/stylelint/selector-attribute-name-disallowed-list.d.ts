import type { Arrayable, RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type SelectorAttributeNameDisallowedListOptions = RuleConfig<
  Arrayable<RegExpLike>,
  [name: string]
>
