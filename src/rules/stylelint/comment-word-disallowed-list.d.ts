import type { Arrayable, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type CommentWordDisallowedListOptions = RuleConfig<
  Arrayable<RegExpLike>,
  [pattern: string]
>
