import type { Arrayable, RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type CommentWordDisallowedListOptions = RuleConfig<Arrayable<RegExpLike>, [pattern: string]>
